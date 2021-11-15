/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

let n_imagen = 2;

function boton(){
    document.getElementById("imagen").src=n_imagen+'.jpeg';
    if (n_imagen == 5)
        n_imagen = 1;
    else 
        n_imagen++;
}