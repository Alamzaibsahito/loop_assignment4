// 4.Exploring Objects with for...in Loop

// Step 1: Create a simple object with three items

let myObject = {
    item1:"iphone 14 pro max",
    item2:"samsung S24 Ultra",
    item3:"Oppo Reno 8 pro",
}

// Step 2: Use a for...in loop to get properties' names and values from the object
for (let value in myObject) {
    console.log(`value: ${value},${myObject[value]}`);
}