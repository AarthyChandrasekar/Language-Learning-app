const flashcard =
document.getElementById("flashcard");

const flipBtn =
document.getElementById("flipBtn");

const nextBtn =
document.getElementById("nextCard");

const cards = [

{
jp:"こんにちは",
en:"Hello"
},

{
jp:"ありがとう",
en:"Thank You"
},

{
jp:"さようなら",
en:"Goodbye"
},

{
jp:"おはよう",
en:"Good Morning"
},

{
jp:"すみません",
en:"Excuse Me"
}

];

let current = 0;

flipBtn.addEventListener("click",()=>{

    flashcard.classList.toggle("flip");

});

nextBtn.addEventListener("click",()=>{

    current++;

    if(current >= cards.length){

        current = 0;
    }

    flashcard.classList.remove("flip");

    document.querySelector(".front").innerText =
    cards[current].jp;

    document.querySelector(".back").innerText =
    cards[current].en;

});