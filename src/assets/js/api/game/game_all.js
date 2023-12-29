import Game from "./Game.js";
import article_element from "../components/article_element.js";
import categoryLoader from "../components/categoryLoader.js"

export default async function game_all() {
    return new Promise(async (resolve) => {
        const container = document.querySelector("#games-data");
        categoryLoader(container,true)
        const { data, tableName } = await Game.getAll();
        article_element(data, container, tableName);
        categoryLoader(container,false)
        resolve();
    });
}
