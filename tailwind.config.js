/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/index.html", "./src/pages/*.html","./src/UI/components/*.js"],
    theme: {
        extend: {
            fontFamily: {
                zelda: ['zelda']
            }
        },
    },
    plugins: [],
};
