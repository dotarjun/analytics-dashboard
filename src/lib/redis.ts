import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: "https://apn1-epic-gopher-34712.upstash.io",
  token: process.env.REDIS_KEY!,
});
