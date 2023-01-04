var fruit = 'Apple'; // global: variables se pueden llamar desde donde sea
console.log(fruit);

function bestFruit() {
    console.log(fruit);
}

bestFruit();

/////////////////////////////////

function countries() {
    country = 'México'; // global
    console.log(country);
}

countries();
console.log(country);