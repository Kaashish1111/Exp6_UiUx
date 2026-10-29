function processArray(arr) {
    // Remove odd numbers
    let evenNumbers = arr.filter(num => num % 2 === 0);

    // Multiply each remaining number by 2
    let doubled = evenNumbers.map(num => num * 2);

    // Find the sum of the resulting numbers
    let sum = doubled.reduce((total, num) => total + num, 0);

    console.log("Original array:", arr);
    console.log("Even numbers:", evenNumbers);
    console.log("Doubled numbers:", doubled);
    console.log("Sum:", sum);
}

processArray([1, 2, 3, 4, 5, 6]);