let propriedades = ["Nome:", "Special Properties:", "Shop:", "Treasure:", "Drop:", "Steal:", "Poach:", "Bazaar:", "Sidequest:", "Hunt:", "Initial:", "Other:"];

const escudo = document.querySelector(".shields");
const armLeve = document.querySelector(".lArmor");
const armPesada = document.querySelector(".hArmor");
const armMistica = document.querySelector(".mArmor");

window.addEventListener("DOMContentLoaded", function() {
    let lista = "";
    let contador = 0;
    identificador = 180;

    let displayShields = shields.map((valor) => {
        return apresentaArmors(valor);
    });

    let displayLightArmors = lightArmor.map((item) => {
        return apresentaArmors(item);
    });

    let displayHeavyArmors = heavyArmor.map((item) => {
        return apresentaArmors(item);
    });

    let displayMysticArmors = mysticArmor.map((item) => {
        return apresentaArmors(item);
    });

    displayShields = displayShields.join("");
    displayLightArmors = displayLightArmors.join("");
    displayHeavyArmors = displayHeavyArmors.join("");
    displayMysticArmors = displayMysticArmors.join("");

    escudo.innerHTML = displayShields;
    armLeve.innerHTML = displayLightArmors;
    armPesada.innerHTML = displayHeavyArmors;
    armMistica.innerHTML = displayMysticArmors;

    function apresentaArmors(valor) {
        lista = "";
        contador = 0;
        Object.keys(valor).forEach(key => {
            if (valor[key] !== "" && valor[key] !== valor.Nome) {
                if (propriedades[contador] == "Bazaar:") {
                    lista += `<li><a class="bazaar" href="#"><span class="negrito">${propriedades[contador]}</span></a> ${valor[key]}</li>`;
                } else {
                    lista += `<li><span class="negrito">${propriedades[contador]}</span> ${valor[key]}</li>`;
                }
            }
            contador++;

        });
        
        identificador++;

        if (identificador == 201 || identificador == 243 || identificador == 279) {
            return `
            <h4>Head</h4>
            <tr>
                <td id="identificador${identificador}" class="descricao">${valor.Nome}</td>
                <td>
                    <ul>
                    ${lista}
                    </ul>
                </td>
            </tr>
        `;
        }

        if (identificador == 222 || identificador == 261 || identificador == 300) {
            return `
            <h4>Body</h4>
            <tr>
                <td id="identificador${identificador}" class="descricao">${valor.Nome}</td>
                <td>
                    <ul>
                    ${lista}
                    </ul>
                </td>
            </tr>
        `;
        }

        return `
            <tr>
                <td id="identificador${identificador}" class="descricao">${valor.Nome}</td>
                <td>
                    <ul>
                    ${lista}
                    </ul>
                </td>
            </tr>
        `;
    }
});