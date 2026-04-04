# Getting started

## Requirements

- Node.js 18 or newer
- a valid Zalo Bot token

## Install dependencies

```bash
npm install
```

## Create `.env`

Create a `.env` file in the project root:

```env
ZALO_BOT_TOKEN=your_zalo_bot_token_here
```

## Verify the token

```bash
npm run test:token
```

This script loads `.env`, calls `getMe()`, and prints the bot profile.

## Run the hello bot

```bash
npm run test:hello-bot
```

Then send:

- `/start`
- `hello`

to validate the basic message flow.

## Minimal startup example

```ts
import { ApplicationBuilder, CommandHandler } from "zalo-bot-js";

const app = new ApplicationBuilder()
  .token(process.env.ZALO_BOT_TOKEN!)
  .build();

app.addHandler(new CommandHandler("start", async (update) => {
  await update.message?.replyText("Hello!");
}));

void app.runPolling();
```
