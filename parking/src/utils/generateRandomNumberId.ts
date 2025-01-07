export function generateRandomNumberId(): number {
  // Génère un nombre aléatoire entre 100000 et 999999 inclus
  return Math.floor(Math.random() * 900000) + 100000;
}