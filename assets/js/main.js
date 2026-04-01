function main() {
  const titulo = document.querySelector('.container h1');
  const data = new Date();
  /**
   * const opcoes = {
   *  dateStyle: 'full',
   *  timeStyle: 'short'
   * };
   */
  titulo.innerHTML = data.toLocaleString('pt-BR', {
    dateStyle: 'full',
    timeStyle: 'short'
  });
}

main();
