import Game from "../game/Game.js";
import Console from "../console/Console.js"
import article_data from "../components/article_data.js";
import article_title from "../components/article_title.js"
import article_console from "../components/article_console.js"
import article_release from "../components/article_release.js"
import article_img from "../components/article_img.js"
import article_description from "../components/article_description.js"

export default async function game_article(elementId) {
    const element = document.querySelector(elementId);
    const { data } = await Game.getByName(element.textContent);
    element.remove();

    article_data("#game-data", "game");

    const { name, console_id, release_date, img, description } = await Game.getById(data[0].id);

    const game_console = await Console.getById(console_id)

    article_title(name)
    article_console(game_console.data)
    article_release(release_date)
    article_img(img)
    article_description(description)
}
