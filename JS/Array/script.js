// !-- Array

// let subject = ['java','os','dsa',10,40,50];
// console.log(subject);

// console.log(subject[5]);

// subject[4] = 'hii';
// console.log(subject);

// !-- property (length)

// console.log(subject.length);


// !-- Methods

// let marks = [10,20,30,40]
// console.log(marks);

// !-- push (add at last)

// marks.push(80);
// console.log(marks);

// !-- pop (remove from last)

// marks.pop();
// console.log(marks);

// !-- unshift (add at first)

// marks.unshift('hii');
// console.log(marks);

// !-- shift (remove from first )

// marks.shift();
// console.log(marks);


// !-- slice()

// let marks = [10,20,30,40]
// console.log(marks);

// let part1 =  marks.slice(-2);
// console.log(part1);


// !-- splice()

// let marks = [10,20,30,40]
// console.log(marks);

// let final = marks.splice(1,2);

// let final = marks.splice(1,2,90,80,'hii','jii');
// console.log(final);

// console.log(marks);


// !-- concat()

// let students = ['sanat','vishwanth','Tanmoy','vaibhav','subodh']
// let marks = [-1,101,42,0,3]

// let allData = students.concat(marks);
// console.log(allData);


// !-- reverse() & join()

// let username = 'sanat';
// console.log(username);

// let res = username.split('').reverse().join('');
// console.log(res);


// !-- map()

// let marks = [40,50,60,70,80]
// console.log(marks);

// let gracemarks = marks.map(m=>console.log(m+10))
// console.log(gracemarks);


// !-- filter

// let marks = [40,50,60,70,80]
// console.log(marks);


// let toppers = marks.filter(a=>a>=70);
// console.log(toppers);

// console.log(marks);


// !-- reduce()

// let marks = [40,50,60,70,80]
// console.log(marks);

// let totalMarks = marks.reduce((acc,cur)=>{
//     return acc+cur;
// },0)
// console.log(totalMarks);

// !-- Array.isArray()

let marks = [40,50,60,70,80]
console.log(typeof marks);

let res = Array.isArray(marks);
