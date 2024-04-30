export default class CalculadoraService {
    static calcularValorFinanciado(n: number | null, j: number | null, p: number | null, q0: number | null): number | null {
        // Função para calcular o valor da prestação
        const calcularPrestacao = (j: number): number => {
            return (((1 - Math.pow(1 + j, -n!)) / j) * p!);
        };
    
        // Caso 1: Calcular valor financiado (q0)
        if (n !== null && j !== null && p !== null && q0 === null) {
            return (((1 - Math.pow(1 + j, -n)) / j) * p);
        }
        // Caso 2: Calcular número de meses (n)
        else if (n === null && j !== null && p !== null && q0 !== null) {
            let calculatedN = 1;
            let prestacao = calcularPrestacao(j);
    
            // Loop para calcular o número de meses
            while (prestacao < q0) {
                calculatedN++;
                prestacao = calcularPrestacao(j);
            }
    
            return calculatedN;
        }
        // Caso 3: Calcular taxa de juros mensal (j)
        else if (n !== null && j === null && p !== null && q0 !== null) {
            let calculatedJ = 0.000001;
            let prestacao = calcularPrestacao(calculatedJ);
    
            // Loop para calcular a taxa de juros
            while (Math.abs(prestacao - p) > 0.000001) {
                calculatedJ += 0.000001;
                prestacao = calcularPrestacao(calculatedJ);
            }
    
            return calculatedJ;
        }
        // Caso 4: Calcular valor da prestação (p)
        else if (n !== null && j !== null && p === null && q0 !== null) {
            return q0 / (((1 - Math.pow(1 + j, -n)) / j));
        }
        // Se nenhum caso corresponder, retorna null
        else {
            return null;
        }
    }
}

// // Exemplo de uso da função
// const valorPrestacao = 1000; // Valor da prestação
// const numeroMeses = null; // Número de meses
// const valorFinanciado = 12000; // Valor financiado
// const taxaJuros = 0.01; // Taxa de juros mensal
// const resultado = CalculadoraService.calcularValorFinanciado(numeroMeses, taxaJuros, valorPrestacao, valorFinanciado);
// console.log(`O valor restante é: ${resultado}`);
