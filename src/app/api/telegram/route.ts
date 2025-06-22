import { NextResponse, type NextRequest } from "next/server";
import { createMilkBot } from "@/lib/telegram-bot";

const bot = createMilkBot(process.env.TELEGRAM_BOT_TOKEN || "");

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    if (body.message) {
      await bot.handleMessage(body.message);
    }

    return NextResponse.json({ status: "ok" });
  } catch (error) {
    console.error("Error handling Telegram update:", error);
    return NextResponse.json({ status: "error", message: "Internal server error" }, { status: 500 });
  }
}

// A GET endpoint to set the webhook.
// NOTE: This should only be called once during setup.
export async function GET(request: NextRequest) {
    const host = request.headers.get("x-forwarded-host") || request.headers.get("host");

    if (!host) {
        return NextResponse.json({ status: "error", message: "Host header not found" }, { status: 400 });
    }
    
    const webhookUrl = `https://${host}/api/telegram`;

    try {
        const response = await fetch(`https://api.telegram.org/bot${bot.token}/setWebhook?url=${webhookUrl}`);
        const data = await response.json();
        
        if (data.ok) {
            return NextResponse.json({ status: "success", message: `Webhook set to ${webhookUrl}` });
        } else {
            return NextResponse.json({ status: "error", message: "Failed to set webhook", details: data }, { status: 500 });
        }
    } catch (error) {
        console.error("Error setting webhook:", error);
        return NextResponse.json({ status: "error", message: "Internal server error while setting webhook" }, { status: 500 });
    }
} 