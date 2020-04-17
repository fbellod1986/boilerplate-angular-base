import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'boilerplate', loadChildren: () =>
                           import('./views/vista-de-prueba/vista-de-prueba.module')
                          .then(mod => mod.VistaDePruebaModule)
  },
  { path: '', redirectTo: 'boilerplate/vista-de-prueba', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
