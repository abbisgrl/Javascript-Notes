// 'use strict';
const bookings = [];

//This is called default parameters
const createBooking = function (flightNum, numPassengers = 1, price = 25) {
    const booking = {
        flightNum,
        numPassengers,
        price,
    };
    // console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');

//This is example of the return a function
// function greet(name) {
//     return function (greeting) {
//         console.log(`${greeting} ${name}`)
//     }
// }

// greet('Gyanendra')('Hello');

//Using the call(),apply() and bind()
const airIndia = {
    name: 'AirIndia',
    code: 25,
    booking: [],
    book(person, Destination, date) {
    // book(details){
        // const [person,Destination,date] = details;
        console.log(`${person} just book the ${this.name} ticket for ${Destination} for ${date}`);
        this.booking.push({
            name: person,
            Destination: Destination,
            Date: date
        })
    }
}

// airIndia.book("Gyanendra", 'Delhi', '25th October');
// console.log(airIndia.booking);


const indigo = {
    name: 'Indigo',
    code: 30,
    booking: []
}

const kingFisherObj = {
    name:'Kingfisher',
    code:20,
    booking:[]
}
//This is normal call use to set the this value explicitly 
// airIndia.book.call(indigo, 'Sachidanand', 'Bhopal', '30 th October');
// airIndia.book.call(indigo, 'Manish', 'Banglore', '25 th October');

//this is for apply function and here the argument is pass into array then in parameters it is destructure automatically
// airIndia.book.apply(indigo,['Gyanendra','indore','15th November']);
// console.log(indigo.booking);


//bind is create a new funtion for that particular object and now just have to call that function and pass the argument
let kingFisher = airIndia.book.bind(kingFisherObj);
kingFisher('Gyanendra','Pune','09th Nov');

//This is a example of the iife function
(function(){
    console.log('This is a iife function');
})();

//This is a example of the closure 
const main = function(){
    let count = 5;
    function innerMain(){
        count++;
        console.log(count);
    }
    // return innerMain;
}

// innerMain();
// const result =  main();
// const result2 = main();
// result2();
// result2();
// result()
// result()
// const object={
//     outer(){
//         console.dir(this)
//         var name = 'Gyanendra'
//         function g(){
//             console.dir(this)
//         }
//         g();
//     }
// }

// object.outer();

// const counter = {
//     count: 5,
//     increase() {
//         //   setInterval(function() {
//         //     console.log(++this.count);
//         //   }, 1000);
//         function g() {
//             console.log(this.count);
//         }
//         g.call(counter);
        
//     }
// }
// counter.increase();

