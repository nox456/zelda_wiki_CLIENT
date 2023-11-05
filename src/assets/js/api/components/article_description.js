export default function article_description(articleDescription,element) {
    element.outerHTML = `
        <p class="text-white text-lg">${articleDescription}</p>
    `    
}
