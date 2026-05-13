const backButton = document.getElementById('backButton');
const sideMenu = document.getElementById('sideMenu');

backButton.addEventListener('click', () => {
    sideMenu.classList.toggle('open');
});

document.addEventListener('click', (e) => {

    const clickedMenu =
        sideMenu.contains(e.target);

    const clickedButton =
        backButton.contains(e.target);

    if(!clickedMenu && !clickedButton){
        sideMenu.classList.remove('open');
    }

});

const videoTab = document.getElementById("videoTab");
const micTab = document.getElementById("micTab");

const videoMode = document.getElementById("videoMode");
const micMode = document.getElementById("micMode");

videoTab.onclick = () => {

    videoTab.classList.add("active");
    micTab.classList.remove("active");

    videoMode.classList.remove("hidden");
    micMode.classList.add("hidden");

};

micTab.onclick = () => {

    micTab.classList.add("active");
    videoTab.classList.remove("active");

    micMode.classList.remove("hidden");
    videoMode.classList.add("hidden");

};

const uploadBtn = document.getElementById("uploadBtn");

const videoPreview =
document.getElementById("videoPreview");

const transcriptionArea =
document.getElementById("transcriptionArea");

const typingText =
document.getElementById("typingText");

const processingText =
document.getElementById("processingText");

const editableText =
document.getElementById("editableText");

const editableBadge =
document.getElementById("editableBadge");

const newVideoBtn =
document.getElementById("newVideoBtn");

const videoStatus =
document.getElementById("videoStatus");

const fullText =
"Bom dia! Meu nome é Ana. Estou apresentando o trabalho sobre acessibilidade digital e inclusão nas escolas públicas do Brasil.";

uploadBtn.onclick = () => {

    uploadBtn.classList.add("hidden");

    videoPreview.classList.remove("hidden");

    transcriptionArea.classList.remove("hidden");

    typingText.innerHTML = "";

    let index = 0;

    const interval = setInterval(() => {

        if(index < fullText.length){

            typingText.innerHTML += fullText[index];

            index++;

        }else{

            clearInterval(interval);

            videoStatus.innerHTML =
            "Vídeo processado";

            processingText.classList.add("hidden");

            editableText.classList.remove("hidden");

            editableText.value = fullText;

            editableBadge.classList.remove("hidden");

            newVideoBtn.classList.remove("hidden");

        }

    },30);

};

newVideoBtn.onclick = () => {

    uploadBtn.classList.remove("hidden");

    videoPreview.classList.add("hidden");

    transcriptionArea.classList.add("hidden");

    processingText.classList.remove("hidden");

    editableText.classList.add("hidden");

    newVideoBtn.classList.add("hidden");

    videoStatus.innerHTML =
    "Processando vídeo...";

};


const micButton =
document.getElementById("micButton");

const micStatus =
document.getElementById("micStatus");

const soundWave =
document.getElementById("soundWave");

const speechBox =
document.getElementById("speechBox");

const speechText =
document.getElementById("speechText");

const micWrapper =
document.querySelector(".mic-wrapper");

const words = [
    "Olá, ",
    "tudo ",
    "bem? ",
    "Eu ",
    "gostaria ",
    "de ",
    "saber ",
    "sobre ",
    "o ",
    "projeto."
];

let micInterval;

function startMic(){

    micWrapper.classList.add("wave-active");

    micStatus.innerHTML =
    "Ouvindo... solte para parar";

    soundWave.classList.remove("hidden");

    speechBox.classList.remove("hidden");

    speechText.innerHTML = "";

    let i = 0;

    micInterval = setInterval(() => {

        if(i < words.length){

            speechText.innerHTML += words[i];

            i++;

        }

    },600);

}

function stopMic(){

    micWrapper.classList.remove("wave-active");

    micStatus.innerHTML =
    "Mantenha pressionado para falar";

    clearInterval(micInterval);

}

micButton.addEventListener("mousedown", startMic);

micButton.addEventListener("mouseup", stopMic);

micButton.addEventListener("touchstart", startMic);

micButton.addEventListener("touchend", stopMic);