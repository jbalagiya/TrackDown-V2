#  📡 TrackDown-V2

**TrackDown** is a **serverless, privacy-focused intelligence tool** powered by **Cloudflare Workers**. It allows you to generate custom tracking links that gather device data (like IP address, browser details, geolocation, and more) and send it directly to a connected **Telegram bot**.

> ⚠️ Intended strictly for **educational and research purposes only**. Misuse is prohibited.

---

## 🚀 Features

- 🔗 Generate two types of tracking links (Cloudflare-style and WebView-style)
- 🌐 Collect IP, user-agent, screen size, and device information
- 📍 Gather geolocation data (with permission)
- 📸 Capture webcam snapshots (with permission)
- 🔋 Detect battery and network status
- 📦 Detect connected media and USB devices (if permissions granted)
- 🤖 Auto-send collected data to your Telegram bot

---

## 🧰 Requirements

- ✅ [Telegram](https://telegram.org) account
- ✅ [Cloudflare](https://cloudflare.com) account
- ✅ [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install/)
- ✅ Basic knowledge of serverless deployment

---

## 🛠️ Setup Instructions

### 1. Create a Telegram Bot

1. Open Telegram and search for [@BotFather](https://t.me/BotFather)
2. Run `/newbot` and follow the prompts
3. Save your **Bot Token** (you’ll use this later)

---

### 2. Deploy Cloudflare Worker

```bash
git clone https://github.com/jbalagiya/TrackDown-V2.git
cd TrackDown-V2
```

Update the `wrangler.toml` file:

```toml
[vars]
TELEGRAM_BOT_TOKEN = "your_bot_token_here"
HOST_URL = "https://trackdown.your-subdomain.workers.dev"
```

Then:

```bash
npx wrangler deploy
```

---

### 3. Setup Webhook

After deployment, open this URL in your browser:

```
https://your-worker-url.workers.dev/setup-webhook
```

You should see:

```
✅ Webhook Setup Successful
```

---

## 💬 Telegram Bot Commands

| Command    | Description                            |
|------------|----------------------------------------|
| `/start`   | Start bot and get basic instructions   |
| `/help`    | Show all commands and usage info       |
| `/create`  | Generate new tracking link             |

---

## 🌐 Creating Tracking Links

1. Send `/create` to your bot
2. Enter a destination URL (e.g. `https://google.com`)
3. Receive:
   - ✅ `Cloudflare Page` link
   - ✅ `WebView Page` link

---

## 🧪 Data Collected

- Public IP Address
- User Agent (OS, Browser)
- Screen Resolution & Language
- Geolocation (with permission)
- Webcam Snapshot (with permission)
- Battery Status & Network Type
- Connected Cameras/Microphones
- USB Devices (if granted)

---

## 📷 Example Bot Interaction

```plaintext
You: /create  
Bot: Enter your destination URL  
You: https://example.com  
Bot:  
✅ Tracking links generated:

🌐 Cloudflare: https://your-worker.workers.dev/c/xxx/yyyyy  
🔍 WebView: https://your-worker.workers.dev/w/xxx/yyyyy
```

---

## 🧩 Troubleshooting

### Webhook not working?

- Check bot token in `wrangler.toml`
- Confirm Worker URL is deployed
- Visit `/setup-webhook` again

### No data received?

- Check browser permission settings
- Use HTTPS links only
- Monitor Cloudflare Worker logs for errors

---

## 🔐 Security Recommendations

- Keep your `TELEGRAM_BOT_TOKEN` private
- Do not expose your worker link publicly
- Log and audit access regularly

---

## ⚠️ Legal Notice

This tool is developed **for educational and ethical cybersecurity purposes** only. You are **solely responsible** for how you use this software. Do **not** use it to violate privacy, hack individuals, or bypass user consent.

---

## 🧑‍💻 Author

**👨‍💻 Developed by:** [jbalagiya](https://github.com/jbalagiya)  
## ☕ Support

If you found this project helpful or interesting, consider supporting my work:

[![Buy Me a Coffee](https://img.shields.io/badge/-Buy%20Me%20a%20Coffee-orange?style=for-the-badge&logo=buy-me-a-coffee&logoColor=white)](https://buymeacoffee.com/jbalagiya)



---

## 🌟 Star this project if you found it useful!
