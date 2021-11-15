/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Relación 6 - Ejercicio 4.17
 */

for (var i = 1; i < 11; i++){
    document.write('<h4>Tabla del ' + i + '</h4>');
    for (var j = 1; j < 11; j++){
        document.write(i + ' x ' + j + ' = ' + (parseInt(i)*parseInt(j)) + '<br>');
    }
}