/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Unidad 3: Relación 1 - Ejercicio 1

    Define una función que dado 4 valores devuelva el mayor de ellos.
 */

function mayor(v1, v2, v3, v4){
    let valores = [v1, v2, v3, v4];
    
    let mayor = 0;
    
    for (let valor of valores){
        if (valor > mayor){
            mayor = valor;
        }
    }
    
    return mayor;
}

let v1 = parseInt(prompt('Introduzca primer valor: '));
let v2 = parseInt(prompt('Introduzca segundo valor: '));
let v3 = parseInt(prompt('Introduzca tercer valor: '));
let v4 = parseInt(prompt('Introduzca cuarto valor: '));

document.write(mayor(v1, v2, v3, v4));