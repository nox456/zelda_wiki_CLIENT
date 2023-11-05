export default function article_element(articles, container, table) {
    articles.forEach((article) => {
        const element = document.createElement("a");
        const file_name = article.name
            .replace("The Legend of Zelda - ", "")
            .replace("Nintendo Entertainment System (NES)","nes")
            .replace("Super Nintendo Entertainment System (SNES)","snes")
            .replace(/ /gi, "_")
            .toLowerCase();
        element.className =
            "border border-blue-300 rounded-md overflow-hidden w-56 h-52 bg-slate-700 cursor-pointer group";
        element.href = `/pages/${table}/${file_name}.html`;
        element.innerHTML = `
            <h1 class="text-xl text-center font-zelda text-white group-hover:bg-blue-300 transition-colors group-hover:text-black">${article.name}</h1>
            <hr class="border border-blue-300"/>
            <div class="flex justify-center items-center h-full overflow-hidden">
                <img src="${article.img}" class="object-cover h-full"/>
            </div>
        `;
        container.appendChild(element);
    });
}
