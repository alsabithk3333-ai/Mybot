// ==================== WEB SERVER (RENDER / UPTIME) ====================
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('AFK Bot standing on scaffolding')
})

app.listen(PORT, () => {
  console.log(`Web server listening on port ${PORT}`)
})

// ==================== MINEFLAYER BOT ====================
const mineflayer = require('mineflayer')

console.log('Starting AFK bot (scaffolding-safe)...')

function startBot () {
  const bot = mineflayer.createBot({
    host: 'Nii111.aternos.me',
    port: 34596,
    username: 'sleeper',
    version: '1.21.3'
  })

  let lookInterval = null
  let armInterval = null

  bot.on('login', () => {
    console.log('Bot logged in')
  })

  bot.on('spawn', () => {
    console.log('Bot spawned / respawned on scaffolding')

    // -------- FORCE ALL MOVEMENT OFF (CRITICAL) --------
    bot.setControlState('forward', false)
    bot.setControlState('back', false)
    bot.setControlState('left', false)
    bot.setControlState('right', false)
    bot.setControlState('jump', false)
    bot.setControlState('sneak', false)
    bot.setControlState('sprint', false)

    // -------- SAFE CAMERA ANTI-AFK --------
    clearInterval(lookInterval)
    lookInterval = setInterval(() => {
      const yaw = bot.entity.yaw + (Math.random() * 0.15 - 0.075)
      const pitch = Math.random() * 0.06 - 0.03
      bot.look(yaw, pitch, true)
    }, 35000) // slow & safe

    // -------- VERY RARE ARM SWING --------
    clearInterval(armInterval)
    armInterval = setInterval(() => {
      try {
        bot.swingArm('right')
      } catch {}
    }, 300000) // once every 5 minutes
  })

  bot.on('death', () => {
    console.log('Bot died')
  })

  bot.on('kicked', (reason) => {
    console.log('KICKED:', reason)
  })

  bot.on('end', () => {
    console.log('Disconnected. Reconnecting in 20 seconds...')
    clearInterval(lookInterval)
    clearInterval(armInterval)
    setTimeout(startBot, 20000)
  })

  bot.on('error', (err) => {
    console.log('ERROR:', err.message || err)
  })
}

startBot()
