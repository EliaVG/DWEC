/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Unidad 2: Relación 3 - Ejercicio 4

    Formar una cadena con todas las consonantes al principio, las vocales al 
    final y sin espacios en blanco a partir de una cadena pasada como argumento
 */

function cadenaConsonantesVocales(cad_arg){
    let cadena = '';
    let vocales = ['a', 'e', 'i', 'o', 'u'];
    
    for (let letra of cad_arg){
        if (vocales.includes(letra)){
            cadena = cadena + letra;
        }
        else{
            cadena = letra + cadena;
        }
    }
    
    return cadena;
}

document.write(cadenaConsonantesVocales('hola que tal'));