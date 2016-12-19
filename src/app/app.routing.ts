import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth.signup.component';
import { AUTH_ROUTES } from './auth/auth.routes';

const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/', pathMatch: full},
  {path: 'signup', component: SignupComponent, children: AUTH_ROUTES}
]

export const routing = RouterModule.forRoot(APP_ROUTES);
