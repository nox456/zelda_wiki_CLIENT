export default function link_sidebar() {
    const elements = Array.from(document.querySelectorAll(".link-sidebar"));
    elements.forEach((element) => {
        const content = element.querySelector("#content").innerHTML;
        const url = element.querySelector("#url").innerHTML;
        const imgUrl = element.querySelector("#imgUrl").innerHTML
        element.outerHTML = `
        <a href="${url}" class="group/link transition-none grid grid-cols-1 group-hover:grid-cols-2 sm:block">
            <div class="border border-green-300 rounded-full p-2 w-12 h-12 sm:w-8 sm:h-8 flex items-center justify-center group-hover/link:bg-green-300 group-hover/link:bg-opacity-30 transition-colors col-start-1 mx-auto">
                <img src="/assets/img/sidebar/${imgUrl}" class="object-contain w-full h-full"/>
            </div>
            <span class="w-0 opacity-0 group-hover:w-fit group-hover:opacity-100 group-hover:transition-[width_150ms,opacity_150ms] group-hover:delay-[0ms,150ms] text-white font-zelda text-lg col-start-2 flex items-center sm:group-hover:w-0 sm:h-0 sm:hidden sm:group-hover:opacity-0">${content}</span> 
        </a>
    `;
    });
}
