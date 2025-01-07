import { PrismaClient } from '@prisma/client'; 
import { Context } from 'hono';
import { ReadAllParkingsView } from '../../views/parking/ReadAllParkingsView';
import { ParkingDTO } from '../../dtos/parkingDTO';

const prisma = new PrismaClient();

export default async function ReadAllParkingsController(c : Context){
  const parkings = await prisma.parkings.findMany({
    include: {
      city: true,  // Inclure les villes associés à chaque parkings
      spots:true,
    },
  });

  const parking = parkings.map(parking => {
    const spots = parking.spots.map(spots =>spots.id);
    return new ParkingDTO({
      parking_id: parking.id,
      name: parking.name,
      location: parking.location,
      numberOfSpots: parking.numberOfSpots,
      opened: parking.opened,
      hourlyRate: parking.hourlyRate,
      parkIds:spots,
      city_id:parking.city_id,
    });
  });

  
  return c.html(ReadAllParkingsView({ parkings: parking }));
}

