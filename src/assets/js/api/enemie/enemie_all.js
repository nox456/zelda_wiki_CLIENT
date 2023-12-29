import Enemie from "./Enemie.js";
import article_element from "../components/article_element.js";
import categoryLoader from "../components/categoryLoader.js"

export default async function enemie_all() {
    return new Promise(async (resolve) => {
        const container = document.querySelector("#enemies-data");
        categoryLoader(container,true)
        const enemies = await Enemie.getAll();
        article_element(enemies.data, container, enemies.tableName);
        categoryLoader(container,false)
        resolve();
    });
}
