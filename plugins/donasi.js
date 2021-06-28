let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Axis [083830172470]
│ • Wifi [gk usah gua mampu:v]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay, OVO, Dana [-]
│ • https://saweria.co/rhishna
╰────

Mau Donasi Seberapa Total Yg Mau Lu Donasi:)

Donasi Dapat Premium 7 Hari/7 Days.

`.trim()) // Tambah sendiri kalo mau
handler.help = ['premium']
handler.tags = ['info']
handler.command = /^premium$/i

module.exports = handler
