if (document.querySelector("#character-all")) {
    const character_all = await import("./character_all.js")
    character_all.default()
}
if (document.querySelector("#search-form")) {
    const character_search = await import("./character_search.js")
    character_search.default() 
}
