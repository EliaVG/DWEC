/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Unidad 2: Relación 2 - Ejercicio 6

    Calcular potencias
 */

let num = prompt('Introduzca un número');
let pow = prompt('Introduzca la potencia');
let copia = num;

for (let i = 0; i < pow; i++){
    num *= copia;
}

document.write(copia + ' elevado a ' + pow + ' es ' + num);