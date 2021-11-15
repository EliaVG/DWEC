/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Unidad 3: Relación 1 - Ejercicio 6

    Crea una función para calcular potencias de modo recursivo.
 */

function potenciaRecursiva(base, exponente){
    if (exponente == 0){
        return 1;
    }
    else{
        return base*potenciaRecursiva(base, (exponente-1));
    }
}

let base = 3;
let exponente = 3;

document.write(base + ' elevado a ' + exponente + ' es: ' + potenciaRecursiva(base, exponente));