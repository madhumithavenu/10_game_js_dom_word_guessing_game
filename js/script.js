function randomWord(){
    //getting random object from list
    let ranObj = wordList[Math.floor(Math.random()* wordList.Length)];
    let word = ranObj.word; //getting word of random object
    console.log(word);

    let html = "";
    for (let i = 0; i < word.length; i++) {
        html = `<input type="text" disabled>`
        
    }
}