const documentURL = window.location.pathname;

// Images Background
await import("./components/img_background.js")

// Search Form
await import("./components/search_form.js")

// Sidebar
if (documentURL != "/") {
    await import("./components/sidebar.js");
}

// Page icon in sidebar
await import("./components/page_icon.js")

// Link to GitHub in sidebar
await import("./components/develop_by.js")

// CATEGORIES ARTICLES
if (documentURL.includes("categories")) {
    await import("./components/category_article.js");
}
