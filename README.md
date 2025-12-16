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

Before you begin, ensure you have the following:

- ✅ **[Telegram](https://telegram.org) account** - Required to create and manage your bot
- ✅ **[Cloudflare](https://cloudflare.com) account** - Free tier is sufficient for deployment
- ✅ **[Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install/)** - Cloudflare's command-line tool for Workers
  - Install with: `npm install -g wrangler` (requires Node.js 16.13.0 or later)
- ✅ **Basic knowledge of serverless deployment** - Helpful but not mandatory
- ✅ **Git** - For cloning the repository
- ✅ **A code editor** - Such as VS Code, Sublime Text, or any text editor

### System Requirements
- Node.js version 16.13.0 or higher
- npm or yarn package manager
- Internet connection for deployment

---

## 🛠️ Complete Setup Guide

Follow these steps carefully to get TrackDown-V2 up and running:

### Step 1: Create a Telegram Bot

1. **Open Telegram** on your phone or desktop
2. **Search for [@BotFather](https://t.me/BotFather)** - This is Telegram's official bot for creating other bots
3. **Start a chat** with BotFather and send the command `/newbot`
4. **Choose a name** for your bot (e.g., "My TrackDown Bot")
5. **Choose a username** for your bot (must end with 'bot', e.g., "mytrackdown_bot")
6. **Save your Bot Token** - BotFather will give you a token that looks like:
   ```
   123456789:ABCdefGHIjklMNOpqrsTUVwxyz
   ```
   ⚠️ **IMPORTANT**: Keep this token secret! It's like a password for your bot.

---

### Step 2: Clone the Repository

Open your terminal or command prompt and run:

```bash
# Clone the repository
git clone https://github.com/jbalagiya/TrackDown-V2.git

# Navigate to the project directory
cd TrackDown-V2
```

---

### Step 3: Install Wrangler CLI

If you haven't installed Wrangler yet:

```bash
# Install Wrangler globally
npm install -g wrangler

# Verify installation
wrangler --version
```

You should see output like: `⛅️ wrangler 3.x.x`

---

### Step 4: Authenticate with Cloudflare

```bash
# Login to your Cloudflare account
wrangler login
```

This will open a browser window asking you to authorize Wrangler. Click "Allow" to proceed.

---

### Step 5: Configure Your Worker

1. **Open `wrangler.toml`** in your text editor
2. **Update the configuration** with your details:

```toml
[vars]
TELEGRAM_BOT_TOKEN = "123456789:ABCdefGHIjklMNOpqrsTUVwxyz"  # Replace with your actual bot token
HOST_URL = "https://trackdown.your-subdomain.workers.dev"     # You'll update this after deployment
```

**Note**: You can choose any subdomain name you like (e.g., `my-tracker`, `tracking-tool`, etc.)

---

### Step 6: Deploy to Cloudflare Workers

```bash
# Deploy your worker
wrangler publish
```

After successful deployment, you'll see output like:

```
Published trackdown (0.01 sec)
  https://trackdown.your-subdomain.workers.dev
```

**Copy the URL** from the output!

---

### Step 7: Update HOST_URL

1. **Go back to `wrangler.toml`**
2. **Update the `HOST_URL`** with the actual URL you got from deployment:

```toml
[vars]
TELEGRAM_BOT_TOKEN = "123456789:ABCdefGHIjklMNOpqrsTUVwxyz"
HOST_URL = "https://trackdown.your-subdomain.workers.dev"  # Update this with your actual URL
```

3. **Deploy again** to apply the changes:

```bash
wrangler publish
```

---

### Step 8: Setup the Telegram Webhook

This connects your Telegram bot to your Cloudflare Worker.

**Option A: Using Your Browser**
1. Open this URL in your browser:
   ```
   https://trackdown.your-subdomain.workers.dev/setup-webhook
   ```
2. You should see a success page with "✅ Webhook Set Up Successfully"

**Option B: Using curl (command line)**
```bash
curl https://trackdown.your-subdomain.workers.dev/setup-webhook
```

---

### Step 9: Test Your Bot

1. **Open Telegram** and find your bot (search for the username you created)
2. **Send `/start`** to your bot
3. Your bot should respond with a welcome message!

If you see the welcome message, **congratulations! Your bot is working! 🎉**

---

## 🚀 Quick Start Guide (After Setup)

Once your bot is set up, here's how to use it:

### Creating Your First Tracking Link

1. **Open your Telegram bot**
2. **Send the command**: `/create`
3. **Enter a destination URL** when prompted (e.g., `https://www.google.com`)
4. **Receive two tracking links**:
   - 🌐 **Cloudflare Page Link**: Mimics a Cloudflare security check
   - 🔍 **WebView Page Link**: Shows a security verification screen

### Example Workflow

```plaintext
You: /create  
Bot: 🌐 Enter Your URL  
You: https://example.com  
Bot:  
New links have been created successfully.
URL: https://example.com

✅Your Links

🌐 CloudFlare Page Link
https://trackdown.your-subdomain.workers.dev/c/xxx/yyyyy  

🌐 WebView Page Link
https://trackdown.your-subdomain.workers.dev/w/xxx/yyyyy
```

### How It Works

1. You share one of the tracking links with someone
2. When they click the link, the page will:
   - Show a loading/verification screen (looks like a real Cloudflare or security check)
   - Request browser permissions (location, camera - these are optional)
   - Collect device and browser information
   - Redirect them to your specified destination URL (e.g., example.com)
3. You receive the collected data in your Telegram bot as messages

### What Data Gets Collected

When someone visits your tracking link:

- ✅ **Basic Info**: IP address, browser type, operating system
- ✅ **Device Info**: Screen resolution, language, timezone
- ✅ **Network Info**: Connection type and speed (if available)
- ✅ **Battery Status**: Battery level and charging state (if available)
- ✅ **Media Devices**: Connected cameras and microphones
- ✅ **USB Devices**: Connected USB devices (if available)
- 📍 **Location**: Approximate location (only if user grants permission)
- 📸 **Camera Snapshot**: A photo (only if user grants permission)

**Note**: Location and camera data require the user to grant browser permissions. If denied, the rest of the data is still collected.

---

## 💬 Telegram Bot Commands

| Command    | Description                            |
|------------|----------------------------------------|
| `/start`   | Start bot and get basic instructions   |
| `/help`    | Show all commands and usage info       |
| `/create`  | Generate new tracking link             |

---

## 🧪 Understanding the Data You Receive

When someone clicks your tracking link, you'll receive messages in your Telegram bot like this:

### Message 1: Device Information
```
✅Victim Information 

⚓ IP: 192.168.1.1 (https://ip-api.com/#192.168.1.1) | Time: 2024-01-15 10:30:45

⏳ Date In Victim's Device : Mon Jan 15 2024 10:30:45 GMT-0500

📱 Device Information
userAgent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)...
platform: Win32
language: en-US
screenWidth: 1920
screenHeight: 1080
...

📷 Media Device Information
videoinput: HD Webcam
audioinput: Built-in Microphone

🕸️ Network Information
effectiveType: 4g
downlink: 10

🔌 Total USB devices connected: 0

🔋 Battery Information
🔋Battery Level: 75%
⚡ Is Battery Charging: false
```

### Message 2: Location (if granted)
- An interactive map pin showing the location
- Latitude, Longitude, and Accuracy information

### Message 3: Camera Snapshot (if granted)
- A photo taken from the user's webcam

---

## 🧩 Troubleshooting

### Common Issues and Solutions

#### 1. Webhook not working?

**Problem**: Bot doesn't respond to commands

**Solutions**:
- Check that your bot token in `wrangler.toml` is correct
- Verify your Worker URL is deployed and accessible
- Visit `/setup-webhook` again
- Check Cloudflare Workers dashboard for errors:
  ```bash
  wrangler tail
  ```

#### 2. No data received from tracking link?

**Problem**: Link opens but no data arrives in Telegram

**Solutions**:
- Ensure browser permission settings allow geolocation/camera (if you're testing those features)
- Use HTTPS links only (HTTP won't work for sensitive permissions)
- Check browser console for JavaScript errors (F12 → Console tab)
- Monitor Cloudflare Worker logs:
  ```bash
  wrangler tail
  ```

#### 3. Deployment fails?

**Problem**: `wrangler publish` returns an error

**Solutions**:
- Ensure you're logged in: `wrangler login`
- Check that your Cloudflare account is active
- Verify Node.js version: `node --version` (should be 16.13.0+)
- Try deploying with verbose logging: `wrangler publish --verbose`

#### 4. Bot shows "Invalid token" error?

**Problem**: Can't set up webhook or bot doesn't respond

**Solutions**:
- Double-check your bot token from BotFather
- Ensure there are no extra spaces in `wrangler.toml`
- Make sure the token is between quotes: `TELEGRAM_BOT_TOKEN = "your_token"`
- Create a new bot if token is compromised

#### 5. Can't install Wrangler?

**Problem**: `npm install -g wrangler` fails

**Solutions**:
- Update Node.js to version 16.13.0 or higher
- Try using sudo (on Linux/Mac): `sudo npm install -g wrangler`
- On Windows, run Command Prompt as Administrator
- Clear npm cache: `npm cache clean --force`

---

## 📋 Frequently Asked Questions (FAQ)

### Q1: Is this legal to use?
**A**: This tool is for educational and ethical security research only. You must:
- Only use it on systems/people you have explicit permission to test
- Comply with all applicable laws in your jurisdiction
- Never use it for malicious purposes or without consent

### Q2: Can I customize the tracking pages?
**A**: Yes! The templates are in `worker.js`:
- `cloudflareTemplate` - The Cloudflare-style page
- `webviewTemplate` - The WebView-style page

Edit these to customize the look and feel.

### Q3: How long do tracking links last?
**A**: Tracking links don't expire. They remain active as long as your Cloudflare Worker is deployed.

### Q4: Can I track multiple people with the same link?
**A**: Yes! The same link can be used multiple times. Each visit will send new data to your bot.

### Q5: Does the target know they're being tracked?
**A**: The pages request browser permissions (for location/camera), which users must approve. Basic device info is collected without explicit permission.

### Q6: What happens if I delete my Worker?
**A**: All tracking links will stop working, and no new data will be collected.

### Q7: Can I use a custom domain instead of workers.dev?
**A**: Yes! Cloudflare allows you to set up custom domains for Workers. See [Cloudflare documentation](https://developers.cloudflare.com/workers/platform/routing/custom-domains/) for details.

### Q8: Is there a limit to how many tracking links I can create?
**A**: No limit on the number of links. However, Cloudflare free tier has usage limits (100,000 requests/day).

### Q9: Can I see historical data?
**A**: Data is sent directly to your Telegram chat. Telegram stores all messages, so you can scroll back to see historical data.

### Q10: What if someone blocks JavaScript?
**A**: If JavaScript is disabled, the tracking won't work and the user won't be redirected.

---

## 🔐 Security and Privacy Best Practices

### For Developers:

1. **Protect Your Bot Token**
   - Never commit your actual bot token to Git
   - Use environment variables or secrets management
   - Rotate tokens periodically

2. **Secure Your Worker**
   - Keep `TELEGRAM_BOT_TOKEN` and `HOST_URL` in Wrangler secrets (not in code)
   - Monitor Worker logs for suspicious activity
   - Consider implementing rate limiting

3. **Data Handling**
   - Be transparent about what data you collect
   - Only collect necessary data
   - Follow data protection regulations (GDPR, CCPA, etc.)

### For Users:

1. **Ethical Use Only**
   - Only use for legitimate security research or education
   - Obtain explicit consent before tracking
   - Be transparent about data collection

2. **Keep Software Updated**
   - Regularly update your Worker deployment
   - Monitor for security advisories

---

## 📚 Additional Resources

### Learning Resources:
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Telegram Bot API Documentation](https://core.telegram.org/bots/api)
- [Wrangler CLI Guide](https://developers.cloudflare.com/workers/wrangler/)

### Useful Commands:

```bash
# View real-time logs
wrangler tail

# Delete your worker
wrangler delete

# List your workers
wrangler list

# Get worker details
wrangler status
```

---

## 🔄 Updating Your Worker

To update your Worker with code changes:

```bash
# Make your changes to worker.js or wrangler.toml

# Deploy the updates
wrangler publish

# Verify the changes
wrangler tail
```

---

## 🐛 Debugging Tips

1. **Enable verbose logging**:
   ```bash
   wrangler publish --verbose
   ```

2. **Watch real-time logs**:
   ```bash
   wrangler tail
   ```

3. **Test locally** (if supported):
   ```bash
   wrangler dev
   ```

4. **Check Worker status**:
   - Visit your Cloudflare dashboard
   - Go to Workers & Pages
   - Check for errors or warnings

---

## ⚠️ Legal Notice

This tool is developed **for educational and ethical cybersecurity purposes** only. You are **solely responsible** for how you use this software. Do **not** use it to violate privacy, hack individuals, or bypass user consent.

**Important Disclaimers**:
- This tool collects personal data and must be used in compliance with data protection laws
- Unauthorized tracking or surveillance may be illegal in your jurisdiction
- Always obtain proper consent before collecting data from individuals
- The developer is not responsible for misuse of this software

---

## 🧑‍💻 Author

**👨‍💻 Developed by:** [jbalagiya](https://github.com/jbalagiya)  

## ☕ Support

If you found this project helpful or interesting, consider supporting my work:

[![Buy Me a Coffee](https://img.shields.io/badge/-Buy%20Me%20a%20Coffee-orange?style=for-the-badge&logo=buy-me-a-coffee&logoColor=white)](https://buymeacoffee.com/jbalagiya)

---

## 📝 License

This project is licensed under the terms specified in the LICENSE file.

---

## 🌟 Star this project if you found it useful!

If this project helped you, please consider giving it a star ⭐ on GitHub!

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions or improvements:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📞 Support & Contact

- **Issues**: Report bugs or request features via [GitHub Issues](https://github.com/jbalagiya/TrackDown-V2/issues)
- **Discussions**: Join community discussions on GitHub
- **Email**: Contact through GitHub profile

---

**Happy Tracking! 📡**

Remember: Use responsibly and ethically! 🛡️
