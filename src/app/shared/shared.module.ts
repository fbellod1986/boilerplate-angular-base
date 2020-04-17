import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [SidebarComponent, PageNotFoundComponent, NavbarComponent, FooterComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
