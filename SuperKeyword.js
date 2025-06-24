//super keyword is used to access properties and methods of an object’s parent class.
// It is commonly used in inheritance to call the constructor of the parent class or to access methods that are overridden in the child class.
class person {
    consrtuctor(name){
this.name = name;
    }
    eat(){
        return "Eating food";
    }

}
class Engineer extends person{
    constructor(name){
super(name); // Call the parent class constructor with a name  
this.name = name; // Set the name property for the Engineer class
    }
    Work(){
        return "Working on projects";
    }

}
let obj = new Engineer("rohit");
let obj1 = new person();
console.log(obj.Work());
console.log(obj.eat()); // Output: Eating food
console.log(obj.Work()); // Output: Working on projects
console.log(obj.name); // Output: rohit
console.log(obj); // Output: Engineer { name: 'rohit' }
// The super keyword allows the Engineer class to inherit properties and methods from the person class.
// In this example, the Engineer class can access the eat method from the person class and also has its own Work method.
// The super keyword is used to call the constructor of the parent class (person) when creating an instance of the Engineer class.
// This ensures that the name property is properly initialized in the parent class before being used in the child class.
// The output shows that the Engineer instance can access both the eat method from the person class and its own Work method, demonstrating the use of inheritance and the super keyword.
// The super keyword is essential for maintaining the relationship between parent and child classes in JavaScript, allowing for code reuse and organization in object-oriented programming.