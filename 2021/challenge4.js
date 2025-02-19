// ¡Es hora de poner el árbol de navidad en casa! 🎄

// Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.

// Si le pasamos el argumento 5, se pintaría esto:

// console.log(createXmasTree(5))
// ____ * ____
// ___ *** ___
// __ ***** __
// _ ******* _
//  *********
//  ____#____
//  ____#____
// Creamos un triángulo de asteriscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios.
// Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
// Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.

// Otro ejemplo con un árbol de altura 3:

console.log(createXmasTree(3))
// __ * __
// _ *** _
//  *****
//  __#__
//  __#__
// Ten en cuenta que el árbol es un string y necesitas los saltos de línea \n para cada línea para que se forme bien el árbol.



function createXmasTree(height) {
    let treeLines = [];

    for (let i = 1; i <= height; i++) {
        const spaces = '_'.repeat(height - i);
        const ornaments = '*'.repeat(i);
        treeLines.push(`${spaces}${ornaments}${ornaments.slice(0, -1)}${spaces}`);
    }

    const spaces = '_'.repeat(height - 1);
    const trunkLine = `${spaces}#${spaces}`;
    treeLines.push(`${trunkLine}\n${trunkLine}`);

    return treeLines.join('\n');
}
