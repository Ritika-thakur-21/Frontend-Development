// !-- promise
// &--  promise is an object which represent eventual completion or failure of an asynchronous task

// ?-- 3 states in promise
//^ 1. pending
//^ 2. fullfiled
//^ 3. rejected


let myPromise = new Promise((res,rej)=>{
    let pizzaReady=false;
    if(pizzaReady){
        res('Pizza is ready')
    }
    else{
        rej('Pizza is not ready')
    }
})
console.log(myPromise);

myPromise
.then(t=>console.log(t))
.catch(c=>console.log(c))
.finally(()=>console.log('I am finally'))