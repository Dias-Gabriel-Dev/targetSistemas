function inverterString(texto) {
    let resultado = '';
    
    
    for (let i = texto.length - 1; i >= 0; i--) {
      resultado += texto[i];
    }
    
    return resultado;
  }
  
  
  const stringOriginal = "Target Sistemas";
  
  
  const stringInvertida = inverterString(stringOriginal);
  console.log(`String original: ${stringOriginal}`);
  console.log(`String invertida: ${stringInvertida}`);
  