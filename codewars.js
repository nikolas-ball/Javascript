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


//return number as a array with every number leading up to number(including the number itself) that is divisble by 4, multiplied by 10.
//amplify(4) ➞ [1, 2, 3, 40]
// Create a sequence from 1 to 4
// 4 is exactly divisible by 4, so it will be 4*10 = 40

//amplify(3) ➞ [1, 2, 3]
// Create a sequence from 1 to 3
// There are no numbers that can be exactly divided by 4

//amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]
// Create a sequence from 1 to 25
// The numbers exactly divisible by 4 are: 4 (4*10 = 40), 8 (8 * 10 = 80)... and so on.

function amplify(num) {
	var a = [];
	for(var i = 1; i <= num; i++){
		if(i % 4 == 0){
			a.push(i*10);
		}else{
			a.push(i);
		}
	}
	return a;
}
amplify(25);
//==============================================================================================================
//https://dev.to/donaldkellett/improving-your-programming-skills-with-codewars-14a1
//===================================================================================================================================================================================
//binary search tree(to be cont)
//Binary Search Tree
function BinarySearchTree() {
    this.root = null;
}

BinarySearchTree.prototype.makeNode = function(value) {
    var node = {};
    node.value = value;
    node.left = null;
    node.right = null;
    return node;
};

BinarySearchTree.prototype.add = function(value) {
    var currentNode = this.makeNode(value);
    if (!this.root) {
        this.root = currentNode;
    } else {
        this.insert(currentNode);
    }
    return this;
};

BinarySearchTree.prototype.insert = function(currentNode) {
    var value = currentNode.value;
    var traverse = function(node) {
        //if value is equal to the value of the node, ignore
        //and exit function since we don't want duplicates
        if (value === node.value) {
            return;
        } else if (value > node.value) {
            if (!node.right) {
                node.right = currentNode;
                return;
            } else
                traverse(node.right);
        } else if (value < node.value) {
            if (!node.left) {
                node.left = currentNode;
                return;
            } else
                traverse(node.left);
        }
    };
    traverse(this.root);
};


BinarySearchTree.prototype.contains = function(value) {
    var node = this.root;
    var traverse = function(node) {
        if (!node) return false;
        if (value === node.value) {
            return true;
        } else if (value > node.value) {
            return traverse(node.right);
        } else if (value < node.value) {
            return traverse(node.left);
        }
    };
    return traverse(node);
};


/* BREADTH FIRST TREE TRAVERSAL */

/* Breadth First Search finds all the siblings at each level
   in order from left to right or from right to left. */

BinarySearchTree.prototype.breadthFirstLTR = function() {
    var node = this.root;
    var queue = [node];
    var result = [];
    while (node = queue.shift()) {
        result.push(node.value);
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
    }
    return result;
};


BinarySearchTree.prototype.breadthFirstRTL = function() {
    var node = this.root;
    var queue = [node];
    var result = [];
    while (node = queue.shift()) {
        result.push(node.value);
        node.right && queue.push(node.right);
        node.left && queue.push(node.left);
    }
    return result;
};

/*DEPTH FIRST TRAVERSALS*/

/*  preOrder is a type of depth-first traversal that tries 
    togo deeper in the tree before exploring siblings. It 
    returns the shallowest descendants first.

    1) Display the data part of root element (or current element)
    2) Traverse the left subtree by recursively calling the pre-order function.
    3) Traverse the right subtree by recursively calling the pre-order function. */

BinarySearchTree.prototype.preOrder = function() {
    var result = [];
    var node = this.root;
    var traverse = function(node) {
        result.push(node.value);
        node.left && traverse(node.left);
        node.right && traverse(node.right);
    };
    traverse(node);
    return result;
};

/*  inOrder traversal is a type of depth-first traversal
    that also tries to go deeper in the tree before exploring siblings.
    however, it returns the deepest descendents first

    1) Traverse the left subtree by recursively calling the pre-order function.
    2) Display the data part of root element (or current element)
    3) Traverse the right subtree by recursively calling the pre-order function. */

