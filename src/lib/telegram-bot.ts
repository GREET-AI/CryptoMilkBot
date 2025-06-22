import TelegramBot from "node-telegram-bot-api";

// Telegram Bot Configuration for MilkBot
export interface TelegramBotConfig {
  token: string;
  webhookUrl?: string;
  commands: BotCommand[];
}

export interface BotCommand {
  command: string;
  description: string;
  handler: (message: TelegramBot.Message) => Promise<string>;
}

export interface Signal {
  id: string;
  coin: string;
  action: 'BUY' | 'SELL' | 'HOLD';
  price: string;
  target: string;
  confidence: 'Low' | 'Medium' | 'High';
  timestamp: Date;
  source: string;
}

export class MilkBotTelegram {
  private config: TelegramBotConfig;
  private signals: Signal[] = [];
  public token: string;
  private bot: TelegramBot;

  constructor(config: TelegramBotConfig) {
    this.config = config;
    this.token = config.token;
    this.bot = new TelegramBot(this.token);
  }

  // Initialize bot commands
  async initialize() {
    console.log('🥛 MilkBot Telegram Bot Initialized');
    console.log('Commands available:');
    this.config.commands.forEach(cmd => {
      console.log(`  /${cmd.command} - ${cmd.description}`);
    });
  }

  // Handle incoming messages
  async handleMessage(message: TelegramBot.Message) {
    const text = message.text;
    const chatId = message.chat.id;

    if (!text || !text.startsWith('/')) return;

    const command = text.split(' ')[0].substring(1);
    const commandHandler = this.config.commands.find(cmd => cmd.command === command);

    let responseText: string | undefined;

    if (commandHandler) {
      try {
        responseText = await commandHandler.handler(message);
      } catch (error) {
        console.error(`Error handling command ${command}:`, error);
        responseText = '❌ An error occurred while processing your command.';
      }
    } else {
      responseText = '❓ Unknown command. Use /help to see available commands.';
    }

    if (responseText) {
      await this.bot.sendMessage(chatId, responseText, { parse_mode: "Markdown" });
    }
  }

  // Send signal to all subscribers
  async broadcastSignal(signal: Signal) {
    this.signals.unshift(signal);
    if (this.signals.length > 100) {
      this.signals = this.signals.slice(0, 100);
    }

    const message = this.formatSignalMessage(signal);
    console.log('📡 Broadcasting signal:', message);
    // Here you would implement actual Telegram API calls
    // Example for a single user:
    // const chatId = 12345; // You need to get chat IDs from your users
    // await this.bot.sendMessage(chatId, message, { parse_mode: "Markdown" });
    return message;
  }

  // Format signal message for Telegram
  private formatSignalMessage(signal: Signal): string {
    const emoji = signal.action === 'BUY' ? '🟢' : signal.action === 'SELL' ? '🔴' : '🟡';
    const confidenceEmoji = signal.confidence === 'High' ? '🔥' : signal.confidence === 'Medium' ? '⚡' : '💡';
    
    return `${emoji} *NEW SIGNAL FROM @cryptokopo* ${confidenceEmoji}

*Coin:* ${signal.coin}
*Action:* ${signal.action}
*Current Price:* ${signal.price}
*Target:* ${signal.target}
*Confidence:* ${signal.confidence}

⏰ ${signal.timestamp.toLocaleTimeString()}

💬 Join our community: @milkbot_community
🌐 Web Dashboard: https://milkbot.com`;
  }

  // Get recent signals
  getRecentSignals(limit: number = 10): Signal[] {
    return this.signals.slice(0, limit);
  }

  // Get signal statistics
  getSignalStats() {
    const total = this.signals.length;
    const buySignals = this.signals.filter(s => s.action === 'BUY').length;
    const sellSignals = this.signals.filter(s => s.action === 'SELL').length;
    const holdSignals = this.signals.filter(s => s.action === 'HOLD').length;

    return {
      total,
      buySignals,
      sellSignals,
      holdSignals,
      buyPercentage: total > 0 ? (buySignals / total * 100).toFixed(1) : '0',
      sellPercentage: total > 0 ? (sellSignals / total * 100).toFixed(1) : '0',
      holdPercentage: total > 0 ? (holdSignals / total * 100).toFixed(1) : '0',
    };
  }
}

