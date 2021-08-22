# Github Actions

<!-- START doctoc -->
<!-- END doctoc -->

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
