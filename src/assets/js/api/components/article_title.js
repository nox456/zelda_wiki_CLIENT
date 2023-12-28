export default function article_title(articeTitle) {
    const titleElement = document.querySelector("#article-title");
    titleElement.outerHTML = `
        <h1 class="text-4xl text-white font-zelda sm:text-3xl">${articeTitle}</h1>
    `;
}
