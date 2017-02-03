// 8.Hoisting

console.log(a);
var a = 2;

// What will happen? Why?
// T: The interpreter would hoist the variable like so:

var a;
console.log(a); // Outputs: undefined
a = 2;

// Another console.log():
console.log(a); // Outputs: 2

// Good article: http://adripofjavascript.com/blog/drips/variable-and-function-hoisting

// Function hoisting:
// Error, fn is called before the function is assigned!
fn();
var fn = function () { alert("test!"); } 

// Works as expected: the fn2 declaration is hoisted above the call
fn2();
function fn2() { alert("test!"); }
