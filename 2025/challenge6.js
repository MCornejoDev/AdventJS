// En el taller de Santa, los elfos han encontrado una montaña de guantes mágicos totalmente desordenados. 

// Cada guante viene descrito por dos valores:
// hand: indica si es un guante izquierdo (L) o derecho (R)
// color: el color del guante (string)

// Tu tarea es ayudarles a emparejar guantes: Un par válido es un guante izquierdo y uno derecho del mismo color.

// Debes devolver una lista con los colores de todos los pares encontrados. Ten en cuenta que puede haber varios pares del mismo color.


const gloves = [
    { hand: 'L', color: 'red' },
    { hand: 'R', color: 'red' },
    { hand: 'R', color: 'green' },
    { hand: 'L', color: 'blue' },
    { hand: 'L', color: 'green' }
]

matchGloves(gloves)
// ["red", "green"]

const gloves2 = [
    { hand: 'L', color: 'gold' },
    { hand: 'R', color: 'gold' },
    { hand: 'L', color: 'gold' },
    { hand: 'L', color: 'gold' },
    { hand: 'R', color: 'gold' }
]

matchGloves(gloves2)
// ["gold", "gold"]

const gloves3 = [
    { hand: 'L', color: 'red' },
    { hand: 'R', color: 'green' },
    { hand: 'L', color: 'blue' }
]

matchGloves(gloves3)
// []


/**
 * @param {{ hand: 'L' | 'R', color: string }[]} gloves
 * @returns {string[]} Colors of matched pairs
 */
function matchGloves(gloves) {
    const counts = {};

    for (const glove of gloves) {
        const { hand, color } = glove;

        if (!counts[color]) {
            counts[color] = { L: 0, R: 0 };
        }

        counts[color][hand]++;
    }

    const result = [];

    for (const color in counts) {
        const left = counts[color].L;
        const right = counts[color].R;

        const pairs = Math.min(left, right);

        for (let i = 0; i < pairs; i++) {
            result.push(color);
        }
    }

    return result;
}
