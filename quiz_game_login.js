function addUser() {
    player1_name = document.getElementById("name").value;
    player2_name = document.getElementById("names").value;
    localStorage.setItem(player1_name, "player1_name");
    localStorage.setItem(player2_name, "player2_name");
    window.location = "quiz_game_login.html";
}