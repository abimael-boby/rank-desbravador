import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterTableComponent } from './shared/components/filter-table/filter-table.component';
import { TableRankComponent } from './modules/table-rank/table-rank.component';
import { UserDetailComponent } from './modules/user-detail/user-detail.component';
import { TableConquestComponent } from './shared/components/table-conquest/table-conquest.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeaderModule } from './shared/components/header/header.module';

const routes: Routes = [
  { path: 'first-component', component: TableRankComponent },
  { path: 'second-component', component: UserDetailComponent },
]; // sets up routes constant where you define your routes
@NgModule({
  declarations: [
    AppComponent,
    FilterTableComponent,
    TableRankComponent,
    UserDetailComponent,
    TableConquestComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HeaderModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
