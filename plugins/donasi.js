let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [085756507257]
│ • Telkomsel [No Telkom]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay, OVO, Dana [085756507257]
│ • https://saweria.co/Lupa
╰────

Mau Donasi Seberapa Total Yg Mau Lu Donasi:)

Donasi Dapat Premium 7 Hari/7 Days.

`.trim()) // Tambah sendiri kalo mau
handler.help = ['premium']
handler.tags = ['info']
handler.command = /^premium$/i

module.exports = handler
