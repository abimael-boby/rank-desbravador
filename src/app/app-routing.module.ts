import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import all the components for which navigation service has to be activated
import { SignInComponent } from '../app/shared/components/sign-in/sign-in.component';
import { SignUpComponent } from '../app/shared/components/sign-up/sign-up.component';
import { DashboardComponent } from '../app/shared/components/dashboard/dashboard.component';
import { AuthGuard } from '../app/shared/guard/auth.guard';
import { ForgotPasswordComponent } from './shared/components/forgot-password/forgot-password.component';

const routes: Routes = [
  { path: 'admin/list', loadChildren: () => import('./pages/employees/list/list.module').then(m => m.ListModule) },
  { path: 'new', loadChildren: () => import('./pages/employees/new/new.module').then(m => m.NewModule) },
  { path: 'details', loadChildren: () => import('./pages/employees/details/details.module').then(m => m.DetailsModule) },
  { path: 'edit', loadChildren: () => import('./pages/employees/edit/edit.module').then(m => m.EditModule) },

  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
