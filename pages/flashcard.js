const cards = [

    {
        q:"O que é a Série de Fibonacci?",
        a:"Sequência onde cada número é a soma dos dois anteriores: 0, 1, 1, 2, 3, 5, 8..."
    },

    {
        q:"O que é recursão?",
        a:"Técnica onde uma função chama a si mesma para resolver subproblemas menores."
    },

    {
        q:"Complexidade do Fibonacci recursivo?",
        a:"O(2^n) — exponencial. Pode ser otimizado com memoização para O(n)."
    }

];

let current = 0;
let flipped = false;

const flashCard = document.getElementById("flashCard");
const questionText = document.getElementById("questionText");
const answerText = document.getElementById("answerText");
const counter = document.getElementById("counter");
const tapInfo = document.getElementById("tapInfo");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const backButton = document.getElementById("backButton");
const sideMenu = document.getElementById("sideMenu");

function updateCard(){

    questionText.innerText = cards[current].q;

    answerText.innerText = cards[current].a;

    counter.innerText = `${current + 1} / ${cards.length}`;

    prevBtn.disabled = current === 0;

    nextBtn.disabled = current === cards.length - 1;

    flashCard.classList.remove("flipped");

    flipped = false;

    tapInfo.innerText = "Toque para ver resposta";

}

flashCard.addEventListener("click", () => {

    flipped = !flipped;

    flashCard.classList.toggle("flipped");

    tapInfo.innerText = flipped
    ? "Toque para ver pergunta"
    : "Toque para ver resposta";

});

nextBtn.addEventListener("click", () => {

    if(current < cards.length - 1){

        current++;

        updateCard();

    }

});

prevBtn.addEventListener("click", () => {

    if(current > 0){

        current--;

        updateCard();

    }

});

backButton.addEventListener("click", () => {

    sideMenu.classList.toggle("open");

});

updateCard();