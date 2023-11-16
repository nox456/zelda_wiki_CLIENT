// CHARACTERS API
if (document.querySelector("#character-all")) {
    const character_all = await import("./character/character_all.js");
    const character_search = await import("./character/character_search.js");
    await character_all.default();
    character_search.default();
}
if (document.querySelector("#character-name")) {
    const character_article = await import("./character/character_article.js")
    character_article.default("#character-name")
}

// CONSOLES API
if (document.querySelector("#consoles-data")) {
    const console_all = await import("./console/console_all.js")
    const console_search = await import("./console/console_search.js")
    await console_all.default()
    console_search.default()
}
if (document.querySelector("#console-name")) {
    const console_article = await import("./console/console_article.js")
    console_article.default("#console-name")
}

// GAMES API
if (document.querySelector("#games-data")) {
    const game_all = await import("./game/game_all.js")
    const game_search = await import("./game/game_search.js")
    await game_all.default()
    game_search.default()
}
if (document.querySelector("#game-name")) {
    const game_article = await import("./game/game_article.js")
    game_article.default("#game-name")
}

// RACES API
if (document.querySelector("#races-data")) {
    const race_all = await import("./race/race_all.js")
    const race_search = await import("./race/race_search.js")
    await race_all.default()
    race_search.default()
}
if (document.querySelector("#race-name")) {
    const race_article = await import("./race/race_article.js")
    race_article.default("#race-name")
}

// ENEMIES API
if (document.querySelector("#enemies-data")) {
    const enemie_all = await import("./enemie/enemie_all.js")
    const enemie_search = await import("./enemie/enemie_search.js")
    await enemie_all.default()
    enemie_search.default()
}
