// Assignment of the social pilot 
// 'use strict'
//1. Write the program to compare the two object 
// let obj1 = {
//     hair: 'long',
//     beard: true
// };
// let obj2 = {
//     hair: 'long',
//     // beard:false
//     beard: true
// }
//convert the object into string and then compare

// console.log(JSON.stringify(obj1)===JSON.stringify(obj2));


//2. Write the program to convert the string into 2 d array
// let inputStr = 'col1,col2,col3,col4,col5\na,b,e,h,j\nc,d,f,i,k'
// const ans = inputStr.split('\n');
// const keys = ans[0].split(',');
// const values1 = ans[1].split(',');
// const values2 = ans[2].split(',');
// const object1 = {};
// const object2 = {};
// const finalArray = [];
// for (var i = 0; i < keys.length; i++) {
//     Object.defineProperty(object1, keys[i], {
//         value: values1[i]
//     });
//     Object.defineProperty(object2, keys[i], {
//         value: values2[i]
//     });
// }

// finalArray.push(object1);
// finalArray.push(object2);

// console.log(finalArray);

//3.Write a program to convert array of objects to a string.That contain dynamic column
// let inputString = [{ col1: 'a', col2: 'b' }];
// let ansString = '';
// let key;
// let values;
// inputString.forEach((item) => {
//     key = Object.keys(item);
//     values = Object.values(item);
// });
// ansString = `${key.join()}\n${values.join()}`;
// console.log(JSON.stringify(ansString));


// //4.Return all subarrays 
// const arr = [1, 2];

// const answer1 = arr.reduce((acc, curr) => {
//     return acc.concat(acc.map((item) => {
//         // return [curr].concat(item);
//         return item.concat(curr);
//     }));
// }, [[]]);

// console.log("answer1", answer1);
// // console.log(obj5);

// //5. Write the programs to replace the names of multiples objects keys
// let obj3 = {
//     name: 'Gyanendra',
//     job: 'Programmer',
//     age: 22
// }

// let obj4 = {
//     name: 'firstName',
//     job: 'Role'
// }
//making the copy of the above object using spread operator 
// let obj7 = {...obj3};

// for (const [previous, current] of Object.entries(obj4)) {
//     obj3[current] = obj3[previous]
//     delete obj3[previous];
// }

// for (const [previous, current] of Object.entries(obj4)) {
//     obj7[current] = obj7[previous]
//     delete obj7[previous];
// }
// console.log(obj4);
// console.log(obj3);
// console.log(obj7);


//6. Write a program to find out the unique values in element
// let array = [1, 2, 2, 3, 4, 4, 5];
// const result = array.filter((item, index, arr) => {
//     return arr.lastIndexOf(item) === arr.indexOf(item);
// });
// console.log(result);


//7. Regex Expression 
// let regYes =/^y|yes/i;
// let regNo = /^n|no/i;

// function yesNo(inputString1){
//     return regYes.test(inputString1)? true:regNo.test(inputString1)?false:false
// }

// console.log(yesNo('YES'))



//8.Write a program to get a sorted array of object with respect to the properties of the object
// let obj5 = [
//     {
//         name: 'fred',
//         age: 48
//     },
//     {
//         name: 'barney',
//         age: 36,
//     },
//     {
//         name: 'fred',
//         age: 40
//     }
// ];

// obj5.sort((a, b) => {
//     if (a.name === b.name) {
//         return b.age - a.age;
//     }
//     return a.name.localeCompare(b.name);
// });


//9.Write a program to remove the key value pair from an object
// let obj6 = {
//     name: 'Gyanendra',
//     age: 24,
//     Address: 'Ahmedabad'
// }

//making the copy of object obj6 using spread operator
// let obj9={...obj6};
// delete obj9.age;

// console.log(obj6);
// console.log(obj9);


//10.Write a program to convert the 24 hour into 12 hour
// const input = 15;
// let answer ;
// let time = input>12?'PM':'AM';
// console.log(`${input % 12} ${time}` )




// if(input>12 && input<=24){
//     let time = input%12;
//     time==0?answer=`${time} AM`:answer=`${time} PM`;
// }else if(input<=12){
//     answer=`${input} AM`
// }else{
//     console.log('The time is invalid');
// }
// if(answer!=undefined){
//     console.log(answer);
// }

// const obje44 = {};
// Object.defineProperty(obje44,'name',{
//     value:'Margish'
//     ,enumerable:true
// });


// Object.defineProperties(obje44,{
//         address:{
//           value: 'Singrauli',
//           writable:false,
//           enumerable:true
//         },
//         age:{
//             value:44,
//             writable:false,
//             enumerable:true
//         }
//     });

// const sample = {
//     name:'gyanendara',
//     age:55,
// }
// // console.log(obje44);
// const arrayObj = Object.entries(sample)
// const arrayObj2 = Object.entries(obje44)
// console.log(arrayObj);
// console.log(arrayObj2)
// const objArray = Object.fromEntries(arrayObj);
// console.log(objArray);

// console.log(Object.is(sample.name,obje44.name));
// Object.seal(sample)
// Object.freeze(sample)
// console.log(Object.isExtensible(sample));


