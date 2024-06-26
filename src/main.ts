/// <reference types="@angular/localize" />
// import 'zone.js/dist/zone'; // Avoid NG0908 error in StackBlitz
import 'zone.js'

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
