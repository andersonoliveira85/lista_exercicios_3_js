let nome='';
let caracteres ='';
let res='';
	nome = prompt ('Digite o nome completo: ', '');
	caracteres = nome.split(" ");

	for(i=0;i<caracteres.length; i++){
		str1 = caracteres[i];
		str2 = res;
		res = str1.concat(str2);
	}


	alert('Quantidade de caracteres: ' + nome.length + "\nQtd letras: " + res.length);