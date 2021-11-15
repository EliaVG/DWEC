/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Unidad 2: Relación 3 - Ejercicio 7

    Función que indique si una cadena de texto es palíndromo o no
 */

function esPalindrome(cad_arg){
    let mensaje = 'Es palíndromo';
    
    for (let i = 0; i < cad_arg.length; i++){
        if (cad_arg[i] == cad_arg[cad_arg.length - i]){
        }
        else{
            es_palimdromo = false;
            mensaje = 'No es palíndromo';
        }
    }
    
    return es_palindromo, mensaje;
}

document.write(esPalindromo('aulua'));