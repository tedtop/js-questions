// 6. What is prototype chain ?

// T: prototype is used for object inheritence, if a property doesn't exist on the current object, the interpreter will look for that property or method up the prototype inheritence chain

// Notes:
// When it comes to inheritance, JavaScript only has one construct: objects. Each object has an internal link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.

// Object {} -> Object.prototype -> null
// Array [] -> Array.prototype -> Object.Prototype -> null
// Function () -> Function.prototype -> Object.prototype -> null

// To check whether an object has a property defined on itself and not somewhere on its prototype chain, it is necessary to use the hasOwnProperty method which all objects inherit from Object.prototype.

// This means that all the stuff you define in prototype is effectively shared by all instances, and you can even later change parts of prototype and have the changes appear in all existing instances, if you wanted to.

// In short, prototype is for types, while Object.getPrototypeOf() is the same for instances.
