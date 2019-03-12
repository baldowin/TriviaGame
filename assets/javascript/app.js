var index = 0;
var correct=0;
var intervalId;
var time;
var correctAnswer;
var Q1={
    question: "Quidditch is based on the game originally found in which book series?",
    answers:["Hunger Games","Harry Potter","Percy Jackson and the Olympians","A Song of Ice and Fire"],
    answer:2,
};
var Q2={
    question: "The first game of quidditch was playing in what year?",
    answers:["1993","1997","2001","2005"],
    answer:4,
};
var Q3={
    question: "Which is not a position in Quidditch?",
    answers:["Beater","Sleeper","Keeper","Chaser"],
    answer:2,
};
var Q4={
    question: "What makes moving difficult in quidditch?",
    answers:["Players run around with a broom between their legs","Players have to stay in the air","Players have to be wearing a robe","Players have to have a cape on"],
    answer:1,
};
var Q5={
    question: "How many points is a goal worth?",
    answers:["1","5","10","Depends on which hoop they score on"],
    answer:3,
};
var Q6={
    question: "What position tries to catch the snitch?",
    answers:["Catcher","Chaser","Finder","Seeker"],
    answer:4,
};
var Q7={
    question: "How do you tell what position a player is?",
    answers:["The color of their headbands","The players number","The color of their broom","Where they are on the pitch"],
    answer:1,
};
var Q8={
    question: "Which statement does not apply to quidditch",
    answers:["It is coed","It is full contact","It is does not exist in the real world","Each team has up to seven players on the field at a time"],
    answer:3,
};
var Q9={
    question: "How many bludgers are there?",
    answers:["1","2","3","4"],
    answer:3,
};
var Q0={
    question: "How many points does a team get if the catch the snitch in regulation?",
    answers:["30","50","100","150"],
    answer:1
};
var questions=[Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9,Q0];
function next(){
    if(index===questions.length){
        $(".answers").text("You got "+correct+" questions correct");
        $(".question").text("GAME OVER");
        var ansLine = $("<h3>");
        ansLine.addClass("ans");
        ansLine.text("click to restart");
        $(".answers").append(ansLine);
        return;
    }
    var newQuestion = questions[index];
    correctAnswer=newQuestion.answers[newQuestion.answer-1];
    time=20;
    intervalId=setInterval(count,1000);
    console.log(time);
    $(".answers").empty();
    $(".question").text(newQuestion.question);
    for (var i=0;i<newQuestion.answers.length;i++){
        var ansLine = $("<h3>");
        ansLine.text(newQuestion.answers[i]);
        ansLine.addClass("ans");
        ansLine.attr("value",i+1);
        ansLine.attr("correct",newQuestion.answer)
        $(".answers").append(ansLine);
    }
    
}
function count(){
    console.log(time);
    time--;
    $("#time").text(time);
    if(time===0){
        timeup();
        setTimeout(next,5000);
        return;
    }
}
function stop(){
    clearInterval(intervalId);
    $("#time").empty();
}
function restart(){
    index=0;
    correct=0;
    $(".answers").html('<h3 class="ans">Click to Start!</h3>');
    $(".question").empty();
}
function timeup(){
    stop();
    $(".question").text("Too bad, time is up");
    $(".answers").text("The correct answer is: "+correctAnswer);
}
function right(){
    stop();
    $(".question").text("Congrats, that is correct");
    correct++;
    $(".answers").text("You have "+correct+" correct so far!");   
}
function wrong(){
    stop();
    $(".question").text("Too bad, that is not correct");
    $(".answers").text("The correct answer is: "+correctAnswer);
}
$(".answers").on("click",".ans",function(){
    if (index!=0){
        if(index===questions.length){
            restart();
            return;
        }
        if($(this).attr("value")===$(this).attr("correct")){
            right();
        }
        else{
            wrong();
        }
        setTimeout(next,5000);;
    }
    else{
        next();
    }
    index++;
})