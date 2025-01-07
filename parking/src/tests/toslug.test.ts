import { toSlug } from '../utils/toSlug';
import { describe, it, expect } from 'bun:test';

//Groupe de tests pour la fonction toSlug
describe('toSlug', () => {

  //Teste la conversion d'une chaîne simple en slug (Hello World → hello-world)
  it('devrait convertir une chaîne simple en slug', () => {
    expect(toSlug('Hello World')).toBe('hello-world');
  });

  //Teste le remplacement correct des caractères accentués par leurs équivalents non accentués
  it('devrait gérer correctement les accents', () => {
    expect(toSlug('àáäâèéëêìíïîòóöôùúüûñç')).toBe('aaaaeeeeiiiioooouuuunc');
  });

  //Teste la suppression des caractères spéciaux non valides
  it('devrait supprimer les caractères spéciaux', () => {
    expect(toSlug('Hello! How are you?')).toBe('hello-how-are-you');
  });

  //Teste que plusieurs espaces sont remplacés par un seul tiret
  it('devrait remplacer plusieurs espaces par un seul tiret', () => {
    expect(toSlug('  Ceci    est   un  test   ')).toBe('ceci-est-un-test');
  });

  //Teste que plusieurs tirets successifs sont remplacés par un seul tiret
  it('devrait remplacer plusieurs tirets successifs par un seul', () => {
    expect(toSlug('test---slug')).toBe('test-slug');
  });

  //Teste que la fonction renvoie une chaîne vide si elle contient uniquement des caractères non valides
  it('devrait retourner une chaîne vide pour une chaîne avec uniquement des caractères spéciaux', () => {
    expect(toSlug('!@#$%^&*()')).toBe('');
  });

});
