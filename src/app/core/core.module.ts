import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChancletasService } from './services/chancletas.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SharedModule } from '../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [NavBarComponent],
  providers: [ChancletasService],
  exports: [NavBarComponent, RouterModule]
})
export class CoreModule { }
