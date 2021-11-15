/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Unidad 3: Relación 1 - Ejercicio 2

    Simular con una función el lanzamiento de un dado de 6 caras.
 */

function tiraDado(){
    let dado = Math.round(Math.random()*(6-1)+1);
    
    return dado;
}

document.write('Ha salido: ' + tiraDado());