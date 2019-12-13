
var saudacao = (function (){
	const dataAtual = new Date();
	const horaAtual = dataAtual.getHours();
	if(horaAtual>12){
	alert ("Boa Tarde! São exatamente " + horaAtual + " horas");
	}else alert ("Bom dia! São exatamente " + horaAtual + " horas");

})();


saudacao;