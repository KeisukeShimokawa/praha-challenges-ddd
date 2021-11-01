<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<details>
<summary>Table of Contents</summary>

- [Open API](#open-api)
  - [準備](#%E6%BA%96%E5%82%99)
  - [型とパラメータ](#%E5%9E%8B%E3%81%A8%E3%83%91%E3%83%A9%E3%83%A1%E3%83%BC%E3%82%BF)
  - [HTTP Header](#http-header)
  - [HTTP Response](#http-response)

</details>
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Open API

## 準備

```bash
npm install --save @nestjs/swagger swagger-ui-express
```

アプリケーションに対して以下のように Swagger 用の設定を追加すればいい。

```ts
const config = new DocumentBuilder()
  .setTitle('Cats example')
  .setDescription('The cats API description')
  .setVersion('1.0')
  .addTag('cats')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
```

これで `npm run start` でサーバーを起動すれば、`http://localhost:3000/api` に Swagger UI が確認できるはずである。

## 型とパラメータ

`SwaggerModule` はルートハンドラーで使用されている `@Body()`, `@Query()`, `@Param()` を自動で読み取り、対応するモデル定義を作成することができる。

```ts
@Post()
async create(@Body() createCatDto: CreateCatDto) {
  this.catsService.create(createCatDto);
}
```

もしも HTTP ボディに関する定義も作成したい場合は、以下のように `@ApiProperty()` を付与する必要がある。

```ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateCatDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  breed: string;
}
```

## HTTP Header

HTTP ヘッダに関しては以下のようにカスタムヘッダとその説明を追加することができる。

```ts
@ApiHeader({
  name: 'X-MyHeader',
  description: 'Custom header',
})
@Controller('cats')
export class CatsController {}
```

## HTTP Response

HTTP レスポンスに対応するステータスコードと、対応するルートハンドラーの説明を追加することができる。

```ts
@Post()
@ApiResponse({ status: 201, description: 'The record has been successfully created.'})
@ApiResponse({ status: 403, description: 'Forbidden.'})
async create(@Body() createCatDto: CreateCatDto) {
  this.catsService.create(createCatDto);
}
```
