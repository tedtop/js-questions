// 1. Constructor function?
function Animal(kind) {
    this.kind = kind;
    
    /*this.sound = function(animalSound) {
        alert(animalSound);
    }*/
};

// The advantage to using prototype is that methods that inherit via the prototype chain can be changed universall for all instances
Animal.prototype.sound = function(animalSound) {
    alert(animalSound);
};

var bird = new Animal('bird');
bird.sound('squak');
