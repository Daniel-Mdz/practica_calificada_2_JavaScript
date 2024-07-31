// Ejercicio 7: Filtrar Elementos 
// Crea un array llamado palabras que contenga varias palabras. 
// Crea una función llamada filtrarPalabras que reciba un array y un número, y 
// devuelva un nuevo array con las palabras que tengan más letras que el número 
// especificado. 
// Prueba la función filtrarPalabras y muestra el resultado en la consola.
// 1. Definir el array de palabras
let palabras = ["gato", "perro", "elefante", "ratón", "jirafa"];

// 2. Crear una función que filtre palabras por longitud
function filtrarPalabras(array, numero) {
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > numero) {
            resultado.push(array[i]);
        }
    }
    return resultado;
}

// 3. Probar la función y mostrar el resultado en la consola
let palabrasFiltradas = filtrarPalabras(palabras, 4);
console.log(palabrasFiltradas); // Imprime las palabras que tienen más de 4 letras}