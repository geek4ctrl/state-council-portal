import { Component, inject, signal, computed, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { filter, debounceTime, Subject, switchMap, of, catchError } from 'rxjs';
import { IconComponent } from '../icon/icon.component';
import { PreloadOnHoverDirective } from '../../directives/preload-on-hover.directive';
import { I18nPipe } from '../../i18n/i18n.pipe';
import { I18nService, LanguageCode } from '../../i18n/i18n.service';

interface SearchPageResult {
  route: string;
  label: string;
  keywords: string[];
}

interface SearchNewsResult {
  id: number;
  title: string;
  date: string;
  category: string;
}

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterLinkActive, IconComponent, PreloadOnHoverDirective, I18nPipe],
  host: {
    'document:keydown.escape': 'onEscapeKey()'
  },
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit {
  isCourtDropdownOpen = signal(false);
  isStepsDropdownOpen = signal(false);
  isLangDropdownOpen = signal(false);
  isMobileMenuOpen = signal(false);
  isScrolled = signal(false);
  sliderLeft = signal(0);
  sliderWidth = signal(0);

  // Search state
  isSearchOpen = signal(false);
  searchQuery = signal('');
  searchPageResults = signal<SearchPageResult[]>([]);
  searchNewsResults = signal<SearchNewsResult[]>([]);
  isSearching = signal(false);
  private readonly searchSubject = new Subject<string>();
  private newsCache: SearchNewsResult[] = [];
  private newsCacheLoaded = false;

  // Dark mode
  isDarkMode = signal(false);

  // Scroll throttle
  private scrollRafId: number | null = null;

  @ViewChild('navMenu') navMenu!: ElementRef<HTMLUListElement>;
  @ViewChild('searchInput') searchInput?: ElementRef<HTMLInputElement>;

  readonly languages: { code: LanguageCode; label: string; flag: string }[] = [
    { code: 'en', label: 'Anglais', flag: '🇬🇧' },
    { code: 'fr', label: 'Francais', flag: '🇫🇷' },
    { code: 'de', label: 'Allemand', flag: '🇩🇪' },
    { code: 'it', label: 'Italien', flag: '🇮🇹' },
    { code: 'es', label: 'Espagnol', flag: '🇪🇸' },
    { code: 'pt', label: 'Portugais', flag: '🇵🇹' },
    { code: 'sw', label: 'Swahili', flag: '🇹🇿' },
    { code: 'ln', label: 'Lingala', flag: '🇨🇩' },
    { code: 'ts', label: 'Tshiluba', flag: '🇨🇩' },
    { code: 'kg', label: 'Kikongo', flag: '🇨🇩' }
  ];

  private readonly i18n = inject(I18nService);
  private readonly router = inject(Router);
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://patient-wonder-production.up.railway.app/api/posts';

  private readonly searchablePages: SearchPageResult[] = [
    { route: '/', label: 'Accueil / Home', keywords: ['home', 'accueil', 'main', 'principal'] },
    { route: '/presentation', label: 'Pr\u00e9sentation', keywords: ['presentation', 'about', 'mission', 'pr\u00e9sentation'] },
    { route: '/judges', label: 'Juges / Judges', keywords: ['judges', 'juges', 'magistrats', 'magistrates', 'conseillers'] },
    { route: '/administrative-courts', label: 'Cours Administratives', keywords: ['courts', 'cours', 'administratives', 'cour', 'appel'] },
    { route: '/administrative-tribunals', label: 'Tribunaux Administratifs', keywords: ['tribunals', 'tribunaux', 'administratifs'] },
    { route: '/reforms', label: 'R\u00e9formes / Reforms', keywords: ['reforms', 'r\u00e9formes', 'reform'] },
    { route: '/international-relations', label: 'Relations Internationales', keywords: ['international', 'relations', 'cooperation'] },
    { route: '/audiences', label: 'Audiences', keywords: ['audiences', 'audience', 'hearing', 'hearings', 'r\u00f4le'] },
    { route: '/steps', label: 'D\u00e9marches / Steps', keywords: ['steps', 'd\u00e9marches', 'filing', 'procedures', 'appointment', 'rendez-vous'] },
    { route: '/news', label: 'Actualit\u00e9s / News', keywords: ['news', 'actualit\u00e9s', 'articles', 'nouvelles'] },
    { route: '/publications', label: 'Publications', keywords: ['publications', 'journal', 'officiel', 'documents'] },
    { route: '/history', label: 'Historique / History', keywords: ['history', 'historique', 'histoire'] },
  ];

  logoSrc = computed(() => 'assets/new-logo.png');

  constructor() {
    // Init dark mode from DOM (already set by index.html script)
    if (typeof document !== 'undefined') {
      this.isDarkMode.set(
        document.documentElement.getAttribute('data-theme') === 'dark'
      );
    }
    if (typeof window !== 'undefined') {
      this.isScrolled.set(window.scrollY > 60);
    }
    // Debounced news search
    this.searchSubject.pipe(
      debounceTime(300),
      switchMap((q) => this.searchNews(q))
    ).subscribe((results) => {
      this.searchNewsResults.set(results);
      this.isSearching.set(false);
    });
  }

  ngAfterViewInit(): void {
    // Update slider position after route changes
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        setTimeout(() => this.updateSliderToActive(), 100);
      });
    // Initial positioning
    setTimeout(() => this.updateSliderToActive(), 300);
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (this.scrollRafId !== null) return;
    this.scrollRafId = requestAnimationFrame(() => {
      this.scrollRafId = null;
      if (typeof window === 'undefined') return;
      const scrollY = window.scrollY;
      const current = this.isScrolled();
      if (current && scrollY < 20) {
        this.isScrolled.set(false);
      } else if (!current && scrollY > 80) {
        this.isScrolled.set(true);
      }
    });
  }

  onNavHover(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement;
    if (!target || !this.navMenu?.nativeElement) return;
    const menuRect = this.navMenu.nativeElement.getBoundingClientRect();
    const itemRect = target.getBoundingClientRect();
    this.sliderLeft.set(itemRect.left - menuRect.left);
    this.sliderWidth.set(itemRect.width);
  }

  onNavLeave(): void {
    this.updateSliderToActive();
  }

  private updateSliderToActive(): void {
    if (!this.navMenu?.nativeElement) return;
    const menu = this.navMenu.nativeElement;
    const activeLink = menu.querySelector('.nav-link.active') as HTMLElement | null;
    if (!activeLink) {
      this.sliderWidth.set(0);
      return;
    }
    const menuRect = menu.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();
    this.sliderLeft.set(linkRect.left - menuRect.left);
    this.sliderWidth.set(linkRect.width);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const clickedInsideNavDropdown = target.closest('.dropdown');
    const clickedInsideLangDropdown = target.closest('.lang-dropdown-wrapper');
    if (!clickedInsideNavDropdown && !clickedInsideLangDropdown) {
      this.closeDropdowns();
    }
  }

  onEscapeKey() {
    if (this.isSearchOpen()) {
      this.closeSearch();
      return;
    }
    this.closeDropdowns();
    this.closeMobileMenu();
  }

  toggleCourtDropdown() {
    this.isCourtDropdownOpen.set(!this.isCourtDropdownOpen());
    this.isStepsDropdownOpen.set(false);
  }

  toggleStepsDropdown() {
    this.isStepsDropdownOpen.set(!this.isStepsDropdownOpen());
    this.isCourtDropdownOpen.set(false);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.set(!this.isMobileMenuOpen());
    this.syncBodyMenuState();
    if (!this.isMobileMenuOpen()) {
      this.closeDropdowns();
    }
  }

  closeDropdowns() {
    this.isCourtDropdownOpen.set(false);
    this.isStepsDropdownOpen.set(false);
    this.isLangDropdownOpen.set(false);
  }

  toggleLangDropdown() {
    this.isLangDropdownOpen.set(!this.isLangDropdownOpen());
    this.isCourtDropdownOpen.set(false);
    this.isStepsDropdownOpen.set(false);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
    this.syncBodyMenuState();
    this.closeDropdowns();
  }

  private syncBodyMenuState() {
    if (typeof document === 'undefined') {
      return;
    }
    document.body.classList.toggle('menu-open', this.isMobileMenuOpen());
  }

  navigateToAppointment() {
    this.closeDropdowns();
    this.closeMobileMenu();
    this.router.navigate(['/appointment']);
    this.scrollToTop();
  }

  onNavLinkClick() {
    this.closeMobileMenu();
    this.scrollToTop();
  }

  onDropdownLinkClick() {
    this.closeMobileMenu();
    this.scrollToTop();
  }

  private scrollToTop() {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  setLanguage(lang: LanguageCode) {
    void this.i18n.setLanguage(lang);
    this.isLangDropdownOpen.set(false);
  }

  activeLang() {
    return this.i18n.activeLang();
  }

  currentLanguageLabel(): string {
    const lang = this.i18n.activeLang();
    return this.languages.find((l) => l.code === lang)?.label ?? 'Anglais';
  }

  // --- Dark mode ---
  toggleTheme(): void {
    const next = !this.isDarkMode();
    this.isDarkMode.set(next);
    if (typeof document !== 'undefined') {
      if (next) {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
    }
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    }
  }

  // --- Search ---
  toggleSearch(): void {
    const willOpen = !this.isSearchOpen();
    this.isSearchOpen.set(willOpen);
    if (willOpen) {
      this.closeDropdowns();
      setTimeout(() => this.searchInput?.nativeElement.focus(), 50);
    } else {
      this.clearSearch();
    }
  }

  closeSearch(): void {
    this.isSearchOpen.set(false);
    this.clearSearch();
  }

  clearSearch(): void {
    this.searchQuery.set('');
    this.searchPageResults.set([]);
    this.searchNewsResults.set([]);
    this.isSearching.set(false);
  }

  onSearchInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchQuery.set(value);
    const q = value.trim().toLowerCase();
    if (q.length < 2) {
      this.searchPageResults.set([]);
      this.searchNewsResults.set([]);
      this.isSearching.set(false);
      return;
    }
    // Instant: filter pages
    this.searchPageResults.set(
      this.searchablePages.filter(
        (p) =>
          p.label.toLowerCase().includes(q) ||
          p.keywords.some((k) => k.includes(q))
      ).slice(0, 5)
    );
    // Debounced: search news
    this.isSearching.set(true);
    this.searchSubject.next(q);
  }

  onSearchResultClick(): void {
    this.closeSearch();
    this.scrollToTop();
  }

  private searchNews(query: string) {
    if (query.length < 2) return of([]);
    // Use cached data if available
    if (this.newsCacheLoaded) {
      return of(this.filterNewsCache(query));
    }
    return this.http.get<{ posts?: Array<{ id: number; title?: string | null; category?: string | null; date?: string | null }> }>(this.apiUrl).pipe(
      switchMap((response) => {
        const posts = response?.posts ?? [];
        this.newsCache = posts.map((p) => ({
          id: p.id,
          title: p.title?.trim() || 'Untitled',
          date: this.formatSearchDate(p.date),
          category: p.category?.trim() || 'General',
        }));
        this.newsCacheLoaded = true;
        return of(this.filterNewsCache(query));
      }),
      catchError(() => of([]))
    );
  }

  private filterNewsCache(query: string): SearchNewsResult[] {
    return this.newsCache
      .filter((a) =>
        a.title.toLowerCase().includes(query) ||
        a.category.toLowerCase().includes(query)
      )
      .slice(0, 5);
  }

  private formatSearchDate(dateValue?: string | null): string {
    if (!dateValue) return '';
    const parsed = new Date(dateValue);
    if (Number.isNaN(parsed.getTime())) return '';
    return new Intl.DateTimeFormat(this.i18n.activeLang(), {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).format(parsed);
  }
}
