// !-- Object

// let person = {
//     name: 'sanat',
//     city: 'jalandhar',
//     age: 21,
//     isMarried: true,
//     skills: ['java','dsa','fullstack','pyhton'],
//     greet: ()=>{
//         console.log('Hello everyone...');
        
//     }
// }
// console.log(person);

// person.city = 'Punjab';
// person.degree = 'Btech';
// delete person.age;
// console.log(person);


// console.log(person.name);
// console.log(person['city']);
// console.log(person['skills']);
// console.log(person.greet());


// !--  Object.Keys()

// let keys = Object.keys(person); 
// console.log(keys);

// !-- Object.values()

// let values = Object.values(person);
// console.log(values);

// !-- Object.entries()

// let enteries = Object.entries(person);
// console.log(enteries);


// !-- seal()

// Object.seal(person);
// console.log(Object.isSealed(person));

// person.name = 'ritika'; // we can modify
// person.country = 'India'; // we can't add any property
// delete person.city; // we can't delete
// console.log(person);


// !-- freeze()

// Object.freeze(person);
// console.log(Object.isFrozen(person));


// person.name = 'subodh'; // we can't modify if object is freeze
// person.country = 'USA'; // we can't modify if object is freeze
// delete person.age; // we can't modify if object is freeze
// console.log(person);

