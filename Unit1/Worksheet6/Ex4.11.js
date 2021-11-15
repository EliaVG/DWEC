/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Relación 6 - Ejercicio 4.11
 */

let num_colum = prompt('Introduzca número de columnas');
let alto = prompt('Introduzca alto');
let ancho = prompt('Introduzca ancho');

document.write("<table border =  '0' cellspacing = '2' bgcolor = 'black'>");
document.write("<tr bgcolor = 'white' height = '" + alto + "'>");
for (let i = 0; i < num_colum; i++){
    document.write("<td width = '" + ancho + "'>&nbsp;</td>");
}
document.write('</tr>');
document.write('</table>');
