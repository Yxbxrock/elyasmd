const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m, {conn}) => {
const vcard = `BEGIN:VCARD
VERSION:3.0
N:Sy;Bot;;;
FN: Frmndaa
item.ORG: frmndaa
item1.TEL;waid=6282365089294:6282365089294@s.whatsapp.net
item1.X-ABLabel:No Wa gw
item2.EMAIL;type=INTERNET:firmanman117@gmail.com
item2.X-ABLabel:Email
item3.ADR:;;🇮🇩INDONESIA;;;;
item3.X-ABADR:ac
item3.X-ABLabel:📍 LOCATION
item4.EMAIL;type=INTERNET:Seseorang Akan Selalu Terlihat Buruk di Mata Pembenci!
item4.X-ABLabel:somebody 👤
item5.URL:https://instagram.com/yxbxrock
item5.X-ABLabel:Website
END:VCARD`
const sentMsg  = await conn.sendMessage(
    m.chat,
    { 
        contacts: { 
            displayName: 'Frmndaa', 
            contacts: [{ vcard }] 
        }
    }
)
await conn.reply(m.chat, "itu Nomor Owner ku", sentMsg)}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
