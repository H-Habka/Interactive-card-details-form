/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            screens : {
                xs : "440px"
            },
            colors: {
                one: "hsl(249, 99%, 64%)",
                two: "hsl(278, 94%, 30%)",
                three: "hsl(0, 100%, 66%)",
                four: "hsl(278, 68%, 11%)",
                five: "hsl(279, 6%, 55%)",
                six: "hsl(270, 3%, 87%)",
                seven: "hsl(0, 0%, 100%)",
            },
            letterSpacing : {
                3 : "3px",
                5 : "5px",
            }
        },
    },
    plugins: [],
};
