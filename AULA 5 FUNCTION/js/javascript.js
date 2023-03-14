/*
//funcion declaration:

function movie(){
console.log("the movie");
}

movie()

//function expression:

let car = function(){  
    console.log("tesla");
}

car() */

function emprestimo(valorTotal, juros, anos){
return (valorTotal * juros/100 * anos) + (valorTotal)

}

console.log(emprestimo(30000, 10, 5))


//por default, caso os numeros se repitam

function emprestimo(valorTotal, juros=10, anos=5){
    return (valorTotal * juros/100 * anos) + (valorTotal)
    
    }
    
    console.log(emprestimo(30000))
