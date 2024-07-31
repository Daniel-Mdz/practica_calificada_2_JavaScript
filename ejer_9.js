// Ejercicio 9: Multiplicar Elementos de un Array 
// Crea una función llamada multiplicarArray que reciba un array de números y un 
// número, y devuelva un nuevo array con cada elemento multiplicado por el 
// número. 
// Prueba la función multiplicarArray y muestra el resultado en la consola.
let numeros=[2,5,6,7,8,4,3,1];

function multiplicarArray(array,numero){
    let resultado=[]
    for(let i=0;i<array.length;i++){
        resultado.push(array[i]+'*'+numero+'='+ array[i]*numero);
    }
    return resultado;
}
let resultado=multiplicarArray(numeros,4);
console.log(resultado)