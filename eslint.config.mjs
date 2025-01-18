import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.node,
        ...globals.jest,
        process: "readonly",
        describe: "readonly",
        it: "readonly",
        expect: "readonly"
      }
    }
  },
  pluginJs.configs.recommended,
];
