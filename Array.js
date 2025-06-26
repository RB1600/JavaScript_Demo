// Array
let arr = [10,20,30,40,50];
console.log(arr[2]) // Accessing the third element of the array
console.log(arr.length) // Getting the length of the array
// Adding an element to the array
arr.push(60);   
console.log(arr); // [10, 20, 30, 40, 50, 60]
// Removing the last element from the array
arr.pop();  
console.log(arr); // [10, 20, 30, 40, 50]
// Adding an element at the beginning of the array      
arr.unshift(5);
console.log(arr); // [5, 10, 20, 30, 40, 50]
// Removing the first element from the array    
arr.shift();
console.log(arr); // [10, 20, 30, 40, 50    
// Finding the index of an element in the array
console.log(arr.indexOf(30)); // 2-
// Checking if an element exists in the array   
console.log(arr.includes(20)); // true
// Reversing the array
arr.reverse();
console.log(arr); // [50, 40, 30, 20, 10]
// Sorting the array in ascending order
arr.sort((a, b) => a - b);  
console.log(arr); // [10, 20, 30, 40, 50]
// Slicing the array to get a sub-array
let subArray = arr.slice(1, 4); // Gets elements from index 1
console.log(subArray); // [20, 30, 40]
// Splicing the array to remove elements
arr.splice(1, 2); // Removes 2 elements starting from index 1   
console.log(arr); // [10, 40, 50]
// Concatenating two arrays         
let arr2 = [60, 70, 80];
let concatenatedArray = arr.concat(arr2);   
console.log(concatenatedArray); // [10, 40, 50, 60, 70, 80]
// Mapping the array to create a new array with doubled values
let doubledArray = arr.map(x => x * 2);
console.log(doubledArray); // [20, 80, 100] 
// Filtering the array to get elements greater than 20
let filteredArray = arr.filter(x => x > 20);
console.log(filteredArray); // [40, 50]
// Reducing the array to get the sum of its elements
let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 100
// Finding the maximum value in the array
let max = Math.max(...arr); // Using spread operator to find max // [10, 40, 50]
console.log(max); // 50
// Finding the minimum value in the array
let min = Math.min(...arr); // Using spread operator to find min // [10, 40, 50]
console.log(min); // 10
// Checking if the array is empty
let isEmpty = arr.length === 0; 
console.log(isEmpty); // false
// Iterating through the array using forEach
arr.forEach((element, index) => {
    console.log(`Element at index ${index}: ${element}`);
}); // Logs each element with its index
// Finding the first element that satisfies a condition
let firstGreaterThan20 = arr.find(x => x > 20);
console.log(firstGreaterThan20); // 40 (the first element greater than 20)
// Finding the index of the first element that satisfies a condition
let indexOfFirstGreaterThan20 = arr.findIndex(x => x > 20);
console.log(indexOfFirstGreaterThan20); // 1 (the index of the first element greater than 20)
// Checking if all elements satisfy a condition
let allGreaterThan10 = arr.every(x => x > 10);
console.log(allGreaterThan10); // false (not all elements are greater than 10) // Checking if at least one element satisfies a condition
let atLeastOneGreaterThan10 = arr.some(x => x > 10);
console.log(atLeastOneGreaterThan10); // true (at least one element is greater than 10)
// Flattening a nested array
let nestedArray = [[1, 2], [3, 4], [5]];
let flattenedArray = nestedArray.flat();    // Flattening the nested array 
console.log(flattenedArray); // [1, 2, 3, 4, 5]
// Finding the index of an element in a sorted array using binary search
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid; // Element found
        } else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }
       return -1; // Element not found
}   
let sortedArray = [10, 20, 30, 40, 50];
let target = 30;
let index = binarySearch(sortedArray, target);
console.log(index); // 2 (the index of the target element in the sorted array)  
// Finding the intersection of two arrays
function intersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}   
let array1 = [1, 2, 3, 4, 5];
let array2 = [4, 5, 6, 7, 8];
let intersectedArray = intersection(array1, array2);
console.log(intersectedArray); // [4, 5] (elements present in both arrays)  
// Finding the union of two arrays
function union(arr1, arr2) {    
    return [...new Set([...arr1, ...arr2])]; // Using Set to remove duplicates
}
let unionedArray = union(array1, array2);
console.log(unionedArray); // [1, 2, 3, 4,      
// 5, 6, 7, 8] (all unique elements from both arrays)
// Finding the difference between two arrays    
function difference(arr1, arr2) {
    return arr1.filter(value => !arr2.includes(value)); // Elements in arr1 not in arr2
}
let differenceArray = difference(array1, array2);
console.log(differenceArray); // [1, 2, 3] (elements in array1 not in array2)   
// Finding the symmetric difference between two arrays
function symmetricDifference(arr1, arr2) {
    return [...new Set([...arr1.filter(value => !arr2.includes(value)), ...arr2.filter(value => !arr1.includes(value))])];
}
let symmetricDiffArray = symmetricDifference(array1, array2);
console.log(symmetricDiffArray); // [1, 2, 3, 6, 7, 8] (elements in either array but not both)  
// Finding the Cartesian product of two arrays
function cartesianProduct(arr1, arr2) {
    return arr1.flatMap(a => arr2.map(b => [a, b])); // Pairing each element of arr1 with each element of arr2
}   
let cartesianArray = cartesianProduct([1, 2], ['a', 'b']);
console.log(cartesianArray); // [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']] (all combinations of elements from both arrays)
