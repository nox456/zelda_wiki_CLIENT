export default function article_game(articleGame) {
    const gameElement = document.querySelector("#article-game");
    if (typeof articleGame == "object") {
        let content = "";
        articleGame.forEach((game) => {
            const name = game.name.replace("The Legend of Zelda - ", "");
            content = content.concat(`<p>${name}</p>\n`);
        });
        gameElement.outerHTML = `
           ${content}
    `;
    } else {
        gameElement.outerHTML = `
            <p>${articleGame}</p>
        `
    }
}
