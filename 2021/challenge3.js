// El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

// Las cartas son una cadena de texto que incluyen regalos y paréntesis().

// Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

// ¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes[dentro de los paréntesis que hacen que no sean válidas.
// Por suerte sólo los ha dejado en medio de los paréntesis...

// Ejemplos:

console.log(isValid("bici coche (balón) bici coche peluche")); // -> ✅
console.log(isValid("(muñeca) consola bici")); // ✅
console.log(isValid("(a) (b) (c)")); // -> ✅

console.log(isValid("bici coche (balón bici coche")); // -> ❌
console.log(isValid("peluche (bici [coche) bici coche balón")); // -> ❌
console.log(isValid("(peluche {) bici")); // -> ❌
console.log(isValid("() bici")); // ❌
console.log(isValid("(()) bici")); // ❌
console.log(isValid("(a() bici (a) bici")); // ❌
console.log(isValid(")bici( casa play")); // ❌"
// Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. ¡Y acaba con la travesura del Grinch!


function isValid(letter) {

    let isValid = true;

    let posFirst = letter.indexOf('(');
    let posLast = letter.lastIndexOf(')');

    if (posFirst === -1 || posLast === -1) {
        return false;
    }

    let portion = letter.substring(posFirst + 1, posLast);

    if (portion.includes('}') || portion.includes('{') ||
        portion.includes('[') || portion.includes(']') ||
        portion.trim() === '' || portion.includes('()')
        || portion[0] == ')' || portion[0] == '(') {
        return false;
    }

    return true
}