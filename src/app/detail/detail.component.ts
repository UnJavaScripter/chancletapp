import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChancletasService } from '../core/services/chancletas.service';
import { Chancleta } from '../shared/chancleta.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  chancleta: Chancleta;

  constructor(private chancletasService: ChancletasService, private route: ActivatedRoute){}

  ngOnInit() {
    const chancletaId = this.route.snapshot.params["id"];
    this.chancletasService.getOne(chancletaId).subscribe((response: Chancleta) => {
      this.chancleta = response;
    });
  }

}
