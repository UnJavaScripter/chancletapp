import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ChancletasService {

  constructor(private http: Http) { }

  getAll(): Observable<any> {
    return this.http.get('https://project-8786284258423614758.firebaseio.com/chancletas.json')
      .map((response: Response) => response.json());
  }

  getOne(chancletaId: number): Observable<any> {
    return this.http.get(`https://project-8786284258423614758.firebaseio.com/chancletas/${chancletaId}.json`)
      .map((response: Response) => response.json());
  }
}
