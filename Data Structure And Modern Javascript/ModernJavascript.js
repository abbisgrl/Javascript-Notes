'use strict'
//Array destructuring - It is ES 6 concept and it is used to retrieve the array data to individual variable-----------------------------------------------------------------------------------------

/*const arr = ['italian','chinese','indian'];
const [a,b,c] = arr;
console.log(a,b,c);*/


//the original array is not change and only the values of the array are store in individual variable
// console.log(arr);

//you can only retrieve few elements from the array
/*const[x,y] = arr;
console.log(x,y)*/

// you can skip some values with just space inside the string quate
/* const [e, ,f] = arr;
 console.log(e,f,'line 16') */


//Using Array destructuring ,swapping two variables value with each other is easy and very readable.
/*let[a,b] = arr;
 console.log(a,b);
 [a,b] = [b,a];
 console.log(a,b);*/

/*const nested = [2, 4, [5, 6]];
 const [i, ,j] = nested;
 console.log(i,j);*/

//destructring the nested array t
/*const [i, , [j, k]] = nested;
console.log(i,j,k);*/

//destructing more element than array size 
/*const [m, n] = [1];
 console.log(m,n);*/

//destructing the object------------------------
// const obj = {
//     thur: {
//         open: 12,
//         close: 22
//     },
//     fri: {
//         open: 11,
//         close: 23
//     },
//     sat: {
//         open: 12,
//         close: 2
//     }
// }


//In destructring of object the variable name should be same to the key name of object
/*const { thur, fri } = obj;
console.log(thur, fri);*/

//but if you want to give different variable name for the property then you can also do that by this way
/*const { thur: Thursday, fri: Friday } = obj;
console.log(Thursday, Friday);*/


//If the variable is already declared and you want to assign the values from the object then you can wrap the whole equation in parentheses and then do the destructuring process.
/*let x = 5;
let y = 6;
let object = { x: 44, y: 64, z: 99 };
({ x, y } = object);
console.log(x, y);*/



//Spread operator-------------------------------------------------------------------
// Spread operator is used to copy the values of one array to other array in simple way.It is unpacking of the array
// const arr = [1,2,3,4,5];
// const arr2 = [...arr,6,7,8];
// console.log(arr2);

//spread operator is used to create shallow copy of the array and it is also used to join the two array
//spread operator work on all iterable of the javascript and not only on array
//iterables are - arrays,strings,maps,sets,NOT object
//Spread operator for string is not working on template literals


//Escape \ is used to escape the single or double quate to do not complete the string at that place 

// console.log('let\'s play'); //this is way of using the escape single to write the quate in the sentence
//spread operator now work on object after es 6 2018 update

// const student = {
//     name:'Gyanendra',
//     Address:'Ahmedabad',
//     mail:'shahgyanendra123@gmail.com',
//     hometown:'bhopal'
// };

// const studentUpdate = {...student,graduation:'B.tech',graduationYear:2020};
// console.log(studentUpdate);



//Rest parameter--------------------
//It is used to pack the elements into the array 

// const Spread = [1,2,...[3,4]]; //this is spread operator where values are unpack 

// const [a,b,...others] = [1,2,3,4,5];//this is rest parameter and it is used to pack the elements into array and in this case the rest operator should be at last in destructuring and there should be no further variable after that
// console.log(a,b,others);

// const {sat:Saturday,...other} = obj; //this is a way of using rest operator in object property destructuring 
// console.log(Saturday,other);

//rest parameters to used to pass multiple parameters after pack it in array 
// const add = function(...numbers){
//     console.log(numbers);
// }

// add(2,3);
// add(2,3,4);
// add(2,3,4,5);


//Truthy value and falsy value 
//falsy value - 0,false,'',undefined,null,Nan
//truthy value - all other things except the truthy value

//shortcircuiting 
// console.log(0||'Gyanendra');
// console.log('Gyanendra'|| 0);
// console.log(0 && 'Gyanendra ');

// var random = 18;
//ternary operator 
// const value = random==7 ?'Gyanendra':'Shah';
// const value1 = random||10;

