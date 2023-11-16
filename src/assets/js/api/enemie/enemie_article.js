import Enemie from "./Enemie.js"
import Game from "../game/Game.js"
import article_data from "../components/article_data.js"
import article_title from "../components/article_title.js"
import article_category from "../components/article_category.js"
import article_description from "../components/article_description.js"
import article_img from "../components/article_img.js"
import article_game from "../components/article_game.js"

export default async function enemie_article(elementId) {
    const element = document.querySelector(elementId)
    const { data } = await Enemie.getByName(element.textContent)
    element.remove()

    article_data("#enemie-data","enemie")

    const { name, category, description, img, games_id } = await Enemie.getById(data[0].id)

    const totalGames = await Game.getAll();

    let games;

    if (totalGames.data.length == games_id.length) {
        games = "Todos los juegos";
    } else {
        games = [];
        for (let i = 0; i < games_id.length; i++) {
            games.push(await Game.getById(games_id[i]));
        }
    }

    article_title(name)
    article_category(category)
    article_description(description)
    article_img(img)
    article_game(games)
}
