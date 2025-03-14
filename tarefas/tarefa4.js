const faturamentoEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  // Calcula o total de faturamento e o percentual de cada estado
  const totalFaturamento = Object.values(faturamentoEstados).reduce((total, valor) => total + valor, 0);
  
  console.log(`Faturamento total da distribuidora: R$ ${totalFaturamento.toFixed(2)}`);
  
  Object.entries(faturamentoEstados).forEach(([estado, valor]) => {
    console.log(`${estado}: ${(valor / totalFaturamento * 100).toFixed(2)}%`);
  });
  