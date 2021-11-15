/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Relación 5 - Ejercicio 2.3
 */

let age = prompt('Enter your age');
let city = prompt('Enter your city');

if (age > 25){
    if (city == 'Madrid' | city == 'madrid'){
        document.write('<h1>Congratulations!</h1>');
    }
    else{
        document.write('At least your not from Madrid');
    }
}
else{
    document.write('Maybe next year, keep trying');
}