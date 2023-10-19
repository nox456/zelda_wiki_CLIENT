import Game from "../../api/Game.js";
import article_element from "../layout/article_element.js";

export default async function game_all() {
    const container = document.querySelector("#games-data");
    const games = await Game.getAll();
    article_element(games, container)
}
