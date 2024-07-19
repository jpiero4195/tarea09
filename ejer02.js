//Author: Jean Valencia
//fecha: 2024-07-19
/*
*2)* Chequee si al menos uno de los elementos de la matriz, es true.

const matriz = [

[false, false, false],

[false, false, false],

[false, false, true],

]

*/
const matriz = [
    [false, false, false],
    [false, false, false],
    [false, false, true],
    ];
    let contador = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] === true) {
                contador = contador + 1;
            }
        }
        if (contador > 0) {
            console.log("Hay al menos un elemento true en la matriz");
        } else {
            console.log("No hay elementos true en la matriz");
        }
    }
