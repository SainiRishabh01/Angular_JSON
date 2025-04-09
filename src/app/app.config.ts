// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { importProvidersFrom } from '@angular/core';

// 👇 Import JsonFormsAngularModule
import { JsonForms } from '@jsonforms/angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(JsonForms) // ✅ Add this
  ]
};
