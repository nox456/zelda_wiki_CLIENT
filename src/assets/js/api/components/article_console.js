export default function article_console(articleConsole) {
    const console_element = document.querySelector("#article-console")
    console_element.outerHTML = `
        <p>${articleConsole.name}</p>
    `
}
