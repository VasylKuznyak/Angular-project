import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from "@angular/common";
import {NgModule} from '@angular/core';

import {MainLayoutComponent} from "./layouts";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'movies', pathMatch: 'full'},
      {path: 'movies', loadChildren: () => import('./modules').then(module => module.MoviesModule)}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
