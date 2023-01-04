/* var nameOfCuy;  (El hoisting lo inicializa antes pero no da asignacion)*/
console.log(nameOfCuy); // undefined
var nameOfCuy = 'Galleta'

console.log(nameOfCuy); // Galleta

///////////////////////////////////////////////////////////////////////////////

/* var algodon (Se sube su inicializacion) */
nameOfCuy2();

function nameOfCuy2() {
    console.log(`La mejor cobaya es ${algodon} `);
}

var algodon = 'Algodonsisima'; // La mejor cobaya es undefined 

///////////////////////////////////////////////////////////////////////////////