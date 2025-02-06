/* eslint-env node */
module.exports = {
    env: {
        node: true,
        es2021: true
    },
    extends: ["eslint:recommended"],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module"
    },
    rules: {
        "no-console": "off",
        "semi": ["error", "always"]
    }
};
