// Assignment code here
var characters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var upperChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var characterNum = ["0","1","2","3","4","5","6","7","8","9"];

var specials = ["#", "$", "%", "^", "(", ")", "-", "#", "$", "%", "^", "(", ")", "-"]




var allChoices = []
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword(){
  var charLength = prompt("How many characters do you want in your new password?");
  var whichCase = confirm("Do you want uppercase letters?");
  var lowerChar = confirm("Do you want lower case letters?");
  var num = confirm("Do you want numbers in your password?");
  var specialChar = confirm("Do you want special characters in your password?");

  // This creates a local variable for the password instead of getting the DOM object with id="password"
  let password = '';

  console.log(lowerChar)
  console.log(specialChar);
  console.log(whichCase);
  console.log(num);

      if (lowerChar === true) {
        // console.log('In isde the if!! lower!', characters)
        allChoices.push(...characters)
      }
      if (specialChar === true) {
        allChoices.push(...specials)
      }
      if (whichCase === true) {
        allChoices.push(...upperChars)
      }
      if (num === true) {
        allChoices.push(...characterNum)
      }

      console.log('All the choices!!!', allChoices)
      for(var i = 0; i <charLength; i++){

        charPick = allChoices[Math.floor(Math.random()*allChoices.length)];
        console.log(charPick);
        password = password.toString()+charPick.toString();
        console.log(password);
      }



  // if uppercase and numbers are confirmed
  /* if(num === true && whichCase === true){
    for(var i = 0; i <charLength; i++){

      charPick = specials[Math.floor(Math.random()*specials.length)];
      console.log(charPick);
      password = password.toString()+charPick.toString();
      console.log(password);
    }
  }  
//if uppercase but no numbers
    else if(num != true && whichCase === true){
      for(var i = 0; i <charLength; i++){

      charPick = upperChars[Math.floor(Math.random()*upperChars.length)];
      console.log(charPick);
      password = password.toString()+charPick.toString();
      console.log(password);

    }
  }
// numbers no uppercase
    else if(num === true && whichCase != true){
      for(var i = 0; i <charLength; i++){

        charPick = characterNum[Math.floor(Math.random()*characterNum.length)];
        console.log(charPick);
        password = password.toString()+charPick.toString();
        console.log(password);       
      }

    }
    else if(num != true && whichCase != true){
      for(var i = 0; i <charLength; i++){

        charPick = characters[Math.floor(Math.random()*characters.length)];
        console.log(charPick);
        password = password.toString()+charPick.toString();
        console.log(password);


  } 
    }
    */
    return password;
}