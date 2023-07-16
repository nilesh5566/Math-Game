// Steps to fellow to run the page are are as: 
var playing=false;
var score;
var action;
var timeremaning;
var correctans;
//  if we are click the  start/restart button
document.getElementById("startreset").onclick=function(){
   // if we are going to playing 
   // if we are going to playing 
    if(playing==true){
        // reload the page 
    location.reload();
     // if we are not playing 
    }else{
       playing=true;
       score=0;
       document.getElementById("scorevalue").innerHTML=score;
      show("timer");
       timeremaning=60;
       document.getElementById("tim").innerHTML=timeremaning;
       hide("gameOver");
       document.getElementById("startreset").innerHTML="Reset Game";
      
       // show countdown box 
       startcountdown();
       // Generate a new Question answer
       generatequestionans();
         
    }
}

for(i=1;i<5;i++){
document.getElementById("box"+i).onclick=function(){
    //if we are playing
    if(playing==true){
        if(this.innerHTML==correctans){
            score+=1;
            document.getElementById("scorevalue").innerHTML=score;
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
            },1000);
            generatequestionans();
        }else{
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            },1000);

        }
    }
}
}
// Function for 
// function for start timer
function startcountdown(){
action=setInterval(function(){
    timeremaning-=1;
    document.getElementById("tim").innerHTML=timeremaning;
    if(timeremaning==0){
        stopcountdown();
       show("gameOver");
        document.getElementById("gameOver").innerHTML= " <p>game Over </P><p>your score is "+score+ "</P>"
       hide("timer");  
       hide("correct"); 
       hide("wrong"); 
       playing=false;
       document.getElementById("startreset").innerHTML="Start Game";
      
    }
},1000);
}
//function for stop the timer
function stopcountdown(){
    clearInterval(action);
}
//function for hide
function hide(id){
    document.getElementById(id).style.display="none"; 
}
// functiion for show  
function show(id){
    document.getElementById(id).style.display="block"; 
}
//function for Generate new Question answer
function   generatequestionans(){
   var x=Math.round(Math.random()*9)+1;
   var y=Math.round(Math.random()*9)+1;
   correctans =x*y;

   document.getElementById("questionBox").innerHTML=x + "*" +y;
   var correctposition=1+Math.round(Math.random()*3);
   document.getElementById("box"+correctposition).innerHTML=correctans;

     var answer=[correctans];
   for(i=1;i<=4;i++){
    if(i!=correctposition){
        var wrongans;
    do{
    wrongans=(Math.round(Math.random()*9)+1)*
    (Math.round(Math.random()*9)+1);

    }while(answer.indexOf(wrongans)>-1);

     document.getElementById("box"+i).innerHTML=wrongans;
     answer.push(wrongans);
    }
   }
}

// reduse time by 1sec in loop
//  time left? 
//  yes-> continue 
//  no->game Over
//generate new question




// if we are click the ans then 
//  