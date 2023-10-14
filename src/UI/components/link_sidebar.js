export default function link_sidebar() {
    const elements = Array.from(document.querySelectorAll(".link-sidebar.component"));
    elements.forEach((element) => {
        const content = element.querySelector("#content").innerHTML;
        const url = element.querySelector("#url").innerHTML;
        const imgUrl = element.querySelector("#imgUrl").innerHTML
        element.outerHTML = `
        <a href="${url}" class="flex gap-2 items-center group/link transition-none">
            <div class="border border-green-300 rounded-full p-2 w-14 h-14 flex items-center justify-center group-hover/link:bg-green-300 group-hover/link:bg-opacity-30 transition-colors flex-shrink-0">
                <img src="/assets/img/sidebar/${imgUrl}" class="object-contain w-full h-full"/>
            </div>
            <span class="opacity-0 group-hover:opacity-100 text-white font-zelda text-2xl transition-opacity ease-in-out">${content}</span> 
        </a>
    `;
    });
}