//It is called nullish coalescing operator
// const value2 = random??10; //even if the first value is false then it assign the first value
// console.log(value2);
// console.log(value1);



//Looping over the array and objects for of and for in loop
const arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

// for(let item of arr){
//     console.log(item);
// }

// for(let item in arr){
//     console.log(parseInt(item)+1,arr[item]);
// }

//array.entries() create an object of the array of index and element
// for(let item of arr.entries()){
//     console.log(item[0],item[1]);
// }

//destructuring of the array into two variables
// for(let [i,element] of arr.entries()){
//     console.log(i,element);
// }


//this is called object literals in which you can create the object at different place and write it in normal way and it automatically create the key and value pair for that particular subobject.
// const mainObject = {
//     mon: {
//         open: 12,
//         close: 22
//     },
//     tue: {
//         open: 11,
//         close: 23
//     },
//     wed: {
//         open: 12,
//         close: 2
//     }
//     ,obj,// this is called object literals and in similar way we can write the method without function keyword 
//     print:function(){
//          console.log(this.mon,this.tue,this.obj);
//     }
// }

// mainObject.print();
// console.log(mainObject);


//object.keys return the array of keys of the object
// console.log(Object.keys(obj)); 
// console.log(Object.entries(obj));
// console.log(Object.values(obj));

// for(const [day,item] of Object.entries(obj)){
//     console.log(item);
// }

//Importand methods of Object ------------------
// Object.entries(obj) // It gives ṭhe array of individual key value pair array
// Object.keys(obj); //It gives the array of keys of the object 
// Object.values(obj); //It gives the array of values of the object

// Some important data structure in javascript--------------------------------------------------------

//Sets in javascript-------------- 
//Sets are the part of data structure which is used to store element only one time and it is not allow to
//store any element more then one time.The values are not store in a order and it store in randomly
//The set are iterable so we can used spread operator on set and using this we can change the set into 
//an array .We can also change the array into set 

//some methods of sets
const city = new Set(['Ahmedabad', 'Ahmedabad', 'Bhopal', 'Jaipur', 'Delhi', 'Bhopal', 'Indore']);
// console.log(city.size);// it give the size of the set 
// console.log(city.keys());//it gives the keys in array
// console.log(city.values());
// console.log(city.has('Indore')); //It gives the boolean value 
// console.log(city.entries()) //it gives all the values of set whether they are repeating or not


//Maps in javascript------------------------
// const student = new Map();
// student.set('Contact No.',7821222541);
// student.set('Address','Bhopal');
// console.log(student.set('name','Gyanendra'));

//we can pass an 2d array in the constructor to create map
const student2 = new Map([
    ['Name', 'Gyanendra'],
    ['Role', 'React Js Intern'],
    ['Address', 'Times of India Road Ahmedabad']
]);

// console.log(student2);

//because Object.entries() gives a 2d array so we can change the object into map
// const objMap = new Map(Object.entries(obj));
// console.log(objMap);

//for of is not directly work on object but it can be work once we change the object into object.entries()
// for(const item of obj){
//     console.log(item);
// }

//this is working fine 
// for(const item of Object.entries(obj)){
//     console.log(item);
// }

//but for map we can used the for of loop without using the object.entries();
// for(const [key,value] of student2){
//     console.log(key,value);
// }

// const question = new Map([
//     ['Question:1','Which is the best programming language'],
//     ['Option 1','Java'],
//     ['Option 2','Python'],
//     ['Option 3','C'],
//     ['Option 4','Javascript'],
//     ['Correct','Javascript'],
//     [true,'Your answer is correct'],
//     [false,'Your answer is wrong']
// ]);

// console.log(question);
// const userAnswer = prompt('Enter your answer');
// console.log(question.get(question.get('Correct')===question.get(userAnswer)))


