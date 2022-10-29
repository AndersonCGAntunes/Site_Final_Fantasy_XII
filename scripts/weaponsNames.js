const novaSword = document.querySelector("#novaSword");
const novaDagger = document.querySelector("#novaDagger");
const novaAxe = document.querySelector("#novaAxe");
const novaHammer = document.querySelector("#novaHammer");
const novaMace = document.querySelector("#novaMace");
const novaMeasure = document.querySelector("#novaMeasure");
const novaGreatsword = document.querySelector("#novaGreatsword");
const novaKatana = document.querySelector("#novaKatana");
const novaNinjaSword = document.querySelector("#novaNinjaSword");
const novaSpear = document.querySelector("#novaSpear");
const novaPole = document.querySelector("#novaPole");
const novaRod = document.querySelector("#novaRod");
const novaStaff = document.querySelector("#novaStaff");
const novaBow = document.querySelector("#novaBow");
const novaCrossbow = document.querySelector("#novaCrossbow");
const novaGun = document.querySelector("#novaGun");
const novaHandBomb = document.querySelector("#novaHandBomb");

window.addEventListener("DOMContentLoaded", function() {
    let identificador = 0;// cria os IDs das weapons
    
    let displaySwords = swords.map((item) => {
        return apresentaListas(item);
    });

    let displayDaggers = daggers.map((item) => {
        return apresentaListas(item);
    });

    let displayAxes = axes.map((item) => {
        return apresentaListas(item);
    });

    let displayHammers = hammers.map((item) => {
        return apresentaListas(item);
    });

    let displayMaces = maces.map((item) => {
        return apresentaListas(item);
    });

    let displayMeasures = measures.map((item) => {
        return apresentaListas(item);
    });

    let displayGreatswords = greatswords.map((item) => {
        return apresentaListas(item);
    });

    let displayKatanas = katanas.map((item) => {
        return apresentaListas(item);
    });

    let displayNinjaSwords = ninjaSwords.map((item) => {
        return apresentaListas(item);
    });

    let displaySpears = spears.map((item) => {
        return apresentaListas(item);
    });

    let displayPoles = poles.map((item) => {
        return apresentaListas(item);
    });

    let displayRods = rods.map((item) => {
        return apresentaListas(item);
    });

    let displayStaves = staves.map((item) => {
        return apresentaListas(item);
    });

    let displayBows = bows.map((item) => {
        return apresentaListas(item);
    });

    let displayCrossbows = crossbows.map((item) => {
        return apresentaListas(item);
    });

    let displayGuns = guns.map((item) => {
        return apresentaListas(item);
    });

    let displayHandBombs = handBombs.map((item) => {
        return apresentaListas(item);
    });

    displaySwords = displaySwords.join("");
    displayDaggers = displayDaggers.join("");
    displayAxes = displayAxes.join("");
    displayHammers = displayHammers.join("");
    displayMaces = displayMaces.join("");
    displayMeasures = displayMeasures.join("");
    displayGreatswords = displayGreatswords.join("");
    displayKatanas = displayKatanas.join("");
    displayNinjaSwords = displayNinjaSwords.join("");
    displaySpears = displaySpears.join("");
    displayPoles = displayPoles.join("");
    displayRods = displayRods.join("");
    displayStaves = displayStaves.join("");
    displayBows = displayBows.join("");
    displayCrossbows = displayCrossbows.join("");
    displayGuns = displayGuns.join("");
    displayHandBombs = displayHandBombs.join("");

    novaSword.innerHTML = displaySwords;
    novaDagger.innerHTML = displayDaggers;
    novaAxe.innerHTML = displayAxes;
    novaHammer.innerHTML = displayHammers;
    novaMace.innerHTML = displayMaces;
    novaMeasure.innerHTML = displayMeasures;
    novaGreatsword.innerHTML = displayGreatswords;
    novaKatana.innerHTML = displayKatanas;
    novaNinjaSword.innerHTML = displayNinjaSwords;
    novaSpear.innerHTML = displaySpears;
    novaPole.innerHTML = displayPoles;
    novaRod.innerHTML = displayRods;
    novaStaff.innerHTML = displayStaves;
    novaBow.innerHTML = displayBows;
    novaCrossbow.innerHTML = displayCrossbows;
    novaGun.innerHTML = displayGuns;
    novaHandBomb.innerHTML = displayHandBombs;

    function apresentaListas(item) {
        lista = "";
        contador = 0;
        identificador++;

        return `
        <li class="nomeDasWeapons">
            <a href="weapons.html#identificador${identificador}">${item.Nome}</a><span class="marcador"><input type="checkbox" class="caixa">Obtido</span>
        </li>
        <hr>
        `;
    }
    
    let texto = document.querySelectorAll('.marcador');
    let box = this.document.querySelectorAll('.caixa');

    texto.forEach(element => {
        element.addEventListener("click", () => {
            if(element.style.color == "darkolivegreen") {
                element.style.color = "crimson";
                element.innerHTML = `<input type="checkbox" class="caixa">Obtido`;
            } else {
                element.style.color = "darkolivegreen";
                element.innerHTML = `<input type="checkbox" checked class="caixa">Obtido`;
            }
        });
    });

});
