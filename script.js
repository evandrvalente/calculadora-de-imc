
function calcularIMC(){

  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  
  if (peso === 0 || altura === 0){
    document.getElementById("resultado").innerText = "Digite valores válidos para peso e altura"
  
  }else{

    let imc = (peso/(altura*altura)).toFixed(1)
  
    
    // A tabela de IMC (Índice de Massa Corporal) é a seguinte:
    // Menor que 18,5: Abaixo do peso 
    // 18,5 a 24,9: Peso normal 
    
    // 25 a 29,9: Sobrepeso 
    
    // 30 a 34,9: Obesidade grau I 
    
    // 35 a 39,9: Obesidade grau II 
    
    // Maior que 40: Obesidade grau III ou mórbida
    
    let resultado;
    
    if(imc < 18.5) {
      resultado = "peso abaixo do normal"
    } else if (imc < 25){
      resultado = "peso normal"
    } else if (imc < 30){
      resultado = "sobrepeso"
    } else if (imc < 35){
      resultado = "obesidade grau 1"
    } else if (imc < 40){
      resultado = "obesidade grau 2"
    } else if (imc >= 40){
      resultado = "obesidade mórbida"
    }
    
   document.getElementById("resultado").innerText = "Seu imc é " + imc + ". Você está com " + resultado + "."
                                                    // `Seu imc é ${imc}. Você está com ${resultado}`
  }


    
}