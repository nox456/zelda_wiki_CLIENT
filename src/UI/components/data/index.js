if (document.querySelector("#character-all")) {
    const character_all = await import("./character_all.js")
    character_all.default()
}
