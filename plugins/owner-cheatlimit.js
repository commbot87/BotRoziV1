let fetch = require('node-fetch')
let handler = async (m, { text }) => {
m.reply('=> global.DATABASE.data.users[m.quoted.sender].limit = 100')

}
handler.help = ['cheatlimit']
handler.tags = ['host']
handler.command = /^cheatlimit$/i
handler.owner = false
handler.mods = true

module.exports = handler
