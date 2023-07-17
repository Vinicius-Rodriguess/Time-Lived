function enviar() {

  const dia = document.querySelector(".dia").value;
  const mes = document.querySelector(".mes").value;
  const ano = document.querySelector(".ano").value;
  const resultado = document.querySelector(".p-resultado");
  const divResultado = document.querySelector(".divResultado");

  const nascimento = new Date(ano, mes - 1, dia);
  const atual = new Date();

  const diffMilissegundos = atual - nascimento;

  const diffDias = diffMilissegundos / (24 * 60 * 60 * 1000);
   
  const proximoAniversario = new Date(atual.getFullYear, mes - 1, dia);
  if (proximoAniversario < atual){
    proximoAniversario.setFullYear(proximoAniversario.getFullYear() + 1);
  }

  const anos = Math.floor(diffDias / 365);
  const meses = Math.floor((diffDias % 365) / 30);
  const dias = Math.floor((diffDias % 365) % 30);


  divResultado.classList.remove("invisivel");
  resultado.innerHTML = `<p> Você tem ${anos} anos, ${meses} meses e ${dias} dias de vida. </p> <br>`;
  resultado.innerHTML += `<p> ${Math.floor(diffDias)} Dias </p> <br>`;
  resultado.innerHTML += `<p> ${Math.floor(diffDias * 24)} Horas </p> <br>`;
  resultado.innerHTML += `<p> ${Math.floor(diffDias * 24 * 60)} Minutos </p> <br>`;
  resultado.innerHTML += `<p> ${Math.floor(diffDias * 24 * 60)} Minutos </p> <br>`;
  resultado.innerHTML += `<p> Faltam ${diffDias} dias para o próximo aniversário. </p> <br>`;

}
