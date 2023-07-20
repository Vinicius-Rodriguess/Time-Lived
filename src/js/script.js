function enviar() {
  const dia = parseInt(document.querySelector(".dia").value);
  const mes = parseInt(document.querySelector(".mes").value);
  const ano = parseInt(document.querySelector(".ano").value);
  const resultado = document.querySelector(".p-resultado");
  const divResultado = document.querySelector(".divResultado");
  const nascimento = new Date(ano, mes - 1, dia);
  const atual = new Date();

  function validarData(dia, mes, ano) {
    const data = new Date(ano, mes - 1, dia);
    return data.getDate() === dia && data.getMonth() === mes - 1 && data.getFullYear() === ano;
  }

  if (!validarData(dia, mes, ano) || ano < 0 || ano > atual.getFullYear()) {
    alert("Insira uma data válida!");
    return;
  }

  const difMilissegundos = atual - nascimento;

  const diffDias = difMilissegundos / (24 * 60 * 60 * 1000);

  const anos = Math.floor(diffDias / 365);
  const meses = Math.floor((diffDias % 365) / 30);
  const dias = Math.floor((diffDias % 365) % 30);

  divResultado.classList.remove("invisivel");
  resultado.innerHTML = `<p> Você tem ${anos} anos, ${meses} meses e ${dias} dias de vida. </p> <br>`;
  resultado.innerHTML += `<p> ${Math.floor(diffDias)} Dias </p> <br>`;
  resultado.innerHTML += `<p> ${Math.floor(diffDias * 24)} Horas </p> <br>`;
  resultado.innerHTML += `<p> ${Math.floor(diffDias * 24 * 60)} Minutos </p> <br>`;
  resultado.innerHTML += `<p> ${Math.floor(diffDias * 24 * 60 * 60)} Segundos </p> <br>`;
}
