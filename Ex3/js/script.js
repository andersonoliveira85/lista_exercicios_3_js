let nome = '';
let nomeinverso = '';
do{
	nome = prompt ('Digite uma nome. Para sair digite: fim','');
	var str = nome.toUpperCase();
	if (str !='FIM'){
	nomeinverso = nome + "\n" + nomeinverso;
	
	}
}while (str != 'FIM');

alert (nomeinverso);