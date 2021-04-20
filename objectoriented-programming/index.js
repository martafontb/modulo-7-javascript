//objects - a collection of key value pairs
//creating objects
//factories and constructors
//primitives and reference types
//working with properties
//private properties
//getters/setters


//creating objects
const circle = { 
//properties - hold values   
radius:1,
location: {
 x: 1,
 y: 1
},
//methods - define some logic
    draw:function() {
        console.log('draw')
    }
};
// we can access its members by using the dot notation
circle.draw();   

//factories and constructors

//we want to create another circle
// if an object has one or more methods 
// we say an object has behaviour
// the solution is to use a factory or a constructor function

//factroy function
function createCircle(radius) {
   return {
    // if the key and the value are the same
    //we can remove the noise in the code
    // radius: radius,
    radius,
    draw: function(){
        console.log('draw')
    }
   } 
}

const circle = createCircle(1);

//constructor function
    // we have a new empty object in memory
    // we are going to use this keyword
    // to reference that object
    // and dot notation to set various properties
    // to that object
function Circle(radius) {
    this.radius = radius;   
    this.draw = function(){
        console.log('draw');
    }
} 

const another = new Circle(1); 

//constructor property
//every object in javascript 
//has a property called constructor
// that references the function that was used
// to construct or create that object

console - another.constructor 
function Circle (radius) {
    this.radius = radius;
    this.draw = function() {
        console.log(draw)
    }
}
console - circle.constructor 
f Object() { [native code] }
// this is a built in constructor function in javascript

// for example:
//we write: 
let x = {};
//js translates it to: 
let x = new Object()

// so the cincle object we created and returned from the factory function

// there are other constructor functions in javascript
// but instead we use literals 
new String(); '' , "" , ` `
new Boolean();  true, false
new Number(); 1, 2,3

// Every object has a constructor property
// that references the constructor 
// that was used to create that object

// Functions are Objects
// one of the confusing concepts of javascript
// is that functions are objects

function Circle(radius) {
    this.radius = radius;   
    this.draw = function(){
        console.log('draw');
    }
} 

const another = new Circle(1); 

// Circle. access the members of the Circle object
// the purple icons are methods 
// and the blue icons are properties
Circle.name
"Circle"
Circle.length
1

// Every object has a constructor property
// that references the function that was used
// to create an object

//Who created the Circle object?
Circle.constructor
f Object() { [native code] }
// here we have another built in constructor
// called function that javascript will use internally

//Example
// new Function with 2 parameters 
// 1 parameter 'radius'
// 2 parameter 'this.draw = function()'
const Circle1 = new Function('radius', `   
this.radius = radius;
 this.draw = function(){
    console.log('draw');
}`)

const circle = new Circle(1);

const another = new Circle(1); 

// so when we declare a function
// internally it's represented like this

// and we can call the Circle1 like calling the 
// Circle function


//this expression is exactly like using 
Circle.call({}, 1)
Circle.apply({}, [1])
const another = new Circle(1); 
//. the new operator will internally 
//create an empty object

//primitives and reference types

//values or primitives we have:
// Number
// String
// Boolean
// Symbol
// undefined
// null

//reference types
// Object
// Function
// Array

Example:
let x = 10;
let y = x;

x = 20;

console -
x
20
y 
10

// the values are independent 
// when we work with primitives 
// the value that it's stored in the variable 

//When we use a reference type or object

Example:
let x = {value:10};
let y = x;

x.value = 20;

console -
x
{value:20}
y 
{value:20}

//when we use an object
// the object is not stored in the variable
// both x and y are pointing to the same reference in memory
// when we modify the object using either x or y
// changes are inmediatly visible to the other variable

//Conclusion:  
//primitives are copied by their value
// Objects are copied by their reference

//example2
let number = 10
function increase(number) {
    number ++;
}
increase(number);
console.log(number) 

console -
10
// when we call increase and pass the number variable
// its value is copied into this parameter that 
// is local in this function
// the number ++ variable it's completly independent
// to the variable let number = 10

//example2
let obj = {value: 10}
function increase(obj) {
    obj ++;
}
increase(obj);
console.log(obj) 

console -
value:11

// here the object is passed by its reference
// so its local parameter will point to the same
// object that we defined at the top
// in this case we are not dealing with 2 independent copies
// any changes that we make to this object will be visible to the 
// other variable

//adding/removing properties
// objects in javascript are dynamic
// you can add or remove properties
// for example if we have a  user object

//ex user.token ='adsfadfa' ;
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const circle = new Circle(10);
circle.location = { x:1 };

//we also have braket notation
//to reference a property
circle['location'] = { x:1 };
//useful when you want to dynamically 
//access a property name

//we don't know what's the name of that property
// that is calculated at run time
const propertyName = 'location'
circle['propertyName'] = { x: 1};

// we can also use the braket notation
// when we are using property names that
// are not valid identifiers
// when you have special character or spaces
const propertyName = 'center-location'
circle.center-location
circle['propertyName'] = { x: 1};

//we can also delete a property 
delete circle['location']
delete circle.location


// loops for properties
// sometimes you need to iterate over
// or enumerate the properties in an object
// we can do that by using the for in loop
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(10);

for(let key in circle) {
    console.log(key)
}

console -
radius
draw
//its returning both properties and methods

// if you want to get the value of this properties
// we need to use the braket notation
// to access a member
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(10);

