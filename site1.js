const openModalButton = document.getElementById('openModal');
const closeModalButton = document.getElementById('closeModal');
const modal = document.getElementById('modal');

// Abre o modal quando o botão for clicado
openModalButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Fecha o modal quando o botão de fechar for clicado
closeModalButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

