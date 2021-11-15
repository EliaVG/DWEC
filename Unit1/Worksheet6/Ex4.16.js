/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Relación 6 - Ejercicio 4.16
 */

let num = prompt('Introduzca un número a adivinar');

do{
    var adivinando = prompt('Cual es el número?');
    if (num < adivinando){
        alert('El número es menor');
    }
    else if (num == adivinando){
        alert('Adivinado!');
    }
    else{
        alert('El número es mayor');
    }
}while (adivinando != num)