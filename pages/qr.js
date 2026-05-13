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

const generateBtn =
document.getElementById('generateBtn');

generateBtn.addEventListener('click', () => {

    generateBtn.innerText = 'Link Gerado ✓';

    setTimeout(() => {
        generateBtn.innerText = 'Gerar Link';
    }, 2500);

});