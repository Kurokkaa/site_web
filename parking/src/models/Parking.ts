import {toSlug} from '../utils/toSlug'
import type { GPS } from '../types/GPS';
import {Spot} from './Spot';
import { generateRandomNumberId } from '../utils/generateRandomNumberId';



export class Parking {
    parking_id: number;              //Identifiant unique (UUID) du parking
    name: string;            //Nom du parking
    city_id: number;         //ID de la ville associée
    location: String;      //Coordonnées GPS
    numberOfSpots: number;   //Nombre de places disponibles
    opened: boolean;         //État d'ouverture du parking
    hourlyRate: number;      //Tarif horaire du parking
    parkIds: number[];       //Liste des identifiants des places de stationnement
  
    constructor(
      name: string,city_id: number,location: String,numberOfSpots: number, hourlyRate: number) {
      //Génération automatique d'un UUID pour le parking
      this.parking_id = generateRandomNumberId();
      this.name = name;
      this.city_id = city_id;
      this.location = location;
      this.numberOfSpots = numberOfSpots;
      this.opened = true;
      this.hourlyRate = Math.abs(hourlyRate);       //valeur absolue parceque entier positif 
  
      //Générer automatiquement autant d'instances de Spot que numberOfSpots
      this.parkIds = Array.from({ length: numberOfSpots }, (_, i) => generateRandomNumberId());
    }
  }