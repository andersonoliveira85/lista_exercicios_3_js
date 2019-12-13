let idade = 0;
let maior= 0;
let menor = 0;
do{
	idade = prompt ('Digite uma idade. Para sair digite: fim','');
	if (idade !='fim'){
		if(idade>18){
			maior++;
		}else menor ++;

	}
}while (idade!='fim');

let mensagem = ("A quantidade de maiores é " + maior + "\nA quantidade de menores é " + menor );

alert (mensagem);