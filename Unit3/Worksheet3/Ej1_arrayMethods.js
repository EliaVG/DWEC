/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Unidad 3: Relación 3 - Ejercicio 1

    Resulve con métodos Array los siguientes problemas
 */

let miArrayNum = [1, 5, 3, 7, 2, 8, 6, 9];
let miArrayStr = ['Hola', 'Que tal', 'Muy bien', 'Adiós', 'Parchis'];

// Obtener el mayor valor
let mayor = Math.max(...miArrayNum);
document.write(mayor);

document.write('<br>');

// Obtener el str más largo
mayor = miArrayStr.reduce((a, b) => a.length > b.length ? a : b);
document.write(mayor);

document.write('<br>');

// Obtener los valores pares
let pares = miArrayNum.filter(num => num % 2 == 0);
document.write(pares);

document.write('<br>');

// Obtener los valores impares
let impares = miArrayNum.filter(num => !(num % 2) == 0);
document.write(impares);

document.write('<br>');

// Obtener el str que contenga 'is'
let contiene = [];
miArrayStr.forEach(elemento => {
    if (elemento.search('is')>=0) contiene.push(elemento);
});
document.write(contiene);

document.write('<br>');

// Obtener todos los números divisibles por 3
let divisibles = miArrayNum.filter(num => num % 3 == 0);
document.write(divisibles);

document.write('<br>');

// Concatenar ds arrays
let nuevoArrayNum = [11, 33, 4, 10];

let concatenado = miArrayNum.concat(nuevoArrayNum);
document.write(concatenado);

document.write('<br>');

// Ordena el nuevo array de mayor a menor
let ordenado = concatenado.sort((a, b) => a - b);
document.write(ordenado);

document.write('<br>');

// Elimina la primera palabra del array
miArrayStr.shift();
document.write(miArrayStr);

document.write('<br>');

// Inserta una nueva palabra al principio
miArrayStr.unshift('Hola de nuevo');
document.write(miArrayStr);

document.write('<br>');

// Reemplaza algún elemento
miArrayStr.splice(1, 1, 'Nuevo elemento');
document.write(miArrayStr);

document.write('<br>');