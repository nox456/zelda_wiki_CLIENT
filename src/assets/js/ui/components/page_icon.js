export default function icon_page() {
    document.querySelector("#page-icon").outerHTML = `
        <div class="w-fit p-2 shadow-lg shadow-black rounded-full transition-colors border border-green-300 hover:bg-green-300 hover:bg-opacity-30 flex items-center cursor-pointer">
            <img class="w-10 h-10" src="/assets/img/icon.png"/>
        </div>
    `;
}
