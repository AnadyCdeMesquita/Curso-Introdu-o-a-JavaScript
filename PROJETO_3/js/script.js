
let computerNumber 
let userNumbers =[]
let attempts = 0
let maxguesses = 10

function newGame (){
window.location.reload()

}

function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1)
    console.log(computerNumber)
   
}

function compareNumbers(){
const userNumber = Number(document.getElementById('inputBox').value)
userNumbers.push(' ' + userNumber)
document.getElementById('guesses').innerHTML = userNumbers

if (attempts <maxguesses){

if(userNumber > computerNumber){
 document.getElementById('textOutput').innerHTML = 'Seu número é alto.'
 document.getElementById('inputBox').value = ''
 attempts++
 document.getElementById('attempts').innerHTML = attempts
}

else if(userNumber < computerNumber){
    document.getElementById('textOutput').innerHTML = 'Seu número é baixo.'
    document.getElementById('inputBox').value = ''
    attempts++
    document.getElementById('attempts').innerHTML = attempts
}

else {
    document.getElementById('textOutput').innerHTML = 'Parabéns. Você acertou'
    attempts++
    document.getElementById('attempts').innerHTML = attempts
    document.getElementById('inputBox').setAttribute('readOnly', 'readOnly')
}
}
else{
    document.getElementById('textOutput').innerHTML = 'Esquece, sem chances!' + ' O nº é ' + computerNumber + '.'
    document.getElementById('inputBox').setAttribute('readOnly', 'readOnly')
}
}