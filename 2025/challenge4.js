// Los elfos han encontrado el código cifrado que protege la puerta del taller de Santa 🔐. 
// El PIN tiene 4 dígitos, y está escondido dentro de bloques como estos:
// [1++][2-][3+][<]

// Escribe una función que descifre el PIN a partir del código.

// El código está formado por bloques entre corchetes [...] y cada bloque genera un dígito del PIN.

// Un bloque normal tiene la forma [nOP...], donde n es un número (0-9) y después puede haber una lista de operaciones (opcionales).

// Las operaciones se aplican en orden al número y son:

// + suma 1
// - resta 1

// El resultado siempre es un dígito (aritmética mod 10), por ejemplo 9 + 1 → 0 y 0 - 1 → 9.

// También existe el bloque especial [<], que repite el dígito del bloque anterior.

// Si al final hay menos de 4 dígitos, se debe devolver null.

decodeSantaPin('[1++][2-][3+][<]')
// "3144"

decodeSantaPin('[9+][0-][4][<]')
// "0944"

decodeSantaPin('[1+][2-]')
// null (solo 2 dígitos)

decodeSantaPin('[1+++++++++][2--][3----][<]')
// "0099"

/**
 * @param {string} code - The code to decipher
 * @returns {string} The deciphered PIN
 */
function decodeSantaPin(code) {
    let pin = [];
    const matches = [...code.matchAll(/\[([^\]]*)\]/g)].map(m => m[1]);

    for (let i = 0; i < matches.length; i++) {
        const block = matches[i];
        let plus = 0;
        let minus = 0;

        for (let j = 0; j < block.length; j++) {
            const char = block[j];

            if (!isNaN(char)) {
                pin.push(parseInt(char));
                continue;
            }

            if (char === '<') {
                pin.push(pin[pin.length - 1]);
            }
            else if (char === '+') {
                plus++;
            }
            else if (char === '-') {
                minus++;
            }
        }

        pin[pin.length - 1] = (pin[pin.length - 1] + plus - minus + 10) % 10;

    }

    return pin.length < 4 ? null : pin.join('');
}


//LA VERSION PRO ES :

/**
 * @param {string} code - The code to decipher
 * @returns {string} The deciphered PIN
 */
function decodeSantaPin2(code) {
    const blocks = [...code.matchAll(/\[([^\]]*)\]/g)].map(m => m[1]);
    const pin = [];

    for (const block of blocks) {
        if (block === "<") {
            pin.push(pin.at(-1));
            continue;
        }

        let value = parseInt(block[0]);
        for (const c of block.slice(1)) {
            if (c === "+") value = (value + 1) % 10;
            else if (c === "-") value = (value + 9) % 10;
        }

        pin.push(value);
    }

    return pin.length < 4 ? null : pin.join("");
}