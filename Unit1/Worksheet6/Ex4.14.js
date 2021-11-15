/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Relación 6 - Ejercicio 4.14
 */

let num_colum = prompt('Introduzca número de columnas');
let alto = prompt('Introduzca alto');
let ancho = prompt('Introduzca ancho');

document.write("<table border =  '0' cellspacing = '2' bgcolor = 'black'");
document.write("<tr height = '" + alto + "'>");
let i = 0;
while (i < num_colum){
    if (i%2 != 0){
        document.write("<td bgcolor = 'black' width = '" + ancho + "'>&nbsp;</td>");
        i++;
    }
    else{
        document.write("<td bgcolor = 'white' width = '" + ancho + "'>&nbsp;</td>");
        i++
    }
}
document.write('</tr>');
document.write('</table>');