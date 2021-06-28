let handler = async (m, { conn }) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastclaim > 86400000) {
    conn.reply(m.chat, 'Nih Gw Kasih Modal Buat Jadi Bot 100.000 Rupiah', m)  
    global.DATABASE._data.users[m.sender].exp += 209402849274928489284829749274927428749274828749274927482848927482748274737828473
    global.DATABASE._data.users[m.sender].lastclaim = new Date * 1
  } else conn.reply(m.chat, 'Usaha Ngab Kalo Mau Dapat Uang Tambahan:v', m)
}
handler.help = ['bonus', 'hadiah']
handler.tags = ['premium']
handler.command = /^(bonus|hadiah)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

