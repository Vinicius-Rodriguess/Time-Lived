function enviar() {
  const dia = document.querySelector(".dia").value;
  const mes = document.querySelector(".mes").value;
  const ano = document.querySelector(".ano").value;
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".p-resultado");
  const divResultado = document.querySelector(".divResultado");
  const nascimento = new Date(ano, mes - 1, dia);
  const atual = new Date();

  if (dia < 1 || dia > 31) {
    alert("Insira um dia valido!");
    return;
  } else if (mes < 1 || mes > 12) {
    alert("insira um mes valido!");
    return;
  } else if (ano > atual.getFullYear) {
    alert("insira um ano valido!");
    return;
  }

  const diffMilissegundos = atual - nascimento;

  const diffDias = diffMilissegundos / (24 * 60 * 60 * 1000);

  const anos = Math.floor(diffDias / 365);
  const meses = Math.floor((diffDias % 365) / 30);
  const dias = Math.floor((diffDias % 365) % 30);

  divResultado.classList.remove("invisivel");
  resultado.innerHTML = `<p> Você tem ${anos} anos, ${meses} meses e ${dias} dias de vida. </p> <br>`;
  resultado.innerHTML += `<p> ${Math.floor(diffDias)} Dias </p> <br>`;
  resultado.innerHTML += `<p> ${Math.floor(diffDias * 24)} Horas </p> <br>`;
  resultado.innerHTML += `<p> ${Math.floor(
    diffDias * 24 * 60
  )} Minutos </p> <br>`;
  resultado.innerHTML += `<p> ${Math.floor(
    diffDias * 24 * 60 * 60
  )} Segundos </p> <br>`;
}
