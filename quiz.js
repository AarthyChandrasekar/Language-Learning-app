const quizData = [

{
question:"What is the meaning of こんにちは?",
options:["Hello","Goodbye","Thank You","Sorry"],
answer:"Hello"
},

{
question:"What is the meaning of ありがとう?",
options:["Welcome","Please","Thank You","Morning"],
answer:"Thank You"
},

{
question:"What is the meaning of おはよう?",
options:["Good Morning","Good Night","Bye","Excuse Me"],
answer:"Good Morning"
}

];

let currentQuestion = 0;
let score = 0;

const question =
document.getElementById("question");

const optionButtons =
document.querySelectorAll(".option");

const progressBar =
document.querySelector(".quiz-progress-fill");

function loadQuestion(){

    const q =
    quizData[currentQuestion];

    question.innerText =
    q.question;

    optionButtons.forEach((btn,index)=>{

        btn.innerText =
        q.options[index];
    });

    progressBar.style.width =
    ((currentQuestion+1)/quizData.length)*100 + "%";
}

optionButtons.forEach(btn=>{

    btn.addEventListener("click",()=>{

        const selected =
        btn.innerText;

        if(
        selected ===
        quizData[currentQuestion].answer
        ){

            score += 10;

            btn.style.background =
            "linear-gradient(135deg,#22c55e,#16a34a)";

        }else{

            btn.style.background =
            "linear-gradient(135deg,#ef4444,#dc2626)";
        }

        document.getElementById("score").innerText =
        "⭐ Score: " + score;

        setTimeout(()=>{

            optionButtons.forEach(button=>{

                button.style.background =
                "linear-gradient(135deg,#8B5CF6,#EC4899)";
            });

            currentQuestion++;

            if(currentQuestion < quizData.length){

                loadQuestion();

            }else{

                question.innerHTML =
                "🎉 Quiz Completed!";

                document.querySelector(".options")
                .style.display="none";

                progressBar.style.width="100%";
            }

        },800);

    });

});

loadQuestion();