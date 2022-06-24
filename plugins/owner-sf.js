let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `uhm.. teksnya mana?\n\npenggunaan:\n${usedPrefix + command} <teks>\n\ncontoh:\n${usedPrefix + command} plugins/hyzer.js`
    if (!m.quoted.text) throw `balas pesan nya!`
    let path = `${text}`
    await require('fs').writeFileSync(path, m.quoted.text)
    m.reply(`Tersimpan di ${path}\nCek hasil: ${usedPrefix}fs ${path}`)
}
handler.help = ['sf'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^sf$/i

handler.rowner = false
handler.mods = true

module.exports = handler
