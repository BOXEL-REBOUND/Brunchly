/** @type {import("prettier").Config} */
export default {
    printWidth: 170,
    semi: false,
    singleQuote: false,
    tabWidth: 4,
    trailingComma: "es5",
    useTabs: true,
    plugins: ["prettier-plugin-astro"],
    overrides: [
        {
            files: ["**/*.astro"],
            options: {
                parser: "astro",
            },
        },
    ],
};