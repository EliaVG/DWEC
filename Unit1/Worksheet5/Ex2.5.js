/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Relación 5 - Ejercicio 2.5
 */

let name = prompt('Enter your name');

if (name == 'Ana' | name == 'Clara'){
    document.write('<h3>Welcome lady!</h3>');
}
else if (name == 'Pablo' | name == 'Eduardo'){
    document.write('<h3>Welcome sir!</h3>');
}
else{
    document.write('Sorry, we do not know you');
}