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
