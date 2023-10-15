export default function link_sidebar() {
    const elements = Array.from(document.querySelectorAll(".link-sidebar.component"));
    elements.forEach((element) => {
        const content = element.querySelector("#content").innerHTML;
        const url = element.querySelector("#url").innerHTML;
        const imgUrl = element.querySelector("#imgUrl").innerHTML
        element.outerHTML = `
        <a href="${url}" class="flex gap-1 items-center group/link transition-none justify-center">
            <div class="border border-green-300 rounded-full p-2 w-12 h-12 flex items-center justify-center group-hover/link:bg-green-300 group-hover/link:bg-opacity-30 transition-colors flex-shrink-0">
                <img src="/assets/img/sidebar/${imgUrl}" class="object-contain w-full h-full"/>
            </div>
            <span class="w-0 opacity-0 group-hover:w-full group-hover:opacity-100 transition-[width_150ms,opacity_150ms] group-hover:delay-[0ms,150ms] text-white font-zelda text-lg">${content}</span> 
        </a>
    `;
    });
}
