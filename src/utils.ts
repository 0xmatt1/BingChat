import consola from "consola";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";
import { DELIMITER } from "./constant";
import { Cookie } from "./types";

export const logger = consola.create({
  defaults: {
    tag: "bingchat-cli",
  },
});

export const createForwardedIp = () => {
  return `13.${_.random(104, 107)}.${_.random(0, 255)}.${_.random(0, 255)}`;
};

export const createWSHeaders = () => ({
  accept: "application/json",
  "accept-language": "en-US,en;q=0.9",
  "content-type": "application/json",
  "sec-ch-ua":
    '"Not_A Brand";v="99", "Microsoft Edge";v="109", "Chromium";v="109"',
  "sec-ch-ua-arch": '"x86"',
  "sec-ch-ua-bitness": '"64"',
  "sec-ch-ua-full-version": '"109.0.1518.78"',
  "sec-ch-ua-full-version-list":
    '"Not_A Brand";v="99.0.0.0", "Microsoft Edge";v="109.0.1518.78", "Chromium";v="109.0.5414.120"',
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-model": "",
  "sec-ch-ua-platform": '"Windows"',
  "sec-ch-ua-platform-version": '"15.0.0"',
  "sec-fetch-dest": "empty",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "same-origin",
  "x-ms-client-request-id": uuidv4(),
  "x-ms-useragent":
    "azsdk-js-api-client-factory/1.0.0-beta.1 core-rest-pipeline/1.10.0 OS/Win32",
  Referer: "https://www.bing.com/search?q=Bing+AI&showconv=1&FORM=hpcodx",
  "Referrer-Policy": "origin-when-cross-origin",
  "x-forwarded-for": createForwardedIp(),
});

export const createHeaders = () => ({
  'authority': 'edgeservices.bing.com',
  'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
  "accept-language": "en-US,en;q=0.9",
  'cache-control': 'max-age=0',
  'sec-ch-ua': '"Chromium";v="110", "Not A(Brand";v="24", "Microsoft Edge";v="110"',
  'sec-ch-ua-arch': '"x86"',
  'sec-ch-ua-bitness': '"64"',
  'sec-ch-ua-full-version': '"110.0.1587.69"',
  'sec-ch-ua-full-version-list': '"Chromium";v="110.0.5481.192", "Not A(Brand";v="24.0.0.0", "Microsoft Edge";v="110.0.1587.69"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-model': '""',
  'sec-ch-ua-platform': '"Windows"',
  'sec-ch-ua-platform-version': '"15.0.0"',
  'sec-fetch-dest': 'document',
  'sec-fetch-mode': 'navigate',
  'sec-fetch-site': 'none',
  'sec-fetch-user': '?1',
  'upgrade-insecure-requests': '1',
  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.69',
  'x-edge-shopping-flag': '1',
})

export const appendIdentifier = (msg: object) =>
  JSON.stringify(msg) + DELIMITER;

export const stringifyCookie = (cookie: Cookie) =>
  cookie.reduce((pre, cur) => {
    pre += `${cur.name}=${cur.value};`;
    return pre;
  }, "");
