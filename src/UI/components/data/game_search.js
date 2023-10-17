import Game from "../../api/Game.js";

export default async function game_search() {
    const form = document.querySelector("#search-form");
    const container = document.querySelector("#games-data");
    const filter_element = document.querySelector("#filter");
    const input = document.querySelector("#input");
    
    let allGames

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const value = input.value;
        const filter = filter_element.value;
        let games;
        if (filter == "name") {
            games = await Game.getByName(value);
        }
        allGames = container.innerHTML
        container.innerHTML = "";
        games.forEach((game) => {
            const element = document.createElement("article");
            element.className =
                "border border-blue-300 rounded-md overflow-hidden w-56 h-52 bg-slate-700 cursor-pointer group";
            element.innerHTML = `
            <h1 class="text-xl text-center font-zelda text-white group-hover:bg-blue-300 transition-colors group-hover:text-black">${game.name}</h1>
            <hr class="border border-blue-300"/>
            <div class="flex justify-center pt-[5%] h-full overflow-hidden">
                <img src="${game.img}" class="object-cover h-[50%]"/>
            </div>
        `;
            container.appendChild(element);
        });
    });
    input.addEventListener("change", () => {
        const value = input.value
        if (value == "") {
            container.innerHTML = allGames
        }
    })
}
