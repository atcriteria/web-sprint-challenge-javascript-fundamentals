// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
/*

With Closure Functions are able to reach outside of their code blocks in search for a variable, but create local scope but not allowing any variables declared within a functions block to be accessed from outside of the function. This is the case for all blocks of code within a function: They can search without but never within a new block of code. This keeps variables names from conflicting with one another through Scope.

*/

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

let summation = function(param) {
  let returnValue = 1;
  for (let i = 2; i <= param; i++){
    returnValue += i;
  }
  return returnValue;
}

console.log(summation(4));