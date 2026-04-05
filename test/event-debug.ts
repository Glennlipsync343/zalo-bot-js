import { config as loadEnv } from "dotenv";
import { Bot } from "../src";
import { t } from "../src/i18n/runtime";

async function main() {
  loadEnv();

  const token = process.env.ZALO_BOT_TOKEN;
  if (!token) {
    throw new Error(t("env.missingToken"));
  }

  const bot = new Bot({ token });

  bot.on("message", async (message, metadata) => {
    console.log("[message]", {
      updateId: metadata.update.updateId,
      chatId: message.chat.id,
      messageId: message.messageId,
      fromUserId: message.fromUser?.id,
      messageType: message.messageType,
      eventTypes: metadata.update.eventTypes,
      text: message.text ?? null,
      sticker: message.sticker ?? null,
      photoUrl: message.photoUrl ?? null,
    });
  });

  bot.on("text", async (message) => {
    console.log("[text]", {
      chatId: message.chat.id,
      text: message.text,
    });
  });

  bot.on("sticker", async (message) => {
    console.log("[sticker]", {
      chatId: message.chat.id,
      sticker: message.sticker,
    });
  });

  bot.on("photo", async (message) => {
    console.log("[photo]", {
      chatId: message.chat.id,
      photoUrl: message.photoUrl,
    });
  });

  bot.onText(/.*/, async (message, match) => {
    console.log("[onText]", {
      chatId: message.chat.id,
      match: match[0],
    });
  });

  console.log("Listening for Zalo events...");
  console.log("Send a message/sticker/photo to the bot to inspect chat and event payloads.");

  await bot.startPolling();
}

void main().catch((error) => {
  console.error("event-debug failed");
  console.error(error);
  process.exitCode = 1;
});
