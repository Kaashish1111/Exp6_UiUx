let arr = [45, 12, 78, 23, 56];

let largest = Math.max(...arr);
let smallest = Math.min(...arr);

let ascending = [...arr].sort((a, b) => a - b);
let descending = [...arr].sort((a, b) => b - a);

console.log("Array:", arr);
console.log("Largest number:", largest);
console.log("Smallest number:", smallest);
console.log("Ascending order:", ascending);
console.log("Descending order:", descending);