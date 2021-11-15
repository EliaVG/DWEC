/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Relación 5 - Ejercicio 3.3
 */

let age = prompt('Enter your age');

if (age <= 5){
    document.write('You should be in kindergarten');
}
else if (age >= 6 & age <= 11){
    document.write('You should be in primary');
}
else if (age >= 12 & age <= 16){
    document.write('You sould be in secondary');
}
else if (age >= 17 & age <= 21){
    document.write('You should be in bachelor/education cycle');
}
else{
    document.write('You should be at the university');
}