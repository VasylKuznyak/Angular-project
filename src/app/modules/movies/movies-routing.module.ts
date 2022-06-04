import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {MovieInfoComponent, MoviesListComponent} from "./components";

const routes: Routes = [
  {
    path: '', component: MoviesListComponent, children:
      [{path: ':id', component: MovieInfoComponent}]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class MoviesRoutingModule {
}
