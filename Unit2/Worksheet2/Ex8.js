/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Unidad 2: Relación 2 - Ejercicio 8

    Web en la que cada vez que se accede se muestra una foto aleatoriamente
    escogida entre tres posibilidades
 */

function fotoAleatoria(){
    return Math.round(Math.random()*(3-1)+1);
}

let foto = fotoAleatoria();

switch (foto){
    case 1:
        document.write('<img src="img1.png"></img>');
        break;
    case 2:
        document.write('<img src="img2.png"></img>');
        break;
    case 3:
        document.write('<img src="img3.png"></img>');
        break;
}