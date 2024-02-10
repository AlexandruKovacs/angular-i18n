import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.initLanguage();
  }

  initLanguage(): void {

    const lang = sessionStorage.getItem('lang');

    if (lang) {
      this.translate.use(lang);
    } else {
      this.translate.setDefaultLang('en');
      this.translate.use('en');
    }
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    sessionStorage.setItem('SAVED_LANGUAGE', language);
  }
}
