/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Relación 5 - Ejercicio 4.3
 */

let num1 = prompt('Enter first number');
let num2 = prompt('Enter second number');
let op = prompt('Which opperation would you like to do? (+ - * /)');

switch (op){
    case '+':
        document.write(num1 + ' + ' + num2 + ' = ' + (parseInt(num1)+parseInt(num2)));
        break;
    case '-':
        document.write(num1 + ' - ' + num2 + ' = ' + (num1-num2));
        break;
    case '*':
        document.write(num1 + ' * ' + num2 + ' = ' + (num1*num2));
        break;
    case '/':
        if (num2 == 0){
            document.write('Error: Zero Division');
        }
        else{
            document.write(num1 + ' / ' + num2 + ' = ' + (num1/num2));
        }
        break;
    default:
        document.write('Try again');
}