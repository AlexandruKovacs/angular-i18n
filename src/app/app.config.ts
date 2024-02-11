import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { environment } from '../environments/environment';

import { TranslateLoader, TranslateModule, TranslateCompiler } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import {TranslateMessageFormatCompiler} from 'ngx-translate-messageformat-compiler';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        },

        compiler: {
            provide: TranslateCompiler,
            useClass: TranslateMessageFormatCompiler
        }
      }),
    ),
    provideRouter(routes)
  ]
};

// Requerido para compilación AOT (ahead of time)
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, `${environment.baseUrl}./assets/i18n/`, '.json');
}
