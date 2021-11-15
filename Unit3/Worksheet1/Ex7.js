/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Unidad 3: Relación 1 - Ejercicio 7

    Crear una función para calcular el factorial de un número y muestralo con
    una tabla del 1 al 10.
 */

function factorialRecursivo(num){
    if (num == 1){
        return 1;
    }
    else{
        return num*factorialRecursivo(num-1);
    }
}

document.write('<table border="1"><tr><th>Número</th><th>Factorial</th></tr>');
for (let i = 1; i < 11; i++){
    document.write('<tr><td>'+ i + '</td><td>' + factorialRecursivo(i) + '</td></tr>');
}