import { Component, OnInit, Input } from '@angular/core';
import { Chancleta } from '../../chancleta.interface';

@Component({
  selector: 'app-chancleta',
  templateUrl: './chancleta.component.html',
  styleUrls: ['./chancleta.component.css']
})
export class ChancletaComponent implements OnInit {
  @Input() chancletaData: Chancleta;
  @Input() detailsView: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  agregarAlCarrito() {
    console.log('agregando');
  }

}
