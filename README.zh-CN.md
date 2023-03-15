<div align="center">

[![Bing](./assets/bing.svg)][bing-href]
[![Bing](./assets/node.svg)][node-href]

# Bing Chat 命令行工具

_新必应的聊天功能的逆向工程_

[![npm version][npm-version-src]][npm-version-href]

</div>

[English](./README.md) | 简体中文

## 快速开始

```shell
npx bingchat-cli
```

## 命令行用法

## CLI Usage

```shell
npx bingchat-cli -h
Usage: bingchat-cli [options]

        !reset Reset the conversation
        !exit Exit the program
        !options Set request options

Options:
  -f, --cookie-file  Cookie file path                                                          [default: cookie.json]
      --stream       Used stream mode                                                       [boolean] [default: true]
  -h, --help         Show help                                                                              [boolean]
  -v, --version      Show version number                                                                    [boolean]
      --options      Request options  [array] [default: deepleo,enable_debug_commands,disable_emoji_spoken_text,enablemm]
Examples:
  bingchat-cli -f cookie.json

Repo: https://github.com/vincenthou/BingChat
By: https://github.com/KeJunMao/edgegpt
License: MIT
```

**参数:**

- `--stream`: Used stream mode, **true** will be used as default, you can use `--no-stream` to set `false`.
- `-f, --cookie-file`: Cookie json file path, **cookie.json** will be used as default.
- `--options`: Request options, **"deepleo", "enable_debug_commands", "disable_emoji_spoken_text", "enablemm"** will be used as default, you can find more options [here](./src/types.ts)

## 模块用法

```ts
import { ChatBot, loadBingChatConfig } from "bingchat";
const config = await loadBingChatConfig();

const chatBot = new ChatBot(config);
await chatBot.create();

console.log(await chatBot.askAsync("hello!"));
```

## 配置

配置项使用 [unjs/c12](https://github.com/unjs/c12) 自动从 cwd 中加载。 你可以使用 `bingchat.config.json`, `bingchat.config.{ts,js,mjs,cjs}` 或者 `.BingChatrc`.

有关可用选项和默认值，请参见 [./src/config.ts](./src/config.ts)

## 协议

用 💛 发电

根据 [MIT License](./LICENSE) 发布

## 致谢

- [EdgeGPT](https://github.com/acheong08/EdgeGPT)
- [edgegpt](https://github.com/KeJunMao/edgegpt)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/bingchat-cli?style=flat-square
[npm-version-href]: https://npmjs.com/package/bingchat-cli
[bing-href]: https://www.bing.com/search?q=Bing+AI&showconv=1
[node-href]: https://nodejs.org
