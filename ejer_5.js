// Ejercicio 5: Promedio de Números 
// Crea un array llamado numeros que contenga al menos 10 números. 
// Crea una función llamada calcularPromedio que reciba un array de números y 
// devuelva el promedio de esos números. 
// Llama a la función calcularPromedio con el array numeros y muestra el 
// resultado en la consola.
let numeros =[24,56,34,11,2,1,7,89,3,89];
function calcularPromedio(array){
    let promNum=0;
    let suma=0;
    for(let i=0;i<array.length;i++){
        suma+=array[i];
    }
    promNum=suma/(array.length);
    return promNum;
    
}
let promNum=calcularPromedio(numeros);
console.log("----------------------------------------------------");
console.log("----------------- Prom of numbers ------------------");
console.log("----------------------------------------------------");
console.log("El promdio de la cadena",numeros," \nes: ",promNum);
console.log("----------------------------------------------------");