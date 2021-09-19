<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<details>
<summary>Table of Contents</summary>

- [疑問集](#%E7%96%91%E5%95%8F%E9%9B%86)
  - [Q: フロントエンドとバックエンドで、エンドポイントに関する型定義をどのように共有すればいいのか](#q-%E3%83%95%E3%83%AD%E3%83%B3%E3%83%88%E3%82%A8%E3%83%B3%E3%83%89%E3%81%A8%E3%83%90%E3%83%83%E3%82%AF%E3%82%A8%E3%83%B3%E3%83%89%E3%81%A7%E3%82%A8%E3%83%B3%E3%83%89%E3%83%9D%E3%82%A4%E3%83%B3%E3%83%88%E3%81%AB%E9%96%A2%E3%81%99%E3%82%8B%E5%9E%8B%E5%AE%9A%E7%BE%A9%E3%82%92%E3%81%A9%E3%81%AE%E3%82%88%E3%81%86%E3%81%AB%E5%85%B1%E6%9C%89%E3%81%99%E3%82%8C%E3%81%B0%E3%81%84%E3%81%84%E3%81%AE%E3%81%8B)
  - [Q: クエリサービスが使用する DTO のマッピングをどのように記述するのか](#q-%E3%82%AF%E3%82%A8%E3%83%AA%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%81%8C%E4%BD%BF%E7%94%A8%E3%81%99%E3%82%8B-dto-%E3%81%AE%E3%83%9E%E3%83%83%E3%83%94%E3%83%B3%E3%82%B0%E3%82%92%E3%81%A9%E3%81%AE%E3%82%88%E3%81%86%E3%81%AB%E8%A8%98%E8%BF%B0%E3%81%99%E3%82%8B%E3%81%AE%E3%81%8B)
  - [Q: API で似たデータを取得する場合に、型定義を共有したりするのか](#q-api-%E3%81%A7%E4%BC%BC%E3%81%9F%E3%83%87%E3%83%BC%E3%82%BF%E3%82%92%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B%E5%A0%B4%E5%90%88%E3%81%AB%E5%9E%8B%E5%AE%9A%E7%BE%A9%E3%82%92%E5%85%B1%E6%9C%89%E3%81%97%E3%81%9F%E3%82%8A%E3%81%99%E3%82%8B%E3%81%AE%E3%81%8B)
  - [Q: 集約とエンドポイントの配置場所に関連はあるのか](#q-%E9%9B%86%E7%B4%84%E3%81%A8%E3%82%A8%E3%83%B3%E3%83%89%E3%83%9D%E3%82%A4%E3%83%B3%E3%83%88%E3%81%AE%E9%85%8D%E7%BD%AE%E5%A0%B4%E6%89%80%E3%81%AB%E9%96%A2%E9%80%A3%E3%81%AF%E3%81%82%E3%82%8B%E3%81%AE%E3%81%8B)
  - [Q: リードモデルに対して、GraphQL を使用することはありますか](#q-%E3%83%AA%E3%83%BC%E3%83%89%E3%83%A2%E3%83%87%E3%83%AB%E3%81%AB%E5%AF%BE%E3%81%97%E3%81%A6graphql-%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8%E3%81%AF%E3%81%82%E3%82%8A%E3%81%BE%E3%81%99%E3%81%8B)

</details>
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# 疑問集

## Q: フロントエンドとバックエンドで、エンドポイントに関する型定義をどのように共有すればいいのか

特大課題において、現在バックエンドの 1 つのエンドポイントに対して、その型を定義しています（下記イメージ）。

```bash
/src
├── presentation
│   └── participant
│       ├── participant.controller.ts
│       └── response
│           └── GetAllParticipant.response.ts
```

もしもエンドポイントごとに、`response` ファイルを作成する場合、エンドポイントの数だけ専用の型定義が作成されるかと思いますが、この型定義をフロントエンド側とどのように共有しているでしょうか。

## Q: クエリサービスが使用する DTO のマッピングをどのように記述するのか

リポジトリ内で Prisma から取得してきた値を、DTO にマッピングさせる方法に関して質問です。

CQRS を使用して、WriteModel と ReadModel を分離させた場合、WriteModel に関してはリポジトリ内で Entity にマッピングすればいいと考えています。

ReadModel の場合は専用の DTO にマッピングさせる必要があるかと思いますが、これはクエリサービスのリポジトリに毎回マッピングさせるための処理を記述しているのでしょうか（処理を共通化させたりしていることはありますか）。

## Q: API で似たデータを取得する場合に、型定義を共有したりするのか

例えば下記のようなエンドポイントが定義されていたとします。

```bash
GET /participants
GET /temas/:teamId/participants
GET /pairs/:pairId/participants
```

この場合、各エンドポイントが返す参加者に関するデータ構造は共通化させたりしていますか?

それとも、同じ構造のデータを返す場合であっても、ユースケースが異なるということで定義自体も分けたりしているのでしょうか。

## Q: 集約とエンドポイントの配置場所に関連はあるのか

例えば下記のような集約を想定します。

```bash
- team        # チームが集約ルート
  - pair      # ペアは参加者のID参照

- participant # ペアや課題のID参照

- task        # 参加者のID参照
```

この場合、REST API を考慮したエンドポイントは下記のように定義する認識でよろしいでしょうか。

```bash
GET /teams
GET /teams/:teamId
GET /teams/:teamId/pairs          # あくまでもチームのサブリソースとして定義
GET /teams/:teamId/pairs/:pairId  # あくまでもチームのサブリソースとして定義
GET /participants
GET /participants/:participantId
GET /tasks
GET /tasks/:taskId
```

## Q: リードモデルに対して、GraphQL を使用することはありますか
