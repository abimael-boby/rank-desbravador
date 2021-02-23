import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterTableComponent } from './shared/components/filter-table/filter-table.component';
import { TableRankComponent } from './modules/table-rank/table-rank.component';

const routes: Routes = [
  { path: 'first-component', component: TableRankComponent },
  { path: 'second-component', component: FilterTableComponent },
]; // sets up routes constant where you define your routes
@NgModule({
  declarations: [
    AppComponent,
    FilterTableComponent,
    TableRankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
