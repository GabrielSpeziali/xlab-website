document.addEventListener("DOMContentLoaded", function() {
    var janela = document.getElementById("janela");
    var btn = document.getElementById("abrirJanela");

    //quandoclicar no texto "versão ALFA", a janela é exibida
    btn.onclick = function() {
        janela.style.display = "block"; // Mostra a janela
    }

    //quandoclicar fora da janela, ela fecha
    window.onclick = function(event) {
        if (event.target === janela) {
            janela.style.display = "none"; // Fecha a janela
        }
    }
});


