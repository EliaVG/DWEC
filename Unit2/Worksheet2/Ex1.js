/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Unidad 2: Relación 2 - Ejercicio 1

    Crea una página en la que se muestre un número aleatorio entre 0 y 1, entre
    100 y 200 y entre dos números introducidos por teclado
 */

function aleatorio_0_1(){
    return Math.round(Math.random());
}

function aleatorio_100_200(){
    return Math.round(Math.random()*(200-100)+100);
}

function aleatorioMinMax(min, max){
    return Math.round(Math.random()*((max)-min)+min);
}

document.write(aleatorio_0_1() + "<br>");
document.write(aleatorio_100_200() + "<br>");

let min = parseInt(prompt('Introduzca un mínimo'));
let max = parseInt(prompt('Introduzca un máximo'));
document.write(aleatorioMinMax(min, max));