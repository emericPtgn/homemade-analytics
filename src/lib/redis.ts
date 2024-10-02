import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://working-wren-25459.upstash.io',
  token: process.env.REDIS_KEY!,
})