// Strings and Its various methods--------------------
/*
const str = 'Gyanendra';
console.log(str.length) //gives the length of the String 
console.log(str.indexOf('a'));//It gives the first index of the that character in the String
console.log(str.lastIndexOf('a')); //It gives the index from last of the string
console.log(str.search('G'));//It search the letter in the string and return the index of that.
console.log(str.slice(-5, 6)); //It slice the part between start and end index and return that part and it does not change the original string.It accept the negative number 
console.log(str.substring(3, 6));//It also return that part but it does not accept the negative argument
console.log(str.replace('a', 'p'));//It replace that character with new character and return new string.It does not change the original string
console.log(str.toUpperCase());//It change the case into uppercase then return new string.It does not change the original array
console.log(str.toLowerCase()); //It is same to toUpperCase()
console.log(str.trim()) //It trims the leading spaces of the string
console.log(str.charAt(2));
console.log(str.charCodeAt(2));//It gives the ascii value of the character for that index which is given in the argument
console.log(str.split()) //It return a array by spliting the array into parts
console.log(str.toString);
*/


//Objects and its methods---------------------------------
const student3 = {
    name: 'Gyanendra',
    lastName: 'shah',
    role: 'React Js'
}
const obj2 = {
    thur: {
        open: 12,
        close: 22
    },
    fri: {
        open: 11,
        close: 23
    },
    sat: {
        open: 12,
        close: 2
    },
    // sun:{
    //     open:23,
    //     close:4
    // }
}
const obj = {
    thur: {
        open: 12,
        close: 22
    },
    fri: {
        open: 11,
        close: 23
    },
    sat: {
        open: 12,
        close: 2
    }
    // ,...student3 //spread operator is working on object but it cannot put the values if it is already in object
}


// JSON.parse()// It is used to changes the json data to the javascript object 
// JSON.stringify()//It is used to convert the Object into json string

// console.log(obj);

// console.log(JSON.stringify(obj));
// console.log(JSON.parse('{"thur":{"open":12,"close":22},"fri":{"open":11,"close":23},"sat":{"open":12,"close":2},"name":"Gyanendra","lastName":"shah","role":"React Js"}'));

// const target = Object.assign(obj,obj2); //It is used to copy the properties which is not in target object from source object and it does not do deep cloning and that why if the property is any object then it only copy the refrence of the property
// console.log(Object.assign(obj,obj2));
//if you want to deep clone the object then you can used this - JSON.parse(JSON.stringify(obj));

// const obj3 = Object.create(obj);
// console.log('line',obj3.fri);
// console.log(obj.thur);

// console.log(JSON.stringify(obj)===JSON.stringify(obj2)); // It convert the javascript object to a Javascript Object Notation

// const tempObj = {
//     name:'gyanendra',
//     lastName:'shah'
// }

// function sum(){
//     console.log(this);
// }
// sum();
// console.log(this);

// const object1 = {
//     a: 1,
//     b: 2,
//     c: 3
//   };

//   Object.defineProperties(object1,{
//     name:{
//         value:'Margish',
//         enumerable:false
//     }
//   })

//   console.log(Object.getOwnPropertyNames(object1));//it show both numerable and non numerable
//   console.log(Object.keys(object1)); //It only shows the ennumerable property
//   console.log(Object.values(object1));

// const tempObj1 = {
//     name: 'gyanendra',
//     lastName: 'shah'
// }

// Object.defineProperty(tempObj1, 'name', { value: 'Manish', writable: false });
// Object.defineProperties(tempObj1,{
//     address:{
//       value: 'Singrauli',
//       writable:false
//     }
// })




//when we used defineProperty and set any property and make writable false then we cannot set value with 
//dot notation

// tempObj1.name = 'Sachidanand'; //This is not valid .If the writable is true then it is working
// console.log(tempObj1.name);
// console.log(tempObj1.address);

// console.log(Object.entries(obj2));
// console.log(Object.fromEntries(Object.entries(obj2)));
// console.log(Object.is(tempObj.name,tempObj1.lastName))



