const mineflayer = require('mineflayer')
const express = require('express')

function startBot () {
  const bot = mineflayer.createBot({
    host: 'Nii111.aternos.me',
    port: 34596,
    username: 'AFK_Bot',
    version: '1.21.3'
  })

  bot.on('spawn', () => {
    console.log('AFK bot spawned on 1.21.3 (no movement, no sneak)')

    // Anti-AFK: camera rotation ONLY (safe for scaffolding)
    setInterval(() => {
      const yaw = Math.random() * Math.PI * 2
      const pitch = (Math.random() * 0.2) - 0.1
      bot.look(yaw, pitch, true)
    }, 20000)
  })

  bot.on('kicked', (reason) => {
    console.log('KICKED:', reason)
  })

  bot.on('end', () => {
    console.log('Disconnected, reconnecting...')
    setTimeout(startBot, 5000)
  })

  bot.on('error', console.log)
}

startBot()

/* ===============================
   UPTIME SERVER
   =============================== */
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('AFK bot is running')
})

app.listen(PORT, () => {
  console.log(`Uptime server running on port ${PORT}`)
})
