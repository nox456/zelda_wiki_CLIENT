export default function article_race(articleRace, element) {
    element.outerHTML = `
        <p>${articleRace.name}</p>
    `
}
