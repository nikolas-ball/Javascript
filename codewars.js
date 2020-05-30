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

//is Number a repDigit
function isRepdigit(num) {
	// return false if a negative number
	if (num <=0) return false;
	// return true if a positive single digit number
	if (num < 10) return true;
	//Put both digits into an array(will only work on numbers up to 99)
	const arr = num.toString().split("");
	if (arr[0] === arr[1])return true;
	return false;
	
}


//Hoisting
//What’s the result of executing this code and why
function test() {
   console.log(a);
   console.log(foo());
   
   var a = 1;
   function foo() {
      return 2;
   }
}

//The result of this code is undefined and 2

//The reason is that both variables and functions are hoisted (moved at the top of the function) but variables don’t retain any assigned value. So, at the time the variable a is printed, it exists in the function (it’s declared) but it’s still undefined. Stated in other words, the code above is equivalent to the following:

function test() {
   var a;
   function foo() {
      return 2;
   }

   console.log(a);
   console.log(foo());
   
   a = 1;
}

test();
//end hoisting


//run time versus parse time function declaration 
//Run-Time function declaration 
//<script>
foo(); // Calling foo function here will give an Error
  var foo = function(){ 
    console.log("Hi I am inside Foo");
 }; 
// </script>
// <script>
//Parse-Time function declaration 
bar(); // Calling foo function will not give an Error
 function bar(){ 
  console.log("Hi I am inside Foo");
 }; 
//</script>

//Another advantage of this first-one way of declaration is that you can declare functions based on certain conditions
