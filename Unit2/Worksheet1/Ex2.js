/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Unidad 2: Relación 1 - Ejercicio 2
 */

let fechaHoy = new Date();

// Nuevo objeto con 85 días más que la fecha actual
let fecha85 = new Date();
fecha85 = fechaHoy + 85*24*60*60*1000;
document.write(fecha85 + '<br>');

// Nuevo objeto con 187 días menos que la fecha actual
let fecha187 = fechaHoy - 187*24*60*60*1000;
document.write(fecha187 + '<br>');

// Sumamos dos años más que fecha85
fecha85 += 2*365*24*60*60*1000;
document.write(fecha85 + '<br>');

// Restamos 24 horas a la variable fecha187
fecha187 -= 24*60*60*1000;
document.write(fecha187 + '<br>');

// Nuevo objeto fechaResto con la diferencia entre fecha85 y fecha 187
let fechaResto = fecha85- fecha187;
document.write(fechaResto);