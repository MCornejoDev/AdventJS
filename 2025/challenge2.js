// La fábrica de Papá Noel ha empezado a recibir la lista de producción de juguetes .
// Cada línea indica qué juguete debe fabricarse y cuántas unidades .

// Los elfos, como siempre, han metido la pata: han anotado unos juguetes con cantidades que no tienen ningún sentido.

// Tienes una lista de objetos con esta estructura:

// toy:el nombre del juguete (cuerda)
// quantity:¿Cuántas unidades se deben fabricar (número)?
// Su tarea es escribir una función que reciba esta lista y devuelva una matriz de cadenas con:

// Cada juguete se repite tantas veces como indicaquantity
// En el mismo orden en que aparecen en la lista original
// Ignorar juguetes con cantidades no válidas (menores o iguales a 0, o que no sean un número)
// Los elfos a veces pierden la cabeza y pasan una cadena como quantity, pero eso no es correcto y debe ignorarse.

const production1 = [
    { toy: 'car', quantity: 3 },
    { toy: 'doll', quantity: 1 },
    { toy: 'ball', quantity: 2 }
]

const result1 = manufactureGifts(production1)
console.log(result1)
// ['car', 'car', 'car', 'doll', 'ball', 'ball']

const production2 = [
    { toy: 'train', quantity: 0 }, // not manufactured
    { toy: 'bear', quantity: -2 }, // neither
    { toy: 'game', quantity: '3' }, // careful, not valid! it's a string
    { toy: 'puzzle', quantity: 1 }
]

const result2 = manufactureGifts(production2)
console.log(result2)
// ['puzzle']

const production3 = []
const result3 = manufactureGifts(production3)
console.log(result3)
// []


/**
 * @param {Array<{ toy: string, quantity: number }>} giftsToProduce
 * @returns {string[]} Array of manufactured gifts
 */
function manufactureGifts(giftsToProduce) {

    let manufacturedGifts = []

    for (let i = 0; i < giftsToProduce.length; i++) {
        let gift = giftsToProduce[i];
        let quantity = gift.quantity;

        if (typeof quantity !== "number" || quantity <= 0) {
            continue;
        }


        while (quantity > 0) {
            manufacturedGifts.push(gift.toy);
            quantity--;
        }

    }

    return manufacturedGifts;
}