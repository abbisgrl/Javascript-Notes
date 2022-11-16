
const apiCall = async (value) => new Promise((res, rej) => {
    setTimeout(() => {
        res(value)
    }, 1500)
})

console.log('Before for loop');

//This is the best way of handling the promises in javascript using async/await

// (async function() {
//     for (let i = 0; i <= 10; i++) {
//         const res =await apiCall(i)
//         console.log(res);
//     }
// })();

//Top level await is used in module and it is come in es update of 2022
// await (async function (){
//     for (let i = 0; i <= 10; i++) {
//                 const res =await apiCall(i)
//                 console.log(res);
//             }
// })();

//This is a way of handling the promise in for loop

// for(let i =0,p= Promise.resolve();i<10;i++){
//     p = p.then(()=>apiCall(i))
//     .then(()=>console.log(i));
// }

for (let i = 0; i <= 10; i++) {
    apiCall(i).then()
    .then((res)=>console.log(res));
}

console.log('After for loop');

// function showFlags(flags) {

//     let allFlags = [];

//     let allPromises = Promise.each(flags, flag => {

//         return $.getJSON('https://restcountries.eu/rest/v2/alpha/' + flag).then(res => {

//             console.log('Flag: ' + res.flag);

//             return true;

//         });

//     });



//     return allPromises;

// }

// let flags =['AR','CL','CO','PE'];
// showFlags(flags).then(()=>{
//     console.log('All flags finished');
// })




// const main = async () => {
//     // apiCall(123).then(() => ).catch(() => )
//     try {
//         const ans = await apiCall()
//         // line 18
//     } catch (error) {
//         console.log(error);
//     }
// }

// main()
// await Promise.all([
//     apiCall(),
//     apiCall(),
//     apiCall()
// ])




// const obj = undefined;
// const obj = null;
// obj['arr'] = 'gyanendra';
// console.log(obj.name);

// Can not get property of undefined/null
// Can not set property of undefined/null

// const obj = {
//     prop1: 'value1',
//     prop2: "value2",
// }

// obj.prop3 && obj.prop3.asd == 'asd' || Object.assign
