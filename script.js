document.querySelector(".start-btn").onclick = () => {
    window.location.href = "vocabulary.html";
};

document.querySelector(".primary-btn").onclick = () => {

    window.location.href =
    "vocabulary.html";

};

document.querySelector(".secondary-btn").onclick = () => {

    alert(
        "🎯 Today's Challenge:\n\nLearn 5 Words\nComplete 1 Quiz"
    );

};

function counter(id,target){

    let count = 0;

    const element =
    document.getElementById(id);

    const speed =
    target / 100;

    const interval =
    setInterval(()=>{

        count += speed;

        if(count >= target){

            count = target;

            clearInterval(interval);
        }

        element.innerText =
        Math.floor(count).toLocaleString()+"+";

    },20);

}

counter("learners",50000);

counter("languages",10);

counter("words",1000000);
window.onload = () => {

    document.body.style.opacity = "0";

    setTimeout(()=>{

        document.body.style.opacity = "1";

        document.body.style.transition =
        "1s";

    },100);

};