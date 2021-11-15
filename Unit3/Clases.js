/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class Alumno{
    constructor(nombre, apellidos, curso){  // Es obligatorio
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.curso = curso;
    }
    
    imprimeDatos(){
        document.write(`El alumno: ${this.nombre} ${this.apellidos} está en ${this.curso}º`);
    }
    despertar(segundos){
        setTimeout( ()=>{
                            document.write(`Acaba de despertarse ${this.nombre}<br>`);
                        }, segundos*1000);
    }
}

class AlumnoCiclo extends Alumno{
    constructor(nom, ape, cur, nivelFriquismo){
        super(nom, ape, cur);
        this.frikometro = nivelFriquismo;
    }
    
    getInfor(){
        super.imprimeDatos();
        document.write(` y su nivel de friquismo es ${this.frikometro}%`);
    }
}

let alumno1 = new Alumno('Carlos','Vacas García', 5);
alumno1.imprimeDatos();

document.write('<br>');

let alumno2 = new Alumno('Pablo', 'Muñoz', 2);
alumno2.imprimeDatos();
alumno2.despertar(5);

document.write('<br>');

alumno3 = new AlumnoCiclo('Jose Antonio', 'Duarte', 3, 99);
alumno3.getInfor();
alumno3.despertar(5);