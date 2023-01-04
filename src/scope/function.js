function greeting() {
    let userName = 'Ana';
    console.log(userName); // Ana

    if(userName === 'Ana') {
        console.log(`Hello ${userName}!`); // Hello Ana!
    }
}

greeting();
console.log(userName); // ReferenceError: userName is not defined