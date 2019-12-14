let i = 0;
let soma= 0;
let nota = 0;
do{
	nota = prompt ('Digite uma nota. Para sair digite: fim','');
	if (nota !='fim'){
	soma =+ nota;
	i++;
	}
}while (nota!='fim');

let mensagem = soma/i;

alert (mensagem);
