import Character from "./Character.js";
import Game from "../game/Game.js";
import Race from "../race/Race.js";
import article_title from "../components/article_title.js";
import article_description from "../components/article_description.js";
import article_img from "../components/article_img.js";
import article_game from "../components/article_game.js";
import article_race from "../components/article_race.js";

export default async function character_article(id) {
    const titleElement = document.querySelector("#article-title");
    const descriptionElement = document.querySelector("#article-description");
    const imgElement = document.querySelector("#article-img");
    const gameElement = document.querySelector("#article-game");
    const raceElement = document.querySelector("#article-race");

    const { name, description, img, games_id, race_id } =
        await Character.getById(id);

    const totalGames = await Game.getAll();

    let games

    if (totalGames.data.length == games_id.length) {
        games = "Todos los juegos"
    } else {
        games = []
        for (let i = 0; i < games_id.length; i++) {
            games.push(await Game.getById(games_id[i]));
        }
    }

    const race = await Race.getById(race_id);

    article_title(name, titleElement);
    article_description(description, descriptionElement);
    article_img(img, imgElement);
    article_game(games, gameElement);
    article_race(race, raceElement);
}
