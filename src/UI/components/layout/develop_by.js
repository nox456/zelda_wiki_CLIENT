export default function develop_by() {
    document.querySelector("#develop-by").outerHTML = `
        <div class="w-fit flex flex-col items-center gap-2 justify-end">
            <p class="font-bold text-white px-2 text-center">Desarrollado por:</p>
            <a href="https://github.com/nox456" target="_blank" class="flex items-center  border-t border-r border-green-300 transition-colors gap-2 hover:bg-green-300 p-2 hover:text-black text-white w-full rounded-tr-md justify-center">
                <img src="/assets/img/avatar.jpg" class="rounded-full w-10 h-10 object-cover"/>
                <span class="font-bold">Nox</span>
            </a>
        </div>
    `
}
