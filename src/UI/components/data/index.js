if (document.querySelector("#character-all")) {
    const character_all = await import("./character_all.js")
    character_all.default()
}
if (document.querySelector("#search-form")) {
    const character_name = await import("./character_name.js")
    character_name.default() 
}
