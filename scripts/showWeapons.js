
let propriedades = ["Nome:", "Special Properties:", "Shop:", "Treasure:", "Drop:", "Steal:", "Poach:", "Bazaar:", "Sidequest:", "Hunt:", "Initial:", "Other:"];
let weapons = [".sword", ".dagger", ".axe", ".hammer", ".mace", ".measure", ".greatsword", ".katana", ".ninjaSword", ".spear", ".pole", ".rod", ".staff", ".bow", ".crossbow", ".gun", ".handBomb"];

const sword = document.querySelector(weapons[0]);
const dagger = document.querySelector(weapons[1]);
const axe = document.querySelector(weapons[2]);
const hammer = document.querySelector(weapons[3]);
const mace = document.querySelector(weapons[4]);
const measure = document.querySelector(weapons[5]);
const greatsword = document.querySelector(weapons[6]);
const katana = document.querySelector(weapons[7]);
const ninjaSword = document.querySelector(weapons[8]);
const spear = document.querySelector(weapons[9]);
const pole = document.querySelector(weapons[10]);
const rod = document.querySelector(weapons[11]);
const staff = document.querySelector(weapons[12]);
const bow = document.querySelector(weapons[13]);
const crossbow = document.querySelector(weapons[14]);
const gun = document.querySelector(weapons[15]);
const handBomb = document.querySelector(weapons[16]);

window.addEventListener("DOMContentLoaded", function() {
    let lista = "";
    let contador = 0;
    let contaBazaar = 0;
    let identificador = 0;// cria um id para cada weapon em sequencia

    // #region variáveis
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
    // #endregion

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

    sword.innerHTML = displaySwords;
    dagger.innerHTML = displayDaggers;
    axe.innerHTML = displayAxes;
    hammer.innerHTML = displayHammers;
    mace.innerHTML = displayMaces;
    measure.innerHTML = displayMeasures;
    greatsword.innerHTML = displayGreatswords;
    katana.innerHTML = displayKatanas;
    ninjaSword.innerHTML = displayNinjaSwords;
    spear.innerHTML = displaySpears;
    pole.innerHTML = displayPoles;
    rod.innerHTML = displayRods;
    staff.innerHTML = displayStaves;
    bow.innerHTML = displayBows;
    crossbow.innerHTML = displayCrossbows;
    gun.innerHTML = displayGuns;
    handBomb.innerHTML = displayHandBombs;

    function apresentaListas(item) {
        lista = "";
        contador = 0;
        Object.keys(item).forEach(key => {
            if (item[key] !== "" && item[key] !== item.Nome) {
                if (propriedades[contador] == "Bazaar:") {
                    lista += `<li><a class="bazaar" href="#"><span class="negrito">${propriedades[contador]}</span></a> ${item[key]}</li>`;
                } else {
                    lista += `<li><span class="negrito">${propriedades[contador]}</span> ${item[key]}</li>`;
                }
            }
            contador++;
            
        });
        console.log(contaBazaar);
        identificador++;

        return `
            <tr>
                <td id="identificador${identificador}" class="descricao">${item.Nome}</td>
                <td>
                    <ul>
                    ${lista}
                    </ul>
                </td>
            </tr>
        `;
    }
});
