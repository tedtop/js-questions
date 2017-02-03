// 3. Do you know Call/Apply methods and it's usage? With example?

// call, apply, bind all attach this into function

// call attaches this into function and executes function immediately
var person = {  
  name: "James Smith",
  hello: function(thing) {
    console.log(this.name + " says hello " + thing);
  }
}

person.hello.call(person, "world"); // output: "James Smith says hello world"


// bind attaches this into function and needs to be invoked separately
var person = {  
  name: "James Smith",
  hello: function(thing) {
    console.log(this.name + " says hello " + thing);
  }
}

var helloFunc = person.hello.bind(person);
helloFunc("world");  // output: "James Smith says hello world"

// or, like this:
var helloFunc = person.hello.bind(person, "world");
helloFunc();  // output: "James Smith says hello world"


// apply is similar to call except that it takes an array-like object instead of listing the arguments
function personContainer() {
  var person = {  
     name: "James Smith",
     hello: function() {
       console.log(this.name + " says hello " + arguments[1]);
     }
  }
  person.hello.apply(person, arguments);
}
personContainer("world", "mars"); // output: "James Smith says hello mars", note: arguments[0] = "world" , arguments[1] = "mars"
