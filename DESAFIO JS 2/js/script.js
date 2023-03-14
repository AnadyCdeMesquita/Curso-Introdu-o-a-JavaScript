
/*let umTeste = 'brincando'
document.getElementById('teste').innerHTML = umTeste*/

let ecommerce = Number(prompt('Coloque o valor do produto'))
console.log(typeof ecommerce)

if(ecommerce>=20){
document.getElementById('ecommerce').innerHTML = 'Aprovado'
} else{
document.getElementById('ecommerce').innerHTML = 'Desaprovado'
}