// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            backgroundImage: {
                "hero-pattern": "url('/bg-hero.svg')",
            },

        },
    },
    plugins: [],
}
