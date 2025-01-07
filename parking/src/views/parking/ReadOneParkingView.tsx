import { Layout } from '../shared/Layout';
import { ParkingDTO } from '../../dtos/parkingDTO';

type ReadOneParkingViewProps = {
  parking: ParkingDTO;
};

export function ReadOneParkingView({ parking }: ReadOneParkingViewProps) {
  const[latitude,longitude]=parking.location.split(",");
  return (
    <Layout pageTitle={parking.name}>
      <div id="parking">
        <h2>{parking.name}</h2>
        <p>City ID: {parking.city_id}</p>
        <p>Location: {latitude}, {longitude}</p>
        <p>Opened: {parking.opened ? "Yes" : "No"}</p>
        <p>Hourly Rate: ${parking.hourlyRate}</p>
        <h3>Spots:</h3>
        <ul>
          {parking.parkIds.map((spotId) => (
            <li key={spotId}>Spot ID: {spotId}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
