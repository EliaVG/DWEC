/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Unidad 3: Relación 2 - Ejercicio 5

    Crear un array de 100 nums aleatorios entre 1 y 1000 y ordenarlos segun 
    pares e impares
 */

// Creo vector de nums aleatorios
let nums = [];

for (let i = 0; i < 100; i++){
    let num = Math.round(Math.random()*(1000-1)+1);
    nums.push(num);
}

document.write('Nums: ' + nums);


document.write('<br>');


// Ordeno por par - impar
let parImpar = [];

for (num of nums){
    if (num%2 == 0){
        parImpar.unshift(num);
    }
    else{
        parImpar.push(num);
    }
}

document.write('parImpar: ' + parImpar);