function main() {
  const titulo = document.querySelector('.container h1');
  titulo.innerHTML = dataPorExtenso();
}

function diaSemana(number) {
  const diaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  return diaSemana[number];
}

function mes(number) {
  const mes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  return mes[number];
}

function addZero(number) {
  return number >= 10 ? number : `0${number}`;
}

function dataPorExtenso() {
  const data = new Date();
  const diaMes = data.getDate();
  const mesPorExtenso = mes(data.getMonth());
  const ano = data.getFullYear();
  const hora = data.getHours();
  const minuto = data.getMinutes();
  const diaSemanaPorExtenso = diaSemana(data.getDay());
  return `${diaSemanaPorExtenso}, ${diaMes} de ${mesPorExtenso} de ${ano} <br> ${addZero(hora)}:${addZero(minuto)}`;
}

main();
