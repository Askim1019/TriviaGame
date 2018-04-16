var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var choice;
var choiceArray = ['choices1', 'choices2', 'choices3','choices4','choices5']; 
var count = 35;
var audio;

function startTimer() {
    var countdown = setInterval(function(){
        $("#timer").text(count + " SECONDS LEFT!");

        if (count === 0) {
            clearInterval(count);
            getAnswers();
            goToResults();
        }

        count--;
    }, 1000);
}

function startGame() {
    $("#startBtn").click(function(){
        $("#startBtn").hide();
        $("#questionsDiv").show();
 
        startTimer();
    });
}

function restartGame() {
    $('#restartBtn').click(function(){
        location.reload();
    });
}

function goToResults() {
    $("#questionsDiv").hide();
    $("#correctResults").text("Correct Answers: " + correctAnswers);
    $("#incorrectResults").text("Incorrect Answers: " + incorrectAnswers);
    $("#unanswered").text("Unanswered: " + unanswered);
    $("#resultsDiv").show();
}

function getAnswers() {
    for (var i = 0; i < choiceArray.length; i++) {
        choice = $('input[name=' + choiceArray[i] + ']:checked').val();
        
        if (choice === 'correct') {
            correctAnswers++;
        } else if (choice === 'incorrect') {
            incorrectAnswers++;
        } else {
            unanswered++;
        }
    }
}
function submitAnswers() {
    $("#submitBtn").click(function(){
       getAnswers();
       goToResults();
    });
}

$(document).ready(function(){
    $("#questionsDiv").hide();
    $("#resultsDiv").hide();

    startGame();
    submitAnswers();

    restartGame();
});