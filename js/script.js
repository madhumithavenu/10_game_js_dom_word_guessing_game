const inputs = document.querySelector(".inputs"),
    resetBtn = document.querySelector(".reset-btn"),
    hint = document.querySelector(".hint span"),
    typingInput = document.querySelector(".typing-input");

let word;

function randomWord() {
    //getting random object from list
    let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranObj.word; //getting word of random object
    console.log(word);

    hint.innerText = ranObj.hint;

    let html = "";
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" disabled>`
    }
    inputs.innerHTML = html;
}
randomWord();

function initGame(e){
    let key = e.target.value;
    if(key.match(/^[A-Za-z]+$/)){
        console.log(key);
        if(word.includes(key)){ //if user letter found in the word
            // correctLetters += key;
            // inputs.querySelectorAll("input")[i].value = key;
            console.log("letter found");
        }else{
            console.log("letter not found");
        }
    }
}

resetBtn.addEventListener("click", randomWord);
typingInput.addEventListener("input", initGame);
document.addEventListener("keydown", () => typingInput.focus());