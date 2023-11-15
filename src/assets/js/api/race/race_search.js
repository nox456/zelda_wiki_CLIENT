import Race from "./Race.js"
import article_element from "../components/article_element.js"

export default function race_search() {
    const container = document.querySelector("#races-data")
    const form = document.querySelector("#search-form")
    const input = document.querySelector("#input")
    const filter = document.querySelector("#filter")

    const allRaces = container.innerHTML

    form.addEventListener("submit", async (e) => {
        e.preventDefault()
        const input_value = input.value
        const filter_value = filter.value
        
        let races
        if (filter_value == "name") {
            races = await Race.getByName(input_value)
        } else {
            races = await Race.getByGame(input_value)
        }

        container.innerHTML = ""
        article_element(races,container)
    })
    input.addEventListener("change", () => {
        const input_value = input.value
        if (input_value == "") {
            container.innerHTML = allRaces
        }
    })
    filter.addEventListener("change", () => {
        const filter_value = filter.value
        if (filter_value == "name") {
            input.setAttribute("placeholder", "Nombre...")
        } else {
            input.setAttribute("placeholder", "Juego...")
        }
    })
} 
