module.exports = {
  root: true,
  plugins: ["jsx-a11y"],
  extends: ["react-app", "react-app/jest", "plugin:jsx-a11y/strict", "plugin:unicorn/recommended"],
  overrides: [
    {
      files: ["src/setupTests.ts"],
      rules: { "unicorn/filename-case": "off" },
    },
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "unicorn/prevent-abbreviations": [
          "error",
          {
            replacements: {
              props: false,
            },
          },
        ],
      },
    },
  ],
  rules: {
    "import/order": [
      "warn",
      {
        groups: [
          ["builtin", "external"],
          ["sibling", "parent"],
        ],
        "newlines-between": "always-and-inside-groups",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "import/newline-after-import": "warn",
  },
};
