import { Stations } from './stations';

export interface Api {
  records: Record[];
}

export interface Record {
  fields: Stations;
}
