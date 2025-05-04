let contador = 0;
let pontos = 0;

let perguntas = [
  {
    pergunta: "O arco-íris é composto de 1 cor?",
    true: "sim",
    false: "não",
  },
  {
    pergunta: "Qual planeta que nós vivemos?",
    true: "Terra",
    false: "Plutão",
  },
];

let posicaoCorreta = 0;

function mostrarPergunta(index) {
  const perguntaAtual = perguntas[index];
  document.getElementById("question").textContent = perguntaAtual.pergunta;

  const respostas = [perguntaAtual.true, perguntaAtual.false];

  if (Math.random() < 0.5) {
    document.getElementById("firstAnswear").textContent = respostas[0];
    document.getElementById("secondAnswear").textContent = respostas[1];
    posicaoCorreta = 0;
  } else {
    document.getElementById("firstAnswear").textContent = respostas[1];
    document.getElementById("secondAnswear").textContent = respostas[0];
    posicaoCorreta = 1;
  }
}

function verificarResposta(respostaUsuario) {
  if (respostaUsuario === posicaoCorreta) {
    pontos++;
    console.log("Correct! Pontos:", pontos);
  } else {
    console.log("Wrong! Pontos:", pontos);
  }

  contador = (contador + 1) % perguntas.length;
  mostrarPergunta(contador);
}

mostrarPergunta(contador);

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowUp") {
    verificarResposta(0);
  } else if (event.key === "ArrowDown") {
    verificarResposta(1);
  }
});
