import Race from "./Race.js";
import article_element from "../components/article_element.js";
import categoryLoader from "../components/categoryLoader.js"

export default async function race_all() {
    return new Promise(async (resolve) => {
        const container = document.querySelector("#races-data");
        categoryLoader(container,true)
        const races = await Race.getAll();
        article_element(races.data, container, races.tableName);
        categoryLoader(container,false)
        resolve();
    });
}
