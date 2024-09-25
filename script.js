arrayPos = -1;
startId = -1;

points = 0;

idArray = [];
questionArray = [];
answerArray = [];
answer1Array = [];
answer2Array = [];

function registerQuestion(question, answer, answer1, answer2) {
    startId = startId + 1;
    idArray.push(startId);
    questionArray.push(question);
    answerArray.push(answer);
    answer1Array.push(answer1);
    answer2Array.push(answer2);
}

function getRightAnswer(id) {
    if (idArray.includes(id)) {
        const searchValue = idArray.findIndex(element => element === id);
        return answerArray[searchValue];
    }
}

function getAnswer1(id) {
    if (idArray.includes(id)) {
        const searchValue = idArray.findIndex(element => element === id);
        return answer1Array[searchValue];
    }
}

function getAnswer2(id) {
    if (idArray.includes(id)) {
        const searchValue = idArray.findIndex(element => element === id);
        return answer2Array[searchValue];
    }
}

function nextQuestion(arrayPos){
        document.getElementById("question").innerHTML = questionArray[arrayPos];
        document.querySelector('#btn1').innerHTML = answer1Array[arrayPos];
        document.querySelector('#btn2').innerHTML = answer2Array[arrayPos];
}

function startGame() {
    
        arrayPos = 0;

        // Register questions
        registerQuestion("Wer ist doof", "Linus", "Linus", "Julian");

        // Show question
        document.getElementById("question").innerHTML = questionArray[arrayPos];
        document.querySelector('#btn1').innerHTML = answer1Array[arrayPos];
        document.querySelector('#btn2').innerHTML = answer2Array[arrayPos];
    
}

function isRightAnswer(userInput, rightAnswer){
    if (rightAnswer == userInput) {
        points++;      
        nextQuestion(arrayPos);
        } else {
        nextQuestion(arrayPos);
    }
}

function answer1() {

    if (arrayPos == -1) {
    startGame();
    return false;
    }
    
    isRightAnswer(getAnswer1(arrayPos), getRightAnswer(arrayPos));

        arrayPos = arrayPos + 1;

        if (arrayPos == idArray.length) {
            return false;
        }

       
    
}

function answer2() {

    if (arrayPos == -1) {
    startGame();
    return false;
    }

    isRightAnswer(getAnswer2(arrayPos), getRightAnswer(arrayPos));

        arrayPos = arrayPos + 1;

        if (arrayPos == idArray.length) {
            return false;
        }

        
    
}