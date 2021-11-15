/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Unidad 2: Relación 2 - Ejercicio 7

    Imprimir una tabla con dos columnas, una con un número ascendente y otra con
    el valor de su seno
 */

function tabla_seno(lim){
    for (num = 0; num <=lim; num++){
        seno = 0;
        seno = Math.sin(num);
        document.write(`<tr>
        <td>${num}<td>
        <td>${seno}</td>
        </tr>`);
    }
}

tabla_seno(10);