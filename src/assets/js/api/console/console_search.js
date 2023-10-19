import Console from "./Console.js";
import article_element from "../components/article_element.js";

export default async function console_search() {
    const container = document.querySelector("#consoles-data");
    const form = document.querySelector("#search-form");
    const input = document.querySelector("#input");
    let allConsoles;

    setTimeout(() => {
        allConsoles = container.innerHTML;
    }, 200);

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const input_value = input.value;
        const consoles = await Console.getByName(input_value);
        container.innerHTML = ""
        article_element(consoles, container)
    });
    input.addEventListener("change", () => {
        const input_value = input.value
        if (input_value == "") {
            container.innerHTML = allConsoles
        }
    })
}
