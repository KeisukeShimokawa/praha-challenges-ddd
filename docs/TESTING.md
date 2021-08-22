# テスト関連

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<details>
<summary>Table of Contents</summary>

- [Jest 設定](#jest-%E8%A8%AD%E5%AE%9A)

</details>
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Jest 設定

Jest を実行する際に、 `jest.config.ts` のように TypeScript で型補完を受けながら設定を定義することができる。

```ts
// jest.common.config.ts
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  // ...
};
export default config;
```

> feat: Add support for the jest.config.ts configuration file #10564
> https://github.com/facebook/jest/pull/10564
