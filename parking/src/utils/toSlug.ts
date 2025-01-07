/*entrées : str : une chaine de charactere
*fonction qui modifie la cdc selon une synthaxe
*/
export function toSlug(str:string){
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaeeeeiiiioooouuuunc------";
    for (var i=0; i<str.length ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // supp les chara invalides
        .replace(/\s+/g, '-') // espace to -
        .replace(/-+/g, '-'); // tabulation to -

    return str
}
