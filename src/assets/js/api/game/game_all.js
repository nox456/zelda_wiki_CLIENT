import Game from "./Game.js";
import article_element from "../components/article_element.js";

export default async function game_all() {
    const container = document.querySelector("#games-data");
    const games = await Game.getAll();
    article_element(games, container)
}
