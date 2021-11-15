/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Unidad 2: Relación 1 - Ejercicio 1

    Crea un objeto Date y muestra en una linea independiente el año, mes, día,
    hora, mitunos y segundos
 */

// Creo un nuevo objeto Date
let fecha = new Date();

// Imprimo por pantalla cada atributo
document.write('Año actual: ' + fecha.getFullYear() + '<br>');
document.write('Mes actual: ' + fecha.getMonth() + '<br>');
document.write('Día actual: ' + fecha.getDate() + '<br>');
document.write('Hora actual: ' + fecha.getHours() + '<br>');
document.write('Minutos actuales: ' + fecha.getMinutes() + '<br>');
document.write('Segundos actuales: ' + fecha.getSeconds());