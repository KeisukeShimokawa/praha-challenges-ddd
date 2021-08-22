# 静的解析ツール

<!-- START doctoc -->
<!-- END doctoc -->

## ESLint 設定

ESLint の設定を記述する際に、ファイルの先頭に下記のような記述を追加することで、モジュールに設定できる値に対して型補完を有効化することができる。

```js
/** @type {import("@typescript-eslint/experimental-utils").TSESLint.Linter.Config} */
const config = {
  // ...
};
module.exports = config;
```
