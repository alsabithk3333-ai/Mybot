const mineflayer = require('mineflayer')

function startBot () {
  console.log('Starting AFK bot...')

  const bot = mineflayer.createBot({
    host: 'Nii111.aternos.me',
    port: 34596, // change if needed
    username: 'keralakk',
    version: '1.21.3'
  })

  let movementInterval = null
  let jumpInterval = null

  function startMovementLoop () {
    console.log('Starting movement loop')

    // RUN forward continuously
    bot.setControlState('forward', true)

    // RANDOM JUMP LOOP
    jumpInterval = setInterval(() => {
      bot.setControlState('jump', true)
      setTimeout(() => bot.setControlState('jump', false), 300)
    }, Math.floor(Math.random() * 2000) + 1500) // every 1.5–3.5 sec
  }

  function stopMovementLoop () {
    bot.setControlState('forward', false)
    bot.setControlState('jump', false)

    if (jumpInterval) clearInterval(jumpInterval)
    jumpInterval = null
  }

  bot.on('spawn', () => {
    console.log('Bot spawned (or respawned)')
    stopMovementLoop()     // safety
    startMovementLoop()    // ALWAYS restart on spawn
  })

  bot.on('death', () => {
    console.log('Bot died')
    stopMovementLoop()
  })

  bot.on('kicked', (reason) => {
    console.log('KICKED:', reason)
  })

  bot.on('end', () => {
    console.log('Disconnected. Reconnecting...')
    stopMovementLoop()
    setTimeout(startBot, 5000)
  })

  bot.on('error', (err) => {
    console.log('ERROR:', err.message || err)
  })
}

startBot()
