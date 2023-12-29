export default function categoryLoader(container,isActive) {
    if (isActive) {
        const loader = document.createElement("div")
        loader.className = "p-4 bg-slate-700 border border-blue-300 h-fit rounded-md my-auto"
        loader.innerHTML = `
            <p class="text-white italic font-bold">Cargando...</p>
        `
        container.appendChild(loader)
    } else {
        container.children[0].remove()
    }
}
