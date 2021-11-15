/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Relación 3 - Ejercicio 3
 */

function calculateSupply()
{
    let age = 23;
    const MAX_AGE = 100;
    let daily_amount = 3;
    
    var lifetime_supply = (100-23)*365*3;
    
    document.write(`You will need ${lifetime_supply} to last you until the ripe old age of ${MAX_AGE}`);
}

calculateSupply();