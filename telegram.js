const TelegramBot = require('node-telegram-bot-api');
const token = 'YOUR_TELEGRAM_BOT_TOKEN';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Listen for /start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // Send a welcome message
  bot.sendMessage(chatId, 'Hello! I am your Telegram bot. How can I help you?');
});

// Listen for /echo command
bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const echoMessage = match[1];

  // Send back the matched text
  bot.sendMessage(chatId, `You said: ${echoMessage}`);
});

// Listen for incoming messages
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // Reply to any text message with a generic response
  bot.sendMessage(chatId, 'I received your message!');
});

// Handle errors
bot.on('polling_error', (error) => {
  console.error('Polling error:', error);
});

console.log('Telegram bot is running...');
