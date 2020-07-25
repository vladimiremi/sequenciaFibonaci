/*Na matemática, a Sucessão de Fibonacci, é uma 
sequência de números inteiros, começando normalmente 
por 0 e 1, na qual, cada termo subsequente corresponde 
à soma dos dois anteriores. */ 



//
const fibonacci = () => {

    let fibonacciArray = []
    let element = 0

    for (let index = 0; element < 350; index++) {

        if (index < 2) {
            fibonacciArray.push(index)
            continue
        }

        element = fibonacciArray[(index - 1)] + fibonacciArray[(index - 2)]
        fibonacciArray.push(element)

        console.log(`${fibonacciArray}`)

    }
    return fibonacciArray
}


const isFibonnaci = (num) => {
    let comparacao = fibonacci().includes(num)

    if (comparacao == true) {
        console.log("Está na lista")
    } else {
        console.log("Não está na lista")
    }
    
    return comparacao

}

module.exports = {
    fibonacci,
    isFibonnaci
}


isFibonnaci()