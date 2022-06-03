let handler = async m => m.reply(`
╭═════════════════
║   GROUP WHATSAPP
║https://chat.whatsapp.com/BYcW7rue6fA8gNdyLPedDe
╰══════════════════

`.trim()) 
handler.help = ['gcbot']
handler.tags = ['main']
handler.command = /^(gcbot)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
