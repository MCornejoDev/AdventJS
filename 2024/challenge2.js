// Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, 
// pero el marco debe cumplir unas reglas específicas. 
// Tu tarea es ayudar a los elfos a generar este marco mágico.

// Reglas:

// Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
// Cada nombre debe estar en una línea, alineado a la izquierda.
// El marco está construido con * y tiene un borde de una línea de ancho.
// La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.
// Ejemplo de funcionamiento:

createFrame(['midu', 'madeval', 'educalvolpz'])

// Resultado esperado:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************

createFrame(['midu'])

// Resultado esperado:
// ********
// * midu *
// ********

createFrame(['a', 'bb', 'ccc'])

// Resultado esperado:
// *******
// * a   *
// * bb  *
// * ccc *
// *******

createFrame(['a', 'bb', 'ccc', 'dddd'])

/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {

    let maxLength = Math.max(...names.map(name => name.length))
    let frame = String.fromCharCode(42).repeat(maxLength + 4) + '\n';
    let line = "";

    names.forEach(name => {
        line = name.padEnd(maxLength, ' ');
        frame += `* ${line} *\n`;
    })

    frame += String.fromCharCode(42).repeat(maxLength + 4);

    return frame;
}