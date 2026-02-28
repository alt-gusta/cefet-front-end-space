// Faça o exercício DOS PARÁGRAFOS neste arquivo
// Este arquivo AINDA NÃO está incluído no arquivo HTML

const btnExpandirRetrairEl = document.querySelectorAll('.botao-expandir-retrair');

btnExpandirRetrairEl.forEach(btn => {
  btn.addEventListener('click', () => {
    const paragrafo = btn.closest('p');
    paragrafo.classList.toggle('expandido');
    btn.textContent = btn.textContent === '+' ? '-' : '+';
  });
});