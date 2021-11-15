/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Relación 5 - Ejercicio 3.1
 */

let name = prompt('Enter your name');
let surnames = prompt('Enter your surnames');

if (name == 'Ricardo' | name == 'ricardo'){
    alert(name + ' ' + surnames);
}
else{
    document.write(name + ' ' + surnames);
}