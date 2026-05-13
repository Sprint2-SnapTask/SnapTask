const backButton =
document.getElementById("backButton");

const sideMenu =
document.getElementById("sideMenu");

const copyBtn =
document.getElementById("copyBtn");

const editorArea =
document.getElementById("editorArea");

backButton.addEventListener("click", () => {

    sideMenu.classList.toggle("open");

});

copyBtn.addEventListener("click", () => {

    navigator.clipboard.writeText(editorArea.value);

    copyBtn.innerText = "Copiado!";

    setTimeout(() => {

        copyBtn.innerText = "Copiar Código";

    }, 2000);

});