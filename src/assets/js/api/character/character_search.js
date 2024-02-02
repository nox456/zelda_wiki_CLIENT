import Character from "./Character.js";
import article_element from "../components/article_element.js";
import not_found_message from "../components/not_found_message.js"
import serverErrorMessage from "../components/serverErrorMessage.js"

export default async function character_name() {
    const form = document.querySelector("#search-form");
    const container = document.querySelector("#character-all");
    const filter_input = document.querySelector("#filter")
    const search_input = document.querySelector("#input")

    const allChars = container.innerHTML

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const value = search_input.value;
        const filter = filter_input.value;
        let characters;
        if (filter == "name") {
            characters = await Character.getByName(value);
        } else if (filter == "race") {
            characters = await Character.getByRace(value);
        } else {
            characters = await Character.getByGame(value);
        }

        container.innerHTML = "";
        if (characters.status == 404) {
            article_element(characters.data, container, characters.tableName);
        } else if (characters.status == 500) {
            serverErrorMessage(container,characters.message)
        } else {
            not_found_message(characters,container)
        }
    });
    search_input.addEventListener("change", (e) => {
        const search_input = document.getElementsByName("value");
        const value = search_input[0].value;
        if (value == "") {
            container.innerHTML = allChars;
        }
    });
    filter_input.addEventListener("change", () => {
        if (filter_input.value == "name") {
            search_input.setAttribute("placeholder", "Nombre...");
        } else if (filter_input.value == "race") {
            search_input.setAttribute("placeholder", "Raza...");
        } else {
            search_input.setAttribute("placeholder", "Juego...");
        }
    });
}
