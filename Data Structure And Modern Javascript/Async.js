//setTimeout and setInterval
// setTimeout(()=>{
//     console.log('Here is your pizza');
// },1000);



// const { response } = require("express")

// const interval = setInterval(()=>{
//     console.log('This is a setInterval');
// },2500);

// setTimeout(()=>{
//     clearInterval(interval);
// },10000);



//AJAX is Asyncronous Javascript And XML which is used to make request to any server to get or giving the data .It is very usefull for communication of two differenct application

// const httpRequest = new XMLHttpRequest();   

// function handler(){
//     if(httpRequest.readyState === XMLHttpRequest.DONE){
//         console.log(httpRequest.responseText);
//     }
// }
// httpRequest.onreadystatechange = handler;
// httpRequest.open('GET','https://jsonplaceholder.typicode.com/todos/1');
// httpRequest.send();


// fetch('https://jsonplaceholder.typicode.com/todos/1').then((result)=>{
//     result.json().then((response)=>{
//         console.log(response);
//     })
// })

// fetch('https://restcountries.com/v3.1/name/India').then((result) => {
//     result.json().then((respose) => {
//         console.log(respose);
//     })
// })

// const getCountryData = function (country) {
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//         .then(function (response) {
//             response.json().then(function (data) {
//                 console.log(data);
//             })
//         })
// }



// const getCountryData = () => {
//     var country = 'India';
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//         .then((response) =>
//             response.json()
//             // ,(err) => alert(err) First way to handle the error
//         )
//         .then((result) => {
//             console.log(result);
//             const [data] = result;
//             console.log(data);
//             const neighbour = data.borders[0];
//             if (!neighbour) return;

//             return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
//         })
//         .then((response) =>
//             response.json()
//         )
//         .then((result) => {
//             console.log(result);
//         })
//         .catch((err)=>alert(err));

// }
// // const call = getCountryData('India')
// const button = document.getElementById('poll');
// button.addEventListener('click', getCountryData);
// // getCountryData('India');




//Regular Expression
// let reg = /Harry/g; It is a flag and called global
// let reg = /Harry/i; Case insensitive 
// let reg = /Harry/i; 

// // console.log(reg);
// //  / / this is a regular expression literal

// console.log(reg.source);//it gives the values inside the reg

// //functions to match expression
// let s = 'This is great code with harry and also harry bhai';

// let result = reg.exec(s);//It gives the index of the reg in s if it visible otherwise give null
// // console.log(result);

// let result2 = reg.test(s);
// console.log('line',result2);

// let result3 = s.match(reg);//this give the array of total match of the reg in the string
// console.log(result3);

// let result4 = s.search(reg);// this give the index of the reg in the string
// console.log(result4);

// let result5 = s.replace(reg,'Gyanendra');
// console.log(result5);


// console.log('test start');  
// setTimeout(()=>console.log('0 sec timer'),0);
// Promise.resolve('Resolved promise 1').then(res=>console.log(res));
// console.log('Test end');

//output test start  Resolved promise 1 test end 0 sec timer  //wrong 
//correct output test start,test end,Resolved promise 1, 0 sec timer
//setTimeout and Promise.resolve both will complete at same time but promise will print first because it will go to microtask and setTimout will go to callback queue



//building the promise of lottery

// const lotteryPromise = new Promise(function (res, rej) {
//     setTimeout(function () {
//         if (Math.random() >= 0.5) {
//             res('You won the lottery')
//         } else {
//             rej('You did not won the lottery');
//         }
//     }, 2000);
// });

// lotteryPromise.then((res) => console.log(res)).catch((err) => console.error(err))

// console.log('outside the promise');
//Promise is special object in javascript and it take a excecuter function 

// const wait = function (sec) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, sec * 1000);
//     });
// }

//If we did this using callback then it creates a callback hell which is not good for readablity.
//Promisefying the setTimeout function
// wait(1)
//     .then((res) => {
//         console.log('I waited for 1 second');
//         return wait(2);
//     })
//     .then((res) => {
//         console.log('I waited for 2 second');
//         return wait(3);
//     })
//     .then((res) => {
//         console.log('I waited for 3 second');
//         return wait(4);
//     })
//     .then((res) => console.log('i waited for 4 second'));

//This is simple asynchronous function using callback
// navigator.geolocation.getCurrentPosition(
//     position => console.log(position),
//     err => console.error(err)
// );


