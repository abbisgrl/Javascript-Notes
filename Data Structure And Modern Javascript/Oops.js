'use strict'
// In javascript ,OOPS is executed by using the class which is like a template and from which we can create lot of different 
// object

//Four principal which should follow when we are working  on oops 
// Abstraction,Encapsulation,Inheritance and Polymorphism

//Three ways to create oops program in javascript is 
//1.Constructor function
//2.ES-6 Class
//3.Object.create()


//Constructor function and making prototype
const Person = function(firstName,lastName){
    this.firstName =firstName;
    this.lastName = lastName;
    console.log(this)
}

const Detail =new Person('Gyanendra','Shah');
console.log(Detail);

//Work of new keyword
//1.New create are object
//2.function is called which this point to that object
//3.Link to prototype
//4.function automatically return the object

//Never write any function inside the constructor function instead write it inside the 
//Prototype of that function 

//Prototype 
Person.prototype.print = function(){
    console.log(this.firstName+this.lastName);
}
Detail.print();

const Car = function(make,speed){
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function(){
    this.speed = this.speed+10;
    console.log(`The new speed is ${this.speed} km/h`);
}
Car.prototype.brake = function(){
    this.speed = this.speed-5;
    console.log(`Brake Applied ${this.speed} km/h`);
}
const Car1 = new Car('BMW',220);
const Car2 = new Car('Audi',150);
const Car3 = new Car('Mercedes',300);

Car1.accelerate();
Car2.brake();


//ES 6 Classes
//1.Classes are not hoisted
//2.Classes are first-class citizens
//3.Classes are executed in strict mode

//This is class expression
// const Bike = class{}

//this is class declaration

class Bike {
    constructor(name,speed){
        this.name = name;
        this.speed = speed;
    }

    accelerate(){
        this.speed = this.speed+10;
        console.log(`Current Speed :${this.speed}`);
    }

    brake(){
        this.speed = this.speed-5;
        console.log(`Current Speed :${this.speed}`);
    }
}

const Bike1 = new Bike('Suzuki',150);
Bike1.accelerate();
Bike1.brake();


//If you want to create any protected field or method then the name should start with _ and there is also a new proposal in which with using the # ,you can create a private field also.There is a static keyword also if you want to used any method without creating the class
 