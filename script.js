// The main idea is to count all the occuring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

// What if the string is empty ? Then the result should be empty object literal { }

function count (string) {  
    let newString = string.split('')
    let result = {}
    for (let i = 0; i < newString.length; i++) {
        if (result[newString[i]]) {
            result[newString[i]] += 1
        } else {
            result[newString[i]] = 1
        }
    }
    return result
}

count('asdaljakdl')


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(integers){
    let odd = []
    let even = []
    integers.forEach(e => { e % 2 === 0 ? even.push(e) : odd.push(e) })
    return odd.length > 1 ? even[0] : odd[0]
}

findOutlier([2,4,6,8,9])


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// A rectangle can be split up into a grid of 1x1 squares, the amount of which being equal to the product of the two dimensions of the rectangle. Depending on the size of the rectangle, that grid of 1x1 squares can also be split up into larger squares, for example a 3x2 rectangle has a total of 8 squares, as there are 6 distinct 1x1 squares, and two possible 2x2 squares. A 4x3 rectangle contains 20 squares.

// Your task is to write a function findSquares that returns the total number of squares for any given rectangle, the dimensions of which being given as two integers with the first always being equal to or greater than the second.

function findSquares(x,y){
let t = x - y
    return y * (y + 1) * (2 * y + 1) / 6 + t * (y * ( y + 1) / 2)
}
findSquares(10, 6)




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// # Counting 1: I Want Some Subsets, Not All!

function f(n) {
    var m = (Math.pow(2,n)) - 1

    return m
}

f(20)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

function rental_car_cost(d) {
    let total = 0
    for (let i = 0; i <= d; i++) {
        if (i >= 7) {
           total = 40*i-50  
        } else if (i >= 3 && i < 7 ) {
           total = 40*i-20 
        } else {
            total = 40*i
        }
    }
    return total
}




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// In this kata, you must create a digital root function.

// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

function digital_root(n) {
    let number = n.toString().split('')
    var sum = 0
    for ( var i = 0; i < number.length; i++) {
        sum += +number[i]
    }
    if (sum.toString().split('').length > 1) {
        let num = sum.toString().split('');
        var tarkim = 0;
        for (var j = 0; j < num.length; j++) {
            tarkim += +num[j]
        }
        sum = tarkim
    }
    return sum
}
digital_root(45687);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

function iqTest(numbers) {
    let even = []
    let odd = []
    var num = 0
    numbers.forEach(e => e % 2 === 0 ? even.push(e) : odd.push(e))
    if (odd.length === 1 ) {
        numbers.forEach((e,i) => e === odd[0] ? num = i+1 : null)
    } else if ( even.length === 1) {
        numbers.forEach((e,i) => e === even[0] ? num = i+1 : null)
    }
    return num
}
iqTest([2,2,2, ' ',2,2,4,4,4, 3]);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// For "x", determine how many positive integers less than or equal to "x" are odd but not prime. Assume "x" is an integer between 1 and 10000.

// Example: 5 has three odd numbers (1,3,5) and only the number 1 is not prime, so the answer is 1

// Example: 10 has five odd numbers (1,3,5,7,9) and only 1 and 9 are not prime, so the answer is 2

function oddNotPrime(n){
    
    var newArr = []
    for (var counter = 0; counter <= n; counter++) {
        var notPrime = false;
        for (var i = 2; i <= counter; i++) {
            if (counter%i===0 && i!==counter) {
                notPrime = true;
            }
        }
        if (notPrime === true) {
            newArr.push(counter)
        }
    }
    let final = newArr.filter(e => e % 2 !== 0)
    return final.length + 1
  }
oddNotPrime(10)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// You will be given an vector of string(s). You must sort it alphabetically (case-sensitive!!) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

function twoSort(s) {
    let words = s.sort()
    let word = []
    let answer = ''
    for ( let i = 0; i < words[0].split('').length; i++) {
        if (i === words[0].split('').length-1) {
            word.push(words[0].split('')[i])
        } else {
            word.push(words[0].split('')[i] + '***')
        }
    }
    return word.join('')
}

twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Write a program that finds the summation of every number between 1 and num. The number will always be a positive integer greater than 0.

var summation = function (num) {
    let sum = 0
    for ( let i = 0; i <= num; i++) {
        sum += i
    }
    return sum
  }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

function removeSmallest(numbers) {
    if (numbers.length < 2) {
        return []
    }
    var num = numbers[0]
    var index = 0
    for (var i = 0; i < numbers.length; i++) {
       if (num > numbers[i]) {
        num = numbers[i]
        index = i
       }
    }
    var answer = numbers.filter((el, i) => i !== index)
    return answer
}

removeSmallest([10,2,4,6,5,1,3])


/////////////////////////////////////////////////////////////////////////////////////////////////

// The marketing team is spending way too much time typing in hashtags.
// Let's help them with out own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

