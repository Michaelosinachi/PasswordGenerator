
function getRandomUpperCase(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
   }
   
function getRandomLowerCase(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
 }

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
 }

function getRandomSymbol(){
    var symbol = "!@#$%^&*(){}[]=<>/,.|~?";
    return symbol[Math.floor(Math.random()*symbol.length)];
}

function declaration(){
    var answerEl = document.getElementById("answer");
    var lengthEl = document.getElementById("length");
    var numberEl = document.getElementById("number");
    var lowerEl = document.getElementById("lower");
    var upperEl = document.getElementById("upper");
    var symbolEl = document.getElementById("symbol");
    var copyEl = document.getElementById("copy");
    var generateEl = document.getElementById("generate");

    const randomFunc = {
        upper : getRandomUpperCase,
        lower : getRandomLowerCase,
        number : getRandomNumber,
        symbol : getRandomSymbol
    };
    
    // Prompt to confirm how many characters the user would like in their password
    function generatePassword() {
      var lengthEl = parseInt(prompt("How many characters would you like your password to contain?"));
      var lengthEl = (prompt("How many characters would you like your password to contain?"));
    
      // Loop if answer is outside the parameters 
      while(lengthEl >= 7 || confirmLength <= 127) {
          alert("Password length must be between 8-50 characters Try again");
          var lengthEl = parseInt(prompt("How many characters would you like your password to contain?"));
          var lengthEl = (prompt("How many characters would you like your password to contain?"));
          } 
    
          // Repeat back how many charactes the user will have  
        generateEl.addEventListener('click', () =>{
            const hasNumber = confirm("Click OK if you would like to include numeric characters in you Password");    
            const hasLower = confirm("Click OK if you would like to include lowercase characters in your Password");
            const hasUpper = confirm("Click OK if you would like to include uppercase characters in your Password");
            const hasSymbol = confirm("Click OK if you would like to include symbols in your Password");
            
                const length = +lengthEl.value;
                const hasUpper = upperEl.checked;
                const hasLower = lowerEl.checked;
                const hasNumber = numberEl.checked;
                const hasSymbol = symbolEl.checked;
            
            answerEl.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length);
            });
       
      
        function generatePassword(upper, lower, number, symbol, length){
            let generatedPassword = "";
        
            const typesCount = upper + lower + number + symbol;
        
            //console.log(typesCount);
        
            const typesArr = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0]);
        
            if(typesCount === 0) {
                return '';
            }
        
            for(let i=0; i<length; i+=typesCount) {
                typesArr.forEach(type => {
                    const funcName = Object.keys(type)[0];
                    generatedPassword += randomFunc[funcName]();
                });
            }
        
            const finalPassword = generatedPassword.slice(0, length);
        
        
            document.getElementById("display").value = finalPassword;

            document.getElementById("lastNums").innerHTML += finalPassword + "<br>";
            
        }
        function copyPassword(){

            document.getElementById("display").querySelector();

            document.execCommand("copy");

            alert(Password copied to clipboard!!!);
        }
}
