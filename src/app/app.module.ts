import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterTableComponent } from './shared/components/filter-table/filter-table.component';
import { TableRankComponent } from './modules/table-rank/table-rank.component';
import { UserDetailComponent } from './modules/user-detail/user-detail.component';
import { TableConquestComponent } from './shared/components/table-conquest/table-conquest.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AdminComponent } from './pages/admin/admin.component';
import { AuthService } from './services/auth.service';
import { RankHomeComponent } from './pages/rank-home/rank-home.component';
import { SortByPipe } from './shared/utils/sort-by.pipe';
import { PatentesComponent } from './pages/patentes/patentes.component';

// import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
// import { provideFirestore, getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    FilterTableComponent,
    TableRankComponent,
    UserDetailComponent,
    TableConquestComponent,
    AdminComponent,
    RankHomeComponent,
    SortByPipe,
    PatentesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
