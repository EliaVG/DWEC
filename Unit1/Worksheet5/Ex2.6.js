/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Relación 5 - Ejercicio 2.6
 */

let age = prompt('Enter your age');
let city = prompt('Enter your city');

if ((age >= 18 & age <= 30) & city == 'Madrid'){
    document.write('Hey! You can access to your businessman entrepreneur card :)');
}
else{
    document.write('Sorry, there is not any card for you yet :(');
}