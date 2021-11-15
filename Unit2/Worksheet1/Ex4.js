/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Unidad 2: Relación 1 - Ejercicio 4

    Con el objeto location y el ejercicio anterior haz una cuenta regresiva de 
    60 segundos y al finalizar que se cargue la página inicial de Google
 */

function cargarGoogle(){
    location.href = 'https://www.google.com';
}

let refrescarPagina = setTimeout(cargarGoogle, 60000);