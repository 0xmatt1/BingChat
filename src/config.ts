import { loadConfig } from "c12";
import { readFileSync } from "fs";
import { resolve } from "path";
import { defaultRequestOptions } from "./request";
import { BingChatConfig, ResolvedBingChatConfig } from "./types";
import { logger } from "./utils";

const configDefaults: BingChatConfig = {
  cookies: "cookie.json",
  stream: true,
  requestOptions: defaultRequestOptions,
};

export const loadBingChatConfig = async (
  overrides?: Partial<BingChatConfig>,
  cwd = process.cwd()
) => {
  const { config } = await loadConfig<BingChatConfig>({
    name: "bingchat",
    defaults: configDefaults,
    globalRc: true,
    overrides: {
      ...(overrides as BingChatConfig),
    },
    cwd,
  });
  if (!config?.cookies) {
    const error = new Error(`Cookies can not be empty!`);
    logger.error(error);
    throw error;
  }
  if (typeof config?.cookies === "string") {
    config.cookies = [config.cookies];
  }
  config.cookies = config.cookies.map((c) => {
    const f = readFileSync(resolve(cwd, c), {
      encoding: "utf-8",
    });
    return JSON.parse(f);
  });
  config.requestOptions = config.requestOptions.filter((v) => v);
  return config as unknown as ResolvedBingChatConfig;
};
