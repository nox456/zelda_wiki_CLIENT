import Game from "./Game.js";
import article_element from "../components/article_element.js";
import categoryLoader from "../components/categoryLoader.js";
import serverErrorMessage from "../components/serverErrorMessage.js";

export default async function game_all() {
    return new Promise(async (resolve) => {
        const container = document.querySelector("#games-data");
        categoryLoader(container, true);
        const games = await Game.getAll();
        if (games.status == 500) {
            serverErrorMessage(container, games.message);
        } else {
            article_element(games.data, container, games.tableName);
        }
        categoryLoader(container, false);
        resolve();
    });
}
