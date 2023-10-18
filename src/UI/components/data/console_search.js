import Console from "../../api/Console.js";

export default async function console_search() {
    const container = document.querySelector("#consoles-data");
    const form = document.querySelector("#search-form");
    const input = document.querySelector("#input");
    let allConsoles;

    setTimeout(() => {
        allConsoles = container.innerHTML;
    }, 200);

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const input_value = input.value;
        const consoles = await Console.getByName(input_value);
        container.innerHTML = ""
        consoles.forEach((console) => {
            const element = document.createElement("article");
            element.className =
                "border border-blue-300 rounded-md overflow-hidden w-56 h-52 bg-slate-700 cursor-pointer group";
            element.innerHTML = `
            <h1 class="text-xl text-center font-zelda text-white group-hover:bg-blue-300 transition-colors group-hover:text-black">${console.name}</h1>
            <hr class="border border-blue-300"/>
            <div class="flex justify-center pt-4 h-full overflow-hidden">
                <img src="${console.img}" class="object-cover h-[60%]"/>
            </div>
        `;
            container.appendChild(element);
        });
    });
    input.addEventListener("change", () => {
        const input_value = input.value
        if (input_value == "") {
            container.innerHTML = allConsoles
        }
    })
}
