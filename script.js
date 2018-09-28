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