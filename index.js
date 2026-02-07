const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'Nii111.aternos.me',
  port: 34596,
  username: 'local',
  version: '1.21.3'
})

let attacking = false

bot.on('spawn', () => {
  console.log('AFK guard bot spawned')

  // Light head movement (anti-AFK, safe)
  setInterval(() => {
    bot.look(Math.random() * Math.PI * 2, 0, true)
  }, 40000)

  combatLoop()
})

function combatLoop () {
  setInterval(() => {
    if (attacking) return

    const target = bot.nearestEntity(e =>
      e.type === 'player' &&
      e.username !== bot.username &&
      bot.entity.position.distanceTo(e.position) <= 5
    )

    if (target) engage(target)
  }, 1000)
}

async function engage (target) {
  attacking = true
  console.log(`Target detected: ${target.username}`)

  while (
    target.isValid &&
    bot.entity.position.distanceTo(target.position) <= 5
  ) {
    const dist = bot.entity.position.distanceTo(target.position)

    // Look at target (no movement)
    bot.lookAt(target.position.offset(0, 1.6, 0), true)

    // Only attack if actually reachable
    if (dist <= 3.2) {
      bot.attack(target)
      await sleep(700 + Math.random() * 500)
    } else {
      await sleep(300)
    }
  }

  console.log('Target gone or dead')
  attacking = false
}

function sleep (ms) {
  return new Promise(res => setTimeout(res, ms))
}

bot.on('kicked', reason => {
  console.log('KICKED:', reason)
})

bot.on('error', err => {
  console.log('ERROR:', err)
})

bot.on('end', () => {
  console.log('Disconnected, reconnecting in 15s...')
  setTimeout(() => process.exit(1), 15000)
})
