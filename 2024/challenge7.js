// ¡El grinch 👹 ha pasado por el taller de Santa Claus! Y menudo desastre ha montado.
// Ha cambiado el orden de algunos paquetes, por lo que los envíos no se pueden realizar.

// Por suerte, el elfo Pheralb ha detectado el patrón que ha seguido el grinch para desordenarlos.
// Nos ha escrito las reglas que debemos seguir para reordenar los paquetes.
// Las instrucciones que siguen son:

// Recibirás un string que contiene letras y paréntesis.
// Cada vez que encuentres un par de paréntesis, debes voltear el contenido dentro de ellos.
// Si hay paréntesis anidados, resuelve primero los más internos.
// Devuelve el string resultante con los paréntesis eliminados, pero con el contenido volteado correctamente.
// Nos ha dejado algunos ejemplos:

fixPackages('a(cb)de')
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis

fixPackages('a(bc(def)g)h')
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

fixPackages('abc(def(gh)i)jk')
// ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"

fixPackages('a(b(c))e')
// ➞ "acbe"
// 1º volteamos "c" → "c", luego "bc" → "cb"


/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
    let stacks = {
        'start': [],
        'end': [],
    };

    for (let i = 0; i < packages.length; i++) {
        if (packages[i] === '(') {
            stacks.start.push(i);
        }
        else if (packages[i] === ')') {
            stacks.end.push(i);
        }
    }

    stacks.start.reverse();

    for (let i = 0; i < stacks.start.length; i++) {
        let start = stacks.start[i] + 1;
        let end = stacks.end[i];
        let part = packages.substring(start, end);
        let reversed = part.split('').reverse().join('');
        packages = packages.replace(part, reversed);
    }

    return packages.replace(/\(/g, '').replace(/\)/g, '');
}
