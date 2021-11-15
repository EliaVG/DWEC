/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Unidad 2: Relación 2 - Ejercicio 5

    Resolver ecuaciones de segundo grado con coeficientes introducidos por 
    teclado
 */

let a = prompt('Introduzca primer coeficiente');
let b = prompt('Introduzca segundo coeficiente');
let c = prompt('Introduzca término independiente');

parseInt(a);
parseInt(b);
parseInt(c);

let sol1 = -b+Math.sqrt((b*b)-(4*a*c))/(2*a);
let sol2 = -b-Math.sqrt((b*b)-(4*a*c))/(2*a);

document.write(sol1 + ' - ' + sol2);