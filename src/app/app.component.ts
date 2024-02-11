import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Import the language files
import englishLanguage from '../assets/i18n/en.json';
import greekLanguage from '../assets/i18n/gr.json';

import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    this.initLanguage();
  }

  initLanguage(): void {

    const default_lang = sessionStorage.getItem('default_lang');

    this.translate.setTranslation('en', englishLanguage);
    this.translate.setTranslation('gr', greekLanguage);

    if (default_lang) {
      this.translate.setDefaultLang(default_lang);
      this.translate.use(default_lang);
    } else {
      this.translate.setDefaultLang('en');
      this.translate.use('en');
    }
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    sessionStorage.setItem('default_lang', language);
  }
}
