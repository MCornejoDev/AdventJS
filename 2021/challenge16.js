// Lara Eloft ha encontrado unos restos élficos en una cueva, 
// cerca del Círculo Polar Ártico, a 8 km al norte de Rovaniemi.

// Ahora se encuentra descifrando unas misteriosas cartas que 
// contiene información sobre unos números que le puede hacer llegar al próximo objetivo.

// Lara tiene un documento que contiene una serie de números que pueden ser usados para descifrarlos:

// Símbolo       Valor
//   .             1
//   ,             5
//   :             10
//   ;             50
//   !             100
// Lara, además, ha notado una cosa. 
// Los símbolos se restan si están inmediatamente a la izquierda de otro mayor. 😱

// Tenemos que crear una función que nos pasa una cadena de texto con símbolos y 
// tenemos que transformarlo al número correcto. ¡Ojo! Si encuentras un símbolo que no entendemos, 
// mejor que devolvamos un NaN:

console.log(decodeNumbers('...')); // 3
console.log(decodeNumbers('.,')); // 4 (5 - 1)
console.log(decodeNumbers(',.')); // 6 (5 + 1)
console.log(decodeNumbers(',...'));// 8 (5 + 3)
console.log(decodeNumbers('.........!')); // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
console.log(decodeNumbers('.;')); // 49 (50 - 1)
console.log(decodeNumbers('..,')); // 5 (-1 + 1 + 5)
console.log(decodeNumbers('..,!'));// 95 (1 - 1 - 5 + 100)
console.log(decodeNumbers('.;!')); // 49 (-1 -50 + 100)
console.log(decodeNumbers('!!!')); // 300
console.log(decodeNumbers(';!')); // 50
console.log(decodeNumbers(';.W')); // NaN

function decodeNumbers(symbols) {
    let symbolsMap = {
        '.': 1,
        ',': 5,
        ':': 10,
        ';': 50,
        '!': 100
    }

    let symbolsSum = 0
    for (let i = 0; i < symbols.length; i++) {
        let symbol = symbolsMap[symbols[i]];

        if (!symbol) {
            return NaN;
        }

        if (symbolsMap[symbols[i + 1]] > symbol) {
            symbolsSum -= symbol;
        }
        else {
            symbolsSum += symbol
        }
    }

    return symbolsSum;
}