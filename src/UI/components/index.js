if (document.querySelector("#img-background")) {
    const img_background = await import("./img_background.js");
    img_background.default();
}
if (document.querySelector("#sidebar")) {
    const sidebar = await import("./sidebar.js");
    sidebar.default();
    if (!document.querySelector(".category-article")) {
        const link_sidebar = await import("./link_sidebar.js");
        link_sidebar.default();
    }
}
if (document.querySelector(".category-article")) {
    const category_article = await import("./category_article.js");
    category_article.default();
}
if (document.querySelector("#page-icon")) {
    const page_icon = await import("./page_icon.js");
    page_icon.default();
}
if (document.querySelector("#link")) {
    const link = await import("./link.js");
    link.default();
}
if (document.querySelector("#develop-by")) {
    const develop_by = await import("./develop_by.js");
    develop_by.default();
}
