/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Unidad 3: Relación 2 - Ejercicio 8

    Sumar el valor de dos dados 36000 veces contando las apariciones de cada 
    combinación
 */

function tiraDado(){
    let dado = Math.round(Math.random()*(6-1)+1);
    
    return dado;
}

let apariciones = [0,0,0,0,0,0,0,0,0,0,0,0,0];

for (let i = 0; i <= 36000; i++){
    let suma = tiraDado()+tiraDado();
    apariciones[suma]++;
}

document.write('Apariciones: ');
for (let i = 2; i < 13; i++){
    document.write(i + ': ' + apariciones[i] + ', ');
}