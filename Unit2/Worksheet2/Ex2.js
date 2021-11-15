/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Unidad 2: Relación 2 - Ejercicio 2

    Pedir al usuario un número y calcular su seno, coseno y tangente
 */

let angulo = prompt('Introduzca un ángulo');

document.write("Seno de " + angulo + " es " + Math.sin(angulo) + "<br>");
document.write("Coseno de " + angulo + " es " + Math.cos(angulo) + "<br>");
document.write("Tangente de " + angulo + " es " + Math.tan(angulo));