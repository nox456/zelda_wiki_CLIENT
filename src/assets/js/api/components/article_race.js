export default function article_race(articleRace) {
    const raceElement = document.querySelector("#article-race");
    raceElement.outerHTML = `
        <p>${articleRace.name}</p>
    `
}