//This is same asynchrounous function using promise which simplyfy the code 
// const getPosition = function () {
//     return new Promise(function (resolve, reject) {
//         navigator.geolocation.getCurrentPosition(resolve, reject)
//     });
// }

// const getCurrentPos = new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject)
// });

// console.log('Getting Position')

// getPosition()
//     .then((result) => console.log(result))
//     .catch((error) => console.error(error)).

// getCurrentPos.then((result)=>console.log('position',result)).catch((error)=>console.error(error))

// getPosition().then((result)=>{
//     console.log(result);

//     //we can use destructuring here instead of manually doing --reminder
//     let latitude = result.coords.latitude;
//     let longitude = result.coords.longitude;
//     fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=90a20e3c2c8b4a9e819b745d9029c518`)
//     .then((result)=>result.json())
//     .then((response)=>{
//         console.log(response.features[0].properties);
//         const {country} = response.features[0].properties;
//         console.log(country);
//         fetch(`https://restcountries.com/v3.1/name/${country}`)
//         .then((response)=>{
//             return response.json();
//         })
//         .then((result)=>{
//             console.log(result);
//         })
//     })
//     .catch((error)=>console.error(error))
// });



//Coding Challenge
// const wait = function (sec) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, sec * 1000);
//     });
// }
// const imgContainer = document.querySelector('.image')
// function createImage(img){
//     return new Promise(function(resolve,reject){
//         //create the image element
//         const element=document.createElement('img')
//         element.src = img;
//         element.addEventListener('load',function(){
//             imgContainer.append(element);
//             resolve(element);
//         });

//         element.addEventListener('error',function(){
//             reject(new Error('Image is not loading'));
//         })

//     })
// }
// let currentImage;
// createImage('https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg')
// .then((result)=>{
//     currentImage = result;
//     console.log('image 1 is loaded ');
//     return wait(4);
// }).then(()=>{
//     currentImage.style.display = 'none'
//     return createImage('https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80')
// }).then((img)=>{
//     currentImage = img;
//     console.log('Image 2 is loaded');
//     return wait(4);
// }).then(()=>{
//     currentImage.style.display = 'none';
// }).catch((err)=>{
//     console.log(err);
// })


//Async /Await keyword -Async make the function async and after that you can use the await keyword in the function to stop the execution of the code
//we will write the await keyword whenever we receive any promise and we store that in a variable

// const getPosition = function () {
//     return new Promise(function (resolve, reject) {
//         navigator.geolocation.getCurrentPosition(resolve, reject)
//     });
// }

// const myLocation = async function () {
//     const getMyPosition = await getPosition();
//     const { latitude, longitude } = getMyPosition.coords;
//     const myPosition = await fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=90a20e3c2c8b4a9e819b745d9029c518`);

//     const myPlace = await myPosition.json();
//     const { country } = myPlace.features[0].properties
//     const result = await fetch(`https://restcountries.com/v3.1/name/${country}`);
//     const resp = await result.json();
//     console.log(resp);
//     return `You are in ${country} and the start day of week is ${resp[0].startOfWeek}`
// }
// console.log('Get Ready to get my country');
// const result=myLocation();
// console.log(result);//it will return promise in this case


//first way of recieve anything from asynchronous function and handling them 
// myLocation().then((result)=>console.log(result)).finally(()=>{
//     console.log('Its complete!');
// })


//Second way to handle the data recieve from async funtion 
// (async function () {
//     try {
//         const result = await myLocation()
//         console.log(result);

//     } catch (error) {
//         console.error(error);
//     }
//     console.log('The task is complete');

// })();


//function to get json data
// function getJson(url) {
//     return fetch(url).then((result) => {
//         return result.json()
//     }).then((resp) => {
//         return resp;
//     })
// }

// const get3Countries = async function(c1,c2,c3){
//     try {
//         //These three ajax calls are done one after one and that take lot of times

//         const [data1] = await getJson(`https://restcountries.com/v3.1/name/${c1}`);
//         const [data2] = await getJson(`https://restcountries.com/v3.1/name/${c2}`);
//         const [data3] = await getJson(`https://restcountries.com/v3.1/name/${c3}`);

//         console.log(data2)
//         console.log(data1.capital,data2.capital,data3.capital)


//     } catch (err) {
//         console.log(err);
//     }
// }


// get3Countries('India', 'Britain', 'Canada');