function generateHashtag (str) {
    if (str === '') {
        return false
    }

    var lower = str.split(' ');
    var stringg = []
    for ( let i = 0; i < lower.length; i++) {
        var upper = lower[i].split('').map((e,i) => i===0 ? e.toUpperCase() : e).join('')
        stringg.push(upper)
    }
    stringg.unshift('#')

    if (stringg.join('').length > 140) {
        return false
    } else {
        return stringg.join('')
    }
  }

generateHashtag('asd fasf asdf')

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// You are given an input string.

// For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

// But will your code be performant enough?

function numericals(s){
    let string = s.split('')
    let obj = {}
    var result = []

    for (var i = 0; i < string.length; i++) {
        if (obj.hasOwnProperty(string[i])) {
            obj[string[i]] += 1
            result.push(obj[string[i]])
        } else {
            obj[string[i]] = 1
            result.push(obj[string[i]])
        }
    }
    return result
}
numericals('Hello, World')


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]
// We want our function to return:

// -1 if the board is not yet finished (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw).
// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

function isSolved(board) {
    let empty;
    for ( let i = 0; i < board.length; i++) {
        console.log(board[i])
        for (let m = 0; m < board[i].length; m++) {
            console.log(board[i][m])
            if (board[i][m] === 0) {
                empty = true
            }
        }
    }

    if (board[0][0] === 1 && board[1][1] === 1 && board[2][2] === 1) {
        return 1
    } else if (board[0][1] === 1 && board[1][1] === 1 && board[2][1] === 1) {
        return 1
    } else if (board[0][2] === 1 && board[1][1] === 1 && board[2][0] === 1) {
        return 1
    } else if (board[0][0] === 1 && board[0][1] === 1 && board[0][2] === 1) {
        return 1
    } else if (board[1][0] === 1 && board[1][1] === 1 && board[1][2] === 1) {
        return 1
    } else if (board[2][0] === 1 && board[2][1] === 1 && board[2][2] === 1) {
        return 1
    } else if (board[0][0] === 1 && board[1][0] === 1 && board[2][0] === 1) {
        return 1
    } else if (board[0][1] === 1 && board[1][1] === 1 && board[2][1] === 1) {
        return 1
    } else if (board[0][2] === 1 && board[1][2] === 1 && board[2][2] === 1) {
        return 1
    } else if (board[0][0] === 2 && board[1][1] === 2 && board[2][2] === 2) {
        return 2
    } else if (board[0][1] === 2 && board[1][1] === 2 && board[2][1] === 2) {
        return 2
    } else if (board[0][2] === 2 && board[1][1] === 2 && board[2][0] === 2) {
        return 2
    } else if (board[0][0] === 2 && board[0][1] === 2 && board[0][2] === 2) {
        return 2
    } else if (board[1][0] === 2 && board[1][1] === 2 && board[1][2] === 2) {
        return 2
    } else if (board[2][0] === 2 && board[2][1] === 2 && board[2][2] === 2) {
        return 2
    } else if (board[0][0] === 2 && board[1][0] === 2 && board[2][0] === 2) {
        return 2
    } else if (board[0][1] === 2 && board[1][1] === 2 && board[2][1] === 2) {
        return 2
    } else if (board[0][2] === 2 && board[1][2] === 2 && board[2][2] === 2) {
        return 2
    } else if ( empty === true ) {
        return -1
    } else {
        return 0
    }
  }

isSolved([[2,1,1], [2,1,2], [2,2,1]])

///////////////////////////////////////////////////////////////////////

// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

function parse( data ){
    let letter = data.split('')
    let answerArr = []
    let num = 0

    for (let i = 0; i < letter.length; i++) {
        if ( letter[i] === 'i') {
            num += 1
        } else if ( letter[i] === 'd') {
            num -= 1
        } else if ( letter[i] === 's') {
            num *= num
        } else if ( letter[i] === 'o') {
            answerArr.push(num)
        }
    }
    return answerArr
}

console.log(parse('iiisdoso'))


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Write a function that takes an array of values and moves all elements that are zero to the end of the array, otherwise preserving the order of the array. The zero elements must also maintain the order in which they occurred.

// For example, the following array

// [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]

// is transformed into

// [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]

// Zero elements are defined by either 0 or "0". Some tests may include elements that are not number literals.

// You are NOT allowed to use any temporary arrays or objects. You are also not allowed to use any Array.prototype or Object.prototype methods.


function removeZeros(array) {
    // Sort "array" so that all elements with the value of zero are moved to the
    // end of the array, while the other elements maintain order.
    // [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
    // Zero elements also maintain order in which they occurred.
    // [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]
    
    // Do not use any temporary arrays or objects. Additionally, you're not able
    // to use any Array or Object prototype methods such as .shift(), .push(), etc
    
    // the correctly sorted array should be returned.
    

    let newArr = []
    let answer = array.filter( e => {
        return e !== 0 && e !== '0'
    })
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0 || array[i] === '0') {
            newArr[newArr.length] = array[i]
        }
    }
    if (newArr.length > 0) {
        for ( let m = 0; m < newArr.length; m++) {
            answer[answer.length] = newArr[m]
        }
    }
    return answer
  }

removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, '0', 0, 19, 14])
