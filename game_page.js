 user1 = localStorage.getItem("user1name");
 user2 = localStorage.getItem("user2name");
 user1score = 0;
 user2score = 0;
document.getElementById("user1name").innerHTML = user1 + ":";
document.getElementById("user2name").innerHTML = user2 + ":";
document.getElementById("user1score").innerHTML = user1score;
document.getElementById("user2score").innerHTML = user2score;
document.getElementById("questionforuser").innerHTML = "question-turn" + ":" + user1;
document.getElementById("answerforuser").innerHTML = "answer-turn" + ":" + user2;

function send() {
     getword = document.getElementById("word").value;
     word = getword.toLowerCase();
     charAt1 = word.charAt(1);
    console.log(charAt1);
     lengthdivideto = Math.floor(word.length / 2);
     charAt2 = word.charAt(lengthdivideto);
     lengthminus1 = word.length - 1;
     charAt3 = word.charAt(lengthminus1);
     removecharAt1 = word.replace(charAt1, "_");
     removecharAt2 = removecharAt1.replace(charAt2, "_");
     removecharAt3 = removecharAt2.replace(charAt3, "_");
     questionword = "<h4 id='worddisplay'>q. " + removecharAt3 + "</h4>";
     wordinput = "<br> answer:<input type='text' id='inputcheckbox'>";
     checkbutton = "<br> <button class='btn btn-info' onclick='check()'>check</button>";
     row = questionword + wordinput + checkbutton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}
 questionturn="player1";
 answerturn="player2";
 function check(){
     getanswer=document.getElementById("inputcheckbox").value;
     answer=getanswer.toLowerCase();
     console.log(answer);
     if(answer==word){
         if(answerturn=="player1"){
             user1score=user1score+1;
             document.getElementById("user1score").innerHTML=user1score;

         }
         else{
            user2score=user2score+1;
            document.getElementById("user2score").innerHTML=user2score;
         }
     }
     if(questionturn=="player1"){
         questionturn="player2";
         document.getElementById("questionforuser").innerHTML = "question-turn" + ":" + user1;

     }
     else{
        questionturn="player1";
        document.getElementById("questionforuser").innerHTML = "question-turn" + ":" + user2;

     }
     if(answerturn=="player1"){
        answerturn="player2";
        document.getElementById("answerforuser").innerHTML = "answer-turn" + ":" + user1;

    }
    else{
       answerturn="player1";
       document.getElementById("answerforuser").innerHTML = "answer-turn" + ":" + user2;

    }
    document.getElementById("output").innerHTML=" ";
 }