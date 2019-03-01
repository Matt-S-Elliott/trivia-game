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
    ["1 INSERT QUESTION HERE",
    "11 INSERT ANSWER HERE",
    "12 INSERT ANSWER HERE",
    "13 INSERT ANSWER HERE",
    "14 INSERT ANSWER HERE",
    "1 INSERT CORRECT ANSWER HERE"],

    ["2 INSERT QUESTION HERE",
    "21 INSERT ANSWER HERE",
    "22 INSERT ANSWER HERE",
    "23 INSERT ANSWER HERE",
    "24 INSERT ANSWER HERE",
    "2 INSERT CORRECT ANSWER HERE"],

    ["3 INSERT QUESTION HERE",
    "31 INSERT ANSWER HERE",
    "32 INSERT ANSWER HERE",
    "33 INSERT ANSWER HERE",
    "34 INSERT ANSWER HERE",
    "3 INSERT CORRECT ANSWER HERE"],

    ["4 INSERT QUESTION HERE",
    "41 INSERT ANSWER HERE",
    "42 INSERT ANSWER HERE",
    "43 INSERT ANSWER HERE",
    "44 INSERT ANSWER HERE",
    "4 INSERT CORRECT ANSWER HERE"]
]

//display questions to user after they press start
function displayQuestions () {
    for (var i = 0; i < questions.length; i++) {
        //make a row for the question and append it to the mainContainer
        var qRow = $("<div class='row text-center'>");
        mainContainer.append(qRow);
        //make a coloumn for the question text and append it the new row
        var qCol = $("<div class='col-md-12'>");
        qCol.text(questions[i][0]);
        qRow.append(qCol);
        //make a row for the answers and append it to the mainContainer
        var aRow = $("<div class='row'>");
        mainContainer.append(aRow);
        //make a column for the answer and append it to the mainContainer
        var aCol = $("<div class='col-md-12'>")
        aRow.append(aCol);
        //make a form and append it to the coloumn
        var form = $("<form name='question-" + i + "'>");
        aCol.append(form);
        //loop through all answers for current question
        for (var ii = 1; ii < 5; ii++) {
            //make a button and a label for each answer and append each to the form.
            //button IDs are answer-1, answer-2 and so on
            //button names are answers
            var button = $("<input type='radio' name='answers' id='answer-" + ii + "' value='" + questions[i][ii] + "'>");
            form.append(button);
            var label = $("<label for='answer-" + ii + "'>");
            label.text(questions[i][ii]);
            form.append(label);
        }
    }

}
displayQuestions();


//greet user with a start screen and have a button to start the game

//when counter hits 0, end game

//make button to end game and submit answers




//when games ends, tally correct and incorrect answers and unanswered questions

//display score to user