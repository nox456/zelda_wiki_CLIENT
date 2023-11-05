export default function article_game(articleGame, element) {
    if (typeof articleGame == "object") {
        let content = "";
        articleGame.forEach((game) => {
            const name = game.name.replace("The Legend of Zelda - ", "");
            content = content.concat(`<p>${name}</p>\n`);
        });
        element.outerHTML = `
           ${content}
    `;
    } else {
        element.outerHTML = `
            <p>${articleGame}</p>
        `
    }
}
