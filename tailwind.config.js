/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/index.html", "./src/pages/*.html","./src/assets/js/**/*.js"],
    theme: {
        extend: {
            fontFamily: {
                zelda: ['zelda']
            }
        },
    },
    plugins: [],
};
