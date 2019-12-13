let data;
let dia, mes, ano;	
	data = prompt ('Digite uma data no formato DD/MM/AAAA','');
	if(data.length==10){
		dia = data.slice(0,2);
		mes = data.slice(3,5);
		ano = data.slice(6,10);
		
	}else alert('Formato inválido');



document.write('Dia:',dia, "<br>");
document.write('Mês:',mes, "<br>");
document.write('Ano:',ano, "<br>");