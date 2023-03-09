// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays for character options per criteria
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "`", "{", "|", "}", "~"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var alphaLower = ["a", "b", "c", "d", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "z"];

// Variables for prompts
var inputLength = "";
var inputSpecialChar
var inputNumericChar
var inputUpperCase
var inputLowerCase

// Initial prompt for number of characters in password
function generatePassword() {
  var inputLength = (prompt("How many characters do you want (between 8 - 128)?"));

// Validate that length is not blank  
  while(!inputLength) {alert("Password length cannot be blank!");
  var inputLength = (prompt("How many characters do you want (between 8 - 128)?"));
  
// Validate that input is between 8 and 128
  while(inputLength < 8 || inputLength > 128) {alert("Password length must be between 8 and 128!");
  var inputLength = (prompt("How many characters do you want (between 8 - 128)?"));
}
}
}

  


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
