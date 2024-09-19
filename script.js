arrayPos = 0;
startId = 0;

idArray = [];
questionArray = [];
answerArray = [];
answer1Array = [];
answer2Array = [];

function registerQuestion(question, answer, answer1, answer2){
        startId = startId + 1;
        idArray.push(startId);
        questionArray.push(question);
        answerArray.push(answer);
        answer1Array.push(answer1);
        answer2Array.push(answer2);
}

function answer1(){
    if (arrayPos == 0){
        arrayPos = 1;
        registerQuestion("Test-Frage", "A", "A", "B");
        return false;
    }

    document.getElementById("div").innerHTML = idArray + questionArray + answerArray + answer1Array + answer2Array;
}

function answer2(){
    if (arrayPos == 0){
        arrayPos = 1;
        registerQuestion("Test-Frage", "A", "A", "B");
        return false;
    }
    
}