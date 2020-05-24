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
