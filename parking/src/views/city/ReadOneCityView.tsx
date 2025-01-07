// src/views/city/ReadOneCityView.tsx
import { CityDTO } from '../../dtos/cityDTO';
import { Layout } from '../shared/Layout';

// Définir les propriétés attendues pour le composant
type ReadOneCityViewProps = {
  city: CityDTO; // Utiliser CityDTO comme type attendu
};

// Définir le composant fonctionnel
export function ReadOneCityView({ city }: ReadOneCityViewProps) {
  const[latitude,longitude]=city.location.split(",");
  return (
    <Layout pageTitle={city.name}> {/* Utiliser le nom de la ville comme titre de la page */}
      <div id="city">
        <h2>{city.name}</h2> {/* Afficher le nom de la ville */}
        <p>Country: {city.country}</p> {/* Afficher le pays */}
        <p>Location: {latitude}, {longitude}</p> {/* Afficher la localisation */}
        <h3>Parkings:</h3> {/* Titre pour la section parkings */}
        <ul>
          {city.parkingsIds.map(parkingId => ( // Itérer sur les IDs des parkings
            <li key={parkingId}> {/* Chaque parking doit avoir une clé unique */}
              <a href={`/parkings/${parkingId}`}>Parking ID: {parkingId}</a> {/* Lien vers le parking */}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
