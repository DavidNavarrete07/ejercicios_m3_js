  const etiq_chiste = document.querySelector("#chiste");
  const etiq_btn = document.querySelector("#btnActualizar");
  function obtenerChiste() {
    $.getJSON("https://api.chucknorris.io/jokes/random", function (datos) {
      etiq_chiste.textContent = datos["value"];
    });
  }
  etiq_btn.addEventListener('click', function () {
    obtenerChiste();
  });