/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Unidad 2: Relación 2 - Ejercicio 4

    Modificar el ejercicio anterior para que siga pidiendo valores al usuario
    hasta que este decida terminar
 */

let salir = 'n';

while (salir != 's'){
    let cateto1 = prompt('Introduzca primer cateto');
    let cateto2 = prompt('Introduzca segundo cateto');

    parseInt(cateto1);
    parseInt(cateto2);

    let hipotenusa = Math.sqrt((cateto1*cateto1) + (cateto2*cateto2));
    document.write(hipotenusa + "<br>");
    
    salir = prompt('¿Desea salir? (s/n)');
};