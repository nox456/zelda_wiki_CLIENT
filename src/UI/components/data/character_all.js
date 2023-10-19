import Character from "../../api/Character.js"
import article_element from "../layout/article_element.js"

export default async function character_all() {
    const container = document.querySelector("#character-all")
    const characters = await Character.getAll()
    article_element(characters,container)
}