// Some of important object methods
// Object.assign() //It takes two argument.One is target and other is source
// Object.create() //It create new object with setting the prototype to the object which is passed
// Object.defineProperty()//It is used to set the property of the any object 
// Object.defineProperties()//In this way don't required the property name as argument and directly write the property
// Object.entries() //It gives the individual array collection of array of key value of the object
// Object.freeze() //It freeze the object which is passed and after that it cannot be modified and is not extensible
// Object.fromEntries() //It gives a object from key value entries .It is reverse of the entries
// Object.getOwnPropertyDescriptor() //It gives the descriptor of the given property in the Object
// Object.getOwnPropertyDescriptors()//It gives the descriptor of the all property of the given object
// Object.getOwnPropertyNames() //It gives the array of all properties name
// Object.getOwnPropertySymbol() // It gives the array of all symbol properties
// Object.getPrototypeOf() //It gives the name of the prototype of the object 
// Object.is() It compare the two values and return true false after comparison
// Object.isExtensible() //It give information about whether object is extensible or not
// Object.preventExtensible() // It prevent the object from further extension
// Object.isFrozen()//It give the information about the information whether object is frozen or not
// Object.isSeal() // It check whether object is seal or not
// Object.seal() // It seal a object from further extension as well as further  modification of the values



//For Each loop is run the callback function on each element of the array on which it is called
const num = [555, 4, 88, 331, 44, 56, 88];
num.forEach((element, index) => {
    element = element + 1;
    num[index] = element;
});

const findAnswer = num.find((element) => element > 3); //It find the first element which satisfy the condition.On the other hand
//findIndex() give the index of that element which satisfy the function condition
const answerArray = num.filter((element) => element > 4);
console.log('filter', answerArray);
console.log('array', num, findAnswer);

//For sorting the array using sort method and compare function
num.sort((a, b) => {
    return a - b;
})
console.log(num);

//num.indexOf() //gives the index of the element in that array
//num.lastIndexOf() // gives the last index of last occurence of that element in the array
//num.includes()    // check whether the array include that element in the array
//num.map() //it runs the function on all element and do the operation and return a new array
//num.findIndex()  //It give the index of the element which satisfy the given condition

const sample = [
    { name: 'Sudeep', age: 25 },
    { name: 'Saurabh', age: 20 },
    { name: 'Virat', age: 15 },
    { name: 'Ronny', age: 15 },
    { name: 'Rohit', age: 45 },
    { name: 'Aarav', age: 20 }
]
//sorting the array of objects with respect to single property of the object
// sample.sort((a, b) => {
//     return a.age - b.age;
// })


//Sorting the array of object with respect to two properties of the objects
sample.sort((a, b) => {
    if (a.age === b.age) {
        return a.name.localeCompare(b.name);
    }
    return a.age-b.age;
});

// console.log(sample);


//Array.reverse() //It point the same array but reverse the array elements
//split() is used to split the string into small array

//Array.join() is used to create a string by joining the array elements.If there is no argument is passed then there will be , 
//between the element.If you are giving the string then it will be between them

//Asignments given by Social Pilot

//Questions 1 solution 
// const object11 ={
//     heir:'long',
//     beard:'true'
// }
// const object12 = {
//     heir:'long',
//     beard:'false'
// }
// console.log(JSON.stringify(object11)===JSON.stringify(object12));


//Question 2 
// const object21 = {
//     name:'JJ',
//     Job:'Programmer',
//     Age:25
// }



//Question 3 Sorting the Array of object with respect to name and age Solutions 

const input = [
    { name: 'fred', age: 48 },
    { name: 'barney', age: 36 },
    { name: 'fred', age: 40 }
]

input.sort((a,b)=>{
   if(a.name===b.name){
    return b.age-a.age;
   }
    return a.name.localeCompare(b.name);
})
console.log(input);


//Questions 4 Delete the key value from object
const inputObj ={a:1,b:2,c:3};
delete inputObj.b;
console.log(inputObj);


// Two important methods of JSON is used widely which are following 
// 1.JSON.parse() It is use to parse the string data of javascript into JSON object.
// 2.JSON.stringfy() It is use to parse the json object to string of javascript.

//response.json() is seperate function and it also return a promise .It is used get the data from the body of response.