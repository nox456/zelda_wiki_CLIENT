import Game from "./Game.js";
import article_element from "../components/article_element.js";

export default async function game_all() {
    return new Promise(async (resolve) => {
        const container = document.querySelector("#games-data");
        const { data, tableName } = await Game.getAll();
        article_element(data, container, tableName);
        resolve();
    });
}
