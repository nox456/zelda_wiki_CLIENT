import Game from "../../api/Game.js";
import article_element from "../layout/article_element.js";

export default async function game_search() {
    const form = document.querySelector("#search-form");
    const container = document.querySelector("#games-data");
    const filter_element = document.querySelector("#filter");
    const input = document.querySelector("#input");
    
    let allGames
    setTimeout(() => {
        allGames = container.innerHTML
    }, 200)

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const value = input.value;
        const filter = filter_element.value;
        let games;
        if (filter == "name") {
            games = await Game.getByName(value);
        } else {
            games = await Game.getByConsole(value)
        }
        container.innerHTML = "";
        article_element(games, container)
    });
    input.addEventListener("change", () => {
        const value = input.value
        if (value == "") {
            container.innerHTML = allGames
        }
    })
    filter_element.addEventListener("change", () => {
        const value = filter_element.value
        if (value == "name") {
            input.setAttribute("placeholder", "Nombre...")
        } else {
            input.setAttribute("placeholder", "Consola...")
        }
    })
}
