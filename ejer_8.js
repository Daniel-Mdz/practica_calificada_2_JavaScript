// Ejercicio 8: Contar Caracteres 
// Crea una función llamada contarCaracteres que reciba una cadena de texto y 
// un carácter, y devuelva el número de veces que el carácter aparece en la 
// cadena. 
// Prueba la función contarCaracteres y muestra el resultado en la consola.

function count(cadena, caracter) {
    let contador = 0;
    for (let i=0; i<cadena.length; i++) {
        if (cadena[i] === caracter) { // verficia si elcarcater es igual
            contador++;
        }
    }
    return contador;
}

let array = ["Taller de JavaScript"]