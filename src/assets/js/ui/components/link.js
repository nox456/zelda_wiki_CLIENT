export default function link() {
    document.querySelector("#link").outerHTML = `
        <a href="/pages/categories.html"
           class="text-white border border-green-300 hover:bg-green-300 w-2/5 sm:w-4/5 py-2 text-center rounded-lg transition-colors cursor-pointer hover:text-black shadow-black shadow-lg font-bold">Categorias</a>
    `
}
