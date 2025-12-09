// ¡Es hora de decorar el árbol de Navidad 🎄!Escribe una función que reciba:

// height → la altura del árbol(número de filas).
// ornament → el carácter del adorno(por ejemplo, "o" o "@").
// frequency → cada cuántas posiciones de asterisco aparece el adorno.
// El árbol se dibuja con asteriscos *, pero cada frequency posiciones, 
// el asterisco se reemplaza por el adorno.

// El conteo de posiciones empieza en 1, desde la copa hasta la base, de izquierda a derecha.
// Si frequency es 2, los adornos aparecen en las posiciones 2, 4, 6, etc.

// El árbol debe estar centrado y tener un tronco # de una línea al final.


drawTree(5, 'o', 2)
//     *
//    o*o
//   *o*o*
//  o*o*o*o
// *o*o*o*o*
//     #

drawTree(3, '@', 3)
//   *
//  *@*
// *@**@
//   #

drawTree(4, '+', 1)
//    +
//   +++
//  +++++
// +++++++
//    #

/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Character to use as ornament
 * @param {number} frequency - How often ornaments appear
 * @returns {string} The decorated tree
 */
function drawTree(height, ornament, frequency) {
    if (height <= 0) {
        throw new Error('Height must be a positive integer.')
    }

    let treeLines = []
    let globalPos = 1

    for (let i = 1; i <= height; i++) {
        const spaces = ' '.repeat(height - i)
        const stars = '*'.repeat(i) + '*'.repeat(i - 1)
        let chars = stars.split('')

        for (let j = 0; j < chars.length; j++) {
            if (chars[j] === '*' && globalPos % frequency === 0) {
                chars[j] = ornament
            }
            globalPos++
        }

        const line = spaces + chars.join('')
        treeLines.push(line)
    }

    const trunkSpaces = ' '.repeat(height - 1)
    const trunkLine = trunkSpaces + '#'
    treeLines.push(trunkLine)

    return treeLines.join('\n')
}