import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChancletaComponent } from './components/chancleta/chancleta.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

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
    ChancletaComponent,
    NavBarComponent
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,

    ChancletaComponent,
    NavBarComponent
  ]
  
})
export class SharedModule { }
