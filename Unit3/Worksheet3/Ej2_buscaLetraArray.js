/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Unidad 3: Relación 3 - Ejercicio 2

    Con un array de nombres, buscar todos los que empiecen por J, coger sus 
    iniciales y ordenarlas alfabéticamente.
 */

let nombres = ['Juan Martínez', 'Pepe Mochón', 'Jose García', 'Paqui Gonzalez'];

// Buscamos los que empiecen por J
let contiene = [];
let iniciales = [];
let inicial = '';

nombres.forEach(nombre => {
    if (nombre.search('J')>=0){
        contiene.push(nombre);
        
        // Buscamos las iniciales en los que empiecen por J
        for (let i = 0; i < nombre.length; i++)
            if (nombre[i] === nombre[i].toUpperCase() && nombre[i] != ' ')
                inicial += nombre[i];
    }
    
    // Los guardamos en otro array
    if (inicial != '')
        iniciales.push(inicial);
    inicial = '';
});

// Ordenamos alfabéticamente
iniciales.sort();

document.write(contiene);

document.write('<br>');

document.write(iniciales);