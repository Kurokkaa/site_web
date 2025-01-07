import { Database } from 'bun:sqlite';



// Fonction pour initialiser les tables et les données
const initializeDatabase = async () => {

	// Créez une instance de la base de données
	const db = new Database('parking.sqlite');


  // Créer les tables si elles n'existent pas
  await db.run(`
    CREATE TABLE IF NOT EXISTS cities (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL UNIQUE,
      slug TEXT NOT NULL UNIQUE,
      location TEXT,
      country TEXT NOT NULL
    );
  `);

  await db.run(`
    CREATE TABLE IF NOT EXISTS parkings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL UNIQUE,
      location TEXT,
      numberOfSpots INTEGER NOT NULL,
      opened INTEGER NOT NULL DEFAULT 1,
      hourlyRate REAL NOT NULL,
      city_id INTEGER NOT NULL,
      FOREIGN KEY(city_id) REFERENCES cities(id)
    );
  `);


  await db.run(`
    CREATE TABLE IF NOT EXISTS spots (
    id INTEGER NOT NULL,
    parking_id INTEGER NOT NULL,
    PRIMARY KEY(id AUTOINCREMENT),
    FOREIGN KEY(parking_id) REFERENCES parkings(id)
);
  `);
  await db.run(`
    CREATE TABLE IF NOT EXISTS parks (
    id TEXT NOT NULL UNIQUE,
    startedAt TEXT NOT NULL,
    endedAt TEXT,
    vehicleNumberPlate TEXT,
    spot_id INTEGER NOT NULL,
    price REAL NOT NULL DEFAULT 0,
    PRIMARY KEY(id),
    FOREIGN KEY(spot_id) REFERENCES spots(id)
);
  `);

  await db.run('DELETE FROM cities');
  // Insérer les données initiales des villes dans la table "cities"
  await db.run(`
    INSERT INTO cities (name, slug, location, country) VALUES
      ('Aix-en-Provence', 'aix-en-provence', '43.533329,5.43333', 'France'),
      ('Spezia', 'spezia', '44.238366,9.6912326', 'Italie'),
      ('Aix-la-Chapelle', 'aix-la-chapelle', '50.776351,6.083862', 'Allemagne'),
      ('San Cristóbal', 'san-cristobal', '28.487180709838867,-16.313879013061523', 'Espagne'),
      ('Newcastle upon Tyne', 'newcastle-upon-tyne', '54.9738474,-1.6131572', 'Angleterre')
    ON CONFLICT(name) DO NOTHING;
  `);
  
 // Définir le type pour le résultat de la requête
 type CityResult = { id: number } | undefined;

 // Fonction pour récupérer l'ID d'une ville
 const getCityId = async (name: string): Promise<number | undefined> => {
   const result = await db.query<CityResult, [string]>(`SELECT id FROM cities WHERE name = ?`).get(name);
   return result?.id;
 };

  await db.run('DELETE FROM parkings');
  // Insérer les données initiales des parkings dans la table "parkings"
  await db.run(`
    INSERT INTO parkings (name, location, numberOfSpots, hourlyRate, city_id) VALUES
      ('Parking Gare', '43.533329,5.43333', 100, 4.5, ${await getCityId('Aix-en-Provence')}),
      ('Parking stazione Nord', '44.238366,9.6912326', 50, 2.5, ${await getCityId('Spezia')}),
      ('Parking stazione Sud', '44.238366,9.6912326', 80, 3, ${await getCityId('Spezia')}),
      ('Parking Bahnhof', '50.776351,6.083862', 40, 2.8, ${await getCityId('Aix-la-Chapelle')}),
      ('Parking estación', '28.487180709838867,-16.313879013061523', 70, 3.1, ${await getCityId('San Cristóbal')}),
      ('North s station Parking', '54.9738474,-1.6131572', 60, 2.4, ${await getCityId('Newcastle upon Tyne')}),
      ('South s station Parking', '54.9738474,-1.6131572', 90, 3.2, ${await getCityId('Newcastle upon Tyne')})
    ON CONFLICT(name) DO NOTHING;
  `);
  
 // Définir le type pour le résultat de la requête des parkings
 type ParkingResult = { id: number } | undefined;

 // Fonction pour récupérer l'ID d'un parking
 const getParkingId = async (name: string): Promise<number | undefined> => {
   const result = await db.query<ParkingResult, [string]>(`SELECT id FROM parkings WHERE name = ?`).get(name);
   return result?.id;
 };

 await db.run('DELETE FROM spots');
  // Insérer les données dans la table "spots"
  await db.run(`
    INSERT INTO spots (parking_id) VALUES
      (${await getParkingId('Parking Gare')}),
      (${await getParkingId('Parking stazione Sud')}),
      (${await getParkingId('North s station Parking')}),
      (${await getParkingId('South s station Parking')})
  `);

// Définir le type pour le résultat de la requête des spots
type SpotResult = { id: number } | undefined;

const getSpotId = async (parkingName: string): Promise<number | undefined> => {
  const parkingId = await getParkingId(parkingName);

  if (parkingId) {
    const result = await db.query<SpotResult, [number]>(`SELECT id FROM spots WHERE parking_id = ?`).all(parkingId);
    return result.length > 0 ? result[0]?.id : undefined;
  }

  return undefined;
};

  await db.run('DELETE FROM parks');

    await db.run(`
      INSERT INTO parks (id, startedAt, endedAt, vehicleNumberPlate, spot_id, price) VALUES
        ('park1', '2024-11-17 08:00:00', '2024-11-17 10:00:00', 'AB123CD', ${await getSpotId('Parking Gare')}, 9.0),
        ('park2', '2024-11-17 09:00:00', '2024-11-17 11:00:00', 'CD456EF', ${await getSpotId('Parking Gare')}, 6.5),
        ('park3', '2024-11-17 10:00:00', '2024-11-17 12:00:00', 'GH789IJ', ${await getSpotId('Parking Gare')}, 7.2),
        ('park4', '2024-11-17 11:00:00', '2024-11-17 13:00:00', 'KL012MN', ${await getSpotId('South s station Parking')}, 5.8),
        ('park5', '2024-11-17 12:00:00', '2024-11-17 14:00:00', 'OP345QR', ${await getSpotId('South s station Parking')}, 8.3),
        ('park6', '2024-11-17 13:00:00', '2024-11-17 15:00:00', 'ST678UV', ${await getSpotId('North s station Parking')}, 4.9),
        ('park7', '2024-11-17 14:00:00', '2024-11-17 16:00:00', 'WX901YZ', ${await getSpotId('South s station Parking')}, 10.0)
      ON CONFLICT(id) DO NOTHING;
    `);

  console.log('Database initialized successfully.');
}


initializeDatabase();