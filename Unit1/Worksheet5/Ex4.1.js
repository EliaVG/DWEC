/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Relación 5 - Ejercicio 4.1
 */

let month = prompt('Enter a month');

switch (month) {
    case 'January':
        document.write(month + ' has 31 days');
        break;
    case 'February':
        document.write(month + ' has 28/19 days');
        break;
    case 'March':
        document.write(month + ' has 31 days');
        break;
    case 'April':
        document.write(month + ' has 30 days');
        break;
    case 'May':
        document.write(month + ' has 31 days');
        break;
    case 'June':
        document.write(month + ' has 30 days');
        break;
    case 'July':
        document.write(month + ' has 31 days');
        break;
    case 'August':
        document.write(month + ' has 31 days');
        break;
    case 'September':
        document.write(month + ' has 30 days');
        break;
    case 'October':
        document.write(month + ' has 31 days');
        break;
    case 'November':
        document.write(month + ' has 30 days');
        break;
    case 'December':
        document.write(month + ' has 31 days');
        break;
    default:
        document.write('Try again');
}