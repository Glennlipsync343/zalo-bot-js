# Ví dụ và test

## Polling example

File tham chiếu: `examples/polling.ts`

Dùng khi bạn muốn chạy bot nhanh bằng token và handler cơ bản.

## Webhook example

File tham chiếu: `examples/webhook.ts`

Ví dụ này dùng `node:http` để tạo một webhook server tối giản và gọi `setWebhook()`.

## Token test

File tham chiếu: `test/check-token.ts`

Chạy:

```bash
npm run test:token
```

## Hello bot test

File tham chiếu: `test/hello-bot.ts`

Chạy:

```bash
npm run test:hello-bot
```

Bot sẽ reply với:

- `/start`
- `hello`

## Các script hữu ích

- `npm run build`
- `npm run check`
- `npm run test`
- `npm run docs:dev`
- `npm run docs:build`
- `npm run docs:preview`
