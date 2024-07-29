const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");


const perguntas = [
    {
        enunciado: 
            "Assim que saiu de sua casa, chapeuzinho foi dada a tarefa de entregar comida a sua avó doente. Sua mãe aconselhou a ir no caminho iluminado até a casa da avó, mas a floresta é mais rapida. Qual caminho ela vai?",
        alternativas: [
            {
                texto: "Pelo caminho iluminado.",
                afirmacao: [
                    "Ela andou pelo caminho que sua mãe sugeriu.",
                    "Caminhando pelo caminho iluminado não pensava que tinha perigo."
                ],
                proxima: 1,
            },
            {
                texto: "Pela Floresta.",
                afirmacao: [
                    "Ela foi espertinha e andou pela floresta, mesmo com os perigos.",
                    "Ir pela floresta foi bem mais de boa do que imaginava."
                ],
                proxima: 2,
            },
        ],
        
    },

    {
        enunciado: 
            "No meio do caminho ela encontra um lago, ao lado tem um jardim de flores e caldas de gatos(planta). O que ela faz?",
        alternativas: [
            {
                texto:"Pega algumas delas",
                afirmacao: [
                    "No caminho pegou algumas flores vermelhas e azuis, fazendo um pequeno buquê para sua avó.",
                    "Ela pegou VÁRIAS flores para a sua vó, um buquê enorme pois não sabia a flor favorita da avó."
                ],
                proxima: 4,
            },
            {
                texto:"Segue caminho",
                afirmacao: [
                    "Em vez de pegar algumas flores para avô, chapeuzinho apenas seguiu se caminho.", 
                    "Passando pelo lago ela acabou pisando nas flores e as esmagou todas."
                ],
                proxima: 5,
            },
        ]
    },

    {
        enunciado: 
            "No meio do caminho ela se encontra com um lobo, que usava flanela. Ele perguntou até aonde ela ia, chapeuzinho disse?",
        alternativas: [
            {
                texto:"A verdade, que iria para casa da avó.",
                afirmacao: [
                    "Falando a verdade resultou no lobo a seguindo.",
                    "Ela foi uma boa menina contando a verdade para o lobo, por sorte ele não a seguiu."
                ],
                proxima: 3,
            },
            {
                texto:"Uma mentira, que ia pescar com o pai.",
                afirmacao: [
                    "E mentiu, mas por isso ficou segura do lobo, já que não a seguiu.", 
                    "No seu caminho mentiu, mas era necessário para chegar segura na casa."
                ],
                proxima: 4,
            },
        ]
    },


    {
        enunciado:
            "Depois de responder, o lobo sugere que ela pegue flores para sua avó durante o caminho. O que ela fez?",
        alternativas: [
            {
                texto: "Ela segue a sugestão.",
                afirmacao: [
                    "E andou até anoitecer, já que ficou pegando flores para sua avó. Mas trouxe um pequeno buquê de flores amarelas e laranjas.",
                    "No caminho pegou flores amarelas e laranjas, por sorte não ficou até anoitecer."
                ],
                proxima: 4,
            },
            {
                texto: "Ela o ignora e volta a andar",
                afirmacao: [
                "E chegou ainda de dia na casa.",
                "Ignorando o lobo fez ele nosnar para chapeuzinho, o que fez ela se assustar e sair correndo, mas chegou cedo na casa."
                ],
                proxima: 5,
            },
        ]
    },


    {
        enunciado: 
        "Chegando na casa da sua avó, chapeuzinho vê um homen cortando lenha na frente da casa. Ela faz o que?",
        alternativas: [
            {
                texto: "Ela dá oi antes de entrar.",
                afirmacao: [
                "Acabou chamando atenção do homen desconhecido. E quando chapeuzinho encontra uma criatura que não era sua avó ela tenta fugir, mas a porta já estava trancada.",
                "Acabou assustando o lenhador que quase cortou seu pé. Ele ficou puto com chapeuzinho e correu até ela, correndo rápidamente ela conseguiu se trancar na casa em segurança. Assim se escondeu na sua avó até o dia seguinte."
                ]
            },
            {
                texto: "Ela ignora o homen.",
                afirmacao: [
                    "Depois de uma aventura e tanto para chegar na sua avó, chapeuzinho pode apreciar o pão caseiro com sua querida avó",
                    "Mesmo se precavendo em todo seu caminho, quem a esperava na cama de sua avó não era ela."
                ]
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
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    if(opcaoSelecionada.proxima !== undefined) {
        atual = opcaoSelecionada.proxima;
    }else{
        mostraResultado();
        return;
    }
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "A chapeuzinho chegou na casa da sua avó...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.classList.add("mostrar")
    botaoJogarNovamente.addEventListener("click", jogaNovamente)
}

function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

function jogaNovamente(){
    atual = 0;
    historiaFinal = "";
    caixaResultado.classList.remove("mostrar")
    mostraPergunta();
}

mostraPergunta();