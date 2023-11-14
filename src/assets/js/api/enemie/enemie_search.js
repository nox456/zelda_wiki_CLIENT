import Enemie from "./Enemie.js"
import article_element from "../components/article_element.js"

export default async function enemie_search() {
    const container = document.querySelector("#enemies-data")
    const form = document.querySelector("#search-form")
    const input = document.querySelector("#input")
    const filter = document.querySelector("#filter")

    const allEnemies = container.innerHTML

    form.addEventListener("submit", async (e) => {
        e.preventDefault()
        const input_value = input.value
        const filter_value = filter.value

        let enemies
        if (filter_value == "name") {
            enemies = await Enemie.getByName(input_value)
        } else if (filter_value == "category") {
            enemies = await Enemie.getByCategory(input_value)
        } else {
            enemies = await Enemie.getByGame(input_value)
        }

        container.innerHTML = ""
        article_element(enemies,container)
    })
    input.addEventListener("change", () => {
        const input_value = input.value
        if (input_value == "") {
            container.innerHTML = allEnemies
        }
    })
    filter.addEventListener("change", () => {
        const filter_value = filter.value
        if (filter_value == "name") {
            input.setAttribute("placeholder", "Nombre...")
        } else if (filter_value == "category") {
            input.setAttribute("placeholder", "Categoría...")
        } else {
            input.setAttribute("placeholder", "Juego...")
        }
    })
}
