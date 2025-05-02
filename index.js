let dataAtual = new Date();

function atualizarCalendario() {
  const diasContainer = document.getElementById("dias");
  const mesAno = document.getElementById("mesAno");
  diasContainer.innerHTML = "";

  const ano = dataAtual.getFullYear();
  const mes = dataAtual.getMonth();
  const primeiroDia = new Date(ano, mes, 1).getDay();
  const diasNoMes = new Date(ano, mes + 1, 0).getDate();

  const nomesMeses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
                      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

  mesAno.textContent = `${nomesMeses[mes]} ${ano}`;

  for (let i = 0; i < primeiroDia; i++) {
    diasContainer.innerHTML += "<div></div>";
  }

  for (let dia = 1; dia <= diasNoMes; dia++) {
    const div = document.createElement("div");
    div.textContent = dia;

    const hoje = new Date();
    if (
      dia === hoje.getDate() &&
      mes === hoje.getMonth() &&
      ano === hoje.getFullYear()
    ) {
      div.classList.add("hoje");
    }

    diasContainer.appendChild(div);
  }
}

function mudarMes(delta) {
  dataAtual.setMonth(dataAtual.getMonth() + delta);
  atualizarCalendario();
}

window.onload = atualizarCalendario;