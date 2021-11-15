/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Unidad 2: Relación 3 - Ejercicio 2

    Definir una función que indique si una cadena esta formada sólo por 
    mayúsculas, minúsculas o una combinación de ambas
 */

function estaFormada(cad_arg){
    let mensaje = '';
    
    if (cad_arg === cad_arg.toLowerCase()){
        mensaje = 'La cadena está formada por minúsculas';
    }
    else if (cad_arg === cad_arg.toUpperCase()){
        mensaje = 'La cadena está formada por mayúsculas';
    }
    else{
        mensaje = 'La cadena es una combinación de ambas';
    }
    
    return mensaje;
}

document.write(estaFormada('HOLA'));
document.write('<br>');
document.write(estaFormada('hola'));
document.write('<br>');
document.write(estaFormada('HoLa'));