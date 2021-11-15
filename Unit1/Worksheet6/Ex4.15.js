/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Relación 6 - Ejercicio 4.15
 */

let num = prompt('Introduzca un número a adivinar');

let adivinando = prompt('Cual es el número?');
while (adivinando != num){
    if (num < adivinando){
        alert('El número es menor');
    }
    else{
        alert('El número es mayor');
    }
    adivinando = prompt('Cual es el número?');
}
