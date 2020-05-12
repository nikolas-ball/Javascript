// FUNCTIONS
// =====================================================================
// dice roll function
function rollDie() {
    let roll = Math.random(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`);
}

function throwDice() {
    rollDie();
    rollDie();
    rollDie();
    rollDie();
    rollDie();
    rollDie();
}

// introducing Arguments
function greet(nickname) {
    console.log(nickname);
    console.log(`Hi, ${nickname}!`);
}
// refactoring throwDice function
function throwDice(numRolls) {
    for(let i=0; i < numRolls; i++) {
        rollDie();
    }
}

// functions with multiple args
function square(num) {
    console.log(num * num);
}

function sum(x, y) {
    console.log(x + y);
}

function divide(a, b) {
    console.log(a/b);
}

// The Return Statement
function add(x, y) {
    return x + y;
}

// function isPurple(color) {
//     if (color.toLowerCase() === 'purple') {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// function isPurple(color) {
//     if (color.toLowerCase() === 'purple') {
//         return true;
//     }
//     return false;
// }
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// function isPurple(color) {
//     return color.toLowerCase() === 'purple';
// }
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function containsPurple(arr){
    for(let color of arr){
        if(color === 'purple' || color === 'magenta'){
            return true;
        }
    }
    return false;
}
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// functions practice

//write a isValidPassword function

// my first attempt first, then proper answers following.
// =================================================================
// let password = '';
// let username = '';
// function isValidPassword(password,username) {
//     if(password.length() = 8, password.indexOf(' ') = -1, password.indexOf(username) = -1) {
//         console.log('requirements are met.');
//         return true;
//     }
//     return false;
// }

function isValidPassword(password, username){
    if (password.length < 8) {
        return false;
    }
    if (password.indexOf(' ') !== -1) {
        return false;
    }
    if (password.indexOf(username) !== -1) {
        return false;
    }
    return true;
}

//  ORRRRRRRRRRRRRRRR:
function isValidPassword(password, username) {
    const tooShort = password.length < 8;
    const hasSpace = password.indexOf(' ') !== -1;
    const tooSimilar = password.indexOf(username) !== -1;
    if (tooShort || hasSpace || tooSimilar) return false;
    // return !tooShort && !hasSpace && !tooSimilar;
    return true;
}

// =================================================================