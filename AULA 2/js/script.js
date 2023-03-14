
/*OPERADORES ARITMÉTICOS
(* MULTIPLICA  **POTENCIAÇÃO  /DIVISÃO  % RESTO)

let num1 = 5
let num2 = 6

let total = num1 + num2
console.log(total++)
console.log(total)

console.log(++total)


console.log(total--)
console.log(total)


console.log(--total) */

/*OPERADORES DE ATRIBUIÇÃO

let number = 3

number += 20

console.log(number)

let number2 = 3

number2 -= 20

console.log(number2)

let number3 = 3

number3 *=20

console.log(number3)

let number4 = 3

number4 /=20

console.log(number4) */

/*OPERADORES DE IGUALDADE

let num1 ='1' -string
let num2 = 1  - number

console.log( num1 == num2)  //true só olha o número
console.log(num1 === num2)  //false olha o number e o type */

///*OPERADORES TERNÁRIO

/*let media = 7;
let aluno =5

 let resultado = media <= aluno ? 'APROVADO' : 'REPROVADO';

 console.log(resultado) */

 //IF E ELSE

 /*let velocidade = 150

 if (velocidade > 120){
    console.log("VC SERÁ MULTADO")
 }
else if (velocidade > 60 && velocidade <= 120){
    console.log('VELOCIDADE PERMITIDA')
}
else{
console.log ('VELOCIDADE NÃO PERMITIDA')
}*/

/*let idade = 75

if (idade >= 16 && idade < 70){
console.log('Voto Obrigatório')
}
else if (idade >= 70){
console.log('Voluntário')
}
else{
console.log('Não é obrigatório votar')
} */

//SWITCH E CASE

//SINTAXE

 /*let variavel = 'bom dia';

switch (variavel) {
    case 'bom dia':
     console.log('cedo da manha')
      break
    case 'Boa Noite':
        console.log('cedo da noite')
      break
   
    case 'boa Madrugada':
        console.log('alta madrugada')
      break
    default:
      console.log('não existe tarde')
      break
  }

/*
let semana ='domingo';

switch (semana){

case 'segunda':
console.log('DIA LIVRE')
break

case 'terça':
console.log( 'DIA LIVRE')
break

case 'quarta':
console.log( 'DIA DO CULTO')
break


case 'quinta':
console.log( 'DIA DO CURSO DE PROGRAMAÇÃO')
break

case 'sexta':
console.log( 'DIA DO SEXTOU')
break

case 'sábado':
console.log( 'DIA DA FARRA')
break

case 'domingo':
console.log( 'DIA DE DESCANSO')
break

default:
console.log('dia não existe')
break

}*/

//FOR LOOP

//SINTAXE: SEI A QUANTIDADE DE VEZES QUE VOU ITERAR

// for(var; condição; incremento)

//for(i=0 ; i<=10; i++){
//console.log(i)
//}

//for (i=10; i<=20; i++){
//console.log(i)
//}

//WHILE LOOP - A VARIÁVEL É COLOCADA FORA

/*let n = 1

while (n <= 10){
console.log('número :' , n)
n++
} */

/*let i = 1

do {
console.log('numero', i)
i++
} while(i <= 10) */

//for...in
//O laço for...in interage sobre propriedades enumeradas de um objeto, na ordem original de inserção. O laço pode ser executado para cada propriedade distinta do objeto.
 
/*const myCar = {
model:"BMW",
year: 2023,
km : 68000
}

for(let i in myCar)
console.log(i, myCar[i])*/




/*let num =[10, 20, 30, 40, 50]

for(let teste in num)
console.log(teste) 

for(let teste in num)
console.log(teste, num[teste])*/


//let friends = ['ana', 'juju', 'baba', 'kaka']

//for(let teste in friends)
//console.log(teste, friends[teste]) 

let friends = ['ana', 'juju', 'baba', 'kaka']

for(let teste of friends)
console.log(teste) 