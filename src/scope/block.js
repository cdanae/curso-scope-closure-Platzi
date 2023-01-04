function fruits() {
    if (true) {
        var fruit1 = 'Apple'; // Function scope
        let fruit2 = 'Kiwi'; // Block scope
        const fruit3 = 'Banana'; // Block scope

        console.log(fruit2); // 'Kiwi'
        console.log(fruit3); // 'Banana'
    }
    console.log(fruit1); // 'Apple'
    console.log(fruit2); // ReferenceError: fruit2 is not defined
    console.log(fruit3); // (al primer error ya no da resultados siguientes)
}

fruits();