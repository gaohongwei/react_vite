- doc
  - https://khalilstemmler.com/blogs/tooling/prettier/
  - https://andrebnassis.medium.com/setting-eslint-on-a-react-typescript-project-2021-1190a43ffba
- Using Prettier with ESLint
  - ESLint defines the code conventions
  - Prettier performs the auto-formatting based on the ESLint rules
  - npm i prettier eslint-config-prettier eslint-plugin-prettier -D
  - .prettierrc
    {
    "semi": true,
    "trailingComma": "none",
    "singleQuote": true,
    "printWidth": 80
    }
- tuen off rules
  - eslintConfig in package.json
  - .eslintrc.js
    "rules": {
    "no-unused-vars": "off"
    }
