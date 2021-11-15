/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Relación 5 - Ejercicio 2.4
 */

let num = prompt('Enter a number');

if (100 < num){
    document.write('Your number with a 15% discount is ' + (num-(num*0.15)));
}
else{
    document.write('You are not getting any discount, sorry :(');
}