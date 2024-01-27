function addUser() {
    jugador1=document.getElementById("Jugador1").value; 
    jugador2=document.getElementById("Jugador2").value;
    
    localStorage.setItem("Nombre1",jugador1);
    localStorage.setItem("Nombre2",jugador2);
    window.location="game_page.html";
} 