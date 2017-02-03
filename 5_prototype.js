// 5. Where is prototype available? On Function or on instance object?
// T: prototype is not available on object instances
// F: So you are saying object instances don't have a Prototype?
// T: Every object has a prototype, which is the partent object that it iherits its properties and methods from

function objA() {

};

// T: The above will have the following prototype chain: objA -> Function.prototype -> Object.prototype -> null

var objB = {

};

// T: The above will have the following prototype chain: objB -> Object.prototype -> null

objC = Object.create(objA); 

// T: The above will have the following prototype chain: objC -> objA.prototype -> Function.prototype -> Object.prototype -> null
