const btn = document.getElementById("btn");
let gridContainer = document.getElementById("grid-cont");


btn.addEventListener("click", function() {
    gridContainer.innerHTML= "";
    
    let difficolta = document.getElementById("selectdiff");
    console.log(difficolta.value);
    let numCelleRiga = Math.sqrt(`${difficolta.value}`);
    console.log(numCelleRiga);

    
    for(let i=0; i<difficolta.value; i++){
        const newCell = document.createElement("div");
        newCell.classList.add("cella");
        newCell.style.width = `calc(100% / ${numCelleRiga} )`;

        newCell.innerHTML = i+1;
        gridContainer.append(newCell);
        newCell.addEventListener("click", function() {
            const numeroDentro = parseInt( this.textContent );
            newCell.classList.toggle("azzurro");
            console.log(numeroDentro)
        })
    }

})