// Santa Claus 🎅 está decorando un árbol de Navidad mágico 🪄, 
// que este año tiene una estructura especial en forma de árbol binario.
// Cada nodo del árbol representa un regalo, y 
// Santa quiere saber la altura del árbol para colocar la estrella mágica en la punta.

// Tu tarea es escribir una función que calcule la altura de un árbol binario.
// La altura de un árbol binario se define como el número máximo de niveles 
// desde la raíz hasta una hoja.Un árbol vacío tiene una altura de 0.

// Definición del árbol
const tree = {
    value: '🎁',
    left: {
        value: '🎄',
        left: {
            value: '⭐',
            left: null,
            right: null
        },
        right: {
            value: '🎅',
            left: null,
            right: null
        }
    },
    right: {
        value: '❄️',
        left: null,
        right: {
            value: '🦌',
            left: null,
            right: null
        }
    }
}

// Representación gráfica del árbol:
//        🎁
//       /   \
//     🎄     ❄️
//    /  \      \
//  ⭐   🎅      🦌

// Llamada a la función
treeHeight(tree)
// Devuelve: 3

/**
   * @param {{ value: string; left: any; right: any }} tree
   * @returns {number} - Height of the tree.
   */
function treeHeight(tree) {
    const objectDepth = (o) => {
        return Object(o) === o ? 1 + Math.max(-1, ...Object.values(o).map(objectDepth)) : 0
    }
    return objectDepth(tree);
}

/**
   * @param {{ value: string; left: any; right: any }} tree
   * @returns {number} - Height of the tree.
   */
function treeHeight(tree) {
    if (tree === null) {
        return 0; // Si el nodo es null, la profundidad es 0
    }

    // Calcula la profundidad de los subárboles izquierdo y derecho
    const leftDepth = treeHeight(tree.left);
    const rightDepth = treeHeight(tree.right);

    // La profundidad del árbol es el máximo entre ambos más 1
    return Math.max(leftDepth, rightDepth) + 1;
}