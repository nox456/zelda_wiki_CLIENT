import Console from "./Console.js";
import article_element from "../components/article_element.js";

export default async function console_all() {
    const container = document.querySelector("#consoles-data");
    const consoles = await Console.getAll();
    article_element(consoles, container)
}
