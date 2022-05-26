function leiaMais() {
  const pontos = document.getElementById("pontos");
  const maisTexto = document.getElementById("mais");
  const btnLeiaMais = document.getElementById("btnLeiaMais");

  if (pontos.style.display === "none") {
    pontos.style.display = "inline";
    maisTexto.style.display = "none";
    btnLeiaMais.innerHTML = "ver mais";
  } else {
    pontos.style.display = "none";
    maisTexto.style.display = "inline";
    btnLeiaMais.style.display = "none";
  }
}

function addClass() {
  const topico = (document.getElementById("topico").style.display = "block");
  const firstBtn = (document.getElementById("criar").style.display = "none");
}

function teste() {
  const topico = (document.getElementById("topico").style.display = "none");
  const firstBtn = (document.getElementById("criar").style.display = "none");
  const addBlur = (document.getElementById("enviado").style.display = "block");
}

function reiniciar() {
  const topico = (document.getElementById("criar").style.display = "block");
  const addBlur = (document.getElementById("enviado").style.display = "none");
}
