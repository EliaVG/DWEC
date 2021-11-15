/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Relación 5 - Ejercicio 4.2
 */

let num = prompt('Enter a number');

switch (true){
    case ((num%2 == 0 && num%3 == 0) && num%5 == 0):
        document.write(num + ' is even, multiple of 3 and multiple of 5');
        break;
    case (num%2 == 0 && num%3 == 0):
        document.write(num + ' is even and a multiple of 3');
        break;
    case (num%2 == 0 && num%5 == 0):
        document.write(num + ' is even and multiple of 5');
        break;
    case (num%3 == 0 && num%5 == 0):
        document.write(num + ' is a multiple 3 and 5');
        break;
    case (num%2 == 0):
        document.write(num + ' is even');
        break;
    case (num%3 == 0):
        document.write(num + ' is a multiple of 3');
        break;
    case (num%5 == 0):
        document.write(num + ' is a multiple of 5');
        break;
    default:
        document.write('Your number is not even, multiple of 3 and multiple of 5');
}