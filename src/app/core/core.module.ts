import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChancletasService } from './services/chancletas.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers: [ChancletasService],
  exports: [RouterModule]
})
export class CoreModule { }
