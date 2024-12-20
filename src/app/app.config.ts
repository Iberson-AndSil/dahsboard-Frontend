import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withViewTransitions({
        skipInitialTransition:true,
      })
    ),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), provideClientHydration(),
    provideHttpClient()
  ]
};
