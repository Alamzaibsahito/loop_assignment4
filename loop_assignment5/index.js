// 5.Exploring Arrays with Loops(Using loop )
// Step 1: Create an empty array
var numberArray = [];
// Step 2: Run a loop 10 times, adding a new incrementing value to the array
for (var i = 0; i <= 10; i++) {
    numberArray.push(i);
}
;
// Step 3: Log the array into the console
console.log(numberArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Step 4: Use the for loop to iterate through the array
for (var i = 0; i < numberArray.length; i++) {
    console.log("Index: ".concat(i, ", value : ").concat(numberArray[i]));
}
;
// Using for...of loop to output the value into the console from the array
for (var value in numberArray) {
    console.log(value);
}
;
