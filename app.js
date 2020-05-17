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
// find average value in an array of numbers
function avg(arr) {
    let total = 0;
    //loop over each num
    for(let num of arr){
        //add then together
        total += num;
    }
    //divide by number of nums
    let res = total / arr.length;
    return res;
}
// =================================================================
//write a function called isPangram that checks to see if a given sentence
//contains every letter of the alphabet.

function isPangram(sentence){
    let lowerCased = sentence.toLowerCase();
    for(let char of 'abcdefghijklmnopqrstuvwxyz') {
        if(lowerCased.indexOf(char) === -1) {
            return false;
        }
    }
    return true;
}
// =================================================================
//write a getCard() function which returns a random playing card object such as
// {
//      value: 'K'
//      suit: 'clubs'  
// }
//pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//pick a random suit from:
//----clubs, spades, hearts, diamonds
//return both in an object

function getCard(){
    const values = ['1','2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    const valIdx = Math.floor(Math.random() * values.length);
    const value = values[valIdx];

    const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
    const suitIdx = Math.floor(Math.random() * suits.length);
    const suit = suits[suitIdx];
    return { value: value, suit: suit };
}

//lets try again 

function pick(arr){
    //return random element from arr
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function getCard(){
    const values = ['1','2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
    return { value: pick(values), suit: pick(suits) };
}
// =================================================================

//fizzbuzz from a function call
function fizzFix(str){
    var iterations = Number(str);

    for( var i = 1; i <= iterations; i++){
        var output = '';
            if( i % 3 == 0){
                output += "Fizz";                
            }
            if( i % 5 == 0){
                output += "Buzz";
            }
            if(output == ''){
                output = i;
            }
        
        console.log(output);
        }
}

fizzFix('11111');
