/*
1.-Inicio
2.-Declarar jugador1  jugardor2, ganador1 =0 y ganador2 =0;
3.-Solicitar jugadors de cada jugador
4.-Contador para solicitarlo 3 veces
5.-if  jugador1 = piedra && jugador2 = tijeras{
			jugador 1 gana
		}else if jugador1 = "tijeras" && jugador2 = "piedra"{
			jugador 2 gana"
		}else if jugador1 = "tijeras" && jugador2 = "papel"{
			jugador 1 gana
		}else if (jugador1 = "papel" && jugador2 = "tijeras"{
			jugador 2 gana"
		}else if (jugador1 = "papel" && jugador2 = "piedra"{
			jugador 1 gana
		}else if (jugador1 = "piedra" && jugador2 = "papel"){
			jugador 2 gana"
		}else if (jugador1 = "papel" && jugador2 = "papel" o jugador1 = "piedra" && jugador2 = "piedra" o jugador1 = "tijeras" && jugador2 = "tijeras"){
			Es un empate"
	}	
5.-incluir el contador ganador1 y ganador2 y aumentarlo cada que se cumpla la condicion
6.-if(ganador1 = 3 o ganador1 = 2) {
		"El jugador 1 es el ganador definitivo"
	}else if(ganador2 = 3 o ganador2 = 2) {
		"El jugador 2 es el ganador definitivo"
	}else if(ganador2 = 1 o ganador2 = 1) {
		"Es un empate"
	}
7.-Fin


*/

var jugador1 , jugador2, ganador1 = 0, ganador2 = 0;

for (var i= 1; i<=3; i ++){
	jugador1 = prompt("Jugador 1 escoje una jugador (pieda,papel o tijeras)");
	jugador1 =String(jugador1);
	jugador2 = prompt("Jugador 2 escoje una jugador (pieda,papel o tijeras)");
	jugador2 =String(jugador2);

	if(jugador1 === "piedra" && jugador2 === "tijeras"){
		document.write("</br>jugador 1 gana" );
		ganador1 ++;
		document.write("</br>Respuesta jugador 1" + " " + (jugador1));
		document.write("</br>Respuesta jugador 2" + " " + (jugador2));
	}else if(jugador1 === "tijeras" && jugador2 === "piedra"){
		document.write("</br>jugador 2 gana");
		ganador2 ++;
		document.write("</br>Respuesta jugador 1" + " " + (jugador1));
		document.write("</br>Respuesta jugador 2" + " " + (jugador2));
	}else if (jugador1 === "tijeras" && jugador2 === "papel"){
		document.write("</br>jugador 1 gana");
		ganador1 ++;
		document.write("</br>Respuesta jugador 1" + " " + (jugador1));
		document.write("</br>Respuesta jugador 2" + " " + (jugador2));
	}else if (jugador1 === "papel" && jugador2 === "tijeras"){
		document.write("</br>jugador 2 gana");
		ganador2 ++;
		document.write("</br>Respuesta jugador 1" + " " + (jugador1));
		document.write("</br>Respuesta jugador 2" + " " + (jugador2));
	}else if (jugador1 === "papel" && jugador2 === "piedra"){
		document.write("</br>jugador 1 gana");
		ganador1 ++;
		document.write("</br>Respuesta jugador 1" + " " + (jugador1));
		document.write("</br>Respuesta jugador 2" + " " + (jugador2));
	}else if (jugador1 === "piedra" && jugador2 === "papel"){
		document.write("</br>jugador 2 gana");
		ganador2 ++;
		document.write("</br>Respuesta jugador 1" + " " + (jugador1));
		document.write("</br>Respuesta jugador 2" + " " + (jugador2));
	}else if (jugador1 === "papel" && jugador2 === "papel" || jugador1 === "piedra" && jugador2 === "piedra" || jugador1 === "tijeras" && jugador2 === "tijeras"){
		document.write("</br>Es un empate");
		document.write("</br>Respuesta jugador 1" + " " + (jugador1));
		document.write("</br>Respuesta jugador 2" + " " + (jugador2));
	}
}

if(ganador1 === 3 || ganador1 === 2) {
	document.write('</br> <b> "El jugador 1 es el ganador definitivo" </b>');
}else if(ganador2 === 3 || ganador2 === 2) {
	document.write('</br> <b> "El jugador 2 es el ganador definitivo" </b>');
}else if(ganador2 === 1 || ganador2 === 1) {
	document.write('<p><b>"Es un empate"</b></p>');
}


 


	
	
	




