// Al Polo Norte ha llegado ChatGPT y el elfo Sam Elfman está trabajando en una aplicación de administración de regalos y niños.

// Para mejorar la presentación, quiere crear una función drawTable que reciba un array de objetos y lo convierta en una tabla de texto.

// La tabla dibujada debe representar los datos del objeto de la siguiente manera:

// Tiene una cabecera con el nombre de la columna.
// El nombre de la columna pone la primera letra en mayúscula.
// Cada fila debe contener los valores de los objetos en el orden correspondiente.
// Cada valor debe estar alineado a la izquierda.
// Los campos dejan siempre un espacio a la izquierda.
// Los campos dejan a la derecha el espacio necesario para alinear la caja.
// Mira el ejemplo para ver cómo debes dibujar la tabla:

drawTable([
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' },
    { name: 'Charlie', city: 'New York' }
])
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

drawTable([
    { gift: 'Doll', quantity: 10 },
    { gift: 'Book', quantity: 5 },
    { gift: 'Music CD', quantity: 1 }
])
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+

/**
  * @param {Array<Object>} data
  * @returns {string}
  */
function drawTable(data) {
    let table = ""
    let spaceWitdh = 0;

    let headerKeys = Array.from(new Set(data.flatMap(item => Object.keys(item))));
    table += "+".padEnd(headerKeys.length * 2, "-") + "+";
    table += "\n"

    for (let i = 0; i < headerKeys.length; i++) {
        let keyInUpperCase = headerKeys[i].charAt(0).toUpperCase() + headerKeys[i].slice(1);

        table += i === 0 ? '| ' : ' ';

        table += keyInUpperCase.padEnd(keyInUpperCase.length + 1) + "|";

    }








    // table += "\n"
    // table += "+".padEnd(headerKeys.length * 2, "-") + "+";
    // table += "\n"
    // for (let j = 0; j < data.length; j++) {
    //     for (let i = 0; i < headerKeys.length; i++) {
    //         table += i === 0 ? '| ' : ' ';
    //         let value = data[j][headerKeys[i]];
    //         value = value.toString() + " |";
    //         table += value;
    //     }
    //     table += "\n"
    // }
    // table += "+".padEnd(headerKeys.length * 2, "-") + "+";






    console.log(table)
    return ''
}
