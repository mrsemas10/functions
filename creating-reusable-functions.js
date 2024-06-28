// Part 1: Thinking Functionally
// With that in mind, write functions that accomplish the following:
// Take an array of numbers and return the sum.
// Take an array of numbers and return the average.
// Take an array of strings and return the longest string.
// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 

function reverseString(str) {
    const strArray = str.split("");
    const revArray = strArray.reverse();
    const revString = revArray.join("");
    return revString;
}

function reverseString2(str) {
    return str.split("").reverse().join("");
}

function reverseString3(str) {
    let revString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        revString += str[i];
    }
    return revString;
}

function reverseString4(str) {
    if (str === "") return "";
    else return reverseString4(str.substr(1)) + str.charAt(0);
}

function reverseString5(str) {
    return (str === "") ? "" : reverseString5(str.substr(1)) + str.charAt(0);
}

// console.log(reverseString("!dlroW olleH"))
// console.log(reverseString2("!dlroW olleH"))
// console.log(reverseString3("!dlroW olleH"))
// console.log(reverseString4("!dlroW olleH"))
// console.log(reverseString5("!dlroW olleH"))

// Take an array of numbers and return the sum.

function array(x, y, z) {
    let addition = x+y+z;
    return ("the sum of " + x + " and " + y + " and " + z + " is " + addition);
}
let sum= array(5,3,8)
console.log(sum)

// Take an array of numbers and return the average.

function average(x, y, z) {
    let numbers = x+y+z;
    let total = numbers / 3;
    return ("the average of " + x + ", " + y + " and " + z + " is " + total);
}
let avg= average(4,5,6)
console.log(avg)

// Take an array of strings and return the longest string.
const food =['chicken', 'mashed potatoes', 'green beans'];
const longest =[];

for (let f=0; f<food.length; f++) {
    longest[f]= "the longest string is " + food[1];
    console.log(longest[f]);
}

// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
const states = ['ohio', 'utah', 'maine'];
let randomNumber = 4
console.log(states);
states[3]='texas';
states[4]='georgia';
console.log(states);



// Part 2: Thinking Methodically 
// When functions are built into objects, like Arrays, they are referred to as “methods” of those objects. Many methods, including Array methods, require “callback functions” to determine their behavior.
// For the tasks below, use the following data to test your work:
// [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
//  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
//  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
//  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
//  { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

// Use callback functions alongside Array methods to accomplish the following:
// Sort the array by age.
// Filter the array to remove entries with an age greater than 50.
// Map the array to change the “occupation” key to “job” and increment every age by 1.
// Use the reduce method to calculate the sum of the ages.
// Then use the result to calculate the average age.

let csvData = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctors Assistant,26'

//Declare a variable that stores the number of columns in each row of data within the CSV.
let rows = csvData.split('\n').map(row => row.split(','));

//Instead of hard-coding four columns per row, expand your code to accept any number of columns. 
// This should be calculated dynamically based on the first row of data.
let columnCount = rows[0].length;
console.log("Number of columns:", columnCount)

//Store your results in a two-dimensional array.
let resultArray = rows.map(row => {
    if (row.length !== columnCount) {
        throw new Error('Row length does not match')
    }
    return row;
});

//Cache this two-dimensional array in a variable for later use.
let cachedArray = resultArray;
console.log('Two-Dimensional Array:', cachedArray);

let data = [
    ["ID", "Name", "Occupation", "Age"],
    ["42", "Bruce", "Knight", "41"],
    ["57", "Bob", "Fry Cook", "19"],
    ["63", "Blaine", "Quiz Master", "58"],
    ["98", "Bill", "Doctor's Assistant", "26"]
];

// Sort the array by age.

const age = [41, 25, 19, 58, 111]
age.sort();
console.log(age);