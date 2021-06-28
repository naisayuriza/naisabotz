let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

handler.before = function (m, { user, text }) {

  if (m.isBaileys && m.fromMe) return
  let chat = global.DATABASE.data.chats[m.chat]
  let name = this.getName(m.sender)
  let isLink = linkRegex.exec(m.text)

 if (chat.antiLink && isLink) {
 m.reply(`*「 ANTILINK DETECTED 」*\n\nTerdeteksi *${name}* telah mengirim link group!\n\nMaaf Kamu akan dikick dari grup ini!`)
 if (isAdmin || !isBotAdmin) return true
  this.groupRemove(m.chat, [m.sender])
  } else return false
}
handler.owner = false
handler.group = true
handler.chat = false
handler.register = true

module.exports = handler