// All questions and answers for quiz
var questions = [
    {
        prompt: "What day is it?\n(a) Sunday\n(b) Monday\n(c) Tuesday",
        answer: "a"
    },
    {
        prompt: "Is it simply better ?\n(a) No\n(b) yeah.\n(c) Do explain.",
        answer: "c"
    },
    {
        prompt: "Why do cats meow?\n(a) Hungry bellies\n(b) ALERT!!!!\n(c) They know that a great silence is always a pleasure",
        answer: "b"
    },
    {
        prompt: "How are you?\n(a) a good answer\n(b) exciting adventure\n(c) start to fridge.",
        answer: "a"
    },
    {
        prompt: "What color is my baby's hair?\n(a) blue\n(b) baby hair\n(c) small baby hair",
        answer: "a"
    },
    {
        prompt: "When you look at today?\n(a) The belly a ruckus\n(b) FIBER\n(c) There",
        answer: "c"
    },
    {
        prompt: "What is?\n(a) that\n(b) this\n(c) robot voice",
        answer: "a"
    },
    {
        prompt: "Are there different types of animals?\n(a) Yes\n(b) No\n(c) No",
        answer: "c"
    },
    {
        prompt: "What is a your mind?\n(a) dance\n(b) Meat\n(c) tree",
        answer: "a"
    },
    {
        prompt: "What have you noticed today?\n(a) There are huge heads on Easter Island\n(b) The candies were tasty\n(c) just a burger",
        answer: "a"
    },
]

var score = 0;

// How we ask the questions:
// First we loop through all the questions in the questions array.
for(var i=0; i < questions.length; i++){
    // Ask the user a question in a prompt window. Here questions loop through the prompts defined in the questions variable.
    var response = window.prompt(questions[i].prompt);
    // If the question is right display correct alert
    if (response == questions[i].answer){
        // If the answer is right, add to the score
        score++;
        alert("Correct!")
        // If the question is wrong, display the wrong answer alert
    } else {
        alert("Aww dang, looks like you missed one! It's ok, this quiz is really really hard. I don't even know all the answers.");
    }
}

// Final score total for the quiz.
alert("you got " + score + "/" + questions.length);

// Timer
function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);

        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var sixtySeconds = 60,
        display = document.querySelector('#time');
    startTimer(sixtySeconds, display);
};
