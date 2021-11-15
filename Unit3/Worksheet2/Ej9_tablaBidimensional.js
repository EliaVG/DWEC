/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Unidad 3: Relación 2 - Ejercicio 8

    Modificar el ejercicio anterior de modo que muestre el resultado en forma
    de tabla.
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

document.write('<table border="1">');
document.write('<tr><th>Valor</th><th>Apariciones</th></tr>');

for (let i = 2; i < 13; i++){
    document.write('<tr><td>' + i + '</td><td>' + apariciones[i] + '</td></tr>');
}

document.write('</table>');