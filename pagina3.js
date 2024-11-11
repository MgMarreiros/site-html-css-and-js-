function expandCard(card){
  card.style.transform = 'scale(1.05)'
}

function collapseCard(card){
  card.style.transform = 'scale(1)'
}
function showmoreInfo(){
  alert('Compra Concluida!!')
}
// 

let quantidade = 1
let valorUnitario = 229.99

function atualizarResumo() {
  document.querySelector('.itemResumo strong').textContent = `Itens (${quantidade})`
  let valorTotal = quantidade * valorUnitario
  document.querySelector('.Total strong').textContent = `Valor total: R$${valorTotal.toFixed(2)}`
}

document.getElementById('increaseVolume').addEventListener('click', function() {
  quantidade = Math.min(100, quantidade + 1)
  atualizarResumo()
})

document.getElementById('decreaseVolume').addEventListener('click', function() {
  quantidade = Math.max(0, quantidade - 1)
  atualizarResumo()
})

atualizarResumo()