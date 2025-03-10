// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
// import { provideRouter } from '@angular/router';
// import { routes } from './app/app.routes';

// bootstrapApplication(AppComponent, {
//   providers: [provideRouter(routes)]  
// }).catch(err => console.error(err));


// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));



// import { bootstrapApplication } from '@angular/platform-browser';
// import { provideHttpClient } from '@angular/common/http'; // Importa provideHttpClient
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, {
//   ...appConfig,
//   providers: [provideHttpClient()] // Añades provideHttpClient aquí
// })
//   .catch((err) => console.error(err));



// import { bootstrapApplication } from '@angular/platform-browser';
// import { provideHttpClient } from '@angular/common/http'; // Importa provideHttpClient
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
// import { RouterModule } from '@angular/router';
// import { routes } from './app/app.routes';


// bootstrapApplication(AppComponent, {
//   ...appConfig,
//   providers: [provideHttpClient()],
  
// })
//   .catch((err) => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
