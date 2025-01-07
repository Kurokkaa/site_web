import { Database } from 'bun:sqlite';
// Créez une instance de la base de données
const db = new Database('parking.sqlite');
export {db};