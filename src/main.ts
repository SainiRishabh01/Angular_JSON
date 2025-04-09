import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

import { JsonFormsModule } from '@jsonforms/angular'; // ✅ CORRECT module

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(JsonFormsModule) // ✅ Use the correct module here
  ]
});
