import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, firstValueFrom, map, tap, throwError } from 'rxjs';

export type LanguageCode = 'en' | 'fr' | 'de' | 'sw' | 'ln' | 'ts' | 'kg' | 'pt' | 'es';

/** Languages that have translation files. Others fallback to English. */
const SUPPORTED_LANGS: LanguageCode[] = ['en', 'fr', 'de', 'sw', 'ln', 'ts', 'kg', 'pt', 'es'];

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly http = inject(HttpClient);
  private readonly lang = signal<LanguageCode>('fr');
  private readonly dictionary = signal<Record<string, unknown>>({});

  readonly activeLang = this.lang.asReadonly();

  init(): Promise<void> {
    const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('lang') : null;
    const validCodes: LanguageCode[] = ['en', 'fr', 'de', 'sw', 'ln', 'ts', 'kg', 'pt', 'es'];
    const lang: LanguageCode = (stored && validCodes.includes(stored as LanguageCode)) ? stored as LanguageCode : 'fr';
    return firstValueFrom(this.loadLanguage(lang));
  }

  setLanguage(lang: LanguageCode): Promise<void> {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('lang', lang);
    }
    return firstValueFrom(this.loadLanguage(lang));
  }

  translate(key: string, params?: Record<string, string | number>): string {
    const normalizedKey = this.normalizeKey(key);
    const raw = this.resolveKey(this.dictionary(), normalizedKey);
    if (typeof raw !== 'string') {
      return normalizedKey;
    }
    if (!params) {
      return raw;
    }
    return raw.replace(/\{\{\s*(\w+)\s*\}\}/g, (_, token) => {
      const value = params[token];
      return value === undefined ? `{{${token}}}` : String(value);
    });
  }

  private loadLanguage(lang: LanguageCode) {
    const loadLang = SUPPORTED_LANGS.includes(lang) ? lang : 'en';
    let resolvedLang: LanguageCode = loadLang;

    return this.fetchDictionary(loadLang).pipe(
      catchError(() => {
        if (loadLang !== 'en') {
          resolvedLang = 'en';
          return this.fetchDictionary('en');
        }
        return throwError(() => new Error(`Unable to load i18n dictionary for '${loadLang}'.`));
      }),
      tap((payload) => {
        this.dictionary.set(payload);
        this.lang.set(resolvedLang);
      }),
      map(() => undefined)
    );
  }

  private fetchDictionary(lang: LanguageCode) {
    const urls = this.getDictionaryUrls(lang);
    return this.http.get<Record<string, unknown>>(urls[0]).pipe(
      catchError(() => this.http.get<Record<string, unknown>>(urls[1])),
      catchError(() => this.http.get<Record<string, unknown>>(urls[2]))
    );
  }

  private getDictionaryUrls(lang: LanguageCode): [string, string, string] {
    const baseAware = this.getBaseAwareI18nUrl(lang);
    const root = `/i18n/${lang}.json`;
    const publicRoot = `/public/i18n/${lang}.json`;
    return [baseAware, root, publicRoot];
  }

  private getBaseAwareI18nUrl(lang: LanguageCode): string {
    if (typeof document === 'undefined') {
      return `/i18n/${lang}.json`;
    }
    return new URL(`i18n/${lang}.json`, document.baseURI).toString();
  }

  private resolveKey(source: Record<string, unknown>, key: string): unknown {
    return key.split('.').reduce<unknown>((acc, rawPart) => {
      if (!acc || typeof acc !== 'object') {
        return undefined;
      }

      const part = rawPart.trim();
      const record = acc as Record<string, unknown>;

      if (part in record) {
        return record[part];
      }

      const matchedKey = Object.keys(record).find(
        (candidate) => candidate.toLowerCase() === part.toLowerCase()
      );

      return matchedKey ? record[matchedKey] : undefined;
    }, source);
  }

  private normalizeKey(key: string): string {
    return key
      .replace(/[\u200B-\u200D\uFEFF]/g, '')
      .trim()
      .split('.')
      .map((part) => part.trim())
      .join('.');
  }
}
