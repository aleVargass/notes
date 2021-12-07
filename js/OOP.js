// Inherit Behaviors from a Supertype
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};

let animal = new Animal();

let animal = Object.create(Animal.prototype); // Is better

animal.eat();
animal instanceof Animal; // This would return true



// Set the Child's Prototype to an Instance of the Parent
function Bird() { };
Bird.prototype = Object.create(Animal.prototype);

let duck = new Bird("Donald");
duck.eat();



// Reset an Inherited Constructor Property
/**
 * When an object inherits its prototype from another object, it also inherits the supertype's constructor property.
 */
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor

Bird.prototype.constructor = Bird;
<duck class="constructor"></duck>



// Add Methods After Inheritance
function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
  console.log("Woof!")
}

let beagle = new Dog();



// Override Inherited Methods
Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.fly = function() {
  return "Alas, this is a flightless bird."
}

let penguin = new Penguin();
console.log(penguin.fly());



// Use a Mixin to Add Common Behavior Between Unrelated Objects
let bird = {
  name: "Donald",
  numLegs: 2
};
let boat = {
  name: "Warrior",
  type: "race-boat"
};

let glideMixin = function(obj) {
  obj.glide = function() {};
};

glideMixin(bird);
glideMixin(boat);



// Use Closure to Protect Properties Within an Object from Being Modified Externally
function Bird() {
    // this.weight = 15;
  let weight = 15;

  this.getWeight = function() {
    return weight;
  };
}



// Understand the Immediately Invoked Function Expression (IIFE)
(function() {
  console.log("A cozy nest is ready");
})();




// Use an IIFE to Create a Module
let funModule = (function() {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
  }
})();

funModule.isCuteMixin(penguin);