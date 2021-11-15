/* 
 * Primer archivo Javascript para DWEC
 */

/*if (true) 
{
    let mivariable = 3; /* Ámbito local, sólo existe en esta llave
}*/
if (true)
{
    var otravariable = 5; /* Ámbito global */
}
const terceravariable = 8;
otravarmas = 25;

/* alert('Desde el fichero'); */

document.write('<h1>otravariable vale: ' + otravariable + '</h1>');

/*console.log(mivariable); <-- No la reconoce al estar declarada como let */
console.log(otravariable);
console.warn('Esto es un aviso');