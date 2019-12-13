let nome='';
	nomecompleto = prompt ('Digite o nome completo: ', '');
	numero = prompt ("Digite um numero: ");


	function mostraCaractere(nomecompleto, numero){
		if(numero <= 0 || numero>nomecompleto.lenght){
			alert("Número inválido");
		}else{
			alert (nomecompleto.charAt(numero-1));
			
		}
	}
	mostraCaractere(nomecompleto, numero);