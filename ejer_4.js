// Ejercicio 4: Concatenación de Arrays 
// Crea dos arrays, array1 y array2, cada uno con 5 números diferentes. 
// Crea una función llamada concatenarArrays que reciba dos arrays como 
// argumentos y devuelva un nuevo array que sea la concatenación de los dos. 
// Llama a la función concatenarArrays con array1 y array2 y muestra el resultado 
// en la consola.

<<<<<<< HEAD
let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];

function concatenarArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

let concatenado = concatenarArrays(array1, array2);

console.log("Concatenado:", concatenado);
=======
const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];

function concatenarArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

const resultado = concatenarArrays(array1, array2);

console.log(resultado);
>>>>>>> 72d3928c7b283084d8eebab10ac937c9c45dd879
