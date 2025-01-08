console.log("Hello world");
console.log("🚀 This is my first Node project!");
let myVar: number = 3;
let myVar1: number = 32;
myVar += 10; // 13
console.log(`myVar = ${myVar}`);

interface MyInterface {
    myNumber: Number;
    myString: String;
}
let myNewVariable: MyInterface ={
    myNumber: 10,
    myString: 'Hello World!'
}
// ciao da Typescript
console.log(`myNumber = ${myNewVariable.myNumber}`); // 10
console.log(`myString = ${myNewVariable.myString}`); // Hello World!

