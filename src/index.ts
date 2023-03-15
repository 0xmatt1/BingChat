import { BingChatConfig } from "./types";

export * from "./ChatBot";
export * from "./ChatHub";
export * from "./config";
export * from "./conversation";
export * from "./request";
export * from "./types";
export * from "./utils";

export const defineConfig = (config: Partial<BingChatConfig>) => config;
