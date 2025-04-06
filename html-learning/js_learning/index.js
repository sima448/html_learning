let x = 30; // x is let, the value of x is not defined

// number type
const y = 40; // x -> VariableName, 40 -> Value - type -> number 
// console.log(x,y)
// x = x+y;
// console.log(x)
// y = y+x;
// console.log(y) 
//x is not defined , y is already constant so we can't change the value of y,


//string type
const name ="john"; // name->VariableName, "john" -> Value - type -> string
let lastName = "Deo";
// console.log(name);
// console.log(lastName);
// console.log(typeof name);

//boolean type
let isFalse =false;
const isTrue = true;
// console.log(isTrue);
// console.log(isFalse);
// console.log(typeof isTrue);

//undefined type
let a;
// console.log(a);// a is undefined
// console.log(typeof a);

//Null type
let x1 = null;
// console.log(x1);
// console.log(typeof x1); // it is the type of exception(object type)

//symbol type
const sym = Symbol("Hello World!");
const a1 = "Hello World!";
const sym1 = Symbol("Hello World!");
console.log(sym1);
console.log(sym);
console.log(a1);
console.log(sym == sym1);// only equal compares two values 
console.log(sym === sym1); // comparison (equal and type)
console.log(typeof sym);// typeof -> symbole
console.log(typeof a1);  // typeof-> string


//Bigint type
const bigInt=12345689344344654567576n;// it prints of the More large value
// console.log(bigInt);
// console.log(typeof bigInt);



//object type
const person ={
    name:"john",
    age: 35,
    isStudent:false,
};
// console.log(person);
// console.log(typeof person);



//array type
const fruits = ['apple',"banana","cherry",'5','45', 'true','null', "undefined"];
// console.log(fruits);
// console.log(typeof fruits); // (object type)it is a exception 

const z = 50;
const v = '50';
// console.log(z);
// console.log(v);
// console.log(typeof z, typeof v);// (number , string)
// console.log(z == v);// true (because value is the same)
// console.log(z === v);// false (because value is same but different type)