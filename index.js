/*
//      ONLY ODDS

// create an input array
//const inputArray = [2, 4, 6, 8, 11, 20, 15, 22];
//const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//const inputArray = [70, 42, 55, 81, 21, 91, 34];
const inputArray = [2, 4, 6, 8, 10, 11, 12];

// create an empty array to push odd number to
const oddNumbers =[];

// loop through the array
for (i = 0; i < inputArray.length; i++) {
    // compare index to index % 2 !== 0 using IF statement
    if (inputArray[i] % 2 !== 0) {
        // push to an new array if applicable
        oddNumbers.push(inputArray[i])
    }
}
console.log(oddNumbers)
*/


/*
//      VOWEL VS CONSONANT


// create an inputString variable
//const inputString = 'hello';
//const inputString = 'ukulele';
//const inputString = 'awesome';
//const inputString = 'onomonopia';
const inputString = 'textbook';

// create a vowelArray
const vowelArray = ['a', 'e', 'i', 'o', 'u'];

// create a vowelCount
let vowelCount = 0;

// loop through the inputString
for (i = 0; i < inputString.length; i++) { // i loops through inputString
    // loop through the vowelArray
    for (j = 0; j < vowelArray.length; j++) { // j loops through vowelArray
        // compare string index to vowel index
        if (inputString[i] === vowelArray[j]) {
            // increment vowel count when applicable
            vowelCount++;
        }
    }
};
// create a consonant count subtracting the vowel count from the length of the string
let consCount = inputString.length - vowelCount;

console.log(`${inputString} has ${consCount} consonants and ${vowelCount} vowels`);
*/


/*
//      REVERSE ARRAY


// create an inputArray
// const inputArray = [1, 2, 3];
// const inputArray = [1, 3, 5, 7, 9, 11];
// const inputArray = [20, 50, 30, 60, 200];
const inputArray = [1, -1, 2, -3, 5, -8, 13];

// create an expected array
const expectedArray = [];

// loop through the array in reverse
for (i = inputArray.length -1; i >= 0; i--) {
    // push the index to a new array
    expectedArray.push(inputArray[i]);
};

console.log(expectedArray)
*/



//      FIZZ BUZZ


// create empty array for the count to 100
const oneHundred = [];

// create a for loop that prints a number from 1 - 100
for (i = 1; i <= 100; i++) {
    // push to an empty array
    oneHundred.push([i]);
};

// use another for loop to iterate through the count array
for (j = 0; j < oneHundred.length; j++) {
    // compare if number is divisable to 3 AND 5 first
    if (oneHundred[j] % 3 === 0 && oneHundred[j] % 5 === 0) {
        // splice to the count array to replace the index
        oneHundred.splice(oneHundred[j] - 1, 1, 'FizzBuzz');

        // then 3
    } else if (oneHundred[j] % 3 === 0) {
        oneHundred.splice(oneHundred[j] - 1, 1, 'Fizz');

        // then 5
    } else if (oneHundred[j] % 5 === 0) {
        oneHundred.splice(oneHundred[j] - 1, 1, 'Buzz');
    };
};

console.log(oneHundred);

