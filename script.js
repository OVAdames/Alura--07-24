const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: 
            "Assim que saiu de sua casa, chapeuzinho foi dada a tarefa de entregar comida a sua avó doente. Sua mãe aconselhou a ir no caminho iluminado até a casa da avó, mas a floresta é mais rapida. Qual caminho ela vai?",
        alternativas: [
            {
                texto: "Pelo caminho iluminado.",
                afirmacao: "Ela andou pelo caminho que sua mãe sugeriu.",
            },
            {
                texto: "Pela Floresta.",
                afirmacao: "Ela foi espertinha e andou pela floresta, mesmo com os perigos.",
            },
        ],
    },

    {
        enunciado: 
            "No meio do caminho ela se encontra com um lobo, que usava flanela. Ele perguntou até aonde ela ia, chapeuzinho disse?",
        alternativas: [
            {
                texto:"A verdade, que iria para casa da avó.",
                afirmacao: "Falando a verdade resultou no lobo a seguindo.",
            },
            {
                texto:"Uma mentira, que ia pescar com o pai.",
                afirmacao: "E mentiu, mas por isso ficou segura do lobo, já que não a seguiu.",
            },
        ]
    },


    {
        enunciado:
            "Depois de responder, o lobo sugere que ela pegue flores para sua avó durante o caminho. O que ela fez?",
        alternativas: [
            {
                texto: "Ela segue a sugestão.",
                afirmacao: "E andou até anoitecer, já que ficou pegando flores para sua avó. Mas trouxe um pequeno buquê de flores amarelas e laranjas.",
            },
            {
                texto: "Ela o ignora e volta a andar",
                afirmacao: "E chegou ainda de dia na casa.",
            },
        ]
    },


    {
        enunciado: 
        "Chegando na casa da sua avó, chapeuzinho vê um lenhador cortando lenha na frente da casa. Ela faz o que?",
        alternativas: [
            {
                texto: "Ela dá oi antes de entrar.",
                afirmacao: "Acabou chamando atenção do homen desconhecido. E quando chapeuzinho encontra uma criatura que não era sua avó ela tenta fugir, mas a porta já estava trancada.",
            },
            {
                texto: "Ela ignora o homen.",
                afirmacao: "Depois de uma aventura e tanto para chegar na sua avó, chapeuzinho pode apreciar o pão caseiro com sua querida avó",
            },
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal ="";

function mostraPergunta() {
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent ="";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "A chapeuzinho chegou na casa da sua avó...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();