for(let key in circle) {
    console.log(key, circle[key])
}



// if we want to get only the properties
// and not the methods
// we can use the type of operator
// to check the type of this value

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(10);

for(let key in circle) {
    if(typeof circle[key] !== 'function')
    console.log(key, circle[key])
}

console - 
radius 10

// there is another approacth to get all the
// keys in an object

const keys = Object.keys(circle);
console.log(keys);

// this will return all the keys in the object as an array

if ('radius' in circle)
console.log('Circle has a radius.')

// to enumerate all the elements in an object
// you can use a for in loop

// to get all the keys in an object 
// you can use Object.keys

// to check for the existence of a property or a method
// you can use the in operator

//Abstraction 
// hide the details
// and show only the essentials

// if you don't use abstraction
// every time that you modify the implementation of that object
// you have to change it in many places 

// - example 
function Circle(radius) {
    this.radius = radius;

    this.defaultLocation = { x:0, y:0 }

    this.computeOptimumLocation = function(r) {
        //...
    }

    this.draw = function() {
        this.computeOptimumLocation(0.1)
        console.log('draw');
    }
}

const circle = new Circle(10);
// circle.computeOptimumLocation(0.1);
circle.draw();

// not all this methods should be accessible form the outside
// for examole computeOptimumLocation(0.1);
// we wouldn't have to modify when we add a factor
// we would only modity it where we called the function


//Private properties and Methods
 
// so how do we implement abstraction?
// we want to hide certain members from the outside
// this references the new Circle object
// if I declare a local variable
// that won't be part of the object because
// I haven't set it as a property

// - example 
function Circle(radius) {
    // this is only a local variable inside of this function
    // with this technique we can hide certain members from 
    // the outside
    let color = 'red'; 

    this.radius = radius;
    
    let defaultLocation = { x:0, y:0 }

    // this.defaultLocation = { x:0, y:0 }

    let computeOptimumLocation = function(factor) {
      //...
        }
    // this.computeOptimumLocation = function() {
    //     //...
    // }

    this.draw = function() {
    // this function will no longer be a method of this
    // new object therfore we can't access it using this
    // we have to access it directly
        
        // this.computeOptimumLocation(0.1)
        computeOptimumLocation(0.1)
        console.log('draw');
    }
}

const circle = new Circle(10);
circle.draw();

//closure
// when we have a function and a function inside
// of that function

function Circle(radius) {
    this.radius = radius;
    let defaultLocation = { x:0, y:0 }
    let computeOptimumLocation = function(factor) {
      //...
        }

    this.draw = function() {
// in this function we can declare certain variables
//ex. let x, y;
// this are local variables that are only available in this function
// their scope is limited to this function
// when we finish executing this function x & y will go out of scope

// in contrast to scope we have closure
// closure determines what variables will be available to an inner function
// for example the draw function will be able to access
// 
    let x, y;

        computeOptimumLocation(0.1)
        console.log('draw');
    }
}

const circle = new Circle(10);
circle.draw();


//Getters / Setters

// converting members to private members
// they are local variables that we have defined in our object

//issue
// we have our private defaulfLocation property
function Circle(radius) {
    this.radius = radius;
    let defaultLocation = { x:0, y:0 }
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(10);
// we can not access  default Location from the outside
circle //.draw// .radius
// we want to display that default location 
//somewhere in our application
// not access but display it
circle.draw();

function Circle(radius) {
    this.radius = radius;
    let defaultLocation = { x:0, y:0 }

    this.getDefaultLocation = function() {
        return defaultLocation;
    }

    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(10);
//we can call this as a method
circle.getDefaultLocation
circle.draw();

// how to define a property instead of getDefaultLocation
// we have an Object.defineProperties()
// the first argument is the object we want to add a property to
// the second argument is the one that is referenced by this.
// the third argument is an object
// inside the object we add a key value pair
// the key is get and the value is a function

// a getter is a function that is used to read a property
function Circle(radius) {
    this.radius = radius;
    let defaultLocation = { x:0, y:0 }

    this.getDefaultLocation = function() {
        return defaultLocation;
    }

    this.draw = function() {
        console.log('draw');
    }
    Object.definePropertys(this, 'defaultLocation', {
        get: function () {
            return defaultLocation;
        }
    });
}

const circle = new Circle(10);
//we can call this as a method
circle.defaultLocation
circle.draw();

//setters
    //right now the 'defaultLocation' is a read only property
    // if we want to set the value of this property from the outside
    // we define a setter

function Circle(radius) {
    this.radius = radius;
    let defaultLocation = { x:0, y:0 }

    this.getDefaultLocation = function() {
        return defaultLocation;
    }

    this.draw = function() {
        console.log('draw');
    }
    Object.definePropertys(this, 'defaultLocation', {
        get: function () {
            return defaultLocation;
        },
        set: function(value) {
            if (!value.x || !value.y) 
            throw new Error('Invalid location')
            defaultLocation = value;
        }
    });
}

const circle = new Circle(10);
//we can call this as a method
circle.defaultLocation
circle.draw();

// to recap: use Obect.defineProperty to define
// getters or setters


// Exercice
const sw = new Stopwatch()
// sw has 3 methods - reset, start and stop
// initally duration is 0
sw.start()
sw.stop()
sw.duration
sw.reset()
