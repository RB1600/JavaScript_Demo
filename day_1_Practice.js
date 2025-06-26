//Task1 :
/*
Q1. Create a class User with 2 properties, name & email. It also has a method called viewData() that allows user to view website data.*/
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        return `Name: ${this.name}, Email: ${this.email}`;
    }
}
let student1 = new User("Rohit Bansode", "rohitbansode@gmail.com");
console.log(student1.viewData());


/*Q2.*/
let Data = "Secret Data";
class Users {
    constructor(name, email){
        this.name=name;
        this.email=email;
    }
    viewData(){
       console.log("data =", Data);
    }

}
class Admin extends Users{
    constructor(name, email) {
        super(name, email);  // Call the constructor of the parent class
    }
    editData(){
      Data = "Edited Secret Data";
    }
}
let stud = new Users("Rohit Bansode", "rohitbansode16@gmail.com"); // Creating an instance of Users
let stud1 = new Admin();  // Creating an instance of Admin
console.log(stud.viewData());  // Viewing data using Users instance
stud1.editData();  // Editing data using Admin instance

console.log(Data);  // Displaying the edited data