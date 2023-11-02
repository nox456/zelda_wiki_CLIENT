/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/index.html", "./src/pages/*.html","./src/assets/js/**/*.js"],
    theme: {
        extend: {
            fontFamily: {
                zelda: ['zelda']
            }
        },
        screens: {
            sm: { max: "640px" },
            md: { max: "768px" },
            lg: { max: "1024px" },
            xl: { max: "1280px" }
        }
    },
    plugins: [],
};