// Default bot commands
export const defaultCommands: BotCommand[] = [
  {
    command: 'start',
    description: 'Start the MilkBot',
    handler: async (_message) => {
      return `🥛 *Welcome to MilkBot!*

The ultimate Solana memecoin trading platform powered by @cryptokopo.

*Available Commands:*
/start - Show this message
/help - Show all commands
/signals - Get latest signals
/portfolio - Check your portfolio
/stats - View signal statistics
/connect - Connect your wallet
/buy - Quick buy interface
/sell - Quick sell interface

💬 Join our community: @milkbot_community
🌐 Web Dashboard: https://milkbot.com

*Ready to milk some profits?* 🚀`;
    }
  },
  {
    command: 'help',
    description: 'Show all available commands',
    handler: async (_message) => {
      return `🥛 *MilkBot Commands*

*Trading Commands:*
/signals - Get latest signals from @cryptokopo
/buy <coin> <amount> - Quick buy
/sell <coin> <amount> - Quick sell
/portfolio - View your holdings

*Information Commands:*
/stats - Signal statistics
/price <coin> - Get current price
/trending - Top trending coins

*Account Commands:*
/connect - Connect your wallet
/disconnect - Disconnect wallet
/settings - Bot settings

*Community:*
/community - Join our community
/leaderboard - Top traders

💬 Need help? Join @milkbot_community`;
    }
  },
  {
    command: 'signals',
    description: 'Get latest trading signals',
    handler: async (_message) => {
      return `📡 *Latest Signals*

🟢 *BUY* NEW_COIN
💰 Price: $0.00012
🎯 Target: $0.00025
🔥 Confidence: High
⏰ 5 min ago

🟡 *HOLD* MOON_TOKEN
💰 Price: $0.045
🎯 Target: $0.060
⚡ Confidence: Medium
⏰ 15 min ago

🔴 *SELL* PUMP_IT
💰 Price: $0.023
🎯 Target: $0.018
🔥 Confidence: High
⏰ 1 hour ago

💬 Join @milkbot_community for real-time alerts!`;
    }
  },
  {
    command: 'stats',
    description: 'View signal statistics',
    handler: async (_message) => {
      return `📊 *MilkBot Statistics*

*Signal Performance:*
📈 Total Signals: 500+
🟢 Buy Signals: 65%
🔴 Sell Signals: 25%
🟡 Hold Signals: 10%

*Community Stats:*
👥 Members: 100K+
💰 Profits Generated: $50M+
🏆 Success Rate: 78%

*Today's Activity:*
📡 Signals Sent: 5
👥 Active Traders: 2,340
💸 Total Volume: $2.1M

💬 Join @milkbot_community for live updates!`;
    }
  },
  {
    command: 'portfolio',
    description: 'Check your portfolio',
    handler: async (_message) => {
      return `💼 *Your Portfolio*

*Total Value:* $12,450.67
*24h Change:* +$1,234.56 (+8.2%)

*Holdings:*
🐸 PEPE: $5,234 (+45.2%)
🐕 DOGE: $3,120 (+23.1%)
🐕 BONK: $2,890 (+18.7%)
🐕 SHIB: $1,567 (+12.4%)

*Quick Actions:*
/buy <coin> <amount> - Buy tokens
/sell <coin> <amount> - Sell tokens

💬 Need help? @milkbot_community`;
    }
  }
];

// Create bot instance
export function createMilkBot(token: string): MilkBotTelegram {
  const bot = new MilkBotTelegram({
    token,
    commands: defaultCommands,
  });
  bot.token = token; // Ensure token is set
  return bot;
} 