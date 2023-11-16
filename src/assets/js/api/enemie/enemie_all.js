import Enemie from "./Enemie.js";
import article_element from "../components/article_element.js";

export default async function enemie_all() {
    return new Promise(async (resolve) => {
        const container = document.querySelector("#enemies-data");
        const enemies = await Enemie.getAll();
        article_element(enemies.data, container, enemies.tableName);
        resolve();
    });
}
