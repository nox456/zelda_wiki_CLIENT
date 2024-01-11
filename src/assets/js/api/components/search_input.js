export default function search_input(filter,container,allElements) {
    const input = document.getElementById("input");
    if (filter == "category") {
        input.outerHTML = `
        <select 
            id="input" 
            class="select-input"
        >
            <option value="Jefe">Jefe</option>
            <option value="Basico">Basico</option>
        </select>
    `;
    } else {
        input.outerHTML = `
            <input
                type="search"
                id="input"
                placeholder="Nombre..."
                class="px-4 py-2 rounded-sm placeholder:italic focus:outline-none bg-slate-700 border border-blue-300 text-white hover:bg-slate-800 focus:bg-slate-700 transition-colors sm:px-2"
                    />
        `;
    }
}
