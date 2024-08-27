/*
is it palindrome: write a function that checks if a given  string (case insensitive) is a palindrome.

ex: 'Aba' => true
    'Madam' => true
    'hello' => false 
*/

function isPalindrome(x) {
  const myX = x.toLowerCase().split("").reverse().join("");

  if (myX == x.toLowerCase()) {
    return "true";
  } else {
    return "false";
  }
}

console.log(isPalindrome("hello"));
