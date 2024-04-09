
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

//Aquí, si se quisiera habilitar el modo de producción, se haría de la siguiente manera:
// if (environment.production) {
//   enableProdMode();
// }

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), provideAnimationsAsync(), provideAnimationsAsync()
  ]
}).catch(err => console.error(err));
