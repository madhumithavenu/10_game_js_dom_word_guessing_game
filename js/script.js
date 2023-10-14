const inputs = document.querySelector(".inputs"),
    resetBtn = document.querySelector(".reset-btn"),
    hint = document.querySelector(".hint span"),
    typingInput = document.querySelector(".typing-input");


function randomWord() {
    //getting random object from list
    let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
    let word = ranObj.word; //getting word of random object
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
    console.log(key);
}

resetBtn.addEventListener("click", randomWord);
resetBtn.addEventListener("input", initGame);
resetBtn.addEventListener("keydown", () => typingInput.focus());