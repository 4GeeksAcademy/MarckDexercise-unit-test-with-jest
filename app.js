const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollartoYen = function(valueDollar) {
    let valueInYen = valueDollar * 151.34;
    return valueInYen;
}

const fromYenToPound = function(valueYen) {
    let valueInDollar = valueYen * 0.0052;
    return valueInDollar;
}



const sum=(number1, number2)=>{
    return number1 + number2
}

console.log(sum(7, 3))


module.exports = { sum, fromEuroToDollar, fromDollartoYen, fromYenToPound };