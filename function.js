// Printing Odd Numbers in an Array using Arrow Function.

let numbers = [1,2,3,4,5,6]  //Initialization of array.
let odd_numbers = numbers.filter((number) => number%2 !=0)  //Piping Arrow Function with filter function.
console.log("Odd Numbers in array",odd_numbers)    


// Printing Sum of all numbers in an array using Arrow Function.

let numbers1 = [1,2,3,4,5,6]    //Initialization of Array
let sum = numbers1.reduce((a,b) => a+b, initialValue=0)     // Piping Arrow Function with reduce function.
console.log("Sum of Numbers",sum)

// Printing Prime Numbers in an array using Arrow Function.

let numbers2 = [1,2,3,4,5,6,7,8,9,10]                       //Initialization of Array
isprime = (number) => 
{
    for(let i =2; i<number; i++)
    {
        if(number%i==0) return false
    }
    return number!==1
}                                                           // Function Definition

let prime = numbers2.filter(number => isprime(number))      // Piping filter with arrow function.
console.log("Prime Numbers",prime)    


// Printing the Palindromes in an array using Arrow Function.

let numbers3 = [121,242,235,246,646]                            //Initializing array.
ispalindrome = (number) =>
{
    reversed_string = number.toString().split("").reverse().join("")    // Converting Number to string and reversing the string.
    reversed_number = parseInt(reversed_string)                         // Converting the reversed string to number.
    if(number === reversed_number) return true                          // Checking Palindrom condition.
}                                                                       // Function Definition.

let palindrome = numbers3.filter((number) => ispalindrome(number))      // Piping filter with arrow function.
console.log("Palindrome Numbers:", palindrome)


// Converting Title Cap of a string array using Arrow Function.

sample = "Program to convert string array to title cap"                 // Initializing Array.
words = sample.split(" ")
totitlecap = (word) => 
{   
    first_letter = word[0]
    titled_letter = first_letter.toUpperCase()
    return(word.replace(first_letter,titled_letter))   
}                                                                      // Function Definition to convert array of strings to titlecap.
titled_word = words.map((word) => totitlecap(word))                    
new_string = titled_word.join(" ")                                     
console.log("Converted String:",new_string)



// Printing Odd Numbers using Anonymous Function and IIFE.

let array = [1,2,3,4,5,6]                                              //Initialization of array.

odd = function(array)                                                  // Anonymous Function.
{
    let odd = array.filter((number) => number%2 !== 0)
    console.log("Odd Numbers using Anonymous Function:",odd)
}
odd(array);      

(function()                                                            // IIFE.
{
    let odd = array.filter((number) => number%2 !== 0)
    console.log("Odd Numbers using IIFE:",odd)
}) ();


// Converting Title Cap of a string Anonymous Function and IIFE.

sample = "Program to convert string array to title cap"                 // Initializing Array.
let title = function()                                                  // Anonymous Function.
{
    let words = sample.split(" ");
    modified = words.map((word) => 
    {
        first_letter = word[0]
        titled_letter = first_letter.toUpperCase()
        return word.replace(first_letter,titled_letter)
    })
    console.log("Converted String using Anonymous Function:", modified.join(" "))
}
title();

(function()                                                  // IIFE.
{
    let words = sample.split(" ");
    modified = words.map((word) => 
    {
        first_letter = word[0]
        titled_letter = first_letter.toUpperCase()
        return word.replace(first_letter,titled_letter)
    })
    console.log("Converted String using IIFE:", modified.join(" "))
}) ();

// Printing the sum of all numbers in an array using Anonymous and IIFE.

numbers4 = [1,2,3,4,5]

summation = function()                                      // Anonymous Function
{
    console.log("Sum of numbers using Anonymous Function:",numbers4.reduce((currentvalue,nextvalue) => currentvalue+nextvalue,0))
}
summation();

(function()
{
    console.log("Sum of numbers using IIFE:",numbers4.reduce((currentvalue,nextvalue) => currentvalue+nextvalue,0))
}) ();


// Printing Median of two sorted arrays using Anonymous Function.

let sorted_array1 = [1,3,7]
let sorted_array2  = [2,5,9,10]
median =function(array1,array2)
{
    let merged_array = array1.concat(array2)
    let sorted =merged_array.sort((a,b)=>a-b)
    n = sorted.length
    
    if(n%2 == 0)
    {
        pos = n/2
        median = (sorted[pos]+sorted[pos-1]) / 2
    }
    else
    {
        pos = Math.round(n/2)
        median = sorted[pos - 1]
    }
    console.log("Median is:",median)
}
median(sorted_array1,sorted_array2);



// Filtering duplicates from array using Anonymous function.

duplicates = [1,2,3,4,4,5,4]

unique_array = function()
{
    unique = []

    for(let i = 0; i<duplicates.length; i++)
    {
        if(!unique.includes(duplicates[i]))
        {
            unique.push(duplicates[i])
        }
    }
    console.log("Unique Array",unique)
}
unique_array();


// Rotate the array by k-times using Anonymous Functions.

original = [1,2,3,4,5]
k=3
rotator = function(arr,k)
{
    for(let j =0; j<k; j++)
    {
        arr.unshift(arr.pop())
    }
    console.log("Rotated Array:",arr)
}
rotator(original,k)
