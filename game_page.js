nombre1=localStorage.getItem("Nombre1");
nombre2=localStorage.getItem("Nombre2");
Resultado1=0;
Resultado2=0;
document.getElementById("player1_name").innerHTML=nombre1+":";
document.getElementById("player2_name").innerHTML=nombre2+":";

document.getElementById("player1_score").innerHTML=Resultado1;
document.getElementById("player2_score").innerHTML=Resultado2;

document.getElementById("player_q").innerHTML="Turno para preguntar " + nombre1;

document.getElementById("player_a").innerHTML="Turno para responder " + nombre2;

function send(){
    palabra=document.getElementById("word").value;
    word=palabra.toLowerCase();

    char1=word.charAt(1);
    mitad=Math.floor(word.length/2);

    char2=word.charAt(mitad);
    final=word.length-1;

    char3=word.charAt(final);
 
    remove1=word.replace(char1,"_");
    remove2=remove1.replace(char2,"_");
    remove3=remove2.replace(char3,"_");
    secreto="<h4 id='secreto'>P. "+remove3+"</h4>";
    Respuesta="<br>Respuesta:<input type='text' id='Respuesta'>";
    Btn="<br> <br> <button class='btn btn-info' onclick='check()'> comprobar </button>";
    row=secreto+Respuesta+Btn;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}
turno_p="jugador1";
turno_r="jugador2";
function check(){
    Respuesta=document.getElementById("Respuesta").value;
    Respuesta1=Respuesta.toLowerCase();
    if(Respuesta1==word){
        if(turno_r=="jugador1"){
            Resultado1=Resultado1+1;
            document.getElementById("player1_score").innerHTML=Resultado1;
        }else{
            Resultado2=Resultado2+1;
            document.getElementById("player2_score").innerHTML=Resultado2; 
        }
    }
    if(turno_p=="jugador1"){
        turno_p="jugador2";
        document.getElementById("player_q").innerHTML="Turno para preguntar "+nombre2;
    }else{ turno_p="jugador1";
    document.getElementById("player_q").innerHTML="Turno para preguntar "+nombre1;
    }
    if(turno_r=="jugador1"){
        turno_r="jugador2";
        document.getElementById("player_a").innerHTML="Turno para responder "+nombre2;
    }else{
        turno_r="jugador1";
        document.getElementById("player_a").innerHTML="Turno para responder "+nombre1; 
    }
    document.getElementById("output").innerHTML="";
}
