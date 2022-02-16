const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

function showResults (titulo, result) {
    const caixa = document.getElementById("container");
    let header = document.createElement("h3");
    header.innerText = titulo;
    let paragrafo = document.createElement("p");
    paragrafo.innerText = result;
    caixa.appendChild(header);
    caixa.appendChild(paragrafo);
}

function kata1() {
    return gotCitiesCSV.split(",");    
}

showResults("kata1", kata1());

// kata1();

// daqui em diante é contigo
