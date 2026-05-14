const galleryTab =
document.getElementById("galleryTab");

const sharedTab =
document.getElementById("sharedTab");

const galleryContent =
document.getElementById("galleryContent");

const sharedContent =
document.getElementById("sharedContent");

const createRoomBtn =
document.getElementById("createRoomBtn");

const endRoomBtn =
document.getElementById("endRoomBtn");

const shareSetup =
document.getElementById("shareSetup");

const activeRoom =
document.getElementById("activeRoom");

const sharedCode =
document.getElementById("sharedCode");

const joinInput =
document.getElementById("joinInput");

const connectBtn =
document.querySelector(".green-btn");

/* =========================
   LOGIN SIMPLES
========================= */

let usuarioLogado =
localStorage.getItem("usuarioLogado");

if(!usuarioLogado){

    const nome =
    prompt("Digite seu nome para acessar a galeria:");

    if(nome && nome.trim() !== ""){

        localStorage.setItem(
            "usuarioLogado",
            nome
        );

        usuarioLogado = nome;

        alert(`Bem-vindo(a), ${nome}!`);

    }else{

        alert("Você precisa fazer login.");

        window.location.href = "../index.html";

    }

}

/* =========================
   TABS
========================= */

galleryTab.addEventListener("click", () => {

    galleryTab.classList.add("active");
    sharedTab.classList.remove("active");

    galleryContent.classList.remove("hidden");
    sharedContent.classList.add("hidden");

});

sharedTab.addEventListener("click", () => {

    sharedTab.classList.add("active");
    galleryTab.classList.remove("active");

    sharedContent.classList.remove("hidden");
    galleryContent.classList.add("hidden");

});

/* =========================
   CREATE ROOM
========================= */

createRoomBtn.addEventListener("click", () => {

    const code =
    "SNAP-" +
    Math.random()
    .toString(36)
    .substring(2,8)
    .toUpperCase();

    sharedCode.textContent = code;

    shareSetup.classList.add("hidden");
    activeRoom.classList.remove("hidden");

    alert("Sala criada com sucesso!");

});

/* =========================
   ENTRAR NA SALA
========================= */

connectBtn.addEventListener("click", () => {

    const codigo =
    joinInput.value.trim();

    if(codigo === ""){

        alert("Digite um código.");

        joinInput.focus();

        return;

    }

    if(!codigo.startsWith("SNAP-")){

        alert("Código inválido.");

        joinInput.focus();

        return;

    }

    if(codigo.length < 10){

        alert("Código incompleto.");

        joinInput.focus();

        return;

    }

    sharedCode.textContent = codigo;

    shareSetup.classList.add("hidden");
    activeRoom.classList.remove("hidden");

    alert("Conectado à sala!");

});

/* =========================
   END ROOM
========================= */

endRoomBtn.addEventListener("click", () => {

    const sair =
    confirm("Deseja encerrar a sala?");

    if(sair){

        activeRoom.classList.add("hidden");
        shareSetup.classList.remove("hidden");

        joinInput.value = "";

        alert("Sala encerrada.");

    }

});

/* =========================
   CLIQUE NAS FOTOS
========================= */

document.querySelectorAll(".photo")
.forEach(photo => {

    photo.addEventListener("click", () => {

        alert("Visualizando foto da galeria.");

    });

});

/* =========================
   MENU
========================= */

const backButton =
document.getElementById("backButton");

const sideMenu =
document.getElementById("sideMenu");

backButton.addEventListener("click", () => {

    sideMenu.classList.toggle("open");

});