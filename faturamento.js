const fs = require('fs');

function lerFaturamento() {
    const dadosBrutos = fs.readFileSync('./faturamento.json', 'utf8');
    return JSON.parse(dadosBrutos);
}

function calcularMenorFaturamento(faturamentos) {
    const valores = faturamentos.map(f => f.faturamento).filter(f => f > 0);
    return Math.min(...valores);
}

function calcularMaiorFaturamento(faturamentos) {
    const valores = faturamentos.map(f => f.faturamento).filter(f => f > 0);
    return Math.max(...valores);
}

function calcularMediaMensal(faturamentos) {
    const diasComFaturamento = faturamentos.filter(f => f.faturamento > 0);
    const somaFaturamento = diasComFaturamento.reduce((total, f) => total + f.faturamento, 0);
    return somaFaturamento / diasComFaturamento.length;
}

function calcularDiasAcimaDaMedia(faturamentos, media) {
    return faturamentos.filter(f => f.faturamento > media).length;
}

function calcularFaturamento() {
    const faturamentos = lerFaturamento();

    const menorFaturamento = calcularMenorFaturamento(faturamentos);
    const maiorFaturamento = calcularMaiorFaturamento(faturamentos);
    const mediaMensal = calcularMediaMensal(faturamentos);
    const diasAcimaDaMedia = calcularDiasAcimaDaMedia(faturamentos, mediaMensal);

    console.log(`Menor faturamento: R$ ${menorFaturamento}`);
    console.log(`Maior faturamento: R$ ${maiorFaturamento}`);
    console.log(`Média mensal: R$ ${mediaMensal.toFixed(2)}`);
    console.log(`Número de dias com faturamento superior à média: ${diasAcimaDaMedia}`);
}

calcularFaturamento();



