/*import { City} from "../models/City";
import {  Parking } from "../models/Parking";
import type { GPS } from "../types/GPS";

//Aix-En-Provence
const AEP_gps:GPS = {
    latitude : 43.533329,
    longitude : 5.43333
}

var AEP:City = new City('Aix-en-Provence','France',AEP_gps);
var Parking_AEP:Parking = new Parking('Parking Gare',AEP.id,AEP.location,100,4.5);
AEP.add(Parking_AEP);

//Spezia
const Spez_gps:GPS = {
    latitude : 44.238366,
    longitude : 9.6912326
}
var Spezia:City = new City('Spezia','Italie',Spez_gps);
var Parking_Spezia:Parking = new Parking('Parking stazione Nord',Spezia.id,Spezia.location,50,2.5);
var Parking_Spezia2:Parking = new Parking('Parking stazione Sud',Spezia.id,Spezia.location,80,3);
Spezia.add(Parking_Spezia);
Spezia.add(Parking_Spezia2);

//Aix-La-Chapelle
const Aix_Gps:GPS = {
    latitude : 50.776351,
    longitude : 6.083862
}
var Aix:City = new City('Aix-la-Chapelle','Allemagne',Aix_Gps);
var Parking_Aix:Parking = new Parking('Parking Bahnhof',Aix.id,Aix.location,40,2.80);
Aix.add(Parking_Aix);

//San Cristobal
const Cri_Gps:GPS = {
    latitude : 28.487180709838867,
    longitude : -16.313879013061523
}
var Cri:City = new City('San Cristóbal','Espagne',Cri_Gps);
var Parking_Cri:Parking = new Parking('Parking estación',Cri.id,Cri.location,70,3.10);
Cri.add(Parking_Cri);

//NewCastle
const Castle_gps:GPS = {
    latitude : 54.9738474,
    longitude : -1.6131572
}
var NewCastle:City = new City('Newcastle upon Tyne','Angleterre',Castle_gps);
var Parking_cas1:Parking = new Parking("North's station Parking",NewCastle.id,NewCastle.location,60,2.40);
var Parking_cas2:Parking = new Parking("South's station Parking",NewCastle.id,NewCastle.location,90,3.20);
NewCastle.add(Parking_cas1);
NewCastle.add(Parking_cas2);

const cities: City[] = [AEP, Spezia, Aix, Cri, NewCastle];
const parkings: Parking[] = [Parking_AEP, Parking_Spezia, Parking_Spezia2, Parking_Aix, Parking_Cri, Parking_cas1, Parking_cas2];

export { cities, parkings };*/