/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Unidad 2: Relación 3 - Ejercicio 6

    Decir si una cadena es subcadena de otra y a partir de qué posición ocurre
 */

function estaContenida(cad_arg, sub_cad){
    let esta_contenida = false;
    let posicion = 0;
    
    for (let i = 0; i < cad_arg.length; i++){
        if (cad_arg.includes(sub_cad, i)){
            esta_contenida = true;
            posicion = i;
        }
    }
    
    // cad_arg.indexOf(sub_cad); es lo mismo
    
    return esta_contenida, posicion;
}

document.write(estaContenida('Hola mundo me llamo elia', 'elia'));