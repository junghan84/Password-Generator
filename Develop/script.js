// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//number, special characters, lower case , upper case 
//numbers
var numbersA = ["1","2","3", "4","5","6","7","8","9","0"];
//speacial characters
var specialCharacterB = ["!","@","#","$","%","^","&","*","(",")"];
// lower case letters
var lowercaseC = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// uppercase case letters
var uppercaseD = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


//Create Generate function
function generatePassword(){
  console.log("This is btn for Generate Password");

var passwordLength;

var numberA ;
var charactersB;
var lowerC ;
var upperD;

var characterset= [];


var finalPassword = "".concat([randomIndex]);


//Prompt the user for their password length and store it in a variable
passwordLength = window.prompt("How many character do you want to password to do?");

//Validate the password length and make sure its a number between 8 to 128
if(passwordLength >= 8 && passwordLength < 128){
  console.log("Please choose number of password");
}else {
  alert("password length must be more than 8 character or less than 128");
  return;
} 
numberA = window.confirm("Click OK to confirm including numbers."); 

charactersB = window.confirm("Click OK to confirm including characters.");

lowerC = window.confirm("Click OK to confirm including lowercase letters.");

upperD = window.confirm("Click OK to confirm including uppercase letters."); 


if ( !numberA && !charactersB && !lowerC && !upperD){
  console.log("please choose one of the character");
  alert("Must select at least one character type")
 return;
}
if(numberA){
  characterset = characterset.concat(numbersA);  
}if(charactersB){
  characterset =characterset.concat(specialCharacterB);
}if(lowerC){
  characterset =characterset.concat(lowercaseC);
}if(upperD){
  characterset = characterset.concat(uppercaseD);
}
 console.log(characterset);

 var data = ''.concat(characterset);
 var randomIndex = data;

//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

//Randomly select chracters
randomIndex='';
 //validate the input
for(var i= 0; i < passwordLength; i++){
 var randomIndex = characterset[Math.floor(Math.random()*characterset.length)];

// What sort of tasks dose my code need to complete
  
  console.log(randomIndex);
 //Display password to page
 alert(randomIndex);
 
}
//Generate password base on criteria

 //Display password to page
  return(finalPassword); //Return the valaue.

}
