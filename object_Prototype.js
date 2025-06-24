/*const person = {
    name:"Rohit",
    age:25,
    addr:"Pune",
    wel: function greet(){
 console.log("hello");
    }
    

};
person.wel();
console.log(person);


const student = {
    fullName: "Rohit Bansode",
    age: 25,
    marks:90.1,
    printMarks: function() {
       // console.log("marks =", this.marks);   // Using this to access the marks property
        return this.marks;
    },
};
console.log(student);
console.log(student.printMarks());

// Object Prototype
console.log(student.toString()); // Using toString method from Object prototype
//How to use prototype using  __proto__
*/
const employee = {
    calcTax(){
        console.log("Tax rate is 10%")
    },
};
const rohit={
    salary: 50000,

}; 
rohit.__proto__ = employee; // Setting employee as the prototype of rohit
return rohit.calcTax(); // Calling the calcTax method from the employee prototype
// Output: Tax rate is 10%