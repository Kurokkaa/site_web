// src/dtos/ParkingDTO.ts
import type { GPS } from '../types/GPS';
import { Parking } from '../models/Parking';

export class ParkingDTO {
  parking_id: number;
  name: string;
  city_id: number;
  location: String;
  numberOfSpots: number;
  opened: boolean;
  hourlyRate: number;
  parkIds: number[];

  constructor(parking: Parking) {
    this.parking_id = parking.parking_id;
    this.name = parking.name;
    this.city_id = parking.city_id;
    this.location = parking.location;
    this.numberOfSpots = parking.numberOfSpots;
    this.opened = parking.opened;
    this.hourlyRate = parking.hourlyRate;
    this.parkIds = parking.parkIds;
  }
}
