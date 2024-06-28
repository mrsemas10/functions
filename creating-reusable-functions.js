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