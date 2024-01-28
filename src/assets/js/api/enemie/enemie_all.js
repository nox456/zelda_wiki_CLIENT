import Enemie from "./Enemie.js";
import article_element from "../components/article_element.js";
import categoryLoader from "../components/categoryLoader.js";
import serverErrorMessage from "../components/serverErrorMessage.js";

export default async function enemie_all() {
    return new Promise(async (resolve) => {
        const container = document.querySelector("#enemies-data");
        categoryLoader(container, true);
        const enemies = await Enemie.getAll();
        if (enemies.status == 500) {
            serverErrorMessage(container, enemies.message);
        } else {
            article_element(enemies.data, container, enemies.tableName);
        }
        categoryLoader(container, false);
        resolve();
    });
}
