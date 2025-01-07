import { Context } from 'hono';
import {ReadOneCityView} from '../../views/city/ReadOneCityView';
import { PrismaClient } from '@prisma/client'; 
import { CityDTO } from '../../dtos/cityDTO';
import { error } from 'console';

const prisma = new PrismaClient();

export default async function ReadOneCityController(c : Context){
  try{
  const slug = c.req.param('slug');
  const city = await prisma.cities.findFirst({
    where:{slug:slug},
    include: {
      parkings: true,  // Inclure les parkings associés à chaque ville
    },
  });
    if(city === null){
      throw error;
    }
    const parkingsIds = city.parkings.map(parking => parking.id);
    const cityDTO = new CityDTO({
      id: city.id,
      name: city.name,
      slug: city.slug,
      country: city.country,
      location: city.location,  
      parkingsIds: parkingsIds,  
    });
  return c.html(ReadOneCityView({ city: cityDTO}));
  }
 catch (error) {
  // Si une erreur se produit, retourner une erreur générique
  console.error(error);
  return c.html('<h1>An error occurred while fetching the city</h1>', 500);
}
}