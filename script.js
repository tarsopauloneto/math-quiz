let contador = 0;
let score = 0;
let wrongAnswear = 0;

const imagensForca = [
  "gallowsSupport.png",
  "headGallows.png",
  "chestGallows.png",
  "legsGallows.png",
  "bodyGallows.png",
  "completedGallows.png",
];

let perguntas = [
  {
    pergunta:
      "Sejam os conjuntos A = {1,2,3} e B = {3,4,5}. Qual a interseção entre os conjuntos A e B? ",
    true: "{3}",
    false: "{1,2,3,4,5}",
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
    document.getElementById("score").textContent = "Pontos: " + score;
    document.getElementById("wrongAnswear").textContent =
      "Erros: 5/" + wrongAnswear;
    posicaoCorreta = 0;
  } else {
    document.getElementById("firstAnswear").textContent = respostas[1];
    document.getElementById("secondAnswear").textContent = respostas[0];
    document.getElementById("score").textContent = "Pontos: " + score;
    document.getElementById("wrongAnswear").textContent =
      "Erros: 5/" + wrongAnswear;
    posicaoCorreta = 1;
  }
}

function verificarResposta(respostaUsuario) {
  if (respostaUsuario === posicaoCorreta) {
    score++;
    console.log("Correct! score:", score);
  } else {
    wrongAnswear++;
    console.log("Wrong! score:", score);

    if (wrongAnswear < imagensForca.length) {
      document.getElementById(
        "gallowImage"
      ).src = `./assets/${imagensForca[wrongAnswear]}`;
    }

    if (wrongAnswear == 5) {
      setTimeout(() => {
        alert("Game Over");

        contador = 0;
        score = 0;
        wrongAnswear = 0;

        document.getElementById(
          "gallowImage"
        ).src = `./assets/${imagensForca[0]}`;
        mostrarPergunta(contador);
      }, 100);
      return;
    }
  }

  if (score === 11) {
    setTimeout(() => {
      alert("Parabéns você é um gênio da matemática!!");

      contador = 0;
      score = 0;
      wrongAnswear = 0;

      document.getElementById(
        "gallowImage"
      ).src = `./assets/${imagensForca[0]}`;
      mostrarPergunta(contador);
    }, 100);
    return;
  }

  contador = (contador + 1) % perguntas.length;
  mostrarPergunta(contador);
}

mostrarPergunta(contador);

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    verificarResposta(0);
  } else if (event.key === "ArrowRight") {
    verificarResposta(1);
  }
});
