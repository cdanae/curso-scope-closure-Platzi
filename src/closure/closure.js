function greeting() {
    let username = 'Caro';

    function displayUsername() {
        return `Hola ${username}`;
    }
    return displayUsername
}

const g = greeting();
console.log(g);
console.log(g());