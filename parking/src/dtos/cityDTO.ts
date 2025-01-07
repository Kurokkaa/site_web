import { City } from '../models/City';

// CityDTO sera une structure de données simplifiée, sans méthodes métier comme `add`.
export class CityDTO {
  id: number;
  name: string;
  slug: string;
  parkingsIds: number[];
  country: string;
  location: String;

  constructor(city: City) {
    this.id = city.id;
    this.name = city.name;
    this.slug = city.slug;
    this.parkingsIds = city.parkingsIds;
    this.country = city.country;
    this.location = city.location;
  }
}
