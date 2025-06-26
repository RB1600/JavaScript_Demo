//stack
let stack = [];
console.log(stack);
// Push elements onto the stack
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);
// Pop elements from the stack
let poppedElement1 = stack.pop();  console.log(stack);// 3
let poppedElement2 = stack.pop();  console.log(stack);// 2  
let poppedElement3 = stack.pop(); console.log(stack); // 1
// Check if the stack is empty
let isStackEmpty = stack.length === 0; // true  
console.log(isStackEmpty);
// Peek at the top element of the stack without removing 
let topElement = stack.length > 0 ? stack[stack.length - 1] : null; 
console.log(topElement);// null (since the stack is empty)
// Display the results