// Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas en el taller. 
// Cada bota se describe por dos valores:

// type indica si es una bota izquierda (I) o derecha (R).
// size indica el tamaño de la bota.
// Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. 
// Para ello, debes devolver una lista con los pares disponibles después de emparejar las botas.

// ¡Ten en cuenta que puedes tener más de una zapatilla emparejada del mismo tamaño!

const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
]

organizeShoes(shoes)
// [38, 42]

const shoes2 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 }
]
organizeShoes(shoes2);
// [38, 38]

const shoes3 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 36 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 43 }
]

organizeShoes(shoes3)
// []

/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
function organizeShoes(shoes) {

    let shoesBySize = [];
    let shoesLeft = shoes.filter(shoe => shoe.type === 'I');
    let shoesRight = shoes.filter(shoe => shoe.type === 'R');


    shoesLeft.forEach(({ size }) => {
        const position = shoesRight.findIndex(shoe => shoe.size === size);

        if (position != -1) {
            shoesBySize.push(shoesRight[position].size);
            shoesRight.splice(position, 1);
        }
    })

    return shoesBySize;
}


/**ESTA VERSIÓN ES UNA MEJORADA EN TIEMPO DE EJECUCIÓN */
/**
 * Organizes shoes to find available pairs.
 * @param {{ type: 'I' | 'R', size: number }[]} shoes - List of shoes.
 * @returns {number[]} Available shoe sizes.
 */
function organizeShoes(shoes) {
    const shoesBySize = [];
    const rightShoesMap = new Map();

    // Agrupa los zapatos de tipo 'R' por tamaño
    for (const shoe of shoes) {
        if (shoe.type === 'R') {
            rightShoesMap.set(shoe.size, (rightShoesMap.get(shoe.size) || 0) + 1);
        }
    }

    // Procesa los zapatos de tipo 'I' y encuentra pares
    for (const shoe of shoes) {
        if (shoe.type === 'I' && rightShoesMap.get(shoe.size) > 0) {
            shoesBySize.push(shoe.size);
            rightShoesMap.set(shoe.size, rightShoesMap.get(shoe.size) - 1);
        }
    }

    return shoesBySize;
}