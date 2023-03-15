import { expect, test, describe } from "vitest";

import { ChatBot, loadBingChatConfig } from "../src";

describe("ChatBot", async () => {
  const config = await loadBingChatConfig();
  const bot = new ChatBot(config);
  await bot.create();

  test(
    "should response a question",
    async () => {
      const res = await bot.askAsync("What is Vue.js?");
      expect(res).toBeTypeOf("string");
      bot.close();
    },
    { timeout: 100000 }
  );
});
