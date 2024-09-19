arrayPos = -1;
startId = -1;

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

function getRightAnswer(id){
    if(idArray.includes(id)){
        searchValue = idArray.findIndex(id);
        rightAnswer = answerArray[searchValue];
    }
}

function getAnswer1(id){
    if(idArray.includes(id)){
        searchValue = idArray.findIndex(id);
        rightAnswer = answerArray[searchValue];
    }
}

function getAnswer2(id){
    if(idArray.includes(id)){
        searchValue = idArray.findIndex(id);
        rightAnswer = answerArray[searchValue];
    }
}

function answer1(){
    if (arrayPos == -1){
        arrayPos = 0;

        //Registrieren
        registerQuestion("Test-Frage", "A", "A", "B");
        registerQuestion("Test-Frage2", "A", "A", "B");

        //Show
        document.getElementById("div").innerHTML = questionArray[arrayPos];
        return false;
    }else{
        if (getRightAnswer(arrayPos) == getAnswer1(arrayPos)){
            document.getElementById("div").innerHTML = "YUP!";
        }else{
            document.getElementById("div").innerHTML = "Nah! D;";
        }
    
        arrayPos = arrayPos + 1;
    
       // if (arrayPos == idArray.lenght()){
         //   return false;
        //}
    
        document.getElementById("div").innerHTML = questionArray[arrayPos];
    
        //document.getElementById("div").innerHTML = idArray + questionArray + answerArray + answer1Array + answer2Array;        
    }
    

}

function answer2(){
    if (arrayPos == 0){
        arrayPos = 1;
        registerQuestion("Test-Frage", "A", "A", "B");
        return false;
    }
    
}