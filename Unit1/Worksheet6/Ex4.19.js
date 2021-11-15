/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Relación 6 - Ejercicio 4.19
 */

let num_celdas = 8;
let tamanio = prompt('Introduzca tamaño de celda');

document.write("<table border =  '0' cellspacing = '2' bgcolor = 'black'>");
for (let j = 0; j < num_celdas; j++){
    document.write("<tr height = '" + tamanio + "'>");
    for (let i = 0; i < num_celdas; i++){
        if ((j-i)%2 == 0){
            document.write("<td bgcolor = 'black' width = '" + tamanio + "'>&nbsp;</td>");
        }
        else{
            document.write("<td bgcolor = 'white' width = '" + tamanio + "'>&nbsp;</td>");
        }
    }
    document.write('</tr>');
}
document.write('</table>');