BinarySearchTree.prototype.inOrder = function() {
    var result = [];
    var node = this.root;
    var traverse = function(node) {
        node.left && traverse(node.left);
        result.push(node.value);
        node.right && traverse(node.right);
    };
    traverse(node);
    return result;
};

/*  postOrder traversal is a type of depth-first traversal
    that also tries to go deeper in the tree before exploring siblings.
    however, it returns the deepest descendents first

    1) Traverse the left subtree by recursively calling the pre-order function.
    2) Display the data part of root element (or current element)
    3) Traverse the right subtree by recursively calling the pre-order function. */


BinarySearchTree.prototype.postOrder = function() {
    var result = [];
    var node = this.root;
    var traverse = function(node) {
        node.left && traverse(node.left);
        node.right && traverse(node.right);
        result.push(node.value);
    };
    traverse(node);
    return result;
};

//find the left most node to find the min value of a binary tree;
BinarySearchTree.prototype.findMin = function() {
    var node = this.root;
    var traverse = function(node) {
        return !node.left ? node.value : traverse(node.left);
    };
    return traverse(node);
};

//find the right most node to find the max value of a binary tree;
BinarySearchTree.prototype.findMax = function() {
    var node = this.root;
    var traverse = function(node) {
        return !node.right ? node.value : traverse(node.right);
    };
    return traverse(node);
};


BinarySearchTree.prototype.getDepth = function() {
    var node = this.root;
    var maxDepth = 0;
    var traverse = function(node, depth) {
        if (!node) return null;
        if (node) {
            maxDepth = depth > maxDepth ? depth : maxDepth;
            traverse(node.left, depth + 1);
            traverse(node.right, depth + 1);
        }
    };
    traverse(node, 0);
    return maxDepth;
};


//Can you write me a function that returns all the averages of the nodes 
//at each level (or depth)?? with breadth-first traversal

BinarySearchTree.prototype.nodeAverages = function() {
    var node = this.root;
    var result = {};
    var depthAverages = [];

    var traverse = function(node, depth) {
        if (!node) return null;
        if (node) {
            if (!result[depth])
                result[depth] = [node.value];
            else
                result[depth].push(node.value);
        }
        //check to see if node is a leaf, depth stays the same if it is
        //otherwise increment depth for possible right and left nodes
        if (node.right || node.left) {
            traverse(node.left, depth + 1);
            traverse(node.right, depth + 1);
        }
    };
    traverse(node, 0);

    //get averages and breadthFirst
    for (var key in result) {
        var len = result[key].length;
        var depthAvg = 0;
        for (var i = 0; i < len; i++) {
            depthAvg += result[key][i];
        }
        depthAverages.push(Number((depthAvg / len).toFixed(2)));
    }
    return depthAverages;
};

//Convert a binary search tree to a linked-list in place. 
//In-order depth-first traversal.
function LinkedList() {
    this.head = null;
}

BinarySearchTree.prototype.convertToLinkedList = function() {

    var result = [];
    var node = this.root;
    if (!node) return null;

    var traverse = function(node) {
        node.left && traverse(node.left);
        result.push(node.value);
        node.right && traverse(node.right);
    };

    traverse(node);

    var makeNode = function(value) {
        var node = {};
        node.value = value;
        node.next = null;
        return node;
    };

    var list = new LinkedList();
    list.head = makeNode(result[0]);
    var current = list.head;

    for (var i = 1; i < result.length; i++) {
        var currentNode = makeNode(result[i]);
        current.next = currentNode;
        current = current.next;
    }
    return list;
};

//TESTS

var bst = new BinarySearchTree();
bst.add(40).add(25).add(78).add(10).add(32);
console.log('BS1', bst);

