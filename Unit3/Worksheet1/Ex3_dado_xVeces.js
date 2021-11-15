/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Unidad 3: Relación 1 - Ejercicio 3

    Simular 6000 tiradas y ver el número de apariciones de cada cara del dado.
 */

function tiraDadoN(n_veces){
    let tiradas = [0, 0, 0, 0, 0, 0];
    let dado;
    
    for (let i = 0; i < n_veces; i++){
        dado = Math.round(Math.random()*(6-1)+1);
        switch (dado){
            case 1:
                tiradas[0] += 1;
                break;
            case 2:
                tiradas[1] += 1;
                break;
            case 3:
                tiradas[2] += 1;
                break;
            case 4:
                tiradas[3] += 1;
                break;
            case 5:
                tiradas[4] += 1;
                break;
            case 6:
                tiradas[5] += 1;
                break;
        }
    }
    
    
    return tiradas;
}

let mi_tirada = tiraDadoN(6000);

let cara = 1;
for (let i of mi_tirada){
    document.write(i + ' veces del ' + cara + '<br>');
    cara++;
}