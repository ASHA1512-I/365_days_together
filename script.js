const questions = [

"What's one thing I've done this year that made you feel incredibly loved and supported?",

"When do you feel the most 'us'? Is it in the quiet mornings, the chaotic nights, or somewhere in between?",

"What's a habit of mine that you've grown to love that you didn't expect to?",

"In what moment this year did you feel the most proud of me?",

"What's a compliment I gave you that you still think about?",

"What's something you've learned about yourself since being with me?",

"How have you grown or changed as a person since we started dating?",

"In what ways do you think we balance each other out perfectly?",

"What's a challenge you faced this year that I might not fully understand, and how can I support you better in the future?",

"How does being with me make you feel about the future?",

"What’s a fear you have about our relationship, and what’s a hope you have?",

"Do you feel like you can be your most authentic self with me? Why or why not?"

];

let currentQuestion = 0;
let answers = [];

function showScreen(screenId){

    document.querySelectorAll(".screen")
    .forEach(screen => screen.classList.remove("active"));

    document.getElementById(screenId)
    .classList.add("active");
}

function startJourney(){
    showScreen("questionScreen");
    loadQuestion();
}

function loadQuestion(){

    document.getElementById("questionNumber").innerText =
    `Question ${currentQuestion + 1} of ${questions.length}`;

    document.getElementById("questionText").innerText =
    questions[currentQuestion];

    document.getElementById("answerInput").value = "";
}

function nextQuestion(){

    const answer =
    document.getElementById("answerInput").value.trim();

    if(answer === ""){
        alert("Please answer before continuing ❤️");
        return;
    }

    answers.push({
        question: questions[currentQuestion],
        answer: answer
    });

    currentQuestion++;

    if(currentQuestion < questions.length){
        loadQuestion();
    }else{
        showScreen("finalScreen");
        setTimeout(sendAnswers, 250);
    }
}

function sendAnswers(){

    let report = "❤️ ANNIVERSARY RESPONSES ❤️\n\n";

    answers.forEach((item,index)=>{

        report +=
        `${index + 1}. ${item.question}\n\n`;

        report +=
        `Answer:\n${item.answer}\n\n`;

        report +=
        "---------------------------------\n\n";
    });

    const recipient =
    "ngabiranoemmanuel139@gmail.com";

    const subject =
    encodeURIComponent("Anniversary Answers ❤️");

    const body =
    encodeURIComponent(report);

    window.location.href =
    `mailto:${recipient}?subject=${subject}&body=${body}`;
}