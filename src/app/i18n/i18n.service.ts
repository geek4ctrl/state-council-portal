import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, map, tap } from 'rxjs';

export type LanguageCode = 'en' | 'fr';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly http = inject(HttpClient);
  private readonly lang = signal<LanguageCode>('fr');
  private readonly dictionary = signal<Record<string, unknown>>({});

  readonly activeLang = this.lang.asReadonly();

  init(): Promise<void> {
    const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('lang') : null;
    const lang = stored === 'en' ? 'en' : 'fr';
    return firstValueFrom(this.loadLanguage(lang));
  }

  setLanguage(lang: LanguageCode): Promise<void> {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('lang', lang);
    }
    return firstValueFrom(this.loadLanguage(lang));
  }

  translate(key: string, params?: Record<string, string | number>): string {
    const raw = this.resolveKey(this.dictionary(), key);
    if (typeof raw !== 'string') {
      return key;
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
    return this.http.get<Record<string, unknown>>(`/i18n/${lang}.json`).pipe(
      tap((payload) => {
        this.dictionary.set(payload);
        this.lang.set(lang);
      }),
      map(() => undefined)
    );
  }

  private resolveKey(source: Record<string, unknown>, key: string): unknown {
    return key.split('.').reduce<unknown>((acc, part) => {
      if (acc && typeof acc === 'object' && part in acc) {
        return (acc as Record<string, unknown>)[part];
      }
      return undefined;
    }, source);
  }
}
