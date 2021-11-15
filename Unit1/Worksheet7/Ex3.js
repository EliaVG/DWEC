/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Relación 7 - Ejercicio 3

    Write a function called countTheArgs that can take any number of arguments, 
    and returns the number of arguments that are passed in.
 */

function countTheArgs(...myArray){
    return(myArray.length);
}

anArray = [1, 2, 3, 4];
countTheArgs(...anArray);