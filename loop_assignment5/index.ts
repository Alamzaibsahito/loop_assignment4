// 5.Exploring Arrays with Loops(Using loop )


// Step 1: Create an empty array
let numberArray:number[] = [];

// Step 2: Run a loop 10 times, adding a new incrementing value to the array
for (let i = 0; i<=10; i++) {
    numberArray.push(i)
};

// Step 3: Log the array into the console
console.log(numberArray);// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Step 4: Use the for loop to iterate through the array
for (let i = 0; i < numberArray.length; i++) {
    console.log(`Index: ${i}, value : ${numberArray[i]}`);
};

// Using for...of loop to output the value into the console from the array
for (let value in numberArray) {
    console.log(value);
};