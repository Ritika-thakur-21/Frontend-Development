// !-- 

// console.log('start');

// for(let i=0;i<=500;i++){
//     console.log(i);
    
// }
// console.log('end');


// !-- setTimeout() 

// console.log('start');

// setTimeout(()=>{
//     console.log('hii');
    
// },2000)
// console.log('end');



// !-- setInterval()

// console.log('start');

// setInterval(()=>{
//     console.log('Hello');
    
// },2000)
// console.log('end');


// !-- clearInterval() & clearTimeout()

console.log('start');

let greet = setInterval(()=>{
    console.log("Stop");
    
},1000)
setTimeout(()=>{
    // clearInterval(greet)
    clearTimeout(greet)
},3000)

console.log('end');
