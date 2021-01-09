module.exports = {
    // extends: ["alloy", "alloy/vue"],
    extends: ["alloy", "alloy/vue"],
    parserOptions: {
      parser: "@typescript-eslint/parser",
    },
    env: {
      // Your environments (which contains several predefined global variables)
      //
      // browser: true,
      // node: true,
      // mocha: true,
      // jest: true,
      // jquery: true
    },
    globals: {
      // Your global variables (setting to false means it's not allowed to be reassigned)
      // myGlobal: false
    },
    rules: {
      "vue/valid-template-root":0,  // vue3.0 allow multiple element
      "vue/component-tags-order": [
        "error",
        {
          order: ["template", "script", "style"],
        },
      ],
      "no-console": 1,
      "no-invalid-this": 0,
    },
  }
  