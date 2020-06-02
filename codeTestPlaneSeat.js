//expected output 1/2

//end of assesment result 6/2/2020 1:47PM:
//most recent execution of function gave expected probabilty as result, being 0.5
//ES6 syntax
const planeSeatProb = max => {
        return Math.floor(Math.random() * Math.floor(max));
    }

    let boarding = () => {
        const numPeople = 100;//initialize 100 people, also because it's a variable it allows scaling
        let takenSeats = Array(numPeople);
        let passengers = [];//initialize empty passengers arr
        //'currentSeat: -1' means that person has yet to board
        for (let i = 0; i < numPeople; i++){
            passengers.push({ person: i, ticketSeat: i, currentSeat: -1 });//push key value pairs
        }
        //boarding
        for (let i = 0; i < passengers.length; i++){
            //first person takes random seat
            if (i === 0) {
                let newSeat = planeSeatProb(numPeople);
                passengers[i] = {
                    ...passengers[i],
                    currentSeat: newSeat
                }
                takenSeats[newSeat] = true;
              
            } else {//try to board the person to their rightful seat
                if (!takenSeats[i]){
                    let correctSeat = passengers[i].ticketSeat;
                    passengers[i] = {
                        ...passengers[i],
                        currentSeat: correctSeat
                    }
                    takenSeats[correctSeat] = true;
                }
                //Assume if their seat is taken, they will be 'assigned' a random seat
                else {
                    let hasSeat = false;
                    while (hasSeat !== true){
                        let newSeat = planeSeatProb(numPeople);//because numPeople is a const we can use it here with no issues of hoisting the variable
                        if (!takenSeats[newSeat]) {
                            passengers[i] = {
                                ...passengers[i],//spread passemgers array
                                currentSeat: newSeat
                            }
                            hasSeat = true;
                            takenSeats[newSeat] = true;
                        }
                    }
                }
            }
        }
// return the boolean value after comparision
        let bool = passengers[numPeople - 1].currentSeat === passengers[numPeople - 1].ticketSeat;
      return bool;
    }
    let lastPersonCorrectSeat = 0;
    for(let i = 0; i < 100; i++) {
        let simulation = boarding();
        if(simulation){
          lastPersonCorrectSeat++;
        }
    } 
let finalAns = (lastPersonCorrectSeat/100);

let rounded = Math.round(finalAns * 10) / 10; //rounds final answer to one decimal point
console.log(rounded);


//essentailly the take away is that  the maximum number of people does not seem to change the probability.

//initially my solution was close to 50 lines of code and the time complexity was overcomplicated so I refactored it into the current solution.
//The following comment was referring to the first solution, which was replaced by the simpler one.
//Perhaps because js utilizes floating point math, that is why we get a more exact decimal place instead of the expected 1/2 or 0.5 probability? 

//RESOURCES UTILIZED
// ======================================================
//JS Spread syntax
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// ======================================================
//probabilty assistance 
//https://medium.com/i-math/solving-an-advanced-probability-problem-with-virtually-no-math-5750707885f1
// ======================================================
//Spread and REST operators in js
//https://javascript.info/rest-parameters-spread
//======================================================
//brushing up on key values
//https://javascript.info/keys-values-entries








/* 
Your previous Plain Text content is preserved below:

Say you've got a plane with 100 seats and 100 passengers. Each passenger is assigned a seat. The first passenger to board is drunk and chooses a random seat. Each subsequent passenger to board will choose his or her assigned seat if it is available, or a random seat if not. How would you find the probability that the final passenger to board will remain in his or her assigned seat?

NOTE: This smells like a statistics problem, but really it isn't. I'm not looking for any fancy mathy solution, just from a practical iterating-through-each-passenger-boarding implementation, how often does the last person to board keep their assigned seat?
 */
