<div align="center">

[![Bing](./assets/bing.svg)][bing-href]
[![Bing](./assets/node.svg)][node-href]

# Bing Chat CLI

_The reverse engineering the chat feature of the new version of Bing_

[![npm version][npm-version-src]][npm-version-href]

</div>

English | [简体中文](./README.zh-CN.md)

## Quick Start

```shell
npx bingchat-cli
```

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

**Arguments:**

- `--stream`: Used stream mode, **true** will be used as default, you can use `--no-stream` to set `false`.
- `-f, --cookie-file`: Cookie json file path, **cookie.json** will be used as default.
- `--options`: Request options, **"deepleo", "enable_debug_commands", "disable_emoji_spoken_text", "enablemm"** will be used as default, you can find more options [here](./src/types.ts)

## Module Usage

```ts
import { ChatBot, loadBingChatConfig } from "bingchat";
const config = await loadBingChatConfig();

const chatBot = new ChatBot(config);
await chatBot.create();

console.log(await chatBot.askAsync("hello!"));
```

## Configuration

Configuration is loaded by [unjs/c12](https://github.com/unjs/c12) from cwd. You can use either `bingchat.config.json`, `bingchat.config.{ts,js,mjs,cjs}`, `.BingChatrc`.

See [./src/config.ts](./src/config.ts) for available options and defaults.

## 💻 Development

- Clone this repository
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable` (use `npm i -g corepack` for Node.js < 16.10)
- Install dependencies using `pnpm install`
- Run interactive tests using `pnpm dev`

## License

Made with 💛

Published under [MIT License](./LICENSE).

## Acknowledgement

- [EdgeGPT](https://github.com/acheong08/EdgeGPT)
- [edgegpt](https://github.com/KeJunMao/edgegpt)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/bingchat?style=flat-square
[npm-version-href]: https://npmjs.com/package/bingchat
[bing-href]: https://www.bing.com/search?q=Bing+AI&showconv=1
[node-href]: https://nodejs.org
