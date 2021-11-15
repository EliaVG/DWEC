/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Relación 5 - Ejercicio 3.5
 */

let exam1 = prompt('Enter your first exam mark');
let exam2 = prompt('Enter your second exam mark');

let pry1 = prompt('Enter your first project mark');
let pry2 = prompt('Enter your second poject mark');

if (exam1 >= 4.5 && exam2 >= 4.5){
    if (pry1 >= 4.5 && pry2 >= 4.5){
        var med_exam = (parseFloat(exam1) + parseFloat(exam2)) / 2;
        var med_pry = (parseFloat(pry1) + parseFloat(pry2)) / 2;
        var final_mark = (med_exam * 0.75) + (med_pry * 0.25);
        document.write('Your final mark is ' + final_mark);
    }
}
else{
    document.write('You cannot pass this subject');
}