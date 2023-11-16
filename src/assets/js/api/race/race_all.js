import Race from "./Race.js";
import article_element from "../components/article_element.js";

export default async function race_all() {
    return new Promise(async (resolve) => {
        const container = document.querySelector("#races-data");
        const races = await Race.getAll();
        article_element(races.data, container, races.tableName);
        resolve();
    });
}
