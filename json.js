//structured data 
student={name:"Rohit", age:25, city:"Pune"};

// JSON.stringify() converts a JavaScript object into a JSON string
let jsonString = JSON.stringify(student);
console.log(jsonString); // '{"name":"Rohit","age":25,"city":"Pune"}'


// JSON.parse() converts a JSON string into a JavaScript object
let jsonObject = JSON.parse(jsonString);
console.log(jsonObject); // { name: 'Rohit', age: 25, city: 'Pune' }


// JSON.stringify() can also handle arrays      
let jsonArray = JSON.stringify([1, 2, 3, 4, 5]);
console.log(jsonArray); // '[1,2,3,4,5]'    
    

// JSON.parse() can convert a JSON string back into an array
let parsedArray = JSON.parse(jsonArray);
console.log(parsedArray); // [ 1, 2, 3, 4, 5 ]


// JSON.stringify() can handle nested objects   
let nestedObject = {
    name: "Rohit",
    age: 25,
    address: {
        city: "Pune",
        state: "Maharashtra"
    }
};
let nestedJsonString = JSON.stringify(nestedObject);
console.log(nestedJsonString); // '{"name":"Rohit","age":25,"address":{"city":"Pune","state":"Maharashtra"}}'
