import Console from "../../api/Console.js";

export default async function console_all() {
    const container = document.querySelector("#consoles-data");
    const consoles = await Console.getAll();
    consoles.forEach((console) => {
        const element = document.createElement("article");
        element.className =
            "border border-blue-300 rounded-md overflow-hidden w-56 h-52 bg-slate-700 cursor-pointer group";
        element.innerHTML = `
            <h1 class="text-xl text-center font-zelda text-white group-hover:bg-blue-300 transition-colors group-hover:text-black">${console.name}</h1>
            <hr class="border border-blue-300"/>
            <div class="flex justify-center pt-4 h-full overflow-hidden">
                <img src="${console.img}" class="object-cover h-[60%]"/>
            </div>
        `;
        container.appendChild(element);
    });
}
