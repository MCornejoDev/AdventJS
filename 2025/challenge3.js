// En el taller de Papá Noel hay un elfo interno que está aprendiendo a envolver regalos 🎁.

// Le han pedido al elfo que envuelva cajas usando solo texto… y lo hacen más o menos correctamente.

// Se les dan dos parámetros:

// size:el tamaño del regalo cuadrado
// symbol:el personaje que usa el elfo para hacer el borde (cuando no lo estropean 😅)
// El regalo debe cumplir estos requisitos:

// Debe ser un size x sizecuadrado .
// El interior siempre está vacío (lleno de espacios), porque el elfo “aún no sabe cómo dibujar el relleno”.
// Si size < 2, devuelve una cadena vacía: el elfo lo intentó, pero el regalo se perdió.
// El resultado final debe ser una cadena con caracteres de nueva línea \n.
// Sí, es un reto fácil… pero no queremos que despidan al becario, ¿verdad?

const g1 = drawGift(4, '*')
console.log(g1)
/*
 ****
 *  *
 *  *
 ****
 */

const g2 = drawGift(3, '#')
console.log(g2)
/*
###
# #
###
*/

const g3 = drawGift(2, '-')
console.log(g3)
/*
--
--
*/

const g4 = drawGift(1, '+')
console.log(g4)
// ""  poor intern…

/**
 * @param {number} size - The size of the gift
 * @param {string} symbol - The symbol to draw
 * @returns {string} The gift drawn
 */
function drawGift(size, symbol) {
    if (size < 2) return '';

    let giftDrawn = '';

    giftDrawn += symbol.repeat(size) + '\n';

    for (let i = 0; i < size - 2; i++) {
        giftDrawn += symbol;
        giftDrawn += ' '.repeat(size - 2);
        giftDrawn += symbol + '\n';
    }

    giftDrawn += symbol.repeat(size);

    return giftDrawn;
}
