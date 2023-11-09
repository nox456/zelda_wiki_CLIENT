// CHARACTERS API
if (document.querySelector("#character-all")) {
    const character_all = await import("./character/character_all.js");
    const character_search = await import("./character/character_search.js");
    character_search.default();
    character_all.default();
}
if (document.querySelector("#character-id")) {
    const character_article = await import("./character/character_article.js")
    character_article.default("#character-id")
}

// CONSOLES API
if (document.querySelector("#consoles-data")) {
    const console_all = await import("./console/console_all.js")
    const console_search = await import("./console/console_search.js")
    console_all.default()
    console_search.default()
}

// GAMES API
if (document.querySelector("#games-data")) {
    const game_all = await import("./game/game_all.js")
    const game_search = await import("./game/game_search.js")
    game_all.default()
    game_search.default()
}

// RACES API
if (document.querySelector("#races-data")) {
    const race_all = await import("./race/race_all.js")
    const race_search = await import("./race/race_search.js")
    race_all.default()
    race_search.default()
}

// ENEMIES API
if (document.querySelector("#enemies-data")) {
    const enemie_all = await import("./enemie/enemie_all.js")
    const enemie_search = await import("./enemie/enemie_search.js")
    enemie_all.default()
    enemie_search.default()
}
