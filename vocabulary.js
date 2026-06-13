const words = [

{
    word:"こんにちは",
    meaning:"Hello",
    lang:"ja-JP"
},

{
    word:"ありがとう",
    meaning:"Thank You",
    lang:"ja-JP"
},

{
    word:"さようなら",
    meaning:"Goodbye",
    lang:"ja-JP"
},

{
    word:"おはよう",
    meaning:"Good Morning",
    lang:"ja-JP"
},

{
    word:"Hello",
    meaning:"こんにちは",
    lang:"en-US"
},

{
    word:"Bonjour",
    meaning:"Hello (French)",
    lang:"fr-FR"
}

];

let currentIndex = 0;

let xp = localStorage.getItem("xp") || 0;

document.getElementById("xp").innerText =
"⭐ XP: " + xp;

function displayWord(){

    document.getElementById("word").innerText =
    words[currentIndex].word;

    document.getElementById("meaning").innerText =
    words[currentIndex].meaning;
}

function speakWord(){

    let speech =
    new SpeechSynthesisUtterance(
        words[currentIndex].word
    );

    speech.lang =
    words[currentIndex].lang;

    speechSynthesis.speak(speech);
}

document
.querySelector(".learn-btn")
.addEventListener("click",()=>{

    xp = parseInt(xp) + 10;

    localStorage.setItem("xp",xp);

    document.getElementById("xp").innerText =
    "⭐ XP: " + xp;
});

document
.getElementById("nextWord")
.addEventListener("click",()=>{

    currentIndex++;

    if(currentIndex >= words.length){
        currentIndex = 0;
    }

    displayWord();
});

displayWord();