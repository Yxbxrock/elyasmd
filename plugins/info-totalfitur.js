let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
m.reply(conn.sendBut(m.chat, `╭━━━〔karyl-bot〕━━━⬣ 
┃𓃠 *Version*
┃➺3.5.4
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *total fitur*
┃➺ ${totalf}
┃ *Total features currently*
┃➺ ${totalf}
╰━━━━━━━━━━━━━━━━━━━━━⬣`, gt , `Menu`, '.menu',  m))
}

handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = /^(totalfitur|totalfeature|featuretotal|ctrtotal|totalcaracteristicas|caracteristicastotal|totalctrtc|totalcttc|totalctrt|totalctrs|totalctr)$/i
handler.exp = 5
module.exports = handler
