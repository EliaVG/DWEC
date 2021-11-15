/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Relación 6 - Ejercicio 4.18
 */

let num_colum = prompt('Introduzca número de columnas');
let num_filas = prompt('Introduzca número de filas');
let alto = prompt('Introduzca alto');
let ancho = prompt('Introduzca ancho');

document.write("<table border =  '0' cellspacing = '2' bgcolor = 'black'>");
for (let j = 0; j < num_filas; j++){
    document.write("<tr bgcolor = 'white' height = '" + alto + "'>");
    for (let i = 0; i < num_colum; i++){
        document.write("<td width = '" + ancho + "'>&nbsp;</td>");
    }
    document.write('</tr>');
}
document.write('</table>');