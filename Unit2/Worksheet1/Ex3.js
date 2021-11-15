/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Unidad 2: Relación 1 - Ejercicio 3

    Utilizando setTimeout(), crear un contador de 60 segundos hacia atras
 */

/*
function alerta(){
    alert('Han pasado 60 segundos');
}

let contadorRegresivo = setTimeout(alerta, 60000);
*/

/*
setInterval(muestraSeg, 1000);
var segundos = 60;

function muestraSeg(){
    document.write(segundos--);
    document.wrie('<br>');
}
*/

setTimeout(muestraSeg, 1000);
var segundos = 60;

function muestraSeg(){
    document.write(segundos--);
    document.write('<br>');

    if (segundos >= 0){
        setTimeout(muestraSeg, 1000);
    }
}