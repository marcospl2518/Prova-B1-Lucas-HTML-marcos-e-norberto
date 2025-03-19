// Função que altera a cor de uma linha ao passar o mouse sobre ela
function mudarCorLinha(linha, alterarCor) {
    if (alterarCor) {
      linha.style.backgroundColor = '#d5dbdb'; // Cor alterada ao passar o mouse
    } else {
      linha.style.backgroundColor = ''; // Cor original quando o mouse sai
    }
  }
  
  // Função que altera a cor de uma linha com base no ID
  function alterarCorLinha(idLinha) {
    const linha = document.getElementById(idLinha);
    if (linha) {
      linha.style.backgroundColor = '#7bed9f'; // Cor ao clicar no botão
    }
  }
  
  // Função para alterar a cor da linha 1 ao clicar no botão
  function alterarCorLinha1() {
    const linha1 = document.getElementById('linha1');
    if (linha1) {
      linha1.style.backgroundColor = '#ff6b81'; // Cor ao clicar no botão
    }
  }
  
  // Função para capturar e exibir o nome do time no console e em um alerta
  function mostrarNomeTime(elemento) {
    const nomeTime = elemento.innerHTML;
    alert('Nome do Time: ' + nomeTime);
    console.log('Nome do Time: ' + nomeTime);
  }
  