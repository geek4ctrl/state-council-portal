import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Bootstrap the application with SSR support
bootstrapApplication(App, appConfig)
  .then(() => {
    // Remove loading screen once app is ready
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
      loadingScreen.remove();
    }
  })
  .catch((err) => console.error(err));
