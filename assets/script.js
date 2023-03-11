// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copypw");

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
  console.log(inputLength);
}
}

// Confirm character types via confirmation prompts
var inputSpecialChar = confirm("Press OK if you would like to include SPECIAL CHARACTERS:");
var inputNumericChar = confirm("Press OK if you would like to include NUMERIC CHARACTERS:");
var inputUpperCase = confirm("Press OK if you would like to include UPPER CASE CHARACTERS:");
var inputLowerCase = confirm("Press OK if you would like to include LOWER CASE CHARACTERS:");

//validtion to make sure that a least one character type is confirmed
  while(inputSpecialChar === false && inputNumericChar === false && inputUpperCase === false && inputLowerCase === false) 
  {alert("You must confirm at least one character choice!");
  var inputSpecialChar = confirm("Press OK if you would like to include SPECIAL CHARACTERS:");
  var inputNumericChar = confirm("Press OK if you would like to include NUMERIC CHARACTERS:");
  var inputUpperCase = confirm("Press OK if you would like to include UPPER CASE CHARACTERS:");
  var inputLowerCase = confirm("Press OK if you would like to include LOWER CASE CHARACTERS:");
}
// contstruction of password based on character types confirmed
var passwordChars = [];

if (inputSpecialChar) {
  passwordChars = passwordChars.concat(specialCharacter)
}
if (inputNumericChar) {
  passwordChars = passwordChars.concat(number)
}
if (inputUpperCase) {
  passwordChars = passwordChars.concat(alphaUpper)
}
if (inputLowerCase) {
  passwordChars = passwordChars.concat(alphaLower)
}
// console.log(passwordChars)

// declare variable for generated password
var createdPassword = ""
//function to create password using random characters     
for (var i = 0; i < inputLength; i++) {
  createdPassword = createdPassword + passwordChars[Math.floor(Math.random() * passwordChars.length)];
  console.log(createdPassword)
}
return createdPassword;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//function to copy password to clipboard
function copyPassword() {
 var pwc = document.querySelector("textarea").select();
    console.log(pwc)
    document.execCommand('copy');
    alert('Password copied to Clipboard!');
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyPassword);