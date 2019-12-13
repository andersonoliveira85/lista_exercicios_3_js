let nome='';
	nomecompleto = prompt ('Digite o nome completo: ', '');
	nome = nomecompleto.split(" ");

	


	function tamanhoNome(){
		if(nome[0].length<4){
			alert("O primeiro nome precisa ter pelo menos 4 caracteres");
		}
	}	
	
	function existeSobrenome(){
		if(nome.length<2){
			alert('Deve exisitir pelo menos 1 sobrenome');
		}
	}
	
	function letraMaiuscula(){
		for(i=0; i<nome.length; i++){
			maiuscula = nome[i].charAt(0).toUpperCase();
			console.log(maiuscula);
			if(nome[i] != 'da' || nome[i]!= 'de' || nome[i] != 'do' && maiuscula == nome[i].charAt(0)){
				console.log(nome[i]);
			}else alert("Nome inválido");
		}

	}function exiteNumero(){
		
	}


tamanhoNome(nome);
existeSobrenome(nome);
letraMaiuscula(nome);