import Console from "./Console.js";
import article_element from "../components/article_element.js";
import categoryLoader from "../components/categoryLoader.js";
import serverErrorMessage from "../components/serverErrorMessage.js";

export default async function console_all() {
    return new Promise(async (resolve) => {
        const container = document.querySelector("#consoles-data");
        categoryLoader(container, true);
        const consoles = await Console.getAll();
        if (consoles.status == 500) {
            serverErrorMessage(container, consoles.message);
        } else {
            article_element(consoles.data, container, consoles.tableName);
        }
            categoryLoader(container, false);
        resolve();
    });
}
