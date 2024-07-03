var word;
$(document).ready(function(){
    $.get("https://random-word-api.herokuapp.com/word",function(data,status){
        console.log(data + "\n" + status);
        word = data[0];
        readyWord(word);
    })
})

//The the random word from api and start to insert elements into GameLetters
function readyWord(word) {
    const wordBox = document.getElementById("GameLetters");
    for(let i = 0; i<word.length; i++) {
        const p = document.createElement("p");
        const textNode = document.createTextNode(word.charAt(i));
        p.appendChild(textNode);
        wordBox.appendChild(p);
    }
} 

function checkAnswer(answer,word){
    return answer===word;
}