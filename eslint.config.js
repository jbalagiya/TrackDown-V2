import js from "@eslint/js";

export default [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            globals: {
                console: "readonly",
                fetch: "readonly",
                Response: "readonly",
                URL: "readonly",
                btoa: "readonly",
                atob: "readonly",
                encodeURIComponent: "readonly",
                decodeURIComponent: "readonly",
                escape: "readonly",
                unescape: "readonly",
                Blob: "readonly",
                FormData: "readonly",
                Uint8Array: "readonly",
            }
        },
        rules: {
            "no-unused-vars": "warn",
        }
    }
];