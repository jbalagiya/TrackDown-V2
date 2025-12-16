# Contributing to TrackDown-V2

Thank you for your interest in contributing to TrackDown-V2! This document provides guidelines and instructions for contributing to this project.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Making Changes](#making-changes)
- [Submitting Changes](#submitting-changes)
- [Style Guidelines](#style-guidelines)
- [Testing](#testing)

---

## 🤝 Code of Conduct

By participating in this project, you agree to:
- Be respectful and inclusive
- Use welcoming and inclusive language
- Accept constructive criticism gracefully
- Focus on what's best for the community
- Show empathy towards other community members

---

## 🎯 How Can I Contribute?

### Reporting Bugs

If you find a bug, please create an issue with:
- A clear, descriptive title
- Detailed steps to reproduce the bug
- Expected behavior vs actual behavior
- Your environment (OS, Node.js version, Wrangler version)
- Screenshots if applicable
- Any error messages or logs

### Suggesting Enhancements

Have an idea? Create an issue with:
- A clear, descriptive title
- Detailed description of the enhancement
- Why this enhancement would be useful
- Examples of how it would work
- Any implementation ideas you have

### Pull Requests

We welcome pull requests for:
- Bug fixes
- Feature implementations
- Documentation improvements
- Performance optimizations
- Code quality improvements

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have:
- Node.js 16.13.0 or higher
- Git installed
- A GitHub account
- A Cloudflare account (for testing)
- A Telegram account (for testing)

### Fork and Clone

1. **Fork the repository** on GitHub
2. **Clone your fork**:
   ```bash
   git clone https://github.com/YOUR-USERNAME/TrackDown-V2.git
   cd TrackDown-V2
   ```

3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/jbalagiya/TrackDown-V2.git
   ```

---

## 🛠️ Development Setup

### 1. Install Dependencies

```bash
# Install Wrangler CLI globally
npm install -g wrangler

# Verify installation
wrangler --version
```

### 2. Configure Your Development Environment

Create a `wrangler.toml` file (if not exists) with your test credentials:

```toml
[vars]
TELEGRAM_BOT_TOKEN = "your_test_bot_token"
HOST_URL = "https://your-test-worker.workers.dev"
```

**Important**: Never commit real credentials to the repository!

### 3. Authenticate with Cloudflare

```bash
wrangler login
```

---

## 📝 Making Changes

### 1. Create a Branch

```bash
# Update your main branch
git checkout main
git pull upstream main

# Create a feature branch
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

### 2. Make Your Changes

- Keep changes focused and atomic
- Write clear, self-documenting code
- Add comments for complex logic
- Follow existing code style
- Update documentation as needed

### 3. Test Your Changes

```bash
# Deploy to your test Worker
wrangler deploy
# Or use 'wrangler publish' for older Wrangler versions

# Test the endpoints
curl https://your-test-worker.workers.dev/

# Test webhook setup
curl https://your-test-worker.workers.dev/setup-webhook

# Test with your Telegram bot
# Send /start, /help, /create commands
```

---

## 🔄 Submitting Changes

### 1. Commit Your Changes

```bash
# Stage your changes
git add .

# Commit with a descriptive message
git commit -m "feat: Add new feature description"
# or
git commit -m "fix: Fix bug description"
# or
git commit -m "docs: Update documentation"
```

### Commit Message Guidelines

Use conventional commits format:
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Examples:
```
feat: Add support for custom redirect delays
fix: Resolve webhook setup timeout issue
docs: Update installation instructions
refactor: Improve template rendering performance
```

### 2. Push Your Changes

```bash
git push origin feature/your-feature-name
```

### 3. Create a Pull Request

1. Go to your fork on GitHub
2. Click "Pull Request" button
3. Select your branch
4. Fill in the PR template with:
   - Description of changes
   - Related issue number (if any)
   - Testing done
   - Screenshots (if UI changes)
5. Submit the pull request

### 4. PR Review Process

- Maintainers will review your PR
- Address any requested changes
- Keep the PR up to date with main branch
- Once approved, your PR will be merged

---

## 🎨 Style Guidelines

### JavaScript Code Style

- Use ES6+ features
- Use `const` and `let`, avoid `var`
- Use arrow functions where appropriate
- Keep functions small and focused
- Use descriptive variable names
- Add JSDoc comments for functions

Example:
```javascript
/**
 * Send a message to Telegram
 * @param {number|string} chatId - The Telegram chat ID (can be very large, consider using string)
 * @param {string} text - The message text
 * @param {object} options - Optional parameters
 * @returns {Promise<object>} - The API response
 */
async function sendTelegramMessage(chatId, text, options = {}) {
  // Implementation
}
```

### Documentation Style

- Use clear, concise language
- Include code examples
- Add screenshots where helpful
- Keep line length reasonable (80-100 chars)
- Use proper markdown formatting

---

## 🧪 Testing

### Manual Testing Checklist

Before submitting a PR, test:

- [ ] Worker deploys successfully
- [ ] Webhook setup works
- [ ] Bot responds to `/start` command
- [ ] Bot responds to `/help` command
- [ ] Bot responds to `/create` command
- [ ] Cloudflare template loads correctly
- [ ] WebView template loads correctly
- [ ] Data collection works
- [ ] Telegram notifications are received
- [ ] Camera snapshot works (with permission)
- [ ] Location tracking works (with permission)
- [ ] Error handling works correctly

### Testing Locations

Test your changes on:
- Desktop browsers (Chrome, Firefox, Safari)
- Mobile browsers (iOS Safari, Android Chrome)
- Different network conditions
- With permissions granted and denied

---

## 🐛 Debugging

### View Worker Logs

```bash
wrangler tail
```

### Common Issues

**Issue**: Changes not reflecting after deployment
```bash
# Solution: Force refresh and clear cache
# Redeploy with verbose output
wrangler deploy --verbose
# Or use 'wrangler publish --verbose' for older Wrangler versions
```

**Issue**: Webhook not receiving updates
```bash
# Solution: Re-setup webhook
curl https://your-worker.workers.dev/setup-webhook
```

---

## 📚 Additional Resources

- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Telegram Bot API](https://core.telegram.org/bots/api)
- [Wrangler CLI Docs](https://developers.cloudflare.com/workers/wrangler/)
- [Git Workflow Guide](https://guides.github.com/introduction/flow/)

---

## ❓ Questions?

If you have questions:
1. Check existing issues and discussions
2. Read the main README.md
3. Create a new issue with the "question" label

---

## 🙏 Thank You!

Your contributions make this project better for everyone. We appreciate your time and effort!

---

## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the project.
