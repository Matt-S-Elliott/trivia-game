var timeRemainingText = $("#timeRemainingText");
var mainContainer = $("#mainContainer");
var startButton = $("#startButton");
var correctAnswers = 0;
var wrongAnswers = 0;
//create the endgame button here, but don't append it until after the questions are displayed
var endGameButton = $("<button class='btn btn-primary btn-lg' type='button'>Submit</button>");


//I realize using an object for the counter is a little over-complicated, but I felt
//like doing it... So here we are.
//removed all uses of "this" because some of the functions are called by an interval, which doesn't work with "this"
var counter = {
    countDown: 60,
    counterID: 0,
    startCountdown: function () {
        clearInterval(counter.counterID);
        counter.counterID = setInterval(counter.countDownIncrement, 1000);},
    countDownIncrement: function () {
        //countdown and update text
        counter.countDown--;
        timeRemainingText.text(counter.countDown);
        //check if game is over because of time
        if (counter.countDownFinished()) {
            endGame();
        }},
    //Yea, I could just have this function endGame() instead of returning true 
    //or false, but I wanted to return something
    countDownFinished: function () {
        if (counter.countDown <= 0) {
            return true;
        }
        return false;}
}

//make an array of questions with correct and incorrect answers
//TODO make questions and answers.
//format is as follows:
//[QUESTION,
//ANSWER CHOICE 1,
//ANSWER CHOICE 2,
//ANSWER CHOICE 3,
//ANSWER CHOICE 4,
//CORRECT ANSWER]
//correct answer should be the same exact string as the right answer choice
var questions = [
    ["1 INSERT QUESTION HERE",
    "11 INSERT ANSWER HERE",
    "12 INSERT ANSWER HERE",
    "13 INSERT ANSWER HERE",
    "14 INSERT ANSWER HERE",
    "11 INSERT ANSWER HERE"],

    ["2 INSERT QUESTION HERE",
    "21 INSERT ANSWER HERE",
    "22 INSERT ANSWER HERE",
    "23 INSERT ANSWER HERE",
    "24 INSERT ANSWER HERE",
    "21 INSERT ANSWER HERE"],

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
        var qRow = $("<div class='row'>");
        mainContainer.append(qRow);
        //make a coloumn for the question text and append it the new row
        var qCol = $("<div class='col-md-12'>");
        qCol.text(i + 1 + ": " + questions[i][0]);
        qRow.append(qCol);
        //make a row for the answers and append it to the mainContainer
        var aRow = $("<div class='row'>");
        mainContainer.append(aRow);
        //make a column for the answer and append it to the mainContainer
        var aCol = $("<div class='col-md-12'>")
        aRow.append(aCol);
        //make a form and append it to the coloumn
        var form = $("<form id='question-" + i + "' name='question-" + i + "'>");
        aCol.append(form);
        //loop through all answers for current question
        for (var ii = 1; ii < 5; ii++) {
            //make a button and a label for each answer and append each to the form.
            //button IDs are answer-1, answer-2 and so on
            //button names are answers
            var newDiv = $("<div>");
            var button = $("<input class='answer' type='radio' name='answers' id='answer-" + ii + "' value='" + questions[i][ii] + "'>");
            newDiv.append(button);
            var label = $("<label class='answerLabel' for='answer-" + ii + "'>");
            label.text(questions[i][ii]);
            newDiv.append(label);
            form.append(newDiv);
        }
    }
    //append end game button after the questions have been displayed.
    mainContainer.append(endGameButton);

}

//Start the game when start button is pressed, then delete the start button
function startGame() {
    displayQuestions();
    counter.startCountdown();
    $("#startButtonRow").remove();
}

//Ends the game and tallies score
//TODO endgame function
function endGame () {
    //stops the counter. I put it here so that it would stop when you end the game manually
    //or when the time runs out.
    clearInterval(counter.counterID);
    checkAnswers();
    mainContainer.empty();
    var scoreDiv = $("<div class='jumbotron text-center'>");
    scoreDiv.text(correctAnswers + " out of " + questions.length + " questions right!");
    mainContainer.append(scoreDiv);
}

//checks the answers for each question to see if they are correct or not
function checkAnswers() {
    //Loops over each question
    for (var i = 0; i < questions.length; i++) {
        //Gets back an array containing the button elements for the question
        var buttonsArray = $("#question-" + i).find(".answer");
        //Checks each button to see if it's been checked AND if the checked buttons 
        //value matches the answer of that question, then increments the correctAnswers
        //or the wrong answers.
        for (var ii = 0; ii < 4; ii++) {
            if (buttonsArray[ii].checked && buttonsArray[ii].value === questions[i][5]) {
                correctAnswers++;
            } else if (buttonsArray[ii].checked && buttonsArray[ii].value != questions[i][5]) {
                wrongAnswers++;
            }
        }
    }
}

//set the time remaining text to show before you actually start the timer
timeRemainingText.text(counter.countDown);

//Hopefully you can figure this one out
startButton.click(startGame);
//had to declare endgame button at beginning so that the reference to it here is valid
//I don't actually add the button to the page until after the questions have been displayed
endGameButton.click(endGame);


//used for quick developement to have access to functions by pressing a key
$(document).keyup(function () {
    endGame();
    console.log(correctAnswers + "   " + wrongAnswers);
})
