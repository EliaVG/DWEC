/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Unidad 2: Relación 3 - Ejercicio 8

    Función que cuente las palabras en una cadena
 */

function contarPalabras(cad_arg){
    let lista_palabras = cad_arg.split(' ');
    
    return lista_palabras.length;
}

document.write(contarPalabras('Hola mundo, me llamo Elia'));