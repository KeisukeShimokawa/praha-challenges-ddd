# 開発方針

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<details>
<summary>Table of Contents</summary>

- [進め方](#%E9%80%B2%E3%82%81%E6%96%B9)

</details>
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 進め方

作成しているユースケース図をもとに、Github の Issues でユーザーストーリーを作成する。

その際に、下記の `ISSUE_TEMPLATE` を利用して、完成の定義を満たすように開発を進めていく。

- [User-Story](../.github/ISSUE_TEMPLATE/user-story.md)

作成した ISSUE は下記の Github プロジェクトで進捗を管理する。

https://github.com/KeisukeShimokawa/praha-challenges-ddd/projects/1

## ブランチ運用

Git のブランチモデルとしては、「[Github-Flow](http://scottchacon.com/2011/08/31/github-flow.html)」を採用する。

基本的に作成するブランチは以下の 2 つのみにする。

- main ブランチ
- feature ブランチ

作業の流れは以下である。

1. `main`ブランチから作業用ブランチを作成する
2. 作業用ブランチ名は`feature/<作業内容>`
3. 作業用ブランチに定期的にプッシュする
4. プルリクエストを実施
   - Github Actions で CI を実行する
5. プルリクエストが承認されたら`main`ブランチにマージ
6. 作業用ブランチの削除
