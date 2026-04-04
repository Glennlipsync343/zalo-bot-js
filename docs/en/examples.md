# Examples and tests

## Polling example

Reference file: `examples/polling.ts`

Use this when you want a simple token-based bot with command and text handlers.

## Webhook example

Reference file: `examples/webhook.ts`

This example uses `node:http` to create a minimal webhook server and calls `setWebhook()`.

## Token test

Reference file: `test/check-token.ts`

Run:

```bash
npm run test:token
```

## Hello bot test

Reference file: `test/hello-bot.ts`

Run:

```bash
npm run test:hello-bot
```

The bot responds to:

- `/start`
- `hello`

## Useful scripts

- `npm run build`
- `npm run check`
- `npm run test`
- `npm run docs:dev`
- `npm run docs:build`
- `npm run docs:preview`
