import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.node } },
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
  {
    files:["**/*.{js,mjs,cjs}"],
    rules: {
      semi:["error", "always"],
      quotes: ["error", "single"], //exige aspas duplas
      "no-unused-vars": ["warn"], //warning se houver variaveis nao utilizadas
    },
  },
]);