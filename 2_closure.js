//2. Do you know Closure? Sample example for closure.

function outerFunction() {
	var outerVar = 'hi';
  function closureFunction() {
  	alert(outerVar);
  }
}

// Define closure: A function that has access to variables from outer scope, so it has access to it's inner scope, the enclosing function's scope and global scope
