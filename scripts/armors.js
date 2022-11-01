let propriedades = ["Nome:", "Special Properties:", "Shop:", "Treasure:", "Drop:", "Steal:", "Poach:", "Bazaar:", "Sidequest:", "Hunt:", "Initial:", "Other:"];

const escudo = document.querySelector(".shield");

window.addEventListener("DOMContentLoaded", function() {
    let lista = "";
    let contador = 0;
    let contaBazaar = 0;
    let identificador = 0;// cria um id para cada armor em sequencia

    let displayShields = shields.map((item) => {
        apresentaListas(item);
    });

    displayShields = displayShields.join("");

    escudo.innerHTML = displayShields;

    function apresentaListas(item) {
        lista = "";
        contador = 0;
        Object.keys(item).forEach(key => {
            if (item[key] !== "" && item[key] !== item.Nome) {
                lista += `<li><span class="negrito">${propriedades[contador]}</span> ${item[key]}</li>`;
            }
            contador++;
            
        });
        console.log(item.Nome);
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