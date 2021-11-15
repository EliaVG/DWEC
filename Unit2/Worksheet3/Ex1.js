/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Unidad 2: Relación 3 - Ejercicio 1
 */

// Devuelve una cadena invertida pasada como  argumento
function invierteCadena(cad_arg){
    let cad_invertida = '';
    
    for (let i = 0; i < cad_arg.length; i++){
        cad_invertida = cad_arg[i] + cad_invertida;
    }
    
    return cad_invertida;
}

// Invierte las palabras de una cadena pasada como argumento
function inviertePalabras(cad_arg){
    cadena_inv = '';
    cad_aux = cad_arg.split(' ');
    
    for (let palabra of cad_aux){
        cadena_inv = palabra + ' ' + cadena_inv;
    }
    
    return cadena_inv;
}

// Devuelve la longitud de la palabra más larga en una cadena
function encuentraPalabraMasLarga(cad_arg){
    mayor_longitud = 0;
    lista_palabras = cad_arg.split(' ');
    
    for (let palabra of lista_palabras){
        if (palabra.length > mayor_longitud){
            mayor_longitud = palabra.length;
        }
    }
    
    return mayor_longitud;
}

// Buscar todas las palabras de longitud mayor a la pasada como argumento
function filtraPalabrasMasLargas(cad_arg, longitud){
    palabras_mas_largas = 0;
    lista_palabras = cad_arg.split(' ');
    
    for (let palabra of lista_palabras){
        if (palabra.length > longitud){
            palabras_mas_largas++;
        }
    }
    
    return palabras_mas_largas;
}

// Devuelve una cadena con sólo la primera letra en mayúscula
function cadenaBienFormada(cad_arg){
    cadena = cad_arg.toLowerCase();
    cadena[0].toUpperCase();
    
    return cadena;
}

document.write(invierteCadena('hola'));
document.write('<br>');
document.write(inviertePalabras('Hola mundo me llamo elia'));
document.write('<br>');
document.write(encuentraPalabraMasLarga('hola murciélago que fresco te ves'));
document.write('<br>');
document.write(filtraPalabrasMasLargas('hola murciélago que fresco te ves', 4));
document.write('<br>');
document.write(cadenaBienFormada('hoLa Me llaMO eLIa'));