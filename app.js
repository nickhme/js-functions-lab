/*
Exercise 6: reverseString()

Define a function called reverseString. It should take a string and return it with its characters in reverse order. 

Example: reverseString('rockstar') should return the string "ratskcor".

Complete the exercise in the space below:
*/

function reverseString(string) {
  let stringReverse = ""
  for (let index = 0; index < string.length; index++) {
    const char = string[index]
    // Add the char to the beginning of my stringReverse
    stringReverse = char + stringReverse
  }
  return stringReverse
}



console.log('Exercise 6 Result:', reverseString("rockstar"));


/*
Exercise 7: checkPalindrome()

Define a function called checkPalindrome. It should take a string and return true if the string is a palindrome (reads the same forwards and backwards) and false otherwise.

Example: checkPalindrome('radar') should return true.
Example: checkPalindrome('taco') should return false.

Complete the exercise in the space below:
*/

function checkPalindrome(string) {
  // ! 1) You need to reverse the string
  const stringReversed = reverseString(string)
  // ! 2) Compare the two strings together
  // ! 3) Return the result (true/false)
  return string === stringReversed
}


console.log('Exercise 7 Result:', checkPalindrome("radar"));


/*
Exercise 8: maxOfThree()

Define a function, maxOfThree. It should accept three numbers and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

function maxOfThree(a, b, c) {
  // if (a >= b && a >= c) {
  //   // a is the biggest
  //   return a
  // } else if (b > a && b > c) {
  //   return b
  // } else {
  //   return c
  // }
  return Math.max(a, b, c)
}




console.log('Exercise 8 Result:', maxOfThree(80, 80, 10));


/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as an argument. It should return true if the character is a vowel and false otherwise. For the purposes of this exercise, the character y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

function isCharAVowel(char) {
  const vowels = "aeiouAEIOU"
  return vowels.includes(char)
}

console.log('Exercise 3 Result:', isCharAVowel("E"));

