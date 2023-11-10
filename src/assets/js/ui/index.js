import img_background from "./components/img_background.js"
import develop_by from "./components/develop_by.js"
import page_icon from "./components/page_icon.js"

const documentURL = window.location.pathname

// BACKGROUND
img_background()

// SIDEBAR
if (documentURL != "/") {
    const sidebar = await import("./components/sidebar.js");
    sidebar.default();
}

// DEVELOP BY
develop_by()

// PAGE ICON
page_icon()

// CATEGORIES ARTICLES
if (documentURL.includes("categories")) {
    const category_article = await import("./components/category_article.js");
    category_article.default();
}

// LINK
if (document.querySelector("#link")) {
    const link = await import("./components/link.js");
    link.default();
}
