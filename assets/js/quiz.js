//adiciona um evento a todos os inputs de radio para mudar a cor do texto a labdel correspondente quando clicado
document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', function() {
        //reseta a cor de todas as labels na mesma pergunta
        const question = this.closest('.question'); //seleciona a pergunta que contém o input
        const labels = question.querySelectorAll('label'); //seleciona todas as labels da pergunta

        labels.forEach(label => {
            label.style.color = ""; //reseta a cor
        });

        //muda a cor do texto da label correspondente para vermelho
        const label = this.parentNode; //seleciona a label pai
        label.style.color = "#ff4c4c"; // muda o texto para vermelho
    });
});

function calcularResultado() {
    let pontos = 0;
    const totalQuestoes = 5;

    // verifique as respostas corretas para cada pergunta
    for (let i = 1; i <= totalQuestoes; i++) {
        const radios = document.getElementsByName('q' + i);
        let respostaCorreta = null;

        // determina a resposta correta
        for (const radio of radios) {
            if (radio.value == '1') {
                respostaCorreta = radio; // escolhe a resposta correta
            }
            if (radio.checked && radio.value == '1') {
                pontos++;
            }
        }

        //se uma resposta correta foi encontrada, muda a cor da resposta correta
        if (respostaCorreta) {
            const labelCorreta = respostaCorreta.parentNode; //Seleciona a label da resposta correta
            labelCorreta.style.color = "#28a745"; //muda o texto para verde
        }
    }

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '<h3>Você acertou ' + pontos + ' de ' + totalQuestoes + ' perguntas.</h3>';

    //adiciona animação simples ao resultado
    resultadoDiv.classList.add('animate');
}
