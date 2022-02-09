import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMenuModule } from '@angular/material/menu';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { RouterModule } from '@angular/router'; // CLI imports router
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { MenuTopComponent } from './components/menu-top/menu-top.component';
import { MenuPerfilComponent } from './components/menu-perfil/menu-perfil.component';
import {MatSelectModule} from '@angular/material/select';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';


@NgModule({
  declarations: [
    EmployeeFormComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    FooterComponent,
    HeaderComponent,
    HeaderAdminComponent,
    MenuTopComponent,
    MenuPerfilComponent,
    ProfileFormComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterModule,
    MatMenuModule,
    MatSelectModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    EmployeeFormComponent,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    ProfileFormComponent
  ]
})
export class SharedModule { }
