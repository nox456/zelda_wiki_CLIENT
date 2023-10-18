if (document.querySelector("#character-all")) {
    const character_all = await import("./character_all.js");
    const character_search = await import("./character_search.js");
    character_search.default();
    character_all.default();
}
if (document.querySelector("#games-data")) {
    const game_all = await import("./game_all.js");
    const game_search = await import("./game_search.js");
    game_search.default();
    game_all.default();
}
if (document.querySelector("#consoles-data")) {
    const console_all = await import("./console_all.js")
    const console_search = await import("./console_search.js")
    console_search.default()
    console_all.default()
}
