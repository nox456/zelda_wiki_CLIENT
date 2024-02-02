import Console from "./Console.js";
import article_element from "../components/article_element.js";
import not_found_message from "../components/not_found_message.js";
import serverErrorMessage from "../components/serverErrorMessage.js";

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
        if (consoles.status == 404) {
            not_found_message(consoles, container);
        }
        if (consoles.status == 500) {
            serverErrorMessage(container, consoles.message);
        } else {
            article_element(consoles.data, container, consoles.tableName);
        }
    });
    input.addEventListener("change", () => {
        const input_value = input.value;
        if (input_value == "") {
            container.innerHTML = allConsoles;
        }
    });
}
