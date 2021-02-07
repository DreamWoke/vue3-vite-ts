module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        "plugin:vue/vue3-recommended",
        "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
    ],
    parser: "vue-eslint-parser", // Check template eslint error
    parserOptions: {
        parser: "@typescript-eslint/parser", // Specify resolution script eslint error
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
            impliedStrict: true,
        },
    },
    plugins: ["prettier"], // Eslint-plugin-prettier
    globals: {
        // Your global variables (setting to false means it's not allowed to be reassigned)
        // myGlobal: false
    },
    rules: {
        "prettier/prettier": "error", // Prettier error
        "vue/component-tags-order": [
            "error",
            {
                order: ["template", "script", "style"],
            },
        ],
        "no-console": 2,
        "no-invalid-this": 0,
        "spaced-comment": ["error", "always", { exceptions: ["-", "+"] }],
        "no-debugger": 2,
    },
}
