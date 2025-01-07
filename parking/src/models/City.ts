import {toSlug} from '../utils/toSlug'
import type { GPS } from '../types/GPS';
import { generateRandomNumberId } from '../utils/generateRandomNumberId';


export class City {
    id:number;
    name:string;
    slug:string;
    parkingsIds:number[];
    country:string;
    location:String;
    constructor(name:string,country:string,location:String){
        this.id=generateRandomNumberId();
        this.name=name;
        this.slug=toSlug(name);
        this.parkingsIds=[];
        this.country=country;
        this.location=location;
    };
}




