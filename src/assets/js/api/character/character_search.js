import Character from "./Character.js";
import article_element from "../components/article_element.js";

export default async function character_name() {
    const form = document.querySelector("#search-form");
    const container = document.querySelector("#character-all");
    const filter_input = document.getElementsByName("filter")[0];
    const search_input = document.getElementsByName("value")[0];

    let allChars
    setTimeout(() => {
        allChars = container.innerHTML
    }, 200)

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const value = search_input.value;
        const filter = filter_input.value;
        let characters;
        if (filter == "name") {
            characters = await Character.getByName(value);
        } else if (filter == "race") {
            characters = await Character.getByRace(value)
        } else {
            characters = await Character.getByGame(value)
        }

        container.innerHTML = "";
        article_element(characters,container)
    });
    form.addEventListener("change", (e) => {
        const search_input = document.getElementsByName("value");
        const value = search_input[0].value;
        if (value == "") {
            container.innerHTML = allChars;
        }
    });
    filter_input.addEventListener("change", () => {
        if (filter_input.value == "name") {
            search_input.setAttribute("placeholder", "Nombre...")
        } else if (filter_input.value == "race") {
            search_input.setAttribute("placeholder", "Raza...")
        } else {
            search_input.setAttribute("placeholder", "Juego...")
        }
    })
}
