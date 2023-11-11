import Console from "./Console.js"
import Game from "../game/Game.js"
import article_data from "../components/article_data.js"
import article_title from "../components/article_title.js"
import article_description from "../components/article_description.js"
import article_img from "../components/article_img.js"
import article_release from "../components/article_release.js"
import article_game from "../components/article_game.js"

export default async function console_article(elementId) {
    const element = document.querySelector(elementId)
    const { data } = await Console.getByName(element.textContent)
    element.remove()

    article_data("#console-data","console")

    const { name, description, img, release_date, games_id } = await Console.getById(data[0].id)

    const games = [];

    for (let i = 0;i < games_id.length;i++) {
        games.push(await Game.getById(games_id[i]))
    }

    article_title(name)
    article_description(description)
    article_img(img)
    article_release(release_date)
    article_game(games)
}
