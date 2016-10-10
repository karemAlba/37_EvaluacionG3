function palindromo(texto){
	resp = " no ";
	texto = texto.toLowerCase();
	texto = texto.replace (/\s/g,"");
	quita = texto.split("");
	reves = quita.reverse();
	juntar = reves.join("");
	if (juntar == texto){
		resp = " si ";
	}
	return resp;
}
frase = palindromo(prompt("Ingresa un texto:"));
document.write("El texto" + " " + frase + "es un palindromo");