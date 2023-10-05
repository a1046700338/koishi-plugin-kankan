import { Context, Schema } from 'koishi'

export const name = 'kankan'

export interface Config {}

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
  // write your plugin here
  // 如果收到“在吗”，就回应“窝在”
  ctx.on('message', (session) => {
    if (session.content === '在吗') {
      session.send('窝在')
    }
  })
}
