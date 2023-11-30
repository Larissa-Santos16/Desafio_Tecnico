// Desafio Técnico 1
// Descrição:
// 	•	Implemente uma função que receba um número inteiro positivo e retorne o somatório de todos os valores inteiros divisíveis por 3 ou 5 que sejam inferiores ao número passado.

// Exemplos:
// 	•	Caso sua função receba o inteiro 10, ela deve retornar 23, resultante do somatório dos números 3, 5, 6 e 9 que são menores que 10.
// 	•	Caso sua função receba o inteiro 11, ela deve retornar 33, resultante do somatório dos números 3, 5, 6, 9 e 10 que são menores que 11.

function somatorioInteiros(numero) {
    if (typeof numero === 'number') {
        if (Number.isInteger(numero) || numero >= 0) {
            let somatorio = 0;
            let decrimentoArray = Array.from({ length: numero }, (_, index) => numero - index);
            const numberArray = decrimentoArray.slice(1); 
            for (let i = 0; i < numberArray.length; i++) {
                if (numberArray[i] % 3 === 0 || numberArray[i] % 5 === 0) {
                somatorio += numberArray[i];
                }
            }
            return somatorio;
        } else {
            console.log('Por favor, entre com um número inteiro e positivo.')
        }
    } else {
        console.log('Por favor, entre com um número.')
    }

}

console.log(somatorioInteiros(10));
console.log(somatorioInteiros(11));

