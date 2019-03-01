//DONE: Make a counter to countdown from 120 to 0

var timeRemainingText = $("#timeRemainingText");
var mainContainer = $("#mainContainer");

//I realize using an object for the counter is a little over-complicated, but I felt
//like doing it... So here we are.
var counter = {
    countDown: 60,
    counterID: 0,
    startCountdown: function () {
        this.counterID = setInterval(this.countDownIncrement, 1000);},
    countDownIncrement: function () {
        this.countDown--;},
    countDownFinished: function () {
        if (this.countDown <= 0) {
            return true;
        }
        return false;}
}

//Kinda done: make an array of questions with correct and incorrect answers
var questions = [
    ["1INSERT QUESTION HERE",
    "11INSERT ANSWER HERE",
    "12INSERT ANSWER HERE",
    "13INSERT ANSWER HERE",
    "14INSERT ANSWER HERE",
    "1INSERT CORRECT ANSWER HERE"],

    ["2INSERT QUESTION HERE",
    "21INSERT ANSWER HERE",
    "22INSERT ANSWER HERE",
    "23INSERT ANSWER HERE",
    "24INSERT ANSWER HERE",
    "2INSERT CORRECT ANSWER HERE"],

    ["3INSERT QUESTION HERE",
    "31INSERT ANSWER HERE",
    "32INSERT ANSWER HERE",
    "33INSERT ANSWER HERE",
    "34INSERT ANSWER HERE",
    "3INSERT CORRECT ANSWER HERE"],

    ["4INSERT QUESTION HERE",
    "41INSERT ANSWER HERE",
    "42INSERT ANSWER HERE",
    "43INSERT ANSWER HERE",
    "44INSERT ANSWER HERE",
    "4INSERT CORRECT ANSWER HERE"]
]


//WORKING ON DISPLAY QUESTIONS



//display questions to user after they press start
function displayQuestions () {
    for (var i = 0; i < questions.length; i++) {
        var row = $("<div class='row'>");
        for (var ii = 1; ii < 5; ii++) {
            var answer = $("<div class='col-md-3>");
            answer.text(questions[i][ii]);
            row.append(answer);
        }
        mainContainer.append(row);
    }

}
displayQuestions();


//greet user with a start screen and have a button to start the game

//when counter hits 0, end game

//make button to end game and submit answers




//when games ends, tally correct and incorrect answers and unanswered questions

//display score to user