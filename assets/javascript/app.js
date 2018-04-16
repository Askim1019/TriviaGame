// Make a start button event to start the game and the timer

// Make about 10 questions

// Correct Answers

// Incorrect Answers

// Unanswered Answers

// Add a done button at bottom when you finish early

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var choice;
var choiceArray = ['choices1', 'choices2', 'choice3','choices4']; 

function startGame() {
    $("#startBtn").click(function(){
        $("#startBtn").hide();
        $("#questionsDiv").show();
    });
}

function startTimer() {
    setTimeout(function(){

    }, 60000);
}

function goToResults() {
    $("#questionsDiv").hide();
    $("#resultsDiv").show();
}

function submitAnswers() {
    $("#submitBtn").click(function(){
        for (var i = 0; i < choiceArray.length; i++) {
            choice = $('input[name=' + choiceArray[i] + ']:checked').val();
            
            if (choice === 'correct') {
                correctAnswers++;
                console.log('correct answers ' + correctAnswers);
            } else if (choice === 'incorrect') {
                incorrectAnswers++;
                console.log('incorrect answers ' + incorrectAnswers);
            } else {
                unanswered++;
                console.log('unanswered ' + unanswered);
            }
        }

       goToResults();
    });
}
/* 
function checkCorrect(){
    $("#submitBtn").click(function(){
        firstChoice = $('input[name=choices1]:checked').val();
        console.log(firstChoice);
        
        if (firstChoice === 'correct') {
            correctAnswers++;
            console.log(correctAnswers);
        } else if (firstChoice === 'incorrect') {
            incorrectAnswers++;
            console.log(incorrectAnswers);
        } else {
            unanswered++;
            console.log(unanswered);
        }
    });
} */

$(document).ready(function(){
    $("#questionsDiv").hide();
    $("#resultsDiv").hide();

    startGame();
    submitAnswers();
});