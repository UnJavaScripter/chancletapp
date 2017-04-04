import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChancletaComponent } from './chancleta/chancleta.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [
  ],
  declarations: [
    ChancletaComponent
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,

    ChancletaComponent
  ]
  
})
export class SharedModule { }
