/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Unidad 2: Relación 3 - Ejercicio 3

    Realizar una función que permita localizar todas las apariciones de una 
    subcadena en una cadena
 */

function cadenaEnCadena(cad_arg, sub_cad){
    let apariciones = 0;
    
    for (let palabra of cad_arg){
        if (palabra == sub_cad){
            apariciones++;
        }
    }
    
    return apariciones;
}

document.write(cadenaEnCadena('Una mesa una silla una llave', 'una'));