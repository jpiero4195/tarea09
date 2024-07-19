//Author: Jean Valencia
//fecha: 2024-07-19
/*
*4)* Determine si todos los elementos del array son números pares:

const numeros=[2, 4, 22, 40, 10, 8, 6, 18];
*/
const numeros=[2,4,22,40,10,8,6,18];
function esPar(n) {
    return n % 2 == 0;
}
function todosPares(array) {
    return array.every(esPar);
}
console.log(todosPares(numeros));
