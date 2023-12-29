import Character from "./Character.js";
import categoryLoader from "../components/categoryLoader.js";
import article_element from "../components/article_element.js";

export default async function character_all() {
    return new Promise(async (resolve) => {
        const container = document.querySelector("#character-all");
        categoryLoader(container, true);
        const characters = await Character.getAll();
        article_element(characters.data, container, characters.tableName);
        categoryLoader(container, false);
        resolve();
    });
}
