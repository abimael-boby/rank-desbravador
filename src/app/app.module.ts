import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterTableComponent } from './shared/components/filter-table/filter-table.component';
import { TableRankComponent } from './modules/table-rank/table-rank.component';
import { UserDetailComponent } from './modules/user-detail/user-detail.component';
import { TableConquestComponent } from './shared/components/table-conquest/table-conquest.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeaderModule } from './shared/components/header/header.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AdminComponent } from './pages/admin/admin.component';
import { AuthService } from './services/auth.service';
// import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
// import { provideFirestore, getFirestore } from '@angular/fire/firestore';



// const routes: Routes = [
//   { path: '', component: TableRankComponent },
//   { path: 'list', component: TableRankComponent },
//   { path: 'new', component: UserDetailComponent },
// ]; // sets up routes constant where you define your routes
@NgModule({
  declarations: [
    AppComponent,
    FilterTableComponent,
    TableRankComponent,
    UserDetailComponent,
    TableConquestComponent,
    HeaderComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    BrowserAnimationsModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  exports: [],
  providers: [AngularFirestore, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
