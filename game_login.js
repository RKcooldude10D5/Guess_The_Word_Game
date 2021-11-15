function adduser(){
    var username1enter=document.getElementById("user1name").value;
    var username2enter=document.getElementById("user2name").value;
    localStorage.setItem("user1name",username1enter);
    localStorage.setItem("user2name",username2enter);
    window.location="game_page.html";
}