const documents = [

    {
    title:"Aula de Cálculo II - Integrais",
    date:"Hoje, 14:30",
    preview:"Integral definida: ∫ab f(x)dx = F(b) - F(a)...",
    text:`Integral Definida
    
    A integral definida de uma função f(x) no intervalo [a, b] é dada por:
    ∫ab f(x)dx = F(b) - F(a)
    Onde F(x) é a primitiva de f(x).
    
    Propriedades:
    • Linearidade
    • Intervalo nulo
    • Aditividade
    
    Técnicas:
    1. Substituição simples
    2. Integração por partes
    3. Frações parciais`
    },
    
    {
    title:"Reunião de Projeto - Sprint 4",
    date:"Ontem, 10:15",
    preview:"Tarefas pendentes: refatorar módulo de auth...",
    text:`Sprint 4 - Notas da Reunião
    
    Participantes:
    Ana, Pedro, Lucas e Mariana
    
    Tarefas:
    • Refatorar autenticação
    • Implementar testes E2E
    • Revisar PR dark-mode
    
    Nova reunião:
    Sexta-feira às 14h`
    },
    
    {
    title:"Fórmulas de Física - Termodinâmica",
    date:"12 Abr, 09:00",
    preview:"1ª Lei: ΔU = Q - W...",
    text:`Termodinâmica - Resumo
    
    1ª Lei:
    ΔU = Q - W
    
    2ª Lei:
    ΔS ≥ 0
    
    Equações:
    • PV = nRT
    • W = P·ΔV
    • Q = mcΔT
    
    Aplicações:
    - Motores térmicos
    - Refrigeradores`
    },
    
    {
    title:"Brainstorm - Design do App",
    date:"10 Abr, 16:45",
    preview:"Paleta de cores: dark theme, acentos dourados...",
    text:`Brainstorm - Redesign do App
    
    Paleta:
    • Background escuro
    • Dourado/âmbar
    • Verde menta
    
    Layout:
    - Glass morphism
    - Bordas arredondadas
    - Animações suaves
    
    Prioridades:
    1. Bottom sheet
    2. Tabs animadas
    3. Cards expansíveis`
    }
    
    ];
    
    const docsContainer =
    document.getElementById("docsContainer");
    
    const editorScreen =
    document.getElementById("editorScreen");
    
    const documentScreen =
    document.getElementById("documentScreen");
    
    const docTitle =
    document.getElementById("docTitle");
    
    const docDate =
    document.getElementById("docDate");
    
    const docTextarea =
    document.getElementById("docTextarea");
    
    const processingOverlay =
    document.getElementById("processingOverlay");
    
    const previewPaper =
    document.getElementById("previewPaper");
    
    const processBtn =
    document.getElementById("processBtn");
    
    documents.forEach((doc,index)=>{
    
    docsContainer.innerHTML += `
    
    <div class="doc-card" onclick="openDocument(${index})">
        <div class="doc-icon">
            <img src="../images/editor-doc.png">
        </div>
    
        <div class="doc-info">
            <h3>${doc.title}</h3>
            <small>${doc.date}</small>
            <p>${doc.preview}</p>
        </div>
    
        <div class="doc-arrow">›</div>
    
    </div>`;
    
    });
    
    function openDocument(index){
    
    const doc = documents[index];
    
    docTitle.innerText = doc.title;
    docDate.innerText = doc.date;
    docTextarea.value = doc.text;
    editorScreen.classList.add("hidden");
    documentScreen.classList.remove("hidden");
    previewPaper.classList.remove("processed");
    processBtn.innerHTML = `<img src="../images/maximize.png">
    <span>Corrigir Perspectiva</span> `;
    
    }
    
    function closeDocument(){
    
    documentScreen.classList.add("hidden");
    editorScreen.classList.remove("hidden");
    
    }
    
    function processDocument(){
    
    processingOverlay.classList.remove("hidden");
    
    setTimeout(()=>{
    processingOverlay.classList.add("hidden");
    previewPaper.classList.add("processed");
    processBtn.innerHTML = `<img src="../images/maximize.png"> <span>Reprocessar</span> `;
    
    },1500);
    
    }

const backButton =
document.getElementById("backButton");

const sideMenu =
document.getElementById("sideMenu");

backButton.addEventListener("click",()=>{

    sideMenu.classList.toggle("open");

});

document.addEventListener("click",(e)=>{

    const clickedInsideMenu =
    sideMenu.contains(e.target);

    const clickedButton =
    backButton.contains(e.target);

    if(
        !clickedInsideMenu &&
        !clickedButton &&
        sideMenu.classList.contains("open")
    ){

        sideMenu.classList.remove("open");

    }

});