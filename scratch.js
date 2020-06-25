//scratch file
//fizzbuzz practice again
const fizzGame = num => {
    for(let i = 0; i <= num; i++){
        let output = '';
        if(i % 3 === 0){
            output += 'Fizz';
        }
        if(i % 5 === 0){
            output += 'Buzz';
        }
        if(output === ''){
            output = i;
        }
        console.log(output);
    }
}

//more practice 
const fizzGame = num => {
    for(let i = 0; i <= num; i++){
        let output = '';
        if(i % 3 === 0){
            output += 'Fizz';
        }
        if(i % 5 === 0){
            output += 'Buzz';
        }
        if(output === ''){
            output = i;
        }
        console.log(output);
    }
}

//=========================================== simpler solution but same concept
for (let i = 1; i <= 100; i++) {
    let out = '';
    if (i % 3 === 0) out += 'Fizz';
    if (i % 5 === 0) out += 'Buzz';
    console.log(out || i);
}
