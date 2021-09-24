
let currentPage = 0;


var symbol1 = ["#", "@", "^", "!", "$", "%", "&", "*", ">"];
var symbol2 = ["#", "@", "^", "!", "$", "%", "&", "*", ">"];
var symbol = symbol1.concat(symbol2);


var symbolRet = null;


var biggerText = document.getElementById("biggerText");
var smallText = document.getElementById("smallText");
var nextButton = document.getElementById("nextButton");
var revButton = document.getElementById("revButton");
var resetButton = document.getElementById("resetButton");
var startButton = document.getElementById("startButton");


function nextButtonMethod() {
    currentPage++;
    changeState();
}

nextButton.addEventListener('click', nextButtonMethod);
startButton.addEventListener('click', nextButtonMethod);
revButton.addEventListener('click', nextButtonMethod);


function resetButtonMethod() {
    currentPage = 0;
    changeState();
}

resetButton.addEventListener('click', resetButtonMethod);


function hide(element) {
    element.style.visibility = "hidden";
}


function show(element) {
    element.style.visibility = "visible";
}


function randomSym() {
    var symString = "";
    var numberNine = symbol[Math.floor(Math.random() * symbol.length)];

    for (var i = 0; i < 100; i++) {

        if (i % 9 == 0) {
            symString = symString + i + " - " + numberNine + "<br/>";
        } else {
            var random = symbol[Math.floor(Math.random() * symbol.length)];
            symString = symString + i + " - " + random + "<br/>";
            symbolRet = numberNine;
        }
    }
    return symString;
}


function changeState() {
    switch (currentPage) {
        case 0:
            biggerText.innerHTML="I can read your mind";
            hide(nextButton);
            hide(revButton);
            hide(smallText);
            hide(resetButton);
            show(startButton);
            break;
        case 1:
            biggerText.innerHTML="Pick a number from 01 - 99";
            show(nextButton);
            hide(revButton);
            show(smallText);
            smallText.innerHTML="when you have your number click next";
            show(resetButton);
            hide(startButton);
            break;
        case 2:
            biggerText.innerHTML="Add both digits together to get a new number";
            show(nextButton);
            hide(revButton);
            show(smallText);
            smallText.innerHTML="Ex: 14 is 1 + 4 = 5 <br/> click next to proceed";
            show(resetButton);
            hide(startButton);
            break;
        case 3:
            biggerText.innerHTML="Subtract your new number from the original number";
            show(nextButton);
            hide(revButton);
            show(smallText);
            smallText.innerHTML="Ex: 14 - 5 = 9 <br/> click next to proceed";
            show(resetButton);
            hide(startButton);
            break;
        case 4:
            biggerText.innerHTML=randomSym();
            hide(nextButton);
            show(revButton);
            show(smallText);
            smallText.innerHTML="Find your new number. <br/> Note the symbol beside the number";
            show(resetButton);
            hide(startButton);
            break;
        default:
            biggerText.innerHTML = symbolRet;
            hide(nextButton);
            hide(revButton);
            show(smallText);
            smallText.innerHTML="Your symbol is: <br/>" + symbolRet;
            show(resetButton);
            hide(startButton);
            break;
    }
}


function init(){
    resetButtonMethod();
    changeState();
}