//1. let
//let is block-scoped, meaning it works only within the block {} where you define it.
if(true){
  let age = 25;
  console.log(age);
}




//2. const
// const is also block-scoped, like let but in is constant/notchangable.
if(true){
  const name = "India";
  console.log(name);
}


//Even if you use const with arrays or objects, you can change the inside, but not the variable itself:
const person = {name : "Ram",
                age : 25
}
person.name = "Rohit"   //change the name value...
console.log(person);



// 3.var – Old Way before 2015.
//var is function-scoped, not block-scoped.
//Can cause bugs because it doesn't respect block boundaries.
if(true){
  var name = "India";

}
console.log(name);   // Works, but can be risky...

//let variable Update & Redeclaration....
let me = "rohit";
me="Bansode";
console.log(me);
//let me = "Rohit";
//console.log(me);  // SyntaxError: Identifier 'me' has already been declared



  // access
function greet(){
  var n = "Rohit";
  console.log(n);
}
//console.log(n);   //ReferenceError: n is not defined
greet();


if(true){
  var state = "Maharashtra";
  console.log(state);
}
console.log(state);     // accessible in this case out side of the scope as compair to function.