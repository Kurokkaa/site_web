import { Parking } from '../../models/Parking';
import { Layout } from '../shared/Layout';

type ReadAllParkingsViewProps = {
  parkings: Parking[];
};

export function ReadAllParkingsView({ parkings }: ReadAllParkingsViewProps) {
  return (
    <Layout pageTitle="All Parkings">
      <div id="parkings">
        <h2>All Parkings</h2>
        <ul>
          {parkings.map(parking => (
            <li key={parking.parking_id}>
              <a href={`/parkings/${parking.parking_id}`}>{parking.name}</a>
              <p>Located in City ID: {parking.city_id}</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
