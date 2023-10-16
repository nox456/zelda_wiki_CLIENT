import Character from "../../api/Character.js"

export default async function character_all() {
    const container = document.querySelector("#character-all")
    const characters = await Character.getAll()
    characters.forEach(character => {
        const element = document.createElement("article")
        element.className = "border border-blue-300 rounded-md overflow-hidden w-56 h-52 bg-slate-700 cursor-pointer group"
        element.innerHTML = `
            <h1 class="text-xl text-center font-zelda text-white group-hover:bg-blue-300 transition-colors group-hover:text-black">${character.name}</h1>
            <hr class="border border-blue-300"/>
            <div class="flex justify-center items-center h-full overflow-hidden">
                <img src="${character.img}" class="object-cover h-full"/>
            </div>
        `
        container.appendChild(element)
    })
}
