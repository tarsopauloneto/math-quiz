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

// Arrays separados por dificuldade
const perguntasFaceis = [
  {
    pergunta: "Qual símbolo representa a união de dois conjuntos?",
    true: "∪",
    false: "∩",
  },
  {
    pergunta: "O conjunto dos números naturais é:",
    true: "{0, 1, 2, 3, ...}",
    false: "{–1, 0, 1, 2, ...}",
  },
  {
    pergunta: "Dois conjuntos são iguais quando:",
    true: "Têm os mesmos elementos",
    false: "Têm a mesma quantidade de elementos",
  },
  {
    pergunta: "Uma relação é reflexiva quando:",
    true: "Todo elemento se relaciona com ele mesmo",
    false: "Nenhum elemento se relaciona com outro",
  },
  {
    pergunta: "A propriedade simétrica significa que:",
    true: "Se A se relaciona com B, então B se relaciona com A",
    false: "Se A se relaciona com B, então B não se relaciona com A",
  },
  {
    pergunta: "Uma função associa:",
    true: "Cada elemento do domínio a um só do contradomínio",
    false: "Qualquer número de elementos do domínio a qualquer outro",
  },
  {
    pergunta: "Uma função é injetora quando:",
    true: "Cada elemento da imagem tem um único elemento no domínio",
    false: "Todos os elementos do domínio vão para o mesmo valor",
  },
  {
    pergunta: "A função inversa desfaz:",
    true: "O efeito da função original",
    false: "A definição da função",
  },
  {
    pergunta: "Em uma PA, a diferença entre os termos é:",
    true: "Constante",
    false: "Variável",
  },
  {
    pergunta: "Em uma PG, cada termo é obtido:",
    true: "Multiplicando pelo mesmo número",
    false: "Somando o mesmo número",
  },
];

const perguntasMedias = [
  {
    pergunta: "A interseção de dois conjuntos contém:",
    true: "Elementos comuns",
    false: "Todos os elementos diferentes",
  },
  {
    pergunta: "O conjunto complementar de A (em relação a U) é:",
    true: "Os elementos de U que não estão em A",
    false: "Os elementos que estão em A",
  },
  {
    pergunta: "Um subconjunto de A é:",
    true: "Um conjunto que possui só elementos de A",
    false: "Um conjunto que tem ao menos um elemento fora de A",
  },
  {
    pergunta: "Uma relação é transitiva quando:",
    true: "Se A se relaciona com B e B com C, então A se relaciona com C",
    false: "Se A se relaciona com C, então B se relaciona com A",
  },
  {
    pergunta: "Uma relação de equivalência precisa ser:",
    true: "Reflexiva, simétrica e transitiva",
    false: "Somente transitiva",
  },
  {
    pergunta: "Uma função bijetora é:",
    true: "Injetora e sobrejetora ao mesmo tempo",
    false: "Injetora ou sobrejetora, mas não ambas",
  },
  {
    pergunta: "A função composta é formada:",
    true: "Ao aplicar uma função e depois outra",
    false: "Ao somar duas funções",
  },
  {
    pergunta: "Uma função é sobrejetora se:",
    true: "O conjunto imagem é igual ao contradomínio",
    false: "O domínio é finito",
  },
  {
    pergunta: "A fórmula geral da PA é:",
    true: "an = a1 + (n – 1)·r",
    false: "an = a1 × rⁿ",
  },
  {
    pergunta: "Em uma PG de razão 2, o próximo termo de 4 é:",
    true: "8",
    false: "6",
  },
];

const perguntasDificeis = [
  {
    pergunta: "A diferença entre A e B (A – B) contém:",
    true: "Elementos que estão em A e não em B",
    false: "Elementos comuns a A e B",
  },
  {
    pergunta: "O conjunto das partes de um conjunto com 3 elementos tem:",
    true: "8 subconjuntos",
    false: "6 subconjuntos",
  },
  {
    pergunta: "Se A ⊆ B e B ⊆ A, então:",
    true: "A = B",
    false: "A ∩ B = ∅",
  },
  {
    pergunta: "A relação R = {(1,2), (2,3), (1,3)} é:",
    true: "Transitiva",
    false: "Simétrica",
  },
  {
    pergunta: "R = {(a, b) | a < b}. Qual propriedade falta em R?",
    true: "Reflexiva",
    false: "Antissimétrica",
  },
  {
    pergunta: "Dada f(x) = 2x + 3, a inversa é:",
    true: "f⁻¹(x) = (x – 3)/2",
    false: "f⁻¹(x) = 2x – 3",
  },
  {
    pergunta: "Se f(x) = x + 3 e g(x) = x², então (g ∘ f)(x) é:",
    true: "(x + 3)²",
    false: "x² + 3",
  },
  {
    pergunta: "Se f(x) = |x|, essa função não é:",
    true: "Injetora",
    false: "Sobrejetora em ℝ⁺",
  },
  {
    pergunta: "Em uma PG, a razão pode ser:",
    true: "Qualquer número real",
    false: "Apenas inteiro e positivo",
  },
  {
    pergunta: "Uma sequência é crescente se:",
    true: "Cada termo é maior que o anterior",
    false: "A soma dos termos é constante",
  },
];

// Função para sortear N perguntas aleatórias de um array
function sortearPerguntas(array, quantidade) {
  const embaralhado = [...array].sort(() => Math.random() - 0.5);
  return embaralhado.slice(0, quantidade);
}

// Gerar a sequência completa de perguntas
let perguntas = [
  ...sortearPerguntas(perguntasFaceis, 2),
  ...sortearPerguntas(perguntasMedias, 5),
  ...sortearPerguntas(perguntasDificeis, 3),
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

  document.getElementById("score").textContent = "Pontos: " + score;
  document.getElementById("wrongAnswear").textContent = "Erros: 5/" + wrongAnswear;
}

function verificarResposta(respostaUsuario) {
  if (respostaUsuario === posicaoCorreta) {
    score++;
  } else {
    wrongAnswear++;

    if (wrongAnswear < imagensForca.length) {
      document.getElementById("gallowImage").src = `./assets/${imagensForca[wrongAnswear]}`;
    }

    if (wrongAnswear === 5) {
      setTimeout(() => {
        alert("Game Over");
        reiniciarJogo();
      }, 100);
      return;
    }
  }

  if (score === 10) {
    setTimeout(() => {
      alert("Parabéns você é um gênio da matemática!!");
      reiniciarJogo();
    }, 100);
    return;
  }

  contador++;
  mostrarPergunta(contador);
}

function reiniciarJogo() {
  contador = 0;
  score = 0;
  wrongAnswear = 0;
  document.getElementById("gallowImage").src = `./assets/${imagensForca[0]}`;

  perguntas = [
    ...sortearPerguntas(perguntasFaceis, 2),
    ...sortearPerguntas(perguntasMedias, 5),
    ...sortearPerguntas(perguntasDificeis, 3),
  ];

  mostrarPergunta(contador);
}

// Inicia o jogo
mostrarPergunta(contador);

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    verificarResposta(0);
  } else if (event.key === "ArrowRight") {
    verificarResposta(1);
  }
});
