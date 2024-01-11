export default function category_article() {
    const elements = Array.from(document.querySelectorAll(".category-article"))
    elements.forEach(element => {
        const { linkUrl, articleTitle, imgUrl } = element.attributes 
        const description = element.innerText
        element.outerHTML = `
            <article class="rounded-md border-4 border-blue-300 text-white w-52 sm:w-[45%] sm:h-[55%] h-[70%] overflow-hidden cursor-pointer bg-slate-700 group relative">
                <a href="/pages/${linkUrl.value}" class="bg-black bg-opacity-60 absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 sm:group-hover:opacity-0 transition-opacity duration-[30ms] text-4xl font-zelda flex items-center justify-center">${articleTitle.value}</a>
                <img src="/assets/img/categories/${imgUrl.value}" class="h-1/2 object-cover group-hover:h-full sm:group-hover:h-1/2 transition-[height] duration-[30ms]"/>
                <hr class="border border-blue-300"/>
                <div class="space-y-4 sm:space-y-1 p-2">
                    <h2 class="text-center font-bold">${articleTitle.value}</h2>
                    <p class="text-sm sm:text-xs">${description}</p>
                </div>
            </article>
        `
    })
}
// Initialize
category_article()
