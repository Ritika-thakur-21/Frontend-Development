// !-- named function

// function add(a,b){
//     console.log(a+b);
// }
// add(10,40);

// function add(a=10,b=20){
//     console.log(a+b);
// }
// add(10,40); //this actual argument will be taken by function


// !-- anonymous function / un-named function

// (function (a,b){
//     console.log(a+b);
// } (10,20) )


// !-- IIFE (Immidiate invoke functions expression)

// (function (a,b){
//     console.log(a*b);
    
// }) (2,2)

// !-- function expression (Storing function inside variable)

// let div = function (a,b){
//     console.log(a/b);
// }
// div(40,5)

// !-- Higher order function & callback function

// !-- HigherOrder Function : Function which accept another function as a parameter.

// !-- Callback Funtion : Function which pass as a argument to another function.

// function hof(name, clb){
//     console.log(name);
//     clb();
// }
// function callback(){
//     console.log('i am from callback function');
    
// }
// hof('Ritika',callback)

// !-- Arrow Function

// !-- it is a shorter way to create a function
// !-- no need to use function keyword
// !--

// let mult = (a,b) => {
//     console.log(a*b);
    
// };
// mult(2,2)


// !-- if arrow function is accepting only 1 parameter no need to write paranthesis
// !-- if arrow function conatins only 1 statement inside it we can skip curly brackets
// !-- if arrow function contains only one statement and we should not use curly bracket than only arrow function can return values imlicitly

// let mult = a => {
//     console.log(a*a);
    
// }

// let mult = a => console.log(a*a);

// !-- explicit return

// function add(a,b){
    // return a+b;
//     console.log(a+b);
    
// }
// let res = add(10,40);
// console.log(res);

// console.log(add(50,60));

// add(100,200)

// !-- implicit return (it only available for arrow function)

// let mult = (a,b) => a*b;
// let res = mult(40,5);
// console.log(res);


// !-- nested function

// function parent(name,city){
//     console.log(name);
//     function child(){
//         console.log(city);
        
//     }
//     child();
// }
// parent('shusant','Bangalore');


// !-- closure

// console.log('start');

// function parent(name,city){
//     console.log(name);
//     function child(){
//         console.log(city);
        
//     }
//     child();
// }
// parent('ritika','hp')
// console.log('end');


// !-- function currying

// function outer(a){
//     let name = 'ritika';

//     return function inner(b){
//         console.log(name);
        
//         return function innerMost(c){
//             console.log('i am from lpu');
//             console.log(a+b+c);
            
//         }
//     }
    
// }
// outer(10)(20)(30)

// !-- currying in arrow function

let mult = a=>b=>c=>a*b*c;

let res = mult(10)(2)(3);
console.log(res);
