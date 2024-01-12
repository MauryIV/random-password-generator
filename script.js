var capArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symArray = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":", ";", "'", '"', "<", ",", ">", ".", "?", "/"];  
var userAmount = "";
var capInclusion = false;
var lowInclusion = false;
var numInclusion = false;
var symInclusion = false;

function userPrompts() {
  userAmount = window.prompt("How many characters would you like your password to be?\nPlease choose between 8-128.", "12")
  if ((userAmount > 7) && (userAmount < 129)) {
    window.alert(userAmount + " sounds like a good amount to me. Now please let us know if you want Capital Letters, Lowercase Letters, Numbers, and Symbols.")
    if (window.confirm("Would you like Capital Letters in the password?\nClick OK for Yes and Cancel for No, please.") === false) {
      capInclusion = false
      capArray = []
    } else {
      capInclusion = true
      capArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    }
    if (window.confirm("What about Lowercase Letters?") === false) {
      lowInclusion = false
      lowArray = []
    } else {
      lowInclusion = true
      lowArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    } 
    if (window.confirm("And Numbers?") === false) {
      numInclusion = false
      numArray = []
    } else {
      numInclusion = true
      numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    }
    if (window.confirm("Finally, would you like Symbols in the password?") === false) {
      symInclusion = false
      symArray = []
    } else {
      symInclusion = true
      symArray = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":", ";", "'", '"', "<", ",", ">", ".", "?", "/"];
    }
  }
}

function compParameters() {
  var rand = "";
  const list = capArray.concat(lowArray, numArray, symArray)
  if ((list.length < 1) || (userAmount < 8) || (userAmount > 128)) {
     return "Please choose valid options."
    }
  for (let i = 0; i < userAmount; i++) {
    rand += list[(Math.floor(Math.random() * list.length))];
  }
  
  while (((capInclusion === true) && (!rand.includes(capArray[0]) && !rand.includes(capArray[1]) && !rand.includes(capArray[2]) && !rand.includes(capArray[3]) && !rand.includes(capArray[4]) && !rand.includes(capArray[5]) && !rand.includes(capArray[6]) && !rand.includes(capArray[7]) && !rand.includes(capArray[8]) && !rand.includes(capArray[9]) && !rand.includes(capArray[10]) && !rand.includes(capArray[11]) && !rand.includes(capArray[12]) && !rand.includes(capArray[13]) && !rand.includes(capArray[14]) && !rand.includes(capArray[15]) && !rand.includes(capArray[16]) && !rand.includes(capArray[17]) && !rand.includes(capArray[18]) && !rand.includes(capArray[19]) && !rand.includes(capArray[20]) && !rand.includes(capArray[21]) && !rand.includes(capArray[22]) && !rand.includes(capArray[23]) && !rand.includes(capArray[24]) && !rand.includes(capArray[25]))) 
  || ((lowInclusion === true) && (!rand.includes(lowArray[0]) && !rand.includes(lowArray[1]) && !rand.includes(lowArray[2]) && !rand.includes(lowArray[3]) && !rand.includes(lowArray[4]) && !rand.includes(lowArray[5]) && !rand.includes(lowArray[6]) && !rand.includes(lowArray[7]) && !rand.includes(lowArray[8]) && !rand.includes(lowArray[9]) && !rand.includes(lowArray[10]) && !rand.includes(lowArray[11]) && !rand.includes(lowArray[12]) && !rand.includes(lowArray[13]) && !rand.includes(lowArray[14]) && !rand.includes(lowArray[15]) && !rand.includes(lowArray[16]) && !rand.includes(lowArray[17]) && !rand.includes(lowArray[18]) && !rand.includes(lowArray[19]) && !rand.includes(lowArray[20]) && !rand.includes(lowArray[21]) && !rand.includes(lowArray[22]) && !rand.includes(lowArray[23]) && !rand.includes(lowArray[24]) && !rand.includes(lowArray[25]))) 
  || ((numInclusion === true) && (!rand.includes(numArray[0]) && !rand.includes(numArray[1]) && !rand.includes(numArray[2]) && !rand.includes(numArray[3]) && !rand.includes(numArray[4]) && !rand.includes(numArray[5]) && !rand.includes(numArray[6]) && !rand.includes(numArray[7]) && !rand.includes(numArray[8]) && !rand.includes(numArray[9]))) 
  || ((symInclusion === true) && (!rand.includes(symArray[0]) && !rand.includes(symArray[1]) && !rand.includes(symArray[2]) && !rand.includes(symArray[3]) && !rand.includes(symArray[4]) && !rand.includes(symArray[5]) && !rand.includes(symArray[6]) && !rand.includes(symArray[7]) && !rand.includes(symArray[8]) && !rand.includes(symArray[9]) && !rand.includes(symArray[10]) && !rand.includes(symArray[11]) && !rand.includes(symArray[12]) && !rand.includes(symArray[13]) && !rand.includes(symArray[14]) && !rand.includes(symArray[15]) && !rand.includes(symArray[16]) && !rand.includes(symArray[17]) && !rand.includes(symArray[18]) && !rand.includes(symArray[19]) && !rand.includes(symArray[20]) && !rand.includes(symArray[21]) && !rand.includes(symArray[22]) && !rand.includes(symArray[23]) && !rand.includes(symArray[24]) && !rand.includes(symArray[25]) && !rand.includes(symArray[26]) && !rand.includes(symArray[27]) && !rand.includes(symArray[28]) && !rand.includes(symArray[29]) && !rand.includes(symArray[30])))) { 
    console.log(rand)
    rand = "";
  for (let i = 0; i < userAmount; i++) {
    rand += list[(Math.floor(Math.random() * list.length))];
  }
  }
    return rand;
}

function generatePassword() {
  userPrompts()
  return compParameters()
}


var generateBtn = document.querySelector("#generate");

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
  }
    
generateBtn.addEventListener("click", writePassword);