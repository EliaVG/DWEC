/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Relación 6 - Ejercicio 4.10
 */

document.body.style.backgroundColor = 'yellow';

document.write('<h1>PRÁCTICA BUCLE FOR</h1>');

for (let i=1; i < 7; i++){
    document.write('<h'+i+'>Cabecera h'+i+'</h'+i+'>');
    /*document.write(`<h${i}>Cabecera h${i}</h${i}>`)*/
}