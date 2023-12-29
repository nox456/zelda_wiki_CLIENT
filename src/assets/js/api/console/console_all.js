import Console from "./Console.js";
import article_element from "../components/article_element.js";
import categoryLoader from "../components/categoryLoader.js"

export default async function console_all() {
    return new Promise(async (resolve) => {
        const container = document.querySelector("#consoles-data");
        categoryLoader(container,true)
        const { data, tableName } = await Console.getAll();
        article_element(data, container, tableName);
        categoryLoader(container,false)
        resolve();
    });
}
