import { Telegraf } from 'telegraf';
import { InlineKeyboardButton } from 'telegraf/typings/core/types/typegram';

// Замените на ваш токен от @BotFather
const bot = new Telegraf('7831712123:AAFtheqis8u1pjry9ryPOTXmYYIKkZjixgA');

// URL вашего Web App (замените на реальный URL после деплоя)
const webAppUrl = 'https://your-domain.com/webapp';

// Обработка команды /start
bot.start((ctx) => {
  const keyboard: InlineKeyboardButton[][] = [[
    { text: 'Open Shop', web_app: { url: webAppUrl } }
  ]];

  ctx.reply('Welcome to My Shop! Click the button to open the store.', {
    reply_markup: { inline_keyboard: keyboard }
  });
});

// Запуск бота
bot.launch()
  .then(() => console.log('Bot is running'))
  .catch((err) => console.error('Error starting bot:', err));

// Graceful shutdown
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));