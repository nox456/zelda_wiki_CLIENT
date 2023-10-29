export default function develop_by() {
    document.querySelector("#develop-by").outerHTML = `
        <div class="w-fit flex flex-col items-center gap-2 sm:gap-0 justify-end sm:justify-start sm:pt-2">
            <p class="font-bold text-white px-2 text-center">Desarrollado por:</p>
            <a href="https://github.com/nox456" target="_blank" class="flex items-center border-t border-r border-green-300 transition-colors gap-2 hover:bg-green-300 hover:bg-opacity-30 p-2 text-white w-full rounded-tr-md justify-center sm:h-full">
                <img src="/assets/img/avatar.jpg" class="rounded-full w-10 h-10 sm:w-8 sm:h-8 object-cover"/>
                <span class="font-bold sm:text-sm">Nox</span>
            </a>
        </div>
    `
}
