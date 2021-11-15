/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

valores = [4,8,3,10,5,6,12,40,5,9];

// Ordeno por números de forma ascendente
valores.sort((a, b)=> a-b);

// Ordeno de forma descendente
valores.sort((a, b)=> b-a);


// Ordeno objetos por su atributo
var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

// Por value
items.sort((a, b)=> a.value-b.value);

// Por name
items.sort(function(a, b) {
    if (a.name < b.name) 
        return -1;
    else if (a.name > b.name) 
        return 1;
    else
        return 0;
});