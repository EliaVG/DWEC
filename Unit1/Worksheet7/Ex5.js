/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Relación 7 - Ejercicio 5

    Write a function called sumEveryOther that takes in any amount of arguments, 
    and returns the sum of every other argument.
 */
function sumEveryOther(...myValues){
    let total = 0;
    
    //for (let value of myValues) recorre valores, no podemos hacer alternos
    // for (let i in myValues) recorre posiciones, sí podriamos hacer alternos
    for (let i = 0; i < myValues.length; i+=2){ 
        //if (i%2 == 0){
            total += myValues[i];
        //} --> si cambiamos i++ por i+=2 no hace falta este if
    }
    
    return total;
}

values = [13, 4, 7, 10, 21, 19, 7, 1, 5];
sumEveryOther(...values);
//sumEveryOther(values[0], values[1], values[2], values[3], values[4], values[5], values[6], values[7], values[8]);