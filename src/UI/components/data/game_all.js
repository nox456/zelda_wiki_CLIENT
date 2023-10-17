import Game from "../../api/Game.js";

export default async function game_all() {
    const container = document.querySelector("#games-data");
    const games = await Game.getAll();
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
}
