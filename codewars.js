//codewars     nickball
//edabit       nickball

//"Achieve mastery through challenge"
//custom fizzbuzz
var fizzBuzzCustom = function(s1 = "Fizz", s2 = "Buzz", n1 = 3, n2 = 5) {
  let arr = [];
  for (let i = 1; i <= 100; i++) {
    if (i % n1 === 0 && i % n2 === 0) {
      arr.push(s1 + s2);
    } else if (i % n1 === 0) {
      arr.push(s1);
    } else if (i % n2 === 0) {
      arr.push(s2);
    } else {
      arr.push(i);
    }
  }
  return arr;
};

//next challenge
//
//
var array = [1, 2, 3, 4, 5];
    
    // Getting sum of numbers
    var sum = array.reduce(function(a, b){
        return a + b;
    }, 0);
    
    console.log(sum); // Prints: 15



// Bit Counting
// http://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript
 
var countBits = function(n) {
    var count = 0;
    while (n > 0) {
        if (n & 1 === 1)
            count++;
        n >>= 1;
    }
    return count;
};

console.log(countBits(1234));
