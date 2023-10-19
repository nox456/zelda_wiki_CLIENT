import Console from "../../api/Console.js";
import article_element from "../layout/article_element.js";

export default async function console_all() {
    const container = document.querySelector("#consoles-data");
    const consoles = await Console.getAll();
    article_element(consoles, container)
}
