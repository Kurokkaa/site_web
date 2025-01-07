import { City } from '../../models/City';
import { Layout } from "../shared/Layout";

type ReadAllCitiesViewProps = {
  cities: City[];
};

export function ReadAllCitiesView({ cities }: ReadAllCitiesViewProps) {
  return (
    <Layout pageTitle="All Cities">
      <div id="cities">
        <h2>All Cities</h2>
        <ul>
          {cities.map(city => (
            <li key={city.id}>
              <a href={`/cities/${city.slug}`}>{city.name}</a> - {city.country}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
