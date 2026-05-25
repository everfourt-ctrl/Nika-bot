// Module
const fs = require('fs')

//Bot Settings
global.connect = true // True For Pairing // False For Qr
global.publicX = true // True For Public // False For Self
global.owner = ['6283892852523'] //Own Number
global.developer = "AkbarzHost" //Dev Name
global.botname = "?????-????" //Bot Name
global.version = "1.0.0" //Version Bot

//Sticker Setiings
global.packname = "Sticker By" //Pack Name 
global.author = "AkbarzHost" // Author

//Social Media Settings
global.ytube = "https://youtube.com/@barzhost"
global.ttok = ""
global.igram = "https://instagram.com/@kangokep"
global.chtele = ""
global.tgram = "https://t.me/Yamaguchihost"

//Bug Name Settings
global.bak = {
Ios: " 𝐑̸̲͟𝐚𝐩̅𝐢̶̶̅͟𝐩̶̋𝐩̶𝐩̶̋𝐌𝐨̤͋𝐝̈́𝐬̽͢𝐬�? ",
Andro: "𝐑̸̲͟𝐚𝐩̅𝐢̶̶̅͟𝐩̶̋𝐩̶𝐩̶̋𝐌𝐨̤͋𝐝̈́𝐬̽͢𝐬�?", 
Crash: " ̶𝐑̸̲͟𝐚𝐩̅𝐢̶̶̅͟𝐩̶̋𝐩̶𝐩̶̋𝐌𝐨̤͋𝐝̈́𝐬̽͢𝐬�? ̶",
Freeze: "𝐑̸̲͟𝐚𝐩̅𝐢̶̶̅͟𝐩̶̋𝐩̶𝐩̶̋𝐌𝐨̤͋𝐝̈́𝐬̽͢𝐬�?",
Ui: "𝐑̸̲͟𝐚𝐩̅𝐢̶̶̅͟𝐩̶̋𝐩̶𝐩̶̋𝐌𝐨̤͋𝐝̈́𝐬̽͢𝐬�?"
}

//System Bot Settings
global.prefa = ['','!','.',',','🐤','🗿'] // Prefix // Not Change

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})