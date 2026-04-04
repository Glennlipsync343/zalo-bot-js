# Bắt đầu nhanh

## Yêu cầu

- Node.js 18 trở lên
- một bot token hợp lệ từ Zalo Bot

## Cài đặt

```bash
npm install
```

## Tạo `.env`

Tạo file `.env` tại root repo:

```env
ZALO_BOT_TOKEN=your_zalo_bot_token_here
```

## Kiểm tra token

```bash
npm run test:token
```

Script này đọc token từ `.env`, gọi `getMe()` và in thông tin bot.

## Chạy bot test

```bash
npm run test:hello-bot
```

Sau đó nhắn:

- `/start`
- `hello`

để kiểm tra flow cơ bản.

## Khởi động bot bằng code

```ts
import { ApplicationBuilder, CommandHandler } from "zalo-bot-js";

const app = new ApplicationBuilder()
  .token(process.env.ZALO_BOT_TOKEN!)
  .build();

app.addHandler(new CommandHandler("start", async (update) => {
  await update.message?.replyText("Xin chào!");
}));

void app.runPolling();
```
