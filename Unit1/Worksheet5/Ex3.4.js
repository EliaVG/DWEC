/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Relación 5 - Ejercicio 3.4
 */

let n_brother = prompt('How many bothers/sisters you have?');
let num = prompt('Enter a number');

if (n_brother >= 3){
    document.write('Your number with a 15% discount is ' + (num-(num*0,15)));
}
else if(n_brother < 3 & n_brother > 0){
    document.write('Your number with a 5% discount is ' + (num-(num*0,05)));
}
else{
    document.write('You should have any brother/sister to get a discount');
}