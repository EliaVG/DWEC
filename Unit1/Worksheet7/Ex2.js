/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Relación 7 - Ejercicio 2

    Write a function called addOnlyNums that can take in any number of arguments 
    (including numbers or strings), and returns the sum of only the numbers.
 */

function addOnlyNums(...myArray){
    let total = 0;
    
    for (let element of myArray){
        if (typeof element == 'number'){ 
            total += element;
        }
    }
    
    return(total);
}

anArray = [1, 'cat', 3, 4];
addOnlyNums(...anArray);