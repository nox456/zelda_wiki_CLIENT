export default function article_data(elementId, article) {
    const articleSections = {
        character: `
            <section>
                <h2 class="text-black font-zelda text-center text-lg bg-blue-300 sm:text-sm">Raza</h2>
                <hr class="border-2 border-blue-300">
                <div class="py-4 text-white text-center font-bold">
                    <div id="article-race"></div>
                </div>
            </section>
            <hr class="border-2 border-blue-300">
            <section class="flex flex-col overflow-y-hidden sm:overflow-y-visible sm:block">
                <h2 class="text-black font-zelda text-center text-lg bg-blue-300 sm:text-sm">Juegos en los que aparece</h2>
                <hr class="border-2 border-blue-300">
                <div class="py-4 text-white text-center font-bold sm:h-full sm:max-h-[15em] overflow-y-auto">
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
            <section class="flex flex-col overflow-y-hidden sm:overflow-y-visible sm:block">
                <h2 class="text-black font-zelda text-center text-lg bg-blue-300">Juegos que contiene</h2>
                <hr class="border-2 border-blue-300">
                <div class="py-4 text-white text-center font-bold sm:h-full sm:max-h-[15em] overflow-y-auto">
                    <div id="article-game"></div>
                </div>
            </section>
        `,
        game: `
            <section>
                <h2 class="text-black font-zelda text-center text-lg bg-blue-300 sm:text-sm">Fecha de lanzamiento</h2>
                <hr class="border-2 border-blue-300">
                <div class="py-4 text-white text-center font-bold">
                    <div id="article-release"></div>
                </div>
            </section>
            <hr class="border-2 border-blue-300">
            <section>
                <h2 class="text-black font-zelda text-center text-lg bg-blue-300">Consola</h2>
                <hr class="border-2 border-blue-300">
                <div class="py-4 text-white text-center font-bold sm:h-full">
                    <div id="article-console"></div>
                </div>
            </section>
        `,
        race: `
            <section class="flex flex-col overflow-y-hidden sm:overflow-y-visible sm:block">
                <h2 class="text-black font-zelda text-center text-lg bg-blue-300">Juegos en los que aparece</h2>
                <hr class="border-2 border-blue-300">
                <div class="py-4 text-white text-center font-bold sm:h-full sm:max-h-[15em] overflow-y-auto">
                    <div id="article-game"></div>
                </div>
            </section>
            <hr class="border-2 border-blue-300">
        `,
        enemie: `
            <section>
                <h2 class="text-black font-zelda text-center text-lg bg-blue-300">Categoria</h2>
                <hr class="border-2 border-blue-300">
                <div class="py-4 text-white text-center font-bold">
                    <div id="article-category"></div>
                </div>
            </section>
            <hr class="border-2 border-blue-300">
            <section class="flex flex-col overflow-y-hidden sm:overflow-y-visible sm:block">
                <h2 class="text-black font-zelda text-center text-lg bg-blue-300">Juegos en los que aparece</h2>
                <hr class="border-2 border-blue-300">
                <div class="py-4 text-white text-center font-bold sm:h-full sm:max-h-[15em] overflow-y-auto">
                    <div id="article-game"></div>
                </div>
            </section>
        `,
    };
    const element = document.querySelector(elementId);
    element.innerHTML = `
            <header
                class="p-0 row-start-1 col-span-3 flex flex-col justify-center"
            >
                <div id="article-title"></div>
            </header>
            <div class="row-start-2 grid grid-cols-[80%_20%] sm:flex sm:flex-col sm:overflow-y-auto gap-2">
                <section class="col-start-1 border-4 border-green-300 rounded-md p-4 font-bold sm:min-h-full sm:overflow-y-auto">
                    <div id="article-description"></div>
                </section>
                <aside class="col-start-2 border-4 border-blue-300 rounded-md flex flex-col [&>*]:w-full sm:-order-1 overflow-y-hidden sm:overflow-y-visible">
                    <div class="sm:h-full py-2">
                        <div id="article-img"></div>
                    </div>
                    <hr class="border-2 border-blue-300">
                    ${articleSections[article]}
                </aside>
            </div>
    `;
}
