export default function article_title(articeTitle, element) {
    element.outerHTML = `
        <h1 class="text-4xl text-white font-zelda">${articeTitle}</h1>
        <hr class="border-2 border-blue-300"/>
    `;
}
