export default async function sidebar() {
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
            class="flex flex-col border-r-2 border-blue-300 h-full w-[7%] justify-between group hover:w-[11%] transition-[width_150ms] absolute z-10 bg-slate-700 shadow-xl shadow-black overflow-hidden"
        >
            <a
                href="/"
                class="flex flex-col items-center h-20 py-2 gap-1"
            >
                <div id="page-icon"></div>
                <span
                    class="opacity-0 h-0 group-hover:opacity-100 group-hover:h-full group-hover:transition-[height_150ms,opacity_150ms] group-hover:delay-150 ease-out text-white text-center text-lg font-zelda"
                    >The Hyrule Field</span
                >
            </a>
            ${links.innerHTML}
            <div
                class="[&>div]:w-[95%] [&>div>p]:text-xs [&>div]:h-20 [&>div>a>span]:opacity-0 [&>div>a>span]:w-0 group-hover:[&>div>a>span]:w-fit [&>div>a>span]:transition-[width_150ms] group-hover:[&>div>a>span]:opacity-100"
            >
                <div id="develop-by"></div>
            </div>
        </aside>
    `;
    if (!document.querySelector(".category-article")) {
        const link_sidebar = await import("./link_sidebar.js");
        link_sidebar.default();
    }
}
