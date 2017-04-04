import { Component, OnInit } from '@angular/core';
import { Chancleta } from '../shared/chancleta.interface';
import { ChancletasService } from '../core/services/chancletas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  chancletas: Chancleta[];

  constructor(private chancletasService: ChancletasService){}

  ngOnInit() {
    this.chancletasService.getAll().subscribe((response: Chancleta[]) => {
      this.chancletas = response;
    });
  }
}
