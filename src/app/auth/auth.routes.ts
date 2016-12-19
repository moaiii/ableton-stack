import { Routes } from "@angular/router";

import { SignupComponent } from "./signup.component";

// relative paths of the child routes
// redirectTo now appends to ....3000/auth/ >>>>
export const AUTH_ROUTES: Routes = [
  {path: '', redirectTo: 'signup', pathMatch: 'full'},
  {path: 'signup', component: SignupComponent}
];
