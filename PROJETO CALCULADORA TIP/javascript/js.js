function formatMoney(value){
value = value.toFixed(2)
return '$ ' + value

}

function formatSplit(value){
if (value == 1) return value + ' pessoa'
return value + ' pessoas'
}



function update(){
let bill = Number(document.getElementById("yourBill").value)
let tipPercent = document.getElementById("tipInput").value
let split = document.getElementById("splitInput").value

let tipValue = bill * (tipPercent / 100)
let billTotal = bill + tipValue
let billEach   = bill / split

document.getElementById("tipPercent").innerHTML = tipPercent + ' %'
document.getElementById("tipValue").innerHTML = formatMoney(tipValue)
document.getElementById("totalWithTip").innerHTML = formatMoney(billTotal) 
document.getElementById("splitValue").innerHTML = formatSplit(split) 
document.getElementById("billEach").innerHTML = billTotal / split

}