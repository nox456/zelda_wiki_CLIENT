export default function article_category(articleCategory) {
    const categoryElement = document.querySelector("#article-category")
    categoryElement.outerHTML = `
        <p>${articleCategory}</p>
    `
}