//Important methods of Promise all,allSettled,race,any,reject,resolve,then ,finally
//Promise.all() is used to run multiple ajax call parallely which reduce the time for fetching the api's

// const get3Country = async function (c1, c2, c3) {
//     try {
//         const result = await Promise.all(
//             [getJson(`https://restcountries.com/v3.1/name/${c1}`),
//             getJson(`https://restcountries.com/v3.1/name/${c2}`),
//             getJson(`https://restcountries.com/v3.1/name/${c3}`),]
//         )
//         result.forEach((item) => {
//             console.log(item[0].capital)
//         });
//     } catch (err) {
//         console.log(err);
//     }
// }

// get3Country('USA', 'Britain', 'Canada');



//Promise.race is method of promise which return the first settled result from the various ajax call whether it is resolve or rejected
// (async function () {
//     const res = await Promise.race([
//     getJson(`https://restcountries.com/v3.1/name/India`),
//     getJson(`https://restcountries.com/v3.1/name/Britain`),
//     getJson(`https://restcountries.com/v3.1/name/Canada`),
//     ]);
//     console.log(res[0]);
// })();

//Race is normally used when you want to set a time for fetching the data from api and if the internet is not good then it will run that function which is fast


//Promise.allSettled() it give all the result whether they are rejected or fulfilled .On the other hand in Promise.all() give reject even if one of the promise is rejected.

//Promise.any() It give the result the of any fulffiled promise .Even there are some error ,it will return the first fullfiled promise ,if any 

// Promise.race([
//     // Promise.reject('Rejected'),
//     Promise.resolve('Success1'),
//     Promise.resolve('Success'),
//     Promise.reject('Error'),
//     Promise.resolve('Another')
// ]).then(res => console.log('line',res))
// .catch(err => console.log(err));

// Promise.allSettled([
//     Promise.reject('Rejected'),
//     Promise.resolve('Success1'),
//     Promise.resolve('Success'),
//     Promise.reject('Error'),
//     Promise.resolve('Another')
// ]).then(res => console.log(res))
//     .catch(err => console.log(err));


// Promise.any([
//     Promise.reject('Rejected'),
//     Promise.resolve('Success1'),
//     Promise.resolve('Success'),
//     Promise.reject('Error'),
//     Promise.resolve('Another')
// ])
//     .then(res => console.log(res))
//     .catch(err => console.log(err));


// Coding Challenge 
// let img = ['../Image1.jpg', '../Image2.jpg', '../Image3.jpg', '../Image4.jpg'];
// // let img = ['https://ibb.co/nLYDyDk','https://ibb.co/n7szfnw','https://ibb.co/sF2zjSp'];

// const wait = function (sec) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, sec * 1000);
//     });
// }

// const imgContainer = document.querySelector('.image')
// function createImage(img) {
//     return new Promise(function (resolve, reject) {
//         //create the image element
//         const element = document.createElement('img')
//         element.src = img;
//         element.addEventListener('load', function () {
//             imgContainer.append(element);
//             resolve(element);
//         });

//         element.addEventListener('error', function () {
//             reject(new Error('Image is not loading'));
//         })

//     })
// }
// let currentImage;
//Changing the promise way to async/await function
// const loadNPause = async function () {
//     let result = await createImage('https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg');
//     console.log('image 1 is loaded');

//     await wait(4);
//     result.style.display = 'none';

//     result = await createImage('https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80');

//     console.log('Image 2 is loaded');

//     await wait(4);
//     result.style.display = 'none';
// };
// loadNPause();

// function createText(text){
//     return new Promise(function(resolve,reject){
//         resolve(text);
//     })
// }

// async function loadAll(img) {
//     // for(const text of img){
//     //     const result = await createImage(text);
//     //     console.log(result);
//     // }
//     // console.log("all text are printed");
//     try {
//         let result = img.map(async (item) => {
//             console.log(item);
//             return await createImage(item);
//         });
//         console.log(result);
//     } catch (err) {
//         console.log(err);
//     }

// }

// loadAll(img);

// (async function (){
// const result = await loadAll(['hello','hi','how are you']);
// console.log(result);
// const finalResult = await result;
// console.log(finalResult)
// })();

// loadAll(['hello','hi','how are you'])

//Using of recursion to do some task

// function printName(name,count){
//     if(count==10){
//         return;
//     }
//     console.log(name);
//     return printName(name,count+1);
// }

// printName('Gyanendra',0);