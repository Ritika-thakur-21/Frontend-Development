// !-- Array destructuring


// !-- Extracting elements from array and storing inside variable...
//!-- we can give any variable name

// let marks = [10,20,30,40];
// console.log(marks[2]);

// let [a,b,c]=marks;
// console.log(b);

// let [x,,z] = marks;
// console.log(x);
// console.log(z);


// !-- Object Destructuring
// * extracting properties from an object and storing inside variable
// ~ we need to give same name for variable which we used in object properties

// let person = {
//     name: 'Ritika',
//     city: 'Hamirpur'
// }
// let{name,city}=person;
// console.log(name);
// console.log(city);

 
// & spread & rest (...)
// ^ if it is rhs than it is spread , if it is lhs than it is rest
// let week1 = [10,20,30];

// let week2 = [30,40,50];

// let combine = [...week1,...week2] //? spread
// console.log(combine);


// !-- rest

// let marks = [10,20,30,40,50,60,70,80,100,22,43,35]
// let [a,b,...c] = marks
// console.log(c);


// !-- spread in Object

// let person = {
//     name: 'ritika',
//     city: 'hp'
// }

// let updatedPerson={
//     ...person,
//     country:'india'
// }
// console.log(updatedPerson);


// !-- rest in Object

// let user = {
//     userName: 'sanat',
//     role: 'admin',
//     salary: 9999999
// }

// let {userName,...extra} = user;
// console.log(extra);


// !-- rest in function

// function add(a,b,...c){
//     console.log(c);
// }
// add(10,20,30,40,50,60,70)

// !-- spread in function

let marks = [10,20,30,40,50,60,70,80]

function add(a,b,c,d,e,f){
    console.log(a+b+c+d+e+f);
    
}
add(...marks)