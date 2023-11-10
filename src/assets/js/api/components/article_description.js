export default function article_description(articleDescription) {
    const descriptionElement = document.querySelector("#article-description");
    descriptionElement.outerHTML = `
        <p class="text-white text-lg">${articleDescription}</p>
    `    
}
