//Author: Jean Valencia
//fecha: 2024-07-19
/*
Estimado/da estudiante resuelva los siguientes ejercicios en Javascript usando programación funcional:

*1)* Determine si el siguiente array tiene cadenas de caracteres con una longitud de 5

const cadena = ["hola", "juan", "elefante", "cantar", "teclado", "anona"];

*/
const cadena = ["hola", "juan", "elefante", "cantar", "teclado", "anona"];
const resultado = cadena.filter((elemento) => elemento.length === 5);
console.log(resultado);
