import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaDePruebaComponent } from './vista-de-prueba.component';
import { VistaDePruebaRoutingModule } from './vista-de-prueba-routing.module';



@NgModule({
  declarations: [VistaDePruebaComponent],
  imports: [
    CommonModule,
    VistaDePruebaRoutingModule
  ]
})
export class VistaDePruebaModule { }
