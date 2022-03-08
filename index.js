const prompt = require('prompt-sync')();
let input = null;

// Prompt for user input
input = prompt(`Please input the number for which program to run: \n (1) for Kulina x Food \n (2) for Find the Dissimilirarity \n (3) for Roman to Integer \n \n Input: `);

switch (input) {
    case '1':
        kulinaXFood();
        break;
    case '2':
        findTheDissimilarity();
        break;
    case '3':
        romanToInteger();
        break;
    default:
        console.log('Unknown command.');
}

function kulinaXFood() {
    console.log('Running Kulina x Food..')

    // Prompt for user input
    length = prompt(`Input length: `);
    let arr = [];

    for (var i = 1; i <= length; i++) {
        // Divisible by 3 and 5
        if (i % 3 == 0 && i % 5 == 0) {
            arr.push("Kulina x Food");
        // Divisible by 3
        } else if (i % 3 == 0) {
            arr.push("Kulina");
        // Divisible by 5
        } else if (i % 5 == 0) {
            arr.push("Food");
        // The rest, as string
        } else {
            arr.push(i.toString());
        }
    }
    return console.log(arr);
}

function findTheDissimilarity() {
    console.log('Running Find the Dissimilarity..')

    // Prompt for user input
    str1 = prompt(`Input first string: `);
    str2 = prompt(`Input second string: `);

    // Length validation
    if (str1.length > str2.length) { 
        return console.log('Invalid inputs, first string cannot be longer than second string');
    }

    // Find all the same characters between both, replace it to ""
    for (var i = 0; i < str1.length; i++) {
        // Character content validation
        if (str2.indexOf(str1[i]) === -1) {
            return console.log('Invalid inputs, second string must have shuffled characters from first string');
        }
        str2 = str2.replace(str1[i], "");
    }
    return console.log(`Output:`, str2); 
}

function romanToInteger() {
    console.log('Roman to Integer..')

    // Store roman data as map
    const myMap=new Map();
    myMap.set('I', 1);
    myMap.set('V', 5);
    myMap.set('X', 10);
    myMap.set('L', 50);
    myMap.set('C', 100);
    myMap.set('D', 500);
    myMap.set('M', 1000);

    input = prompt(`Input roman string: `);
    var result = 0;
    if(input) {
        var splitStr = input.split('');
        splitStr.forEach(function(e, i) {
            result += myMap.get(e) < myMap.get(splitStr[i+1]) ? -myMap.get(e) : myMap.get(e); 
            console.log(result)
        });
    }
    return console.log(result);
}
