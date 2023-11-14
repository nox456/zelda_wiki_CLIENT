import Console from "./Console.js";
import article_element from "../components/article_element.js";

export default async function console_search() {
    const container = document.querySelector("#consoles-data");
    const form = document.querySelector("#search-form");
    const input = document.querySelector("#input");

    const allConsoles = container.innerHTML;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const input_value = input.value;
        const { data, tableName } = await Console.getByName(input_value);
        container.innerHTML = "";
        article_element(data, container, tableName);
    });
    input.addEventListener("change", () => {
        const input_value = input.value;
        if (input_value == "") {
            container.innerHTML = allConsoles;
        }
    });
}
