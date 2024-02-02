import Enemie from "./Enemie.js";
import article_element from "../components/article_element.js";
import search_input from "../components/search_input.js"
import resetElementList from "../components/lib/resetElementList.js";
import not_found_message from "../components/not_found_message.js"
import serverErrorMessage from "../components/serverErrorMessage.js"

export default async function enemie_search() {
    const container = document.querySelector("#enemies-data");
    const form = document.querySelector("#search-form");
    const filter = document.querySelector("#filter");

    const allEnemies = container.innerHTML;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const input = document.querySelector("#input");
        const input_value = input.value;
        const filter_value = filter.value;

        let enemies;
        if (filter_value == "name") {
            enemies = await Enemie.getByName(input_value);
        } else if (filter_value == "category") {
            enemies = await Enemie.getByCategory(input_value);
        } else {
            enemies = await Enemie.getByGame(input_value);
        }

        container.innerHTML = "";
        if (enemies.status == 404) { 
            not_found_message(enemies,container)
        } if (enemies.status == 500) {
            serverErrorMessage(container,enemies.message)
        } else {
            article_element(enemies.data, container, enemies.tableName);
        }
    });
    resetElementList(container, allEnemies, input);
    filter.addEventListener("change", () => {
        const filter_value = filter.value;
        if (filter_value == "name") {
            search_input(filter_value);
            input.setAttribute("placeholder", "Nombre...");
            resetElementList(container, allEnemies, input);
        } else if (filter_value == "category") {
            search_input(filter_value);
            resetElementList(container, allEnemies, input);
        } else {
            search_input(filter_value);
            input.setAttribute("placeholder", "Juego...");
            resetElementList(container, allEnemies, input);
        }
    });
}
