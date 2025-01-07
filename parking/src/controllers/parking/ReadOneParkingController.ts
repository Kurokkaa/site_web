import { Context } from 'hono';
import {ReadOneParkingView} from '../../views/parking/ReadOneParkingView';
import { PrismaClient } from '@prisma/client'; 
import { CityDTO } from '../../dtos/cityDTO';
import { error } from 'console';
import { ParkingDTO } from '../../dtos/parkingDTO';

const prisma = new PrismaClient();

export default async function ReadOneParkingController(c : Context){
  try{
  const id = c.req.param('id');
  const parking = await prisma.parkings.findFirst({
    where:{id:+id},
    include: {
      city: true,  
      spots:true,
    },
  });
    if(parking === null){
      throw error;
    }
    const spots = parking.spots.map(spots =>spots.id);
    const parkingDTO = new ParkingDTO({
      parking_id: parking.id,
      name: parking.name,
      location: parking.location,
      numberOfSpots: parking.numberOfSpots,
      opened: parking.opened,
      hourlyRate: parking.hourlyRate,
      parkIds:spots,
      city_id:parking.city_id,
    });
  return c.html(ReadOneParkingView({ parking: parkingDTO}));
  }
 catch (error) {
  // Si une erreur se produit, retourner une erreur générique
  console.error(error);
  return c.html('<h1>An error occurred while fetching the city</h1>', 500);
}
}
