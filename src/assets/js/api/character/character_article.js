import Character from "./Character.js";
import Game from "../game/Game.js";
import Race from "../race/Race.js";
import article_title from "../components/article_title.js";
import article_description from "../components/article_description.js";
import article_img from "../components/article_img.js";
import article_game from "../components/article_game.js";
import article_race from "../components/article_race.js";
import article_data from "../components/article_data.js";

export default async function character_article(elementId) {
    const id = document.querySelector(elementId).textContent
    document.querySelector(elementId).remove()
    article_data("#character-data","character");

    const { name, description, img, games_id, race_id } =
        await Character.getById(id);

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

    const race = await Race.getById(race_id);

    article_title(name);
    article_description(description);
    article_img(img);
    article_game(games);
    article_race(race);
}
