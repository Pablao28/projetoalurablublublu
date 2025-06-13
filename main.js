function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';

    cartao.innerHTML = `
    <div class="cartao__conteudo">
        <h3>${categoria}</h3>
        <div class="cartao__conteudo__pergunta">
            <p>${pergunta}</p>
        </div>
        <div class="cartao__conteudo__resposta">
            <p>${resposta}</p>
        </div>
    </div>
    `;

    let respostaEstaVisivel = false;

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel;
        cartao.classList.toggle('active', respostaEstaVisivel);
    }

    cartao.addEventListener('click', viraCartao);
    container.appendChild(cartao);
}

// -----------------------------
// Perguntas procedurais
// -----------------------------

// Matemática
function criaPerguntaMatematica() {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    const pergunta = `Quanto é ${a} + ${b}?`;
    const resposta = `${a + b}`;
    criaCartao('Matemática', pergunta, resposta);
}

// Geografia
const capitais = [
    { pais: "França", capital: "Paris" },
    { pais: "Brasil", capital: "Brasília" },
    { pais: "Japão", capital: "Tóquio" },
    { pais: "Canadá", capital: "Ottawa" },
    { pais: "Argentina", capital: "Buenos Aires" },
];

function criaPerguntaGeografiaAleatoria() {
    const item = capitais[Math.floor(Math.random() * capitais.length)];
    const pergunta = `Qual é a capital de ${item.pais}?`;
    const resposta = `A capital de ${item.pais} é ${item.capital}.`;
    criaCartao('Geografia', pergunta, resposta);
}

// Inglês
const palavras = [
    { pt: "cachorro", en: "dog" },
    { pt: "gato", en: "cat" },
    { pt: "casa", en: "house" },
    { pt: "livro", en: "book" },
    { pt: "amigo", en: "friend" },
];

function criaPerguntaIngles() {
    const item = palavras[Math.floor(Math.random() * palavras.length)];
    const pergunta = `Como se diz "${item.pt}" em inglês?`;
    const resposta = `Em inglês se diz "${item.en}".`;
    criaCartao('Inglês', pergunta, resposta);
}

// -----------------------------
// Gerar múltiplas perguntas
// -----------------------------

for (let i = 0; i < 3; i++) {
    criaPerguntaMatematica();
    criaPerguntaGeografiaAleatoria();
    criaPerguntaIngles();
}
