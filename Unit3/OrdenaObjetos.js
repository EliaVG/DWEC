/* 
    Ordenar objetos por sus diferentes campos, en caso de empate utilizar otro 
    campo para desempatar
 */

let pokemons = [
    {nombre: 'Pichu', tipo: 'Eléctrico', salud: 98},
    {nombre: 'Raichu', tipo: 'Eléctrico', salud: 72},
    {nombre: 'Eevee', tipo: 'Normal', salud: 83},
    {nombre: 'Ninetales', tipo: 'Fuego', salud: 78},
    {nombre: 'Pikachu', tipo: 'Eléctrico', salud: 100},
    {nombre: 'Vulpix', tipo: 'Fuego', salud: 97}
];

// Ordenamos por nombre
pokemons.sort(function(a, b) {
    if (a.nombre < b.nombre) 
        return -1;
    else if (a.nombre > b.nombre) 
        return 1;
    else
        return 0;
});

for (let pokemon of pokemons){
    document.write(pokemon.nombre + ' ' + pokemon.tipo + ' ' + pokemon.salud + '<br>');
}


document.write('<br>');


// Ordenamos por tipo (si son iguales se diferencia por salud)
pokemons.sort(function(a, b) {
    if (a.tipo < b.tipo) 
        return -1;
    else if (a.tipo > b.tipo) 
        return 1;
    else
        return 0;
});

for (let pokemon of pokemons){
    document.write(pokemon.nombre + ' ' + pokemon.tipo + ' ' + pokemon.salud + '<br>');
}


document.write('<br>');


// Ordenamos por salud
let p1 = pokemons;
let p2 = pokemons;

pokemons.sort((a, b)=>a.salud-b.salud);

for (let pokemon of pokemons){
    document.write(pokemon.nombre + ' ' + pokemon.tipo + ' ' + pokemon.salud + '<br>');
}