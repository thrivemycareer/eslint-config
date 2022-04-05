<p align="center"></p>
<div align="center">
  <a href="https://www.thrivemycareer.com/#gh-light-mode-only" target="_blank">
    <img src="https://cdn.careerjsm.com/assets/images/logo/v1/thrive-purple.svg" alt="ThriveMyCareer Logo" height="30">
  </a>
  <a href="https://www.thrivemycareer.com/#gh-dark-mode-only" target="_blank">
    <img src="https://cdn.careerjsm.com/assets/images/logo/v1/thrive-white.svg" alt="ThriveMyCareer Logo" height="30">
  </a>
</div>
<p align="center"><strong>Shared ESLint Configs</strong></p>

<p align="center">
  <a href="https://github.com/thrivemycareer/eslint-config/actions/workflows/continuous-integration.yml">
    <img src="https://github.com/thrivemycareer/eslint-config/actions/workflows/continuous-integration.yml/badge.svg" alt="Continuous Integration Badge" />
  </a>
</p>

## Install

### Peer Dependencies

```zsh
yarn add eslint-plugin-unicorn --dev --exact
```

### ESLint Configs

```zsh
yarn add eslint-config-thrive --dev --exact
```

## add `.eslintConfig` field to `package.json`

```jsonc
// ...
"eslintConfig": {
  "extends": "thrive"
},
"eslintIgnore": [
  "build",
  "coverage"
],
// ...
```

### Configurations

This package includes 1 guaranteed file for shared rules.

> 🚧 There are `legacy-*` files being created for older configurations. They do not exist yet here as a stable export, beware.

This package also may contain experimental files that use rules or overrides considered experimental. These do NOT adhere to semantic versioning (SEMVER). They may be added to or removed at any point without warning and without considerations for regression.

#### React Applications

- `thrive/react`
- `thrive/react-experimental` (may or may not be available)

> You **NEED** to also run `yarn add eslint-config-react-app eslint-plugin-jsx-a11y --dev --exact`

### `.editorconfig` file in project root

```ini
root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
max_line_length = 120
trim_trailing_whitespace = true

[*.md]

[COMMIT_EDITMSG]
max_line_length = 0
trim_trailing_whitespace = false

[*.{yml,yaml}]
indent_size = 2

[docker-compose.yml]
indent_size = 4
```
