/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Unidad 2: Relación 3 - Ejercicio 5

    Función que elimine todos los caracteres repetidos incluidos espacios en 
    blanco
 */

function eliminaRepetidos(cad_arg){
    let cadena = '';
    
    for (let letra of cad_arg){
        if (cadena.includes(letra)){}
        else{
            cadena += letra;
        }
    }
    
    return cadena;
}

document.write(eliminaRepetidos('Hola me llamo elia vacas garcia'));