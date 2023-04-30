//NAVBAR HAMBURGER MENU 
let NavAppear = () => {
    let k = document.getElementById('middle').style;
    if (k.display === "flex") {
      k.display = "none";
    }
    else {
      k.display = "flex";
    }
  }
//**************

//LANDING CONTAINER CHANGING TEXT
var quotes = ['DESTINATION OF PEACE','FIND TRANQUILITY WITHIN','JOURNEY TO CALMNESS', 'EMBRACE THE STILLNESS'],
    currentStep = 0,
    textElement = document.querySelector('.landing-text'),
    oldWord = '';

setTimeout(changeWord, 500);

function changeWord() {
  oldWord = textElement.innerHTML;

  if (oldWord.length < 1) {
    if (currentStep !== quotes.length-1){
          currentStep ++;
    }else {
      currentStep = 0;
    }
    addNextWord();
  } else {
    setTimeout(deleteWord, 500);
  }
  
};

function deleteWord() {
  var currentWord = textElement.innerHTML,
      currentLength = currentWord.length;

  if (currentLength < 1) {
    changeWord();
    return;
  }
  textElement.innerHTML = currentWord.substring(0, currentLength - 1);
  setTimeout(deleteWord, 200);
}

function addNextWord() {
  var currentWord = textElement.innerHTML,
      currentLength = currentWord.length,
      nextWord = quotes[currentStep],
      nextWordLength = nextWord.length;

  if (currentLength === nextWordLength) {
    changeWord();
    return;
  }
  textElement.innerHTML = nextWord.substring(0, currentLength + 1); 
  setTimeout(addNextWord, 200);
  
}
//***************
