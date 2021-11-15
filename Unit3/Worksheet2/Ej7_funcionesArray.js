/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Unidad 3: Relación 2 - Ejercicio 7

    Realizar las siguientes operaciones sobre array:
        - Poner todos sus elementos a 0
        - Añadir 1 a cada uno de los elementos
        - Mostrar valores separados por espacios
 */

let miArray = [9, 3, 2, 5 ,11, 4, 8, 21, 6, 45];

document.write('miArray: ' + miArray + '<br><br>');


// Ponemos todos sus elementos a 0
miArray.forEach((num, indice) => miArray[indice] = 0); 
// Si uso num=0 no lo modifica en su posición del array

document.write('Todo a 0: ' + miArray);


// Añadir 1 a cada uno de sus elementos
miArray = [9, 3, 2, 5 ,11, 4, 8, 21, 6, 45];

miArray.forEach((num, posicion) => miArray[posicion] = num+1);


document.write('<br><br>');


// Mostrar valores separados por espacios
document.write('+1 con espacio: ');
miArray.forEach((num) => document.write(num + ' '));