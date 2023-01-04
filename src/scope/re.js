var firstName; // valor undefined /* DECLARACIÓN */
firstName = 'Caro' /* ASIGNACIÓN */
console.log(firstName); // Caro

////////////////////////////////////////////////////////

var lastName = 'Carlos'; /* DECLARAR Y ASIGNAR */
lastName = 'Ana' /* REASIGNACIÓN */
console.log(lastName); // Ana

/////////////////////////////////////////////////////////

var secondName = 'Daniel'; /* DECLARAR Y ASIGNAR */
var secondName = 'Ana'; /* REDECLARAR Y ASIGNAR */
console.log(secondName); // Ana

///////////////////////////////////////////////////////////

/* Con let no podemos redeclarar */
let fruit = 'Apple'; /* DECLARAR Y ASIGNAR */
fruit = 'Kiwi'; /* REASIGNACIÓN */

let fruit = 'Banana' // SyntaxError: Identifier 'fruit' has already been declared

/////////////////////////////////////////////////////////////

/* Con const no se puede reasignar ni redeclarar */
const animal = 'dog'; /* DECLARAR Y ASIGNAR */

/* animal = 'cat'; // reasignado
console.log(animal); // TypeError: Assignment to constant variable. */

const animal = 'guinea pig';
console.log(animal); // SyntaxError: Identifier 'animal' has already been declared