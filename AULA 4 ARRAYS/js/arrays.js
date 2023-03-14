/*let num =['marcia', 'fernando', 'lalá']

num[2]= 'vera'
console.log(num)

INSERÇÃO DE NUMEROS NUMA ARRAYS

const numeros = [5, 6, 7, 8]

numeros.push(9,10,11) PARA INSERIR NUMEROS NO FINAL
numeros.unshift(1,2) PARA INSERIR NUMEROS NO INÍCIO
numeros.splice(2, 0, 3, 4)
//splice (2 a partir desse index, 0 nenhum numero a frente deletado, 3 e 4 são numeros inseridos)

console.log(numeros)*/

//LOCALIZANDO ITENS NUMA ARRAY PRIMITIVA
/*const amigos = ['ana', 'fernanda', 'kelson']
const number = [8, 9, 10]


console.log(amigos.indexOf('fernanda'))
console.log(number.indexOf(9))
console.log(number.indexOf(11))
console.log(number.includes(10))*/

/* LOCALIZAR UM ARRAY DE REFERÊNCIA
const movies = [
{id: 1, MovieName: 'Deja Vu'},
{id: 2, MovieName: 'Laravel'},
{id: 3, MovieName: 'Bolero'},
]

console.log(movies.find(function(cinema){
    return cinema.MovieName = 'Deja Vu'

}
)) */
/*
//EXCLUSÃO DE NUMEROS NUMA ARRAY
//shif - exclui o primeiro elemento 
//pop - exlui o ultimo elemento
//splice - exlui a partir de qual index, depois coloca a quantidade de elementos que quer excluir
const number =[1, 2, 3, 4, 5, 6, 7, 8]

number.shift() 
number.pop()
number.splice(3,2) 


console.log(number) */

//ESVAZIANDO UMA ARRAY

/*let num = [5, 6, 7, 8]

//num = []
num.length = 0
num.splice(0,4)
num.splice(0, num.length)

console.log(num) */

//CONCATENANDO ARRAYS

/*let number = [1, 2, 3, 4, 5]
let letters = ['a', 'b', 'c', 'd']

let all = number.concat(letters)

console.log(all)

let half = all.slice(2,9)

console.log(half) */


/*JOIN - ADICIONAR ALGUMA COISA A SUA ARRAY

let juntando = ['anady', 'thais', 'fernando', 'socorreth']

juntando.join('amor')
let testando = juntando.join('amizade')


console.log(testando)*/

/*REVERTENDO ARRAYS

let friends = ['socorreth', 'zizi', 'anady']

friends.sort()
friends.reverse() //PARA REVERTER A SITUAÇÃO ANTERIOR. 


console.log(friends)*/

//VERIFICANDO ELEMENTOS EM UMA ARRAY
//retorna resultados booleanos (verdadeiro ou falso)

/*let notas = [10, 8, 7, 5]

let media = notas.every(function(value){
return  value >= 0
})

console.log(media)*/

/*FILTRANDO UM ARRAY

let tempLondon = [0, 15, 25, -2, 30, -10]

let tempPositive = tempLondon.filter(function(value){
return value>=0
})

console.log(tempPositive)*/

//FAZENDO UM ARROW FUNCTION

let tempLondon = [0, 15, 25, -2, 30, -10]

let tempPositive = tempLondon.filter(value => value >=0)

console.log(tempPositive)









