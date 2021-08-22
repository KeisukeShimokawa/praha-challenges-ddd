# 静的解析ツール

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<details>
<summary>Table of Contents</summary>

- [ESLint 設定](#eslint-%E8%A8%AD%E5%AE%9A)

</details>
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## ESLint 設定

ESLint の設定を記述する際に、ファイルの先頭に下記のような記述を追加することで、モジュールに設定できる値に対して型補完を有効化することができる。

```js
/** @type {import("@typescript-eslint/experimental-utils").TSESLint.Linter.Config} */
const config = {
  // ...
};
module.exports = config;
```
