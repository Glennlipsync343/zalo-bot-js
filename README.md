# zalo-bot-js

SDK TypeScript cho Zalo Bot API, hướng đến người dùng Việt Nam nhưng vẫn có tài liệu tiếng Anh rõ ràng cho cộng đồng quốc tế.

[Tài liệu tiếng Việt](docs/vi/index.md) | [English docs](docs/en/index.md)

## Giới thiệu nhanh

`zalo-bot-js` là một thư viện Node.js + TypeScript được port từ package tham chiếu `python_zalo_bot`, nhưng được tổ chức lại theo phong cách TypeScript-native:

- dễ khởi tạo bot bằng token
- có long polling và webhook helper
- có `CommandHandler`, `MessageHandler`, `filters`
- có script test token và bot thử từ `.env`
- có cấu trúc module rõ ràng để tiếp tục mở rộng

## Tính năng hiện có

- `Bot.getMe()` để kiểm tra token và lấy thông tin bot
- `Application.runPolling()` để nhận update bằng long polling
- `sendMessage`, `sendPhoto`, `sendSticker`, `sendChatAction`
- `setWebhook`, `deleteWebhook`, `getWebhookInfo`
- routing theo command và filter
- fallback parse cho payload phản hồi mỏng từ API

## Chưa hỗ trợ đầy đủ

- upload media multipart hoàn chỉnh
- worker queue / updater layer như các framework bot lớn
- webhook adapter framework-specific trong core SDK
- bộ test tự động đầy đủ cho mọi endpoint

## Quick start

### 1. Cài dependencies

```bash
npm install
```

### 2. Tạo file `.env`

Tạo `.env` từ `.env.example`:

```env
ZALO_BOT_TOKEN=your_zalo_bot_token_here
```

### 3. Kiểm tra token

```bash
npm run test:token
```

### 4. Chạy bot thử

```bash
npm run test:hello-bot
```

Sau đó nhắn `/start` hoặc `hello` để test flow cơ bản.

## Ví dụ khởi động bot

```ts
import {
  ApplicationBuilder,
  CommandHandler,
  MessageHandler,
  filters,
} from "zalo-bot-js";

const app = new ApplicationBuilder()
  .token(process.env.ZALO_BOT_TOKEN!)
  .build();

app.addHandler(new CommandHandler("start", async (update) => {
  await update.message?.replyText("Xin chào từ zalo-bot-js");
}));

app.addHandler(
  new MessageHandler(filters.TEXT.and(filters.COMMAND.not()), async (update) => {
    await update.message?.replyText(`Bạn vừa nói: ${update.message?.text ?? ""}`);
  }),
);

void app.runPolling();
```

## Kiến trúc hiện tại

- `src/request`: HTTP transport và API error mapping
- `src/models`: `User`, `Chat`, `Message`, `Update`, `WebhookInfo`
- `src/core`: `Bot`, `Application`, `ApplicationBuilder`, `CallbackContext`
- `src/handlers`: command và message handlers
- `src/filters`: composable filters
- `examples`: ví dụ polling và webhook
- `test`: script thử token và bot thật bằng `.env`

## Tài liệu

- Tiếng Việt: [docs/vi/index.md](docs/vi/index.md)
- English: [docs/en/index.md](docs/en/index.md)
- GitHub Pages docs sẽ được build từ thư mục `docs/`

## Development

- `npm run build`: build thư viện TypeScript
- `npm run check`: type-check không emit
- `npm run test:token`: đọc token từ `.env` và gọi `getMe()`
- `npm run test:hello-bot`: chạy bot polling để test `/start` và `hello`
- `npm run docs:dev`: chạy docs local bằng VitePress
- `npm run docs:build`: build static docs cho GitHub Pages
- `npm run docs:preview`: preview docs đã build
- `npm test`: chạy check, build và smoke test

## English summary

`zalo-bot-js` is a TypeScript-first SDK for the Zalo Bot API. It currently supports token validation, long polling, webhook helpers, command/message handlers, and simple `.env`-based test scripts. For full documentation, see [English docs](docs/en/index.md).