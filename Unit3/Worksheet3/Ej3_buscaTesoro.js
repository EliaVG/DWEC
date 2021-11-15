/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Unidad 3: Relación 3 - Ejercicio 3

    Búsqueda del tesoro:
                  +-------------------------+
                  ¦ 34 ¦ 21 ¦ 32 ¦ 41 ¦ 25  ¦
                  +----+----+----+----+-----¦
                  ¦ 14 ¦ 42 ¦ 43 ¦ 14 ¦ 31  ¦
                  +----+----+----+----+-----¦
                  ¦ 54 ¦ 45 ¦ 52 ¦ 42 ¦ 23  ¦
                  +----+----+----+----+-----¦
                  ¦ 33 ¦ 15 ¦ 51 ¦ 31 ¦ 35  ¦
                  +----+----+----+----+-----¦
                  ¦ 21 ¦ 52 ¦ 33 ¦ 13 ¦ 23  ¦
                  +-------------------------+

 */



let matriz = [
    [34, 21, 32, 41, 25], 
    [14, 42, 43, 14, 31], 
    [54, 45, 52, 42, 23], 
    [33, 15, 51, 31, 35],
    [21, 52, 33, 13, 23]
];

let numStr = matriz[0][0].toString();
let fila = parseInt(numStr[0]);
let columna = parseInt(numStr[1]);

function buscaTesoro(fila, columna){
    numStr = matriz[fila][columna].toString();
    if (fila == numStr[0] && columna == numStr[1]){
        return ('Has encontrado el tesoro en la posicion: ' + parseInt(numStr));
    }
    else{
        numStr = matriz[fila][columna].toString();
        fila = parseInt(numStr[0]);
        columna = parseInt(numStr[1]);
        document.write('Estoy en la posición: ' + fila + columna);
        buscaTesoro(fila, columna);
    } 
}

buscaTesoro(fila, columna);