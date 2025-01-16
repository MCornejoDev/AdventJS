// Ya hemos empaquetado cientos de regalos 🎁… pero a un elfo se le ha olvidado revisar si el regalo, representado por un asterisco *, está dentro de la caja.

// La caja tiene un regalo (*) y cuenta como dentro de la caja si:

// Está rodeada por # en los bordes de la caja.
// El * no está en los bordes de la caja.
// Ten en cuenta entonces que el * puede estar dentro, fuera o incluso no estar. Y debemos devolver true si el * está dentro de la caja y false en caso contrario.

// Ejemplos:

inBox([
    "###",
    "#*#",
    "###"
]) // ➞ true

inBox([
    "####",
    "#* #",
    "#  #",
    "####"
]) // ➞ true

inBox([
    "#####",
    "#   #",
    "#  #*",
    "#####"
]) // ➞ false

inBox([
    "#####",
    "#   #",
    "#   #",
    "#   #",
    "#####"
]) // ➞ false

inBox([
    '####',
    '#  #',
    '##*#'
]) // ➞ false

inBox([
    "##*##",
    "#   #",
    "#   #",
    "#   #",
    "#####"
])// ➞ false

/** @param {string[]} box
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {

    if (box[0].includes('*') || box[box.length - 1].includes('*')) return false;

    const boxLine = box.filter(line => line.includes('*'));

    if (boxLine.length === 0) return false;

    return boxLine.some(line => line[0] === '#' && line[line.length - 1] === '#');

}

/**
 * @param {string[]} box
 * @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
    for (let i = 1; i < box.length - 1; i++) {
        const line = box[i];

        if (line.includes('*') && line[0] === '#' && line[line.length - 1] === '#') {
            return true;
        }
    }

    return false;
}