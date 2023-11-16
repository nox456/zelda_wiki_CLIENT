export default function article_data(elementId, article) {
    const articleSections = {
        character: `
            <section>
                <h2 class="text-black font-zelda text-center text-lg bg-blue-300">Raza</h2>
                <hr class="border-2 border-blue-300">
                <div class="py-4 text-white text-center font-bold">
                    <div id="article-race"></div>
                </div>
            </section>
            <hr class="border-2 border-blue-300">
            <section>
                <h2 class="text-black font-zelda text-center text-lg bg-blue-300">Juegos en los que aparece</h2>
                <hr class="border-2 border-blue-300">
                <div class="py-4 text-white text-center font-bold">
                    <div id="article-game"></div>
                </div>
            </section>
        `,
        console: `
            <section>
                <h2 class="text-black font-zelda text-center text-lg bg-blue-300">Fecha de lanzamiento</h2>
                <hr class="border-2 border-blue-300">
                <div class="py-4 text-white text-center font-bold">
                    <div id="article-release"></div>
                </div>
            </section>
            <hr class="border-2 border-blue-300">
            <section>
                <h2 class="text-black font-zelda text-center text-lg bg-blue-300">Juegos que contiene</h2>
                <hr class="border-2 border-blue-300">
                <div class="py-4 text-white text-center font-bold">
                    <div id="article-game"></div>
                </div>
            </section>
        `,
        game: `
            <section>
                <h2 class="text-black font-zelda text-center text-lg bg-blue-300">Fecha de lanzamiento</h2>
                <hr class="border-2 border-blue-300">
                <div class="py-4 text-white text-center font-bold">
                    <div id="article-release"></div>
                </div>
            </section>
            <hr class="border-2 border-blue-300">
            <section>
                <h2 class="text-black font-zelda text-center text-lg bg-blue-300">Consola</h2>
                <hr class="border-2 border-blue-300">
                <div class="py-4 text-white text-center font-bold">
                    <div id="article-console"></div>
                </div>
            </section>
            <hr class="border-2 border-blue-300">
        `,
        race: `
            <section>
                <h2 class="text-black font-zelda text-center text-lg bg-blue-300">Juegos en los que aparece</h2>
                <hr class="border-2 border-blue-300">
                <div class="py-4 text-white text-center font-bold">
                    <div id="article-game"></div>
                </div>
            </section>
        `
    };
    const element = document.querySelector(elementId);
    element.innerHTML = `
            <header
                class="p-0 row-start-1 col-start-1 col-span-3 flex flex-col justify-center"
            >
                <div id="article-title"></div>
            </header>
            <section class="col-start-1 row-start-2 border-4 border-green-300 rounded-md p-4 font-bold">
                <div id="article-description"></div>
            </section>
            <aside class="col-start-2 row-start-2 border-4 border-blue-300 rounded-md flex flex-col items-center [&>*]:w-full overflow-y-auto">
                <div id="article-img"></div>
                <hr class="border-2 border-blue-300">
                ${articleSections[article]}
                <hr class="border-2 border-blue-300">
            </aside>
    `;
}
