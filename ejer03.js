//Author: Jean Valencia
//fecha: 2024-07-19
/*
*3)* Determine si la palabra PUCESE se encuentra en el siguiente array:

const frase = [

"Bienvenidos a Esmeraldas tierra verde",

"Pontificia Universidad católica del Ecuador sede en Esmeraldas",

"Hola la PUCESE te da la bienvenida"

]

*/
const frase = [
    "Bienvenidos a Esmeraldas tierra verde",
    "Pontificia Universidad católica del Ecuador sede en Esmeraldas",
    "Hola la PUCESE te da la bienvenida"
]
const palabra = "PUCESE";
for (let i = 0; i < frase.length; i++) {
    if (frase[i].includes(palabra)) {
        console.log("La palabra se encuentra en la frase")
    } else {
        console.log("La palabra no se encuentra en la frase")
    }
}
