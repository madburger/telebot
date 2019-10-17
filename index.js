const Telegraf = require('telegraf')

const bot = new Telegraf("903830264:AAEvgNDJQf06PBkj16sshuzqx6TDZ5D48y0")
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()
