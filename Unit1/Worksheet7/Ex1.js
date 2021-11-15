/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Relación 7 - Ejercicio 1

    Write a function that can take in any number of arguments, and returns the 
    sum of all of the arguments.
 */

function sumAll(...myArray){
    let total = 0;
    
    for (let element of myArray){
        total += element;
    }
    
    return(total);
}

anArray = [1, 2, 3, 4];
sumAll(...anArray);