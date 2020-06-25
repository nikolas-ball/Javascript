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


//===================================================
//Implement enqueue and dequeue using only two stacks Implement enqueue and dequeue using only two stacks
//Enqueue means to add an element, dequeue to remove an element.

var inputStack = []; // First stack
var outputStack = []; // Second stack

// For enqueue, just push the item into the first stack
function enqueue(stackInput, item) {
  return stackInput.push(item);
}

function dequeue(stackInput, stackOutput) {
  // Reverse the stack such that the first element of the output stack is the
  // last element of the input stack. After that, pop the top of the output to
  // get the first element that was ever pushed into the input stack
  if (stackOutput.length <= 0) {
    while(stackInput.length > 0) {
      var elementToOutput = stackInput.pop();
      stackOutput.push(elementToOutput);
    }
  }

  return stackOutput.pop();
}
