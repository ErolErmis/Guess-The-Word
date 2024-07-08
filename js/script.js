var word;
$(document).ready(function(){
    
   $.ajax({
    type: 'GET',
    url: 'https://random-word-api.vercel.app/api?words=1',
    dataType: 'json',
    success: function(result) {
            readyWord(result[0])
        },
    error: errorMessage
   })

})

//Take the random word from api and start to insert elements into GameLetters
function readyWord(word) {
    const wordBox = document.getElementById("GameLetters");
    for(let i = 0; i<word.length; i++) {
        const p = document.createElement("p");
        const textNode = document.createTextNode(word.charAt(i));
        p.appendChild(textNode);
        wordBox.appendChild(p);
    }
} 

//TODO: Method to scramble the word to guess. Look into Fisher-Yates algorithm for this.
function scrambleWord() {

}

function checkAnswer(answer,word){
    return answer===word;
}


function errorMessage(){
    alert("Internal server error, please try again later.");
}