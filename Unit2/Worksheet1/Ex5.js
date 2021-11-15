/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Unidad 2: Relación 1 - Ejercicio 5

    Usando el objeto Date con sus métodos getHours, getMintes y getSeconds y con
    el método setTimeout crea un reloj que actualice cada segundo
 */

function imprimeHora(){
    let horaActual = new Date();
    let horas = horaActual.getHours();
    let minutos = horaActual.getMinutes();
    let segundos = horaActual.getSeconds();
    
    // No sigue escribiendo, va refrescando el texto
    document.body.innerHTML = horas + ' : ' + minutos + ' : ' + segundos + '<br>';
    //document.write(horas + ' : ' + minutos + ' : ' + segundos + '<br>');
    
    setTimeout(imprimeHora, (1000));
}

setTimeout(imprimeHora, (1000));
