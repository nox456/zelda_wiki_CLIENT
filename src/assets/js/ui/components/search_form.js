export default function search_form() {
    const filter = document.querySelector("#filter-input").innerHTML
    document.querySelector("#search-form").outerHTML = `
            <form id="search-form" class="flex justify-between w-full sm:flex-col sm:gap-2 sm:h-1/5">
                <div class="sm:flex sm:justify-between sm:w-full">
                    <input
                        id="input"
                        type="search"
                        name="value"
                        placeholder="Nombre..."
                        class="px-4 py-2 rounded-sm placeholder:italic focus:outline-none bg-slate-700 border border-blue-300 text-white hover:bg-slate-800 focus:bg-slate-700 transition-colors sm:px-2"
                    />
                    <input
                        type="submit"
                        value="Buscar"
                        class="border border-blue-300 text-white h-full px-2 rounded-sm cursor-pointer hover:bg-blue-300 transition-colors hover:text-black"
                    />
                </div>
                ${filter}
            </form>
    `
}
// Initialize
search_form()
