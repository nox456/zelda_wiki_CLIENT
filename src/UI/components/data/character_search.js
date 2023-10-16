import Character from "../../api/Character.js";

export default async function character_name() {
    const form = document.querySelector("#search-form");
    const container = document.querySelector("#character-all");
    const allChars = container.innerHTML;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const search_input = document.getElementsByName("value");
        const filter_input = document.getElementsByName("filter");
        const value = search_input[0].value;
        const filter = filter_input[0].value;
        let characters;
        if (filter == "name") {
            characters = await Character.getByName(value);
        } else if (filter == "race") {
            characters = await Character.getByRace(value)
        } else {
            console.log(`buscar por juego: ${value}`);
        }

        container.innerHTML = "";
        characters.forEach((character) => {
            const element = document.createElement("article");
            element.className =
                "border border-blue-300 rounded-md overflow-hidden w-56 h-52 bg-slate-700 cursor-pointer group";
            element.innerHTML = `
            <h1 class="text-xl text-center font-zelda text-white group-hover:bg-blue-300 transition-colors group-hover:text-black">${character.name}</h1>
            <hr class="border border-blue-300"/>
            <div class="flex justify-center items-center h-full overflow-hidden">
                <img src="${character.img}" class="object-cover h-full"/>
            </div>
        `;
            container.appendChild(element);
        });
    });
    form.addEventListener("change", (e) => {
        const search_input = document.getElementsByName("value");
        const value = search_input[0].value;
        if (value == "") {
            container.innerHTML = allChars;
        }
    });
}
