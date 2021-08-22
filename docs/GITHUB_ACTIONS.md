# Github Actions

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<details>
<summary>Table of Contents</summary>

- [Github Actions 入門](#github-actions-%E5%85%A5%E9%96%80)
  - [プルリクエスト時の挙動設定](#%E3%83%97%E3%83%AB%E3%83%AA%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88%E6%99%82%E3%81%AE%E6%8C%99%E5%8B%95%E8%A8%AD%E5%AE%9A)
- [NodeJS 用の設定](#nodejs-%E7%94%A8%E3%81%AE%E8%A8%AD%E5%AE%9A)
  - [キャッシュ設定](#%E3%82%AD%E3%83%A3%E3%83%83%E3%82%B7%E3%83%A5%E8%A8%AD%E5%AE%9A)

</details>
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Github Actions 入門

- [GitHub Actions 入門](https://docs.github.com/ja/actions/learn-github-actions/introduction-to-github-actions)

### プルリクエスト時の挙動設定

- [Github Actions: a deep dive into pull_request](https://frontside.com/blog/2020-05-26-github-actions-pull_request/)

## NodeJS 用の設定

下記のリンクを参考にしながら CI 用の設定を追加する。

- [ワークフローをトリガーするイベント](https://docs.github.com/ja/actions/reference/events-that-trigger-workflows)
- [https://github.com/actions/starter-workflows/blob/main/ci/node.js.yml](https://github.com/actions/starter-workflows/blob/main/ci/node.js.yml)

### キャッシュ設定

CI/CD 環境で `package-lock.json`　から依存関係をインストールする `npm ci` は、`node_modules` ディレクトリが新しく構築されるため、キャッシュするための仕組みを導入する必要がある。

```yml
- name: Cache node modules
  uses: actions/cache@v2
  env:
    cache-name: cache-node-modules
  with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-node-${{ env.cache-name }}-
      ${{ runner.os }}-node-
      ${{ runner.os }}-
```

- [CI/CD で npm ci する際は ~/.npm をキャッシュしよう](https://dev.classmethod.jp/articles/cicd-npm-ci-cache/)
- [GitHub Actions でカバレッジを可視化する](https://zenn.dev/katzumi/articles/995df5abebc91e312167)
