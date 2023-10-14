export default function sidebar() {
    const links = document.createElement("div")
    if (document.title != "Categorias - The Hyrule Field") {
        links.innerHTML = `
            <div class="flex flex-col gap-2 justify-center border-y-4 border-white py-2">
                <div class="link-sidebar component">
                    <div id="content">Personajes</div>
                    <div id="url">/pages/characters.html</div>
                    <div id="imgUrl">characters.webp</div>
                </div>
                <div class="link-sidebar component">
                    <div id="content">Juegos</div>
                    <div id="url">/pages/games.html</div>
                    <div id="imgUrl">games.png</div>
                </div>
                <div class="link-sidebar component">
                    <div id="content">Consolas</div>
                    <div id="url">/pages/consoles.html</div>
                    <div id="imgUrl">consoles.webp</div>
                </div>
                <div class="link-sidebar component">
                    <div id="content">Razas</div>
                    <div id="url">/pages/races.html</div>
                    <div id="imgUrl">races.png</div>
                </div>
                <div class="link-sidebar component">
                    <div id="content">Enemigos</div>
                    <div id="url">/pages/enemies.html</div>
                    <div id="imgUrl">enemies.webp</div>
                </div>
            </div>
        `
    }
    document.querySelector("#sidebar").outerHTML = `
        <aside
            class="flex flex-col border-r-2 border-blue-300 h-full w-[5%] justify-between group hover:w-[11%] px-2 transition-[width_150ms] absolute z-10 bg-slate-700 shadow-xl shadow-black"
        >
            <a
                href="/"
                class="flex justify-start items-center gap-2 [&>div]:flex-shrink-0 h-16"
            >
                <div id="page-icon"></div>
                <span
                    class="opacity-0 group-hover:opacity-100 transition-opacity text-white text-center text-xl w-full font-zelda"
                    >The Hyrule Field</span
                >
            </a>
            ${links.innerHTML}
            <div
                class="[&>div]:w-full [&>div>p]:text-xs group-hover:[&>div>a>span]:opacity-100 [&>div>a>span]:opacity-0 [&>div>a>img]:flex-shrink-0 [&>div>a>span]:transition-opacity group-hover:[&>div>a]:justify-center [&>div]:h-20 [&>div>a]:justify-start"
            >
                <div id="develop-by"></div>
            </div>
        </aside>
    `;
}
