export default function category_article() {
    const elements = Array.from(document.querySelectorAll(".category-article"))
    elements.forEach(element => {
        const imgUrl = element.querySelector("#imgUrl").innerHTML
        const title = element.querySelector("#title").innerHTML
        const description = element.querySelector("#description").innerHTML
        const linkUrl = element.querySelector("#linkUrl").innerHTML
        element.outerHTML = `
            <article class="rounded-md border-4 border-blue-300 text-white w-52 h-1/2 overflow-hidden cursor-pointer bg-slate-700 group relative">
                <a href="/pages/${linkUrl}" class="bg-black bg-opacity-60 absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-[30ms] text-4xl font-zelda flex items-center justify-center">${title}</a>
                <img src="/assets/img/categories/${imgUrl}" class="h-1/2 object-cover group-hover:h-full transition-[height] duration-[30ms]"/>
                <hr class="border border-blue-300"/>
                <div class="space-y-4 p-2">
                    <h2 class="text-center font-bold">${title}</h2>
                    <p class="text-sm">${description}</p>
                </div>
            </article>
        `
    })
}
