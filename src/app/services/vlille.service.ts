import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Api } from '../models/result';
import { Observable, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VlilleService {
  private subject = new Subject<any>();

  constructor(private http: HttpClient) {}
  private url =
    'https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=vlille-realtime&q=&rows=252&sort=commune&facet=libelle&facet=nom&facet=commune&facet=etat&facet=type&facet=etatconnexion';

  public getStations() {
    return this.http
      .get<Api>(this.url)
      .pipe(
        map((response) => response.records.map((response) => response.fields))
      );
  }
  public searchStations(str: string) {
    let url = this.url + '&refine.nom=' + str.toUpperCase();

    const stations = this.http
      .get<Api>(url)
      .pipe(
        map((response) => response.records.map((response) => response.fields))
      );

    this.subject.next(stations);
  }

  public refreshStations() {
    let url = this.url;

    const stations = this.http
      .get<Api>(url)
      .pipe(
        map((response) => response.records.map((response) => response.fields))
      );

    this.subject.next(stations);
  }

  getUpdate() {
    return this.subject;
  }
}
