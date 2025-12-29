const mineflayer = require('mineflayer')
const express = require('express')

/* ===============================
   MINECRAFT AFK BOT (NO CHAT)
   =============================== */
function startBot () {
  const bot = mineflayer.createBot({
    host: 'in7.terohost.in',
    port: 26767,
    username: 'AFK_Bot',
    version: '1.21'
  })

  bot.on('spawn', () => {
    console.log('AFK bot spawned at farm')

    // Very small movement to avoid AFK kick
    setInterval(() => {
      bot.setControlState('forward', true)
      setTimeout(() => {
        bot.setControlState('forward', false)
      }, 200)
    }, 45000)
  })

  bot.on('kicked', (reason) => {
    console.log('KICKED:', reason)
  })

  bot.on('end', () => {
    console.log('Bot disconnected, reconnecting...')
    setTimeout(startBot, 5000)
  })

  bot.on('error', console.log)
}

startBot()

/* ===============================
   UPTIME HTTP SERVER
   =============================== */
const app = express()
const PORT = process.env.PORT || 3000

// Serve uptime HTML
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/uptimer.html')
})

// Health endpoint (optional)
app.get('/health', (req, res) => {
  res.json({ status: 'online' })
})

app.listen(PORT, () => {
  console.log(`Uptime server running on port ${PORT}`)
})
