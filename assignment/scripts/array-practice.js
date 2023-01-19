console.log('****** Array Practice *******');

// 1. Creating arrays
console.log('--- 1. Practice creating arrays ---');

let bagel = ['bacon', 'butter', 'jelly'];
let burger = ['bun', 'lettuce', 'meat'];
let tanzanite = ['assignment1', 'assignment2', 'assignment3'];


// Example: Array of animals

let animalArray = ['fish', 'cat', 'bird', 'dog'];
console.log('Animals are: ', animalArray);

// 1.a. TODO: Make an array with some favorite foods

let favoriteFood = ['Pizza', 'Burgers', 'HotDogs', 'Bagels', 'Oatmeal']

// 1.b. TODO: Log your array of foods to the console with a message, similar 
//      to the example above

console.log( 'My favorite foods are:', favoriteFood)


// 2. Array.length - tells you how many items are in the array

console.log('--- 2. Length of an array ---');


// Example: How many animals are in the array? 

console.log('Number of animals:', animalArray.length);  // not sure if this was referencing the food array or the animal array itself

// 2.a. TODO: Log to the console the number of foods in your array

console.log(favoriteFood.length)     

// 3. Accessing array items

console.log('--- 3. Accessing items in an array ---');

// Example: Log the first animal from the array using it's array index

console.log('First animal is', animalArray[0])

// 3.a. TODO: Log the second animal in the array 

console.log('The second animal is', animalArray[1]);

// 3.b. TODO: Log the last animal in the array using it's array index 

console.log('The last animal is', animalArray[3]); 

// 3.c. (STRETCH) TODO: Log the last animal by using the array length, 
//      instead of the exact index number of the last item

console.log('The last animal is', animalArray[animalArray.length -1]);

// 4. Adding & Removing Array Items

console.log('--- 4. Adding and removing array items ---');

// Example: Add an animal to the end using Array.push

animalArray.push('penguin');
console.log('Added an animal to end,', animalArray);

// 4.a. TODO: Add a new food at the end of your array & log the array

favoriteFood.push('Eggs');
console.log('Added a favorite food to the end', favoriteFood)

// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();                     // for pops why do we leave the array empty here?
console.log('Removed the last animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.b. TODO: Remove the food at the end of your array & 
//      log both the food removed and the updated array

let removedFood = favoriteFood.pop();
console.log('Removed the last favorite food', removedFood);
console.log('The foods are now', favoriteFood);


// Example: Add an animal to the beginning using Array.unshift
animalArray.unshift('walrus');
console.log(`Added an animal to beginning: ${animalArray}`);     // Why do we use the backticks and $ again?

// 4.c. TODO: Add a food at the beginning of the array & log the array

favoriteFood.unshift('Yogurt');
console.log(`Added a favorite food to the beginning: ${favoriteFood}`);

// Example: Remove the first animal using Array.shift
removedAnimal = animalArray.shift();
console.log('Removed the first animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.d TODO: Remove the food at the beginning of your array & 
//     log both the food removed and the updated array

removedFood = favoriteFood.shift();
console.log('Removed the first food', removedFood);
console.log('The foods are now', favoriteFood);


// 4.e (STRETCH) TODO: Replace the second food in your array
//      with another one of your favorite foods.
//      Then log the updated array.

favoriteFood = ['Pizza', 'Burgers', 'HotDogs', 'Bagels', 'Oatmeal']
favoriteFood.splice(1, 0, 'Eggs');
console.log(favoriteFood);

// 4.f (STRETCH) TODO: Sort your favoriteFoods array
//     in reverse alphabetical order. Log the array.

favoriteFood.sort();
console.log(favoriteFood);
let reversedFood = favoriteFood.reverse();
console.log(reversedFood);

// 4.g (STRETCH) TODO: Convert your array to a string
//     putting the word "and" between each item.
//     eg "tacos and pizza and pasta". Log the string.

foodstring = favoriteFood.join(' and ');
console.log(foodstring);






// EXAMPLE OF WHAT COMPUTER RUNS

// console.log(colors[0])
// console.log(colors[1])
// console.log(colors[1])

// 4.h (STRETCH) TODO: Make a new array that combines 
//     the favorite foods array with the animals array.
//     Then log the new array.
//     It should look something like:
//     ['pizza', 'pasta', 'fish', 'cat', 'bird', 'dog']








// 3a Loops practice during class
// let food = ['salad', 'pizza', 'chicken'];
// let max = food.length;
// let start = 0;
//
// while(start < max) { //condition that will end loop
//    console.log(food[start]);
//    start += 1; // to avoid infinite loop
//}


// INSTRUCTOR EXAMPLES FOR 4G

           //  0         1         2
let colors = ['yellow', 'orange', 'green']; // last index in array is always length -1
// 3 part for of loop
let colorText = ''; 
let colorIndex = 0;

for (let i = 0; i < colors.length; i+= 1 ) {
    console.log(colors[i]);
    // if we are the last item...
    if (i === colors.length - 1) {
        colorText += colors[i];
    }   else {
        colorText += `${colors[i]} and `;
    }
}
console.log(colorText);   // 'yellow and orange and green and'

// doing it with for of loop

for (let color of colors) {
    if(colorIndex === colors.length -1) {
        colorText += color;
    } else {
        colorText += color + ' and ';
    }
    colorIndex += 1;
}
