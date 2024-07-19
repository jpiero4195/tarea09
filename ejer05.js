//Author: Jean Valencia
//fecha: 2024-07-19
/*
*5)* Devuelve todos los elementos del array de objetos, pero el sueldo debe multiplicarlo por 2.

const datos=[

{ empleado: "José de la Cuadra", departamento: "Financiero", sueldo: 850},

{ empleado: "Verónica Andrade", departamento: "Sistemas", sueldo: 720},

{ empleado: "Juana Peña", departamento: "Pro-rectorado", sueldo: 755},

{ empleado: "Karla Macías", departamento: "Financiero", sueldo: 990},

{ empleado: "Pedro Flores", departamento: "Sistemas", sueldo: 1000},

];

*/
const datos=[
    { empleado:"José de la Cuadra",departamento:"Financiero",sueldo:850},
    { empleado:"Verónica Andrade",departamento:"Sistemas",sueldo:720},
    { empleado:"Juana Peña",departamento:"Pro-rectorado",sueldo:755},
    { empleado:"Karla Macías",departamento:"Financiero",sueldo:990},
    { empleado:"Pedro Flores",departamento:"Sistemas",sueldo:1000},
];
function dobleSueldo(array) {
    let array2 = array.map((elemento) => {
        return elemento.sueldo * 2;
    });
    return array2;
}
console.log(dobleSueldo(datos));
