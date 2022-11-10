const btn = document.getElementById("btn");
let gridContainer = document.getElementById("grid-cont");
let listaNumRandom = [];
let difficolta = document.getElementById("selectdiff");
const clickfinali = document.getElementById("clickresult");
let numeroClick = 0;
let celleTotVincenti= 0;
let numeroCella;

btn.addEventListener("click", function() {
    listaNumRandom = [];
    gridContainer.innerHTML= "";
    difficolta = document.getElementById("selectdiff");
    console.log(difficolta.value);
    celleTotVincenti = `${difficolta.value}`- 16 ;
    console.log(celleTotVincenti + "vincenti");
    let numCelleRiga = Math.sqrt(`${difficolta.value}`);
    console.log(numCelleRiga);

    
    for(let i=0; i<difficolta.value; i++){
        const newCell = document.createElement("div");
        newCell.classList.add("cella");
        newCell.style.width = `calc(100% / ${numCelleRiga} )`;
        newCell.innerHTML = i+1;
        gridContainer.append(newCell);
        newCell.dataset.numeroCella = i + 1;
        
        newCell.addEventListener("click", cellClick);       
    }
    genListRandom();
    console.log(listaNumRandom);
});

function cellClick() {

    const numeroDentro = parseInt( this.textContent );
    numeroCella = +this.dataset.numeroCella;
    numeroClick++;
    console.log(numeroClick);
    
    if (listaNumRandom.includes(numeroCella)){
        numeroClick--;
        this.classList.toggle("bomba");
        clickfinali.innerHTML= `hai cliccato ${numeroClick} volte e dopo hai preso la bomba. <strong>GAME OVER!</strong>`;
        // chiamouna funzione che rimuove i click da TUTTE LE CELLE
        rimuoviclick;
    } else{
        this.classList.toggle("azzurro");
        if(`${numeroClick}`===`${celleTotVincenti}`){
            clickfinali.innerHTML= `hai cliccato ${numeroClick} volte senza prendere la bomba. <strong>HAI VINTO!</strong>`;
        }
    }
}

function rimuoviclick() {

    // queryselector all
    // per ogni cell 
    // remove di cellClick
    for(let i=0; i<difficolta.value; i++){
        const cellaremuve = document.querySelector(`.cella :nth-child(${i})`);
        cellaremuve.removeEventListener("click", cellClick);
    }
}

function genListRandom() {
    while(listaNumRandom.length<16) {
        numRandom = +Math.floor(Math.random()*(`${difficolta.value}`-1+1)+1);
        if( !listaNumRandom.includes(numRandom)){
            listaNumRandom.push(numRandom);
        }
    }
}