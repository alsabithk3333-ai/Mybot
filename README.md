# 🎮 Advanced Minecraft Server Status Bot

<div align="center">
  <img src="https://github.com/BLKOFFICIAL.png" alt="Team BLK Logo" width="200"/>
  <br>
  <p>
    <a href="https://www.youtube.com/@team_blk_official"><img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube"></a>
    <a href="https://github.com/BLKOFFICIAL"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"></a>
    <a href="https://discord.com"><img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord"></a>
  </p>
</div>

## 📝 Description

A powerful and feature-rich Discord bot that provides real-time Minecraft server status monitoring with beautiful embed messages, player count charts, and customizable displays.

### 🌟 Features

- **Real-time Monitoring**
  - 🔄 Live server status updates
  - 📊 Player count tracking
  - ⏱️ Configurable update intervals
  - 📡 Server latency monitoring

- **Advanced Display Options**
  - 📈 Hourly player count charts (24-hour history)
  - 🖼️ Custom server banners
  - 🎨 Beautiful embed messages
  - ⚡ Discord timestamp integration

- **Customization**
  - 🎯 Multiple server support
  - 🎨 Custom colors and themes
  - ⚙️ Flexible configuration
  - 🔧 Adjustable update intervals

## 📸 Preview

<div align="center">
  <img src="https://i.imgur.com/example1.png" alt="Bot Preview" width="600"/>
  <br>
  <i>Status display with player count chart</i>
</div>

## 🚀 Installation

### Prerequisites

- [Node.js](https://nodejs.org/) v16.9.0 or higher
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A Discord Bot Token ([How to get one](https://discord.com/developers/applications))

### Setup

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/minecraft-status-bot.git
   cd minecraft-status-bot
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Configure the bot
   - Rename `config.example.json` to `config.json`
   - Add your bot token
   - Configure your Minecraft servers
   ```json
   {
     "bot": {
       "token": "YOUR_BOT_TOKEN"
     },
     "minecraft": {
       "servers": [
         {
           "name": "My Server",
           "ip": "play.example.com",
           "channelId": "YOUR_CHANNEL_ID"
         }
       ]
     }
   }
   ```

4. Start the bot
   ```bash
   npm start
   ```

## 🌐 Hosting

### 🏠 Self-Hosting
- Recommended for personal use
- Full control over the bot
- Can run on your own machine or VPS

#### Recommended Hosting Providers
- [DigitalOcean](https://www.digitalocean.com/)
- [Heroku](https://www.heroku.com/)
- [Railway](https://railway.app/)

### 📦 Requirements
- 512MB RAM minimum
- Basic Linux knowledge
- Stable internet connection

### 🔧 PM2 Installation (Recommended)
```bash
npm install -g pm2
pm2 start index.js --name minecraft-status
pm2 startup
```

## 📜 License

### Proprietary License

**Copyright © 2024 Team BLK**

This software is proprietary and confidential. The source code is provided with the following restrictions:

#### Permitted Uses
- ✅ Use the bot for personal or commercial purposes
- ✅ Host the bot on any platform
- ✅ Modify the code for personal use

#### Prohibited Uses
- ❌ Distribute the source code
- ❌ Share modified versions
- ❌ Remove or modify credits and attributions
- ❌ Claim ownership of the code

### Credits
This bot must maintain the following credits in the code:
```js
/**
 * Minecraft Server Status Bot
 * Created by Team BLK
 * 
 * YouTube: https://www.youtube.com/@team_blk_official
 * Discord: adithyadev.blk
 * GitHub: https://github.com/BLKOFFICIAL
 */
```

## 👥 Support & Community

- 📺 YouTube: [@team_blk_official](https://www.youtube.com/@team_blk_official)
- 💬 Discord: adithyadev.blk
- 🐙 GitHub: [@BLKOFFICIAL](https://github.com/BLKOFFICIAL)

## 🤝 Contributing

While this is a proprietary project, we welcome:
- 🐛 Bug reports
- 💡 Feature suggestions
- 🔧 Performance improvement ideas

## ⭐ Show Your Support

If you find this bot helpful, please consider:
- Subscribing to our [YouTube Channel](https://www.youtube.com/@team_blk_official)
- Following us on [GitHub](https://github.com/BLKOFFICIAL)
- Giving this project a star ⭐

---

<div align="center">
  <p>Made with ❤️ by Team BLK</p>
  <p>
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
    <img src="https://img.shields.io/badge/Discord.js-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord.js">
  </p>
</div> 