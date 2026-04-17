export {};
// console.log("Good Morning TS...");
// !-- Type Inference
// !-- automatically ts detect which type of variable based on value which u stored inside variable
// let a = 10;
// a = 20;
// let b = 'Ram';
// b= 20
// let marks = undefined;
// marks=10
// marks='a'
// let child = null;
// child=1;
// child='sr';
// !-- Type Annotation
// let username:string = 'Ritika'
// username = 21;
// let marks:number = 54;
// let isAvailable:boolean = true
// console.log(marks,isAvailable);
// !-- 
// let a:undefined=undefined;
// let b:null =null ;
// console.log(a);
// console.log(b);
// b=30;
// a=10;
// !-- function 
// function add(a:number,b:number){
//     console.log(a+b);
// }
// add(10,20)
// console.log('hello');
// !------------
// function add(a:number,b:number):number{
//     return a+b;
// }
// let res = add(10,20)
// console.log(res);
// !--------------------
// function add(a:number,b:number):void{
//     console.log(a+b);
// }
// add(10,50)
// !------------------------
// function add(a:string, b:string): string {
//     return a + b;
// }
// let res = add("hii ", "world");
// console.log(res);
// !--------------------
// function add(a:number,b:number,c?:number):number{
//     return 4
// }
// let res =add(10,20);
// console.log(res);
// !----------------- Union
// function userId(a:number|string){
//     console.log(a);
//     if(typeof a === 'string'){
//         console.log(a.toUpperCase());
//     }
//     else{
//         console.log(a);
//     }
// }
// userId('ritika') 
// !-- Array
// let arr = [10,20,'ric',true]
// console.log(arr);
// let arr:string[] = ['hii','helo','bye']
// console.log(arr);
// let mixarr:(string|number)[] = [1,2,'hii','bye']
// console.log(mixarr);
// !-- readonly
// let tpl:readonly string[] = ['a','b','c'];
// console.log(tpl);
// tpl.push('z')
// !-- tuple
// let person:[string,number,boolean]=['ric',12,true]
// console.log(person);
// !-- Object
// let person = {
//     username: 'ritika',
//     marks:45
// }
// console.log(person);
// !--- nested object
// let person:{
//     readonly username:string;
//     marks:number;
//     address:{
//         city:string;
//         pincode:number;
//     }
// } = {
//     username:'ritika',
//     marks:99,
//     address:{
//         city:'Hamirpur',
//         pincode:177000
//     }
// }
// console.log(person);
// console.log(person.username='aakash');
// !-- Type Alias
// type id = number;
// let aadhar:id = 12345678;
// type name = string;
// let user:name = "qwer";
// !-- type alias with type union
// type check = string|boolean;
// let isEligible:check = true
// let isAvailabe:check = 'not'
// type order = 'pending' | 'accepted' | 'rejected';
// let myOrder:order = 'pending'
// !--  type alias in Array
// type marks = number[];
// let marksArr:marks = [23,43,22,44,12];
// !-- type alias in object
// type students = {
//     username: string;
//     age: number;
//     isPass : boolean;
// }
// let ritika:students = {
//     username : 'ric',
//     age: 21,
//     isPass: true
// }
// let ashi:students = {
//     username: 'ashi',
//     age: 23,
//     isPass: true
// }
// !-- intersection with type alias
// type student = {
//     name : string;
// }
// type intern = {
//     salary : number;
// }
// type employee = student & intern;
// let newJoinee:employee = {
//     name: 'ritika',
//     salary: 90000
// }
// !-- unknown
// let a:unknown;
// a=10;
// a='ric';
// a=true;
// if(typeof a === 'string'){
//     console.log(a.toUpperCase());
// }
// else{
//     console.log(a);
// }
// !-- interface (used only in object)
// interface person{
//     username:string;
//     marks:number;
//     address:{
//         country:string;
//         pin:number;
//     }
// }
// let subodh:person = {
//     username:'subodh',
//     marks:70,
//     address:{
//         country:'India',
//         pin:1234
//     }
// }
// !-- never
// function infinite():never{
//     return 4;
// }
