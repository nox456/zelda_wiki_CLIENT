import img_background from "./img_background.js"
import develop_by from "./develop_by.js"
import page_icon from "./page_icon.js"

const documentURL = window.location.pathname

// BACKGROUND
img_background()

// SIDEBAR
if (documentURL != "/") {
    const sidebar = await import("./sidebar.js");
    sidebar.default();
}

// DEVELOP BY
develop_by()

// PAGE ICON
page_icon()

// CATEGORIES ARTICLES
if (documentURL == "/pages/categories") {
    const category_article = await import("./category_article.js");
    category_article.default();
}

// LINK
if (document.querySelector("#link")) {
    const link = await import("./link.js");
    link.default();
}
