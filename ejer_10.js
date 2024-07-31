// Ejercicio 10: Revertir una Cadena 
// Crea una función llamada revertirCadena que reciba una cadena de texto y 
// devuelva la cadena invertida. 
// Prueba la función revertirCadena y muestra el resultado en la consola.
// Definimos la función revertirCadena
function revertirCadena(cadena) {
    // Convertimos la cadena en un array, invertimos el array y lo unimos de nuevo en una cadena
    return cadena.split('').reverse().join('');
  }
  
  // Probamos la función con una cadena de ejemplo
  const textoOriginal = "Hola Mundo";
  const textoRevertido = revertirCadena(textoOriginal);
  
  // Mostramos el resultado en la consola
  console.log(textoOriginal)
  console.log(textoRevertido);