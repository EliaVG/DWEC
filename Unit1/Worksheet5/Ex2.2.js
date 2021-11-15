/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Relación 5 - Ejercicio 2.2
 */

let age = prompt('Enter your age');
const LEGAL_AGE = 18;

if (age < LEGAL_AGE){
    document.write('Is not on legal age');
}
else{
    document.write('Is on legal age');
}