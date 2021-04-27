import { Pipe, PipeTransform } from '@angular/core';
import { Stations } from '../models/stations';

@Pipe({
  name: 'etat',
})
export class EtatPipe implements PipeTransform {
  transform(stations: Stations) {
    if (stations.etat == 'EN SERVICE') {
      return 'Oui';
    } else {
      return 'Non';
    }
  }
}
