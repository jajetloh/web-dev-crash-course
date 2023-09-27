import './polyfills';
import {provideHttpClient, withNoXsrfProtection} from '@angular/common/http';
import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"
import { AppModule } from "./app/app.module"

// platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err))

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withNoXsrfProtection()),
  ],
})
.then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

  // Otherwise, log the boot error
})
.catch(err => console.error(err));
