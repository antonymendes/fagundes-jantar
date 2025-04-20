
function mostrarPagina(id) {
  const todas = document.querySelectorAll('.slide');
  todas.forEach(p => p.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('pagina1').classList.remove('hidden');
});
