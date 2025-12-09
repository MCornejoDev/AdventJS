// Los elfos han construido un reno 🦌 robot aspirador(@) para limpiar un 
// poco el taller de cara a las navidades.

// El reno se mueve sobre un tablero para recoger cosas del suelo(*) y 
// debe evitar obstáculos(#).

// Recibirás dos parámetros:
// board: un string que representa el tablero.
// moves: un string con los movimientos: 'L'(izquierda), 'R'(derecha), 'U'(arriba), 'D'(abajo).

// Reglas del movimiento:
// Si el reno se sale del tablero o choca contra un obstáculo(#) → devuelve 'crash'.
// Si el reno recoge algo del suelo(*) durante los movimientos → devuelve 'success'.
// Si el reno no recoge nada ni se estrella → devuelve 'fail'.
// Importante: Ten en cuenta que en el board la primera y 
// última línea están en blanco y deben descartarse.

// Ejemplo:

const board = `
.....
.*#.*
.@...
.....
`

console.log(moveReno(board, 'D'));
// ➞ 'fail' -> se mueve pero no recoge nada

console.log(moveReno(board, 'U'));
// ➞ 'success' -> recoge algo (*) justo encima

console.log(moveReno(board, 'RU'));
// ➞ 'crash' -> choca contra un obstáculo (#)

console.log(moveReno(board, 'RRRUU'));
// ➞ 'success' -> recoge algo (*)

console.log(moveReno(board, 'DD'));
// ➞ 'crash' -> se choca con la parte de abajo del tablero

console.log(moveReno(board, 'UUU'));
// ➞ 'success' -> recoge algo del suelo (*) y luego se choca por arriba

console.log(moveReno(board, 'RR'));
// ➞ 'fail' -> se mueve pero no recoge nada

/**
 * @param {string} board - Represent the board situation
 * @param {string} moves - Movement direction
 * @returns {'fail' | 'crash' | 'success'}
 */
function moveReno(board, moves) {
    const boardArray = board
        .split('\n')
        .filter(line => line.trim() !== '');

    let positionReindeer = boardArray
        .map((rowString, rowIndex) => {
            const colIndex = rowString.indexOf('@');
            return colIndex !== -1 ? { row: rowIndex, col: colIndex } : null;
        })
        .find(item => item !== null);

    const moveMap = {
        'U': { dx: -1, dy: 0 },
        'D': { dx: 1, dy: 0 },
        'L': { dx: 0, dy: -1 },
        'R': { dx: 0, dy: 1 }
    };

    for (const move of moves) {
        const { dx, dy } = moveMap[move];

        const newPos = {
            row: positionReindeer.row + dx,
            col: positionReindeer.col + dy
        };

        if (
            newPos.row < 0 ||
            newPos.row >= boardArray.length ||
            newPos.col < 0 ||
            newPos.col >= boardArray[newPos.row].length
        ) {
            return 'crash';
        }

        const cell = boardArray[newPos.row][newPos.col];

        if (cell === '#') return 'crash';
        if (cell === '*') return 'success';

        positionReindeer = newPos;
    }

    return 'fail';
}

