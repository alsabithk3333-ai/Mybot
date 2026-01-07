// ==================== WEB SERVER (RENDER REQUIRED) ====================
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('AFK Bot is running')
})

app.listen(PORT, () => {
  console.log(`Web server listening on port ${PORT}`)
})

// ==================== MINEFLAYER AFK BOT ====================
const mineflayer = require('mineflayer')

console.log('Starting AFK bot...')

function startBot () {
  const bot = mineflayer.createBot({
    host: 'Nii111.aternos.me',
    port: 34596,
    username: 'neelakuyil',
    version: '1.21.3'
  })

  let lookInterval = null
  let armInterval = null

  bot.on('login', () => {
    console.log('Bot logged in to Aternos server')
  })

  bot.on('spawn', () => {
    console.log('Bot spawned / respawned (AFK mode)')

    // -------- SAFE CAMERA MOVEMENT --------
    if (lookInterval) clearInterval(lookInterval)
    lookInterval = setInterval(() => {
      const yaw = bot.entity.yaw + (Math.random() * 0.2 - 0.1)
      const pitch = Math.random() * 0.08 - 0.04
      bot.look(yaw, pitch, true)
    }, 30000) // every 30 seconds (very safe)

    // -------- RARE HUMAN ACTION --------
    if (armInterval) clearInterval(armInterval)
    armInterval = setInterval(() => {
      try {
        bot.swingArm('right')
      } catch {}
    }, 240000) // once every 4 minutes
  })

  bot.on('death', () => {
    console.log('Bot died')
  })

  bot.on('kicked', (reason) => {
    console.log('KICKED:', reason)
  })

  bot.on('end', () => {
    console.log('Disconnected. Reconnecting in 15 seconds...')
    clearInterval(lookInterval)
    clearInterval(armInterval)
    setTimeout(startBot, 15000)
  })

  bot.on('error', (err) => {
    console.log('ERROR:', err.message || err)
  })
}

startBot()
