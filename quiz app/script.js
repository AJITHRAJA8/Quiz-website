let timeLeft = 60;
let timerElement = document.getElementById('timer');

let countdown = setInterval(() => {
    timeLeft--;
    timerElement.innerText = `Time Left: ${timeLeft}s`;
    if (timeLeft <= 0) {
        clearInterval(countdown);
        alert("Time's up! The quiz has been auto-submitted.");
        submitQuiz();
    }
}, 1000);

document.getElementById('submitBtn').addEventListener('click', submitQuiz);

function submitQuiz() {
    clearInterval(countdown); 

    let correctAnswers = {
        q1: "New Delhi",
        q2: "Tiger",
        q3: "Narendra Modi",
        q4: "12",
        q5: "Right-angled"
    };

    let score = 0;
    let unanswered = [];
    let answeredCount = 0;

    for (let i = 1; i <= 5; i++) { 
        let selected = document.querySelector(`input[name=q${i}]:checked`);
        if (!selected) {
            unanswered.push(i);
        } else {
            answeredCount++;
            if (selected.value === correctAnswers[`q${i}`]) {
                score++;
            }
        }
    }

    localStorage.setItem("answeredCount", answeredCount);
    localStorage.setItem("unansweredCount", unanswered.length);
    localStorage.setItem("score", score);

    window.location.href = "quiz_completed.html";
}
