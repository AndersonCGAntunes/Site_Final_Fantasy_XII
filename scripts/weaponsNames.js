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
const novaShield = document.querySelector("#novaShield");
const novaLightArmor = document.querySelector("#lightArmor");
const novaHeavyArmor = document.querySelector("#heavyArmor");
const novaMysticArmor = document.querySelector("#mysticArmor");

const identificadores = document.getElementById("submenu");
let ids = [];
let nomes = ["Swords", "Daggers", "Axes", "Hammers", "Maces", "Measures", "Greatswords", "Katana", "Ninja-swords", "Spears", "Poles", "Rods", "Staves", "Bows", "Crossbows", "Guns", "Hand-bombs", "Shields", "Light-armor", "Heavy-armor", "Mystic-armor"];
let nomeEquipamento = "";

window.addEventListener("DOMContentLoaded", function() {
    // #region Declaração das displayWeapons
    let displaySwords = swords.map((item) => {
        return apresentaItem(item, "weapons");
    });

    let displayDaggers = daggers.map((item) => {
        return apresentaItem(item, "weapons");
    });

    let displayAxes = axes.map((item) => {
        return apresentaItem(item, "weapons");
    });

    let displayHammers = hammers.map((item) => {
        return apresentaItem(item, "weapons");
    });

    let displayMaces = maces.map((item) => {
        return apresentaItem(item, "weapons");
    });

    let displayMeasures = measures.map((item) => {
        return apresentaItem(item, "weapons");
    });

    let displayGreatswords = greatswords.map((item) => {
        return apresentaItem(item, "weapons");
    });

    let displayKatanas = katanas.map((item) => {
        return apresentaItem(item, "weapons");
    });

    let displayNinjaSwords = ninjaSwords.map((item) => {
        return apresentaItem(item, "weapons");
    });

    let displaySpears = spears.map((item) => {
        return apresentaItem(item, "weapons");
    });

    let displayPoles = poles.map((item) => {
        return apresentaItem(item, "weapons");
    });

    let displayRods = rods.map((item) => {
        return apresentaItem(item, "weapons");
    });

    let displayStaves = staves.map((item) => {
        return apresentaItem(item, "weapons");
    });

    let displayBows = bows.map((item) => {
        return apresentaItem(item, "weapons");
    });

    let displayCrossbows = crossbows.map((item) => {
        return apresentaItem(item, "weapons");
    });

    let displayGuns = guns.map((item) => {
        return apresentaItem(item, "weapons");
    });

    let displayHandBombs = handBombs.map((item) => {
        return apresentaItem(item, "weapons");
    });
    // #endregion

    // #region Display Weapons
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
    // #endregion

    // #region InnerHTML Weapons
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
    // #endregion

    let displayShields = shields.map((item) => {
        return apresentaItem(item, "armors");
    });

    let displayLightArmors = lightArmor.map((item) => {
        return apresentaItem(item, "armors");
    });

    let displayHeavyArmors = heavyArmor.map((item) => {
        return apresentaItem(item, "armors");
    });

    let displayMysticArmors = mysticArmor.map((item) => {
        return apresentaItem(item, "armors");
    });

    for (let i = 0; i < 320; i++) {
        ids.push(`#identifica${i + 1}`);
    }

    let displayLinks = nomes.map((item) => {
        nomeEquipamento = item;
        return mostraLinks(item, nomeEquipamento);
    });

    displayLinks = displayLinks.join("");
    identificadores.innerHTML = displayLinks;

    displayShields = displayShields.join("");
    displayLightArmors = displayLightArmors.join("");
    displayHeavyArmors = displayHeavyArmors.join("");
    displayMysticArmors = displayMysticArmors.join("");

    novaShield.innerHTML = displayShields;
    novaLightArmor.innerHTML = displayLightArmors;
    novaHeavyArmor.innerHTML = displayHeavyArmors;
    novaMysticArmor.innerHTML = displayMysticArmors;

    function apresentaItem(item, tipoItem) {
        lista = "";
        contador = 0;
        identificador++;
        idProprio++;

        console.log(`Nome: ${item.Nome} | Identificador: ${identificador}`);

        if (identificador == 201 || identificador == 243 || identificador == 279) {
            return `
            <h4>Head</h4>
            <li id="identifica${idProprio}" class="nomeDasWeapons">
                <a href="paginas/${tipoItem}.html#identificador${identificador}">${item.Nome}</a><span class="marcador"><input type="checkbox" class="caixa">Obtido</span>
            </li>
            <hr>
            `;
        }

        if (identificador == 222 || identificador == 261 || identificador == 300) {
            return `
            <h4>Body</h4>
            <li id="identifica${idProprio}" class="nomeDasWeapons">
                <a href="paginas/${tipoItem}.html#identificador${identificador}">${item.Nome}</a><span class="marcador"><input type="checkbox" class="caixa">Obtido</span>
            </li>
            <hr>
            `;
        }

        return `
        <li id="identifica${idProprio}" class="nomeDasWeapons">
            <a href="paginas/${tipoItem}.html#identificador${identificador}">${item.Nome}</a><span class="marcador"><input type="checkbox" class="caixa">Obtido</span>
        </li>
        <hr>
        `;
    }
    
    // #region Adição dos marcadores
    let texto = document.querySelectorAll('.marcador');

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
    // #endregion

    function mostraLinks(elo, equipamento) {
        return `
            <a href="index.html#${elo}">${equipamento}</a>
        `;
    }
});