var bst2 = new BinarySearchTree();
bst2.add(10).add(20).add(30).add(5).add(8).add(3).add(9);
console.log('BST2', bst2);
console.log('BREADTHFIRST LTR', bst2.breadthFirstLTR());
console.log('BREADTHFIRST RTL', bst2.breadthFirstRTL());
console.log('PREORDER', bst2.preOrder());
console.log('INORDER', bst2.inOrder());
console.log('POSTORDER', bst2.postOrder());

/* 
BREADTHFIRST LTR [ 10, 5, 20, 3, 8, 30, 9 ]
BREADTHFIRST RTL [ 10, 20, 5, 30, 8, 3, 9 ]
PREORDER [ 10, 5, 3, 8, 9, 20, 30 ]
INORDER [ 3, 5, 8, 9, 10, 20, 30 ]
POSTORDER [ 3, 9, 8, 5, 30, 20, 10 ]
*/

var bst3 = new BinarySearchTree();
bst3.add('j').add('f').add('k').add('z').add('a').add('h').add('d');
console.log(bst3);
console.log('BREADTHFIRST LTR', bst3.breadthFirstLTR());
console.log('BREADTHFIRST RTL', bst3.breadthFirstRTL());
console.log('PREORDER', bst3.preOrder());
console.log('INORDER', bst3.inOrder());
console.log('POSTORDER', bst3.postOrder());

/*
BREADTHFIRST LTR [ 'j', 'f', 'k', 'a', 'h', 'z', 'd' ]
BREADTHFIRST RTL [ 'j', 'k', 'f', 'z', 'h', 'a', 'd' ]
PREORDER [ 'j', 'f', 'a', 'd', 'h', 'k', 'z' ]
INORDER [ 'a', 'd', 'f', 'h', 'j', 'k', 'z' ]
POSTORDER [ 'd', 'a', 'h', 'f', 'z', 'k', 'j' ]
 */


console.log(bst2.findMin()); // 3
console.log(bst2.findMax()); // 30
console.log(bst2.contains(15));
//bst2.add(55);
//bst2.add(65);
//bst3.add(75);
console.log(bst2);
console.log(bst2.getDepth()); // 3
console.log(bst2.add(7).add(50).add(80).add(98));
console.log(bst2.getDepth()); // 5
console.log(bst2.nodeAverages()); //[ 10, 12.5, 13.67, 22, 80, 98 ]

console.log(bst2.convertToLinkedList());
//[ 3, 5, 7, 8, 9, 10, 20, 30, 50, 80, 98 ]
//{ head: { value: 3, next: { value: 5, next: [Object] } } }

//===================================================================================================================================================================================
// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
    
    var bmi = weight % (Math.pow(height, 2));

    if (bmi <= 18.5) {
        return "Underweight"
    } else if (18.5 < bmi <= 25.0) {
        return "Normal"
    } else if (25.0 < bmi <= 30.0){
        return "Overweight"
    }else if(bmi > 30){
        return "Obese"
    }
}

bmi(80, 1.80);
//=============================================================================================\
//random multiplication table (potentially use this code in another usecase)
// <html>
// <head>
//   <title>Multiplication Table</title>
//   <script type="text/javascript">
//     var rows = prompt("How many rows for your multiplication table?");
//     var cols = prompt("How many columns for your multiplication table?");
//     if(rows == "" || rows == null)
//    		 rows = 10;
//     if(cols== "" || cols== null)
//    		 cols = 10;
//     createTable(rows, cols);
//     function createTable(rows, cols)
//     {
//       var j=1;
//       var output = "<table border='1' width='500' cellspacing='0'cellpadding='5'>";
//       for(i=1;i<=rows;i++)
//       {
//     	output = output + "<tr>";
//         while(j<=cols)
//         {
//   		  output = output + "<td>" + i*j + "</td>";
//    		  j = j+1;
//    		}
//    		 output = output + "</tr>";
//    		 j = 1;
//     }
//     output = output + "</table>";
//     document.write(output);
//     }
//   </script>
// </head>
// <body>
// </body>
// </html>

//==
