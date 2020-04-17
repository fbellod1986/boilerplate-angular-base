import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VistaDePruebaComponent } from './vista-de-prueba.component';

const routes: Routes = [
  {
    path: 'vista-de-prueba', component: VistaDePruebaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VistaDePruebaRoutingModule { }
