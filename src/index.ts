import { Context, Schema } from 'koishi'

export const name = 'kankan'

export interface Config {}

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
  ctx.on('message', (session) => {
    if (session.content === '栞栞') {
      session.send(randomReply())
    }
  })
}
// 随机回复函数
function randomReply() {
  const replies = ['窝在', '干嘛呢', '我已经六星啦！', '哥哥'];
  const randomIndex = Math.floor(Math.random() * replies.length);
  return replies[randomIndex];
}