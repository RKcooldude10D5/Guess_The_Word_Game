function back(){
    window.location="activity_1.html";
}
function getscore(){
    var score=localStorage.getItem("score");
    document.getElementById("update").innerHTML="<h2>score "+score+"</h2>";
}