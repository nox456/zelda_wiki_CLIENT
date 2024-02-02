import Game from "./Game.js";
import article_element from "../components/article_element.js";
import not_found_message from "../components/not_found_message.js";
import serverErrorMessage from "../components/serverErrorMessage.js";

export default async function game_search() {
    const form = document.querySelector("#search-form");
    const container = document.querySelector("#games-data");
    const filter_element = document.querySelector("#filter");
    const input = document.querySelector("#input");

    const allGames = container.innerHTML;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const value = input.value;
        const filter = filter_element.value;
        let games;
        if (filter == "name") {
            games = await Game.getByName(value);
        } else {
            games = await Game.getByConsole(value);
        }
        container.innerHTML = "";
        if (games.status == 500) {
            serverErrorMessage(container, games.message);
        } else if (games.status == 404) {
            not_found_message(games, container);
        } else {
            article_element(games.data, container, games.tableName);
        }
    });
    input.addEventListener("change", () => {
        const value = input.value;
        if (value == "") {
            container.innerHTML = allGames;
        }
    });
    filter_element.addEventListener("change", () => {
        const value = filter_element.value;
        if (value == "name") {
            input.setAttribute("placeholder", "Nombre...");
        } else {
            input.setAttribute("placeholder", "Consola...");
        }
    });
}
