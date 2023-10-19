export default function article_element(articles,container) {
    articles.forEach(article => {
        const element = document.createElement("article")
        element.className = "border border-blue-300 rounded-md overflow-hidden w-56 h-52 bg-slate-700 cursor-pointer group"
        element.innerHTML = `
            <h1 class="text-xl text-center font-zelda text-white group-hover:bg-blue-300 transition-colors group-hover:text-black">${article.name}</h1>
            <hr class="border border-blue-300"/>
            <div class="flex justify-center items-center h-full overflow-hidden">
                <img src="${article.img}" class="object-cover h-full"/>
            </div>
        `
        container.appendChild(element)
    })
}
