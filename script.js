// Armazenar os dados
let dados= [];

// Gerar ID aleatório com 5 dígitos
function gerald(){
    return Math.floor(100000 + Math.random() *9000)
}

// Adicionar dados à tabela
document.getElementByld('form').addEventListener('submit', fuction(event) {
  event.preventDefault():}

  const descricao = document.getElementById('descricao').value;
  const valor = parseFloat(document.getElementByld('descricao')).value.replace(',','.')); // Aceita centavos
  const tipo = document.getElementById('tipo').value;

  // Captura a data do input e formata corretamente
  const datalnput = new Date(document.getElementById.getByld('data').value);
  cont data = `