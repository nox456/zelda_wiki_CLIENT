export default function article_release(articleRelease) {
    const releaseElement = document.querySelector("#article-release")
    releaseElement.outerHTML = `
        <p>${articleRelease}</p>
    `
}
