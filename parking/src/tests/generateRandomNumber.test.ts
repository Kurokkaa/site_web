import { generateRandomNumberId } from '../utils/generateRandomNumberId';
import { test, expect, describe, it } from 'bun:test';

//Groupe de tests pour la fonction generateRandomNumberId
describe('generateRandomNumberId', () => {

  //Test de base pour vérifier que le nombre généré a bien 6 chiffres
  it('devrait générer un nombre entier positif à 6 chiffres', () => {
    const id = generateRandomNumberId();

    //Vérifie que le nombre est un entier
    expect(Number.isInteger(id)).toBe(true);

    //Vérifie que le nombre est bien dans la plage de 100000 à 999999
    expect(id).toBeGreaterThanOrEqual(100000);
    expect(id).toBeLessThanOrEqual(999999);
  });

  //Test pour s'assurer que la fonction génère des nombres aléatoires
  it('devrait générer des nombres différents à chaque appel', () => {
    const id1 = generateRandomNumberId();
    const id2 = generateRandomNumberId();

    //Vérifie que deux appels successifs ne produisent pas toujours le même nombre
    expect(id1).not.toEqual(id2);
  });

  //Test pour vérifier que le nombre est toujours positif
  it('devrait toujours générer un nombre positif', () => {
    const id = generateRandomNumberId();

    //Vérifie que le nombre est strictement positif
    expect(id).toBeGreaterThan(0);
  });

});
