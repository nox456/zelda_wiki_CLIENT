import Enemie from "./Enemie.js"
import article_element from "../components/article_element.js"

export default async function enemie_all() {
    const container = document.querySelector("#enemies-data")
    const enemies = await Enemie.getAll()
    article_element(enemies,container)
}
