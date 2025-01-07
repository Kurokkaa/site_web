import { PrismaClient } from '@prisma/client'; 
import { CityDTO } from '../../dtos/cityDTO'
import { Context } from 'hono';
import { ReadAllCitiesView } from '../../views/city/ReadAllCitiesView';

const prisma = new PrismaClient();

export default async function ReadAllCitiesController(c : Context){
  const cities = await prisma.cities.findMany({
    include: {
      parkings: true,  // Inclure les parkings associés à chaque ville
    },
  });

  const city = cities.map(city => {
    const parkingsIds = city.parkings.map(parking => parking.id); // Extraire uniquement les IDs des parkings
    return new CityDTO({
      id: city.id,
      name: city.name,
      slug: city.slug,
      country: city.country,
      location: city.location,  
      parkingsIds: parkingsIds,  
    });
  });

  return c.html(ReadAllCitiesView({ cities: city }));
}

