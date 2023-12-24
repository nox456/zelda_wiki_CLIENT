import Console from "./Console.js";
import article_element from "../components/article_element.js";
import not_found_message from "../components/not_found_message.js"

export default async function console_search() {
    const container = document.querySelector("#consoles-data");
    const form = document.querySelector("#search-form");
    const input = document.querySelector("#input");

    const allConsoles = container.innerHTML;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const input_value = input.value;
        const consoles = await Console.getByName(input_value);
        container.innerHTML = "";
        if (consoles.data) {
        article_element(consoles.data, container, consoles.tableName);
        } else {
            not_found_message(consoles,container)
        }
    });
    input.addEventListener("change", () => {
        const input_value = input.value;
        if (input_value == "") {
            container.innerHTML = allConsoles;
        }
    });
}
