/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Unidad 2: Relación 2 - Ejercicio 3

    Calcular la hipotenusa a partir de dos catetos introducidos por teclado
 */

let cateto1 = prompt('Introduzca primer cateto');
let cateto2 = prompt('Introduzca segundo cateto');

parseInt(cateto1);
parseInt(cateto2);

let hipotenusa = Math.sqrt((cateto1*cateto1) + (cateto2*cateto2));
document.write(hipotenusa);