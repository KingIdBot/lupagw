//*kasi NAMA KU LAH ASU
//*PEMILIHAN AJG
//*Xptn FADILAH PUNYA APA KAU
//*ANAK ANJING


const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const {
	listzodiak,
	aries,
	taurus,
	gemini,
	cancer,
	Leo,
	Virgo,
	Libra,
	Scorpio,
	Sagittarius,
	Capricorn,
	Aquarius,
	Pisces
} = require('./src/listzodiak')
const { color, bgcolor } = require('./lib/color')
const { help } = require('./src/help')
const { modapk } = require('./src/modapk')
const { bahasa } = require('./src/bahasa')
const { listmenu } = require('./src/listmenu')
const { vipmenu } = require('./src/vipmenu')
const { wibu } = require('./src/wibu')
const { snk } = require('./src/snk')
const { adminmenu } = require('./src/adminmenu')
const { toxic } = require('./src/toxic')
const { animesaran } = require('./src/animesaran')
const { tnc } = require('./src/tnc')
const { kodenuklir2 } = require('./src/kodenuklir2')
const { ownercommand } = require('./src/ownercommand')
const { rules } = require('./src/rules')
const { nekopoi } = require('./src/nekopoi')
const { ownermenu } = require('./src/ownermenu')
const { addfoto } = require('./src/addfoto')
const { nsfwmenu } = require('./src/nsfwmenu')
const { kerangmenu } = require('./src/kerangmenu')
const { listsurah } = require('./src/listsurah')
const { addsay } = require('./src/addsay')
const { listsay } = require('./src/listsay')
const { cekvip } = require('./src/cekvip')
const { daftarvip } = require('./src/daftarvip')
const { iklan } = require('./src/iklan')
const { daftatvip } = require('./src/daftarvip')
const { funmenu } = require('./src/funmenu')
const { mediamenu } = require('./src/mediamenu')
const { othermenu } = require('./src/othermenu')
const { animemenu } = require('./src/animemenu')
const { kodenuklir } = require('./src/kodenuklir')
const { makermenu } = require('./src/makermenu')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const imageToBase64 = require('image-to-base64')
const fs = require('fs')
const crypto = require('crypto')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const kagApi = require('@kagchi/kag-api')
const fetch = require('node-fetch')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper');
const lolis = require('lolis.life')
const loli = new lolis()
const ffmpeg = require('fluent-ffmpeg')
const isNumber = require('is-number');
const { removeBackgroundFromImageFile } = require('remove.bg')
const imgbb = require('imgbb-uploader')
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const public = JSON.parse(fs.readFileSync('./src/public.json'))
const prem = JSON.parse(fs.readFileSync('./src/prem.json'))
const anime = JSON.parse(fs.readFileSync('./src/anime.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const adminbotnumber = JSON.parse(fs.readFileSync('./src/admin.json'))
const sayrandom = JSON.parse(fs.readFileSync('./src/say.json'))
const bacotrandom = JSON.parse(fs.readFileSync('./src/bacot.json'))
const premium = JSON.parse(fs.readFileSync('./src/vip.json'))
const anlink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const user = JSON.parse(fs.readFileSync('./src/user.json'))
const { ind } = require('./language')
ban = []
prefix = '/'
limitawal = '5'
memberlimit = 3
cr = '*MR KING BOT*'
vz = '*Terima Kasih Sudah Daftar Di MR KING BOT*'
const vcard = 'BEGIN:VCARD\n' // ANAK ANJING MAU NGAPAIN?
            + 'VERSION:3.0\n' // NGAPAIN LAGI KALO GA MAU NUMPANG NAMA DOANG XIXIXIXI
            + 'FN:MRKING\n' // MENDING LU TOBAT SU!
            + 'ORG:Creator MRKING;\n' // KASIH CREDITS GUA SU!!!
            + 'TEL;type=CELL;type=VOICE;waid=6289655478810:+62 896-5547-8810\n' // JANGAN KEK BABI SU
            + 'END:VCARD'
blocked = []

/*********** LOAD FILE ***********/
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const _dolaran = JSON.parse(fs.readFileSync('./database/group/dolaran.json'))
const _dolar = JSON.parse(fs.readFileSync('./database/user/dolar.json'))
const limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
/*********** END LOAD ***********/

/********** FUNCTION ***************/
const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
            }
        }

        const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
        const getDolarExp = (userId) => {
            let position = false
            Object.keys(_dolar).forEach((i) => {
                if (_dolar[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _dolar[position].xp
            }
        }

        const getDolaranLevel = (userId) => {
            let position = false
            Object.keys(_dolar).forEach((i) => {
                if (_dolar[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _dolar[position].dolar
            }
        }

        const getDolaranId = (userId) => {
            let position = false
            Object.keys(_dolar).forEach((i) => {
                if (_dolar[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _dolar[position].jid
            }
        }

        const addDolaranXp = (userId, amount) => {
            let position = false
            Object.keys(_dolar).forEach((i) => {
                if (_dolar[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _dolar[position].xp += amount
                fs.writeFileSync('./database/user/dolar.json', JSON.stringify(_dolar))
            }
        }

        const addDolaranLevel = (userId, amount) => {
            let position = false
            Object.keys(_dolar).forEach((i) => {
                if (_dolar[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _dolar[position].dolar += amount
                fs.writeFileSync('./database/user/dolar.json', JSON.stringify(_dolar))
            }
        }

        const addDolaranId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _dolar.push(obj)
            fs.writeFileSync('./database/user/dolar.json', JSON.stringify(_dolar))
        }
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(limit).forEach((i) => {
                if (limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(limit))
            }
        }
       
                 const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
         	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        
       


function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

async function starts() {
	const client = new WAConnection()
	client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})
	client.on('credentials-updated', () => {
		fs.writeFileSync('./BarBar.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'Login Info Updated')
	})
	fs.existsSync('./BarBar.json') && client.loadAuthInfo('./BarBar.json')
	client.on('connecting', () => {
		start('2', 'Connecting...')
	})
	client.on('open', () => {
		success('2', 'Connected')
	})
	await client.connect({timeoutMs: 30*1000})

	client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg'
				}
				teks = `[ NEW MEMBER IN GROUP _*${mdata.subject}*_ ] \n*_____________*\n@${num.split('@')[0]}\nɪɴᴛʀᴏ/ᴅɪᴋɪᴄᴋ! \nNama: \nUmur: \nAskot:\nBaca Deks ajg \n *_____________*\nMoga betah Di group!`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg'
				}
				teks = `Semoga Tenang Di Alam Sana @${num.split('@')[0]}👋`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	client.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = 'Your_Apikey'
            const apikey = 'Your_Apikey'
            const vhtear = 'Your_Apikey'
            const iki = '@s.whatsapp.net'
			const insom = from.endsWith('@g.us')
			const botFebb = insom ? mek.participant : mek.key.remoteJid
			const pushname2 = client.contacts[botFebb] != undefined ? client.contacts[botFebb].vname || client.contacts[botFebb].notify : undefined
			const insum = from.endsWith('@g.us')
			const xptn = insum ? mek.participant : mek.key.remoteJid
			pushname = client.contacts[xptn] != undefined ? client.contacts[xptn].vname || client.contacts[xptn].notify : undefined
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const speed = require('performance-now')
			const date = new Date().toLocaleDateString()
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
			const timo = moment.tz('Asia/Jakarta').add(13, 'days').calendar();
			const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const taukah = mek.message.conversation

			mess = {
				wait: '[❗]  Sedang di Prosess....',
				asik: '[❗]  Sedang di Prosess....',
				levelon: '❬ 👍 ❭ *enable leveling*',
				leveloff: ' ❬ 👎 ❭  *disable leveling*',
				levelnoton: '❬ 👎 ❭ *leveling not aktif*',
				levelnol: '*LEVEL KAMU MASIH 0 BERLUM BISA MEMBUKA FITUR HARAP HUBUNGI OWNER*',
				success: '✔️ Berhasil ✔️',
				error: {
					stick: ' Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker ',
					Iv: ' [❗] Link yang anda kirim tidak valid!'
				},
				only: {
					group: '[❗] Perintah ini hanya bisa di gunakan dalam group! ❌',
					public: '[❗] Jika Ingin Menggunakan Bot Harap Masuk Ke Dalam Grup Xptn, ketik /Xptngroup!\nJika Ingin Sewa Bot atau Bikin Bot Harap Ketik */iklan*! ',
					premium: '[❗] PERINTAH INI KHUSUS USER *PREMIUM*',
					benned: 'Lu keban ngentod makanya jangan ngegay mulu🗿🤌🏻',
					ownerG: '[❗] Perintah ini hanya bisa di gunakan oleh owner group! ❌',
					ownerB: '[❗] Perintah ini hanya bisa di gunakan oleh owner bot! ❌',
					userB: `*Upss Kamu Belum Terdaftar Didatabase BOT Xptn*\n──「 DAFTAR 」──\nHalo kak !\nKamu belum Terdaftar didalam database, \n\nCommand : ${prefix}daftar nama|umur\nContoh : ${prefix}daftar ${pushname2}|17|kelamin\n\n──「 XPTN BOT 」──`,
					admin: '[❗] Perintah ini hanya bisa di gunakan oleh admin group! ❌',
					Badmin: ' [❗] Perintah ini hanya bisa di gunakan ketika bot menjadi admin! ❌',
				}
			}
const koin = ['http://bit.ly/Koin1','http://bit.ly/Koin5','https://i.ibb.co/q7kdBjm/be27e6f849da.jpg','https://i.ibb.co/BCxNPD5/a42ef753a321.jpg']
			const botNumber = client.user.jid
			const ownerNumber = ["6289655478810@s.whatsapp.net"] // replace this with your number
			const adminbotnumber = ["6289655478810@s.whatsapp.net"]
			const frendsowner = ["6289655478810@s.whatsapp.net"]
			const vip = ["6289655478810@s.whatsapp.net","6285807107404@s.whatsapp.net","6289655478810@s.whatsapp.net","62895801181650@s.whatsapp.net","6282198571732@s.whatsapp.net"]
			const q = args.join(' ')
			const tescuk = ["0@s.whatsapp.net"]
			const tescuy = '6282265118646@s.whatsapp.net'
			const isGroup = from.endsWith('@g.us')
			const totalchat = await client.chats.all()
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isRegistered = checkRegisteredUser(sender)
			const isLevelingOn = isGroup ? _leveling.includes(groupId) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const groupOwner = isGroup ? groupMetadata.owner : ''
			const ispublic = isGroup ? public.includes(from) : false
			const isAnime = isGroup ? anime.includes(from) : false
			const isAntilink = isGroup ? anlink.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const levelRole = getLevelingLevel(sender)
        var role = 'Copper V'
        if (levelRole <= 3) {
            role = 'Copper IV'
        } else if (levelRole <= 5) {
            role = 'Copper III'
        } else if (levelRole <= 7) {
            role = 'Copper II'
        } else if (levelRole <= 9) {
            role = 'Copper I'
        } else if (levelRole <= 10) {
            role = 'Silver V'
        } else if (levelRole <= 11) {
            role = 'Silver IV'
        } else if (levelRole <= 12) {
            role = 'Silver III'
        } else if (levelRole <= 13) {
            role = 'Silver II'
        } else if (levelRole <= 13) {
            role = 'Silver I'
        } else if (levelRole <= 16) {
            role = 'Gold V'
        } else if (levelRole <= 17) {
            role = 'Gold IV'
        } else if (levelRole <= 19) {
            role = 'Gold III'
        } else if (levelRole <= 20) {
            role = 'Gold II'
        } else if (levelRole <= 21) {
            role = 'Gold I'
        } else if (levelRole <= 22) {
            role = 'Platinum V'
        } else if (levelRole <= 24) {
            role = 'Platinum IV'
        } else if (levelRole <= 25) {
            role = 'Platinum III'
        } else if (levelRole <= 26) {
            role = 'Platinum II'
        } else if (levelRole <= 27) {
            role = 'Platinum I'
        } else if (levelRole <= 30) {
            role = 'Exterminator'
        }
			const isUser = user.includes(sender)
			const isPrem = prem.includes(sender)
			const isBanned = ban.includes(sender)
			const isPremium = premium.includes(sender)
			const errorurl2 = 'https://i.ibb.co/bJ9GkwL/20201127-075249.png'
			const isadminbot = adminbotnumber.includes(sender)
			const isfrendsowner = frendsowner.includes(sender)
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
           const sendImage = (teks) => {
		    client.sendMessage(from, teks, image, {quoted:mek})
		}
		const costum = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		const sendPtt = (teks) => {
		    client.sendMessage(from, audio, mp3, {quoted:mek})
		}
		
		//function leveling
            if (isGroup && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 200
                const requiredXp = 3000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(`Selamat ${pushname2} Kamu Naik Level *${getLevelingLevel(sender)}*`)
                }
            } catch (err) {
                console.error(err)
            }
        }
        if (isGroup) {
            const currentdolar = getDolaranLevel(sender)
            const checkId = getDolaranId(sender)
            try {
                if (currentdolar === undefined && checkId === undefined) addDolaranId(sender)
                const amountXp = Math.floor(Math.random() * 5) + 1
                const requiredXp = 20 * (Math.pow(2, currentdolar) - 1)
                const getLevel = getDolaranLevel(sender)
                addDolaranXp(sender, amountXp)
                if (requiredXp <= getDolarExp(sender)) {
                    addDolaranLevel(sender, 1)
                    await reply(`Selamat ${pushname2} Kamu Mendapatkan Dolar *$${getDolarExp(sender)}*`)
                }
            } catch (err) {
                console.error(err)
            }
        }
           const limitAdd = (sender) => {
            if (isOwner) {
                return;
            }
            var position = false;
            Object.keys(limit).forEach((i) => {
                if (limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                limit[position].limit += 1;
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(limit));
            }
        }
        
        if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberlimit) {
                            client.groupLeave(from)
					    }
		       } catch (err) { console.error(err)  }
        }
        
        //function balance
            if (isUser && isGroup ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }


        const isLimit = (sender) =>{  
		       if (!ispublic) { return false }
		      let position = false
             for (let i of limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    reply(`maaf ${pushname2} limit harian kamu habis`)
                    return true
              } else {
              	limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	let obj = { id : sender, limit : 1 }
           limit.push(obj)
           fs.writeFileSync('./database/user/limit.json',JSON.stringify(limit))
           return false
       }
     }
        
        
        
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mBERHASIL\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mBUKAN COMMAND\x1b[1;37m]', time, color(taukah), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mBERHASIL\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mBUKAN COMMAND\x1b[1;37m]', time, color(taukah), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			switch(command) {
				case 'help':
				case 'menu':
				limitAdd(sender) 
				isLimit(sender)
				if (isBanned) return reply(mess.only.benned)   
				if (!ispublic) return reply(mess.only.public)
				if (!isUser) return reply(mess.only.userB)
				uptime = process.uptime()
				const lvs = getLevelingLevel(sender)
                const esp = getLevelingXp(sender)
                if (lvs === undefined && esp === undefined) return reply(mess.levelnol)
				const ga =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const yas = ga[Math.floor(Math.random() * ga.length)]
					const gojar = getDolarExp(sender)
			costum(`
「 MR KING VERSION」

┏━━❖〘 INFORMATION 〙❖━━━⊱
┣➲ *Name:* *${pushname2}*
┣➲ *USER:* *FREE*
┣➲ *Role:* *${role}*
┣➲ *Date:* *${date}*
┣➲ *Time:* *${time}*
┣➲ *User BOT:* *${user.length}*
┣➲ *Balance:* *$ ${gojar}*
┣➲ *Level:* *${lvs}*
┣➲ *EXP:* *${esp}*
┗━━━━━━━━━━━━━━━━━━━━━┛

╔══✪〘 OWNER 〙✪══
║
╠➥ *${prefix}block 62858xxxxx*
╠➥ *${prefix}unblock 62858xxxxx*
╠➥ *${prefix}promote @tagmember*
╠➥ *${prefix}demote @tagadmin*
╠➥ *${prefix}bc*
╠➥ *${prefix}leave*
╠➥  *${prefix}bc2*
╠➥  *${prefix}leave*
╠➥  *${prefix}clearall*
╠➥  *${prefix}clone*
╠➥  *${prefix}hidetag*
╠➥  *${prefix}hidetag2*
╠➥  *${prefix}setprefix*
╠➥  *${prefix}unban*
╠➥  *${prefix}ban*
╠➥ *${prefix}runtime*
╠➥ *${prefix}hidetag5*
╠➥ *${prefix}hidetag50*
╠➥ *${prefix}hidetag20*
╠➥ *${prefix}hidetag300*
╠➥ *${prefix}getppbot*
╠➥ *${prefix}bcgc*
╠➥ *${prefix}turnoff*
╠➥  *${prefix}getses*
╠➥  *${prefix}addfoto [reply foto]*
╠➥  *${prefix}getfoto [nama file]*
╠➥  *${prefix}addaudio [reply audio]*
╠➥  *${prefix}getaudio [nama file]*
╠➥  *${prefix}addvideo ,[reply video]*
╠➥  *${prefix}getvideo [nama file]*
╠➥ *${prefix}resetsay*
╠➥ *${prefix}addsay*
╠➥ *${prefix}saylist*
╠➥ *${prefix}addbacot*
╠➥ *${prefix}bacotlist*
╠➥ *${prefix}resetbacot*
╠➥ *${prefix}resetuser*
╠➥ *${prefix}addvip [nomor@s.whatsapp.net]*
╠➥ *${prefix}resetallvipuser*
╠➥  *${prefix}getsticker [teks]*
╠➥  *${prefix}savestick [nama file]*
╠➥  *${prefix}
╠➥ *${prefix}totaluser*
║
╠══✪〘 GROUP 〙✪══
║
╠➥ *${prefix}ban @tagmember*
╠➥ *${prefix}unban @tagmember*
╠➥ *${prefix}spamsms [81273xxxx]*
╠➥ *${prefix}kickall*
╠➥ *${prefix}leave*
╠➥ *${prefix}promote*
╠➥ *${prefix}demote*
╠➥ *${prefix}delete*
╠➥ *${prefix}add 62813xxxxx*
╠➥ *${prefix}kickall*
╠➥ *${prefix}tagall*
╠➥  *${prefix}otagall*
╠➥  *${prefix}otagall2*
╠➥  *${prefix}tagall*
╠➥  *${prefix}getpic [tag]*
╠➥  *${prefix}delete [replay chat bot]*
╠➥  *${prefix}setdesc*
╠➥  *${prefix}setname*
╠➥  *${prefix}kick* [tag]
╠➥  *${prefix}add* [628xxx]
╠➥  *${prefix}group* [buka]
╠➥  *${prefix}group* [tutup]
╠➥  *${prefix}linkgc*
╠➥  *${prefix}setpp* [foto kau]
╠➥  *${prefix}groupinfo*
╠➥  *${prefix}tagme*
╠➥  *${prefix}nsfw* [enable/disable]
╠➥  *${prefix}anime* [enable/disable]
╠➥  *${prefix}simih* [enable/disable]
╠➥  *${prefix}welcome* [enable/disable]
╠➥  *${prefix}antilink* [enable/disable]
╠➥  *${prefix}edotensei*
╠➥  *${prefix}listadmins*
╠➥ *${prefix}ownergrup*
╠➥  *${prefix}ping*
║
╠══✪〘 FUN 〙✪══ 
║
╠➥ *${prefix}tebakgambar*
╠➥ *${prefix}caklontong*
╠➥ *${prefix}family100*
╠➥ *${prefix}quotes* 
╠➥ *${prefix}hilih* 
╠➥ *${prefix}alay* [text] 
╠➥ *${prefix}simi* [text]
╠➥ *${prefix}bucin*
╠➥ *${prefix}tts [kode negara] [teks]*
╠➥ *${prefix}bahasalist*
║
╠══✪〘 KERANG 〙✪══
║
╠➥ *${prefix}apakah [optional]*
╠➥ *${prefix}rate [optional]*
╠➥ *${prefix}bisakah [optional]*
╠➥ *${prefix}kapankah [optional]*
╠➥ *${prefix}gantengcek*
╠➥ *${prefix}toxic*
╠➥ *${prefix}cantikcek*
╠➥ *${prefix}persengay*
╠➥ *${prefix}watak*
╠➥ *${prefix}hobby*
╠➥ *${prefix}siapa*
╠➥ *${prefix}gay [@Tagmember]*
╠➥ *${prefix}jelekcek*
╠➥ *${prefix}truth*
╠➥ *${prefix}dare*
║
╠══✪〘 MAKER 〙✪══ 
║
╠➥ *${prefix}tahta* [iki]
╠➥ *${prefix}pronlogo* [text|text]
╠➥ *${prefix}bpink [teks]* 
╠➥ *${prefix}snow* [text|text] 
╠➥ *${prefix}marvelogo* [text|text] 
╠➥ *${prefix}text3d* [text] 
╠➥ *${prefix}shadow [text]*
╠➥ *${prefix}goldbutton [text]*
╠➥ *${prefix}silverbutton [text]*
╠➥ *${prefix}minion [text]*
╠➥ *${prefix}gaminglogo [text]"
╠➥ *${prefix}ninjalogo* [text|text] 
╠➥ *${prefix}wolflogo* [text|text] 
╠➥ *${prefix}lionlogo* [text|text] 
╠➥ *${prefix}textscreen* [text
╠➥ *${prefix}rtext* [text]
╠➥ *${prefix}thunder* [text] [
╠➥ *${prefix}glaas*
╠➥ *${prefix}triggerd*
╠➥ *${prefix}burning*
╠➥ *${prefix}pelangi*
╠➥ *${prefix}stiltext* [text|text]
╠➥ *${prefix}party* [text]
╠➥ *${prefix}galaxtext* [text]
╠➥ *${prefix}lovemake* [text]
╠➥ *${prefix}walpaperhd* [text]
╠➥ *${prefix}watercolor* [text]
╠➥ *${prefix}quotemaker* [tx|tx|random] 
╠➥ *${prefix}water* [text]
╠➥ *${prefix}epep* [text]
╠➥ *${prefix}glitch* [text]
╠➥ *${prefix}jokerlogo [teks]* 
║
╠══✪〘 MEDIA 〙✪══
║
╠➥ *${prefix}yt* [link]
╠➥ *${prefix}tiktok* [link]
╠➥ *${prefix}ytsearch* [yt search]
╠➥ *${prefix}lirik* [judul lagu]
╠➥ *${prefix}chord* [judul lagu]
╠➥ *${prefix}igstalk* [Rizky]
╠➥ *${prefix}fb [url]*
╠➥ *${prefix}wikien* [love]
╠➥ *${prefix}tiktokstalk* [username]
╠➥ *${prefix}img2url* [reply foto]
╠➥ *${prefix}trendtwit*
╠➥ *${prefix}fototiktok* [username]
╠➥ *${prefix}map* [kota]
╠➥ *${prefix}kbbi* [kamus]
╠➥ *${prefix}brainly [tau sendiri kan]*
╠➥ *${prefix}infoghitub* 
╠➥ *${prefix}neonime
╠➥ *${prefix}cuaca* [kota]
╠➥ *${prefix}infogempa*
╠➥ *${prefix}artinama [nama]*
╠➥ *${prefix}spamcall [82387804410]*
╠➥ *${prefix}covid [negara]*
╠➥ *${prefix}nulis [teks]*
╠➥ *${prefix}sandwriting [teks]*
╠➥ *${prefix}quotemaker [|teks|author|theme]*
╠➥ *${prefix}resepmasakan [optional]*
╠➥ *${prefix}tts [kode bhs] [teks]*
╠➥ *${prefix}igstalk [@username]*
╠➥ *${prefix}tiktokstalk [@username]*
╠➥ *${prefix}darkjokes*
╠➥ *${prefix}wiki [query]*
╠➥ *${prefix}infonomor [823×××]*
╠➥ *${prefix}slap*
╠➥ *${prefix}xd*
╠➥ *${prefix}aguse*
╠➥ *${prefix}infomobil [namamobil]*
╠➥ *${prefix}infomotor [namamotor]*
╠➥ *${prefix} playstore [nama game]*
╠➥ *${prefix}beritahoax*
╠➥ *${prefix}ramalhp [823×××]*
╠➥ *${prefix}qrcode [optional]*
╠➥ *${prefix}map [optional]*
╠➥ *${prefix}textmaker [teks1|teks2]*
╠➥ *${prefix}ssweb [linkWeb]*
╠➥ *${prefix}shorturl [linkWeb]*
╠➥ *${prefix}quran*
║
╠══✪〘 VIP USER 〙✪══
║
╠➥ *${prefix}ytmp4 [link]*
╠➥ *${prefix}ytmp3 [link]*
╠➥ *${prefix}hidetag2*
╠➥ *${prefix}joox [lagu]*
╠➥ *${prefix}setprefix*
╠➥ *${prefix}tomp3 [replay video]*
╠➥  *${prefix}randomanime*
╠➥  *${prefix}randomhentai*
╠➥  *${prefix}nsfwloli*
╠➥  *${prefix}nsfwblowjob*
╠➥  *${prefix}nsfwneko*
╠➥  *${prefix}nsfwtrap*
╠➥  *${prefix}indohot*
╠➥  *${prefix}fitnah [tag|teks|teks]
╠➥  *${prefix}otagall2*
╠➥  *${prefix}otagall3*
╠➥  *${prefix}asupan*
╠➥  *${prefix}hidetag5*
╠➥ *${prefix}play [lagu]*
║
╰─⊱ *${prefix}indo(1-25)*
╭─⊱ *CONTOH:* *${prefix}indo1*
║
║
╠══✪〘 NSFW 〙✪══
║
╠➥ *${prefix}randomhentai*
╠➥ *${prefix}hentai*
╠➥ *${prefix}nsfwblowjob*
╠➥ *${prefix}nsfwtrap*
╠➥ *${prefix}nsfwneko*
╠➥ *${prefix}loli*
╠➥ *${prefix}nsfwloli*
╠➥ *${prefix}bokep*
╠➥ *${prefix}kodenuklir2*
╠➥ *${prefix}randomanime*
╠➥ *${prefix}cry*
╠➥ *${prefix}cium*
╠➥ *${prefix}tium*
╠➥ *${prefix}animehug*
╠➥ *${prefix}nekonime*
╠➥ *${prefix}waifu*
╠➥ *${prefix}waifu2*
╠➥ *${prefix}kodenuklir*
╠➥ *${prefix}nekopoi*
║
╠══✪〘 ANIME 〙✪══
║
╠➥ *${prefix}randomanime*
╠➥ *${prefix}waifu*
╠➥ *${prefix}waifu2*
╠➥ *${prefix}nekonime*
╠➥ *${prefix}genreanime*
╠➥ *${prefix}animesaran*
╠➥ *${prefix}animesaran2*
╠➥ *${prefix}wibu*
╠➥ *${prefix}wait [foto opening anime]*
╠➥ *${prefix}inu*
╠➥ *${prefix}pokemon*
╠➥ *${prefix}naruto*
╠➥ *${prefix}ranime*
╠➥ *${prefix}hinata*
╠➥ *${prefix}sasuke*
╠➥ *${prefix}sakura*
╠➥ *${prefix}boruto*
╠➥ *${prefix}minato*
╠➥ *${prefix}loli*
╠➥ *${prefix}loli2*
╠➥ *${prefix}rize*
╠➥ *${prefix}akira*
╠➥ *${prefix}husbu*
╠➥ *${prefix}itori*
╠➥ *${prefix}animehappy*
╠➥ *${prefix}kurumi*
╠➥ *${prefix}animesad*
╠➥ *${prefix}miku*
║
╠══✪〘 OTHER 〙✪══
║
╠➥ *${prefix}sticker*
╠➥ *${prefix}nobg*
╠➥  *${prefix}stickergif*
╠➥  *${prefix}jomblo*
╠➥  *${prefix}bitly [link]*
╠➥ *${prefix}kodenegara*
╠➥ *${prefix}hurufjepang*
╠➥ *${prefix}hurufkatakanajepang*
╠➥ *${prefix}walpaper*
╠➥ *${prefix}readmore [teks|teks]*
╠➥ *${prefix}baper*
╠➥ *${prefix}stickergif*
╠➥ *${prefix}ttp [teks]*
╠➥ *${prefix}toimg [replay sticker]*
╠➥ *${prefix}neko*
╠➥ *${prefix}pokemon*
╠➥ *${prefix}inu*
╠➥ *${prefix}infoGempa*
╠➥ *${prefix}quotes*
╠➥ *${prefix}dadu*
╠➥ *${prefix}wame*
╠➥ *${prefix}quotes*
╠➥ *${prefix}aesthetic*
╠➥ *${prefix}thunder [teks]*
╠➥ *${prefix}nulis [teks]*
╠➥ *${prefix}ocr [gambar]*
╠➥ *${prefix}meme*
╠➥ *${prefix}memindo*
╠➥ *${prefix}testime*
╠➥ *${prefix}ttp [teks]*
╠➥ *${prefix}hobby*
╠➥ *${prefix}beritahoax*
╠➥ *${prefix}watak*
╠➥ *${prefix}jsholat [daerah]*
╠➥ *${prefix}report*
╠➥ *${prefix}hilih [teks]*
╠➥ *${prefix}cekjodoh* [nama]
╠➥ *${prefix}artinama* [rizky]
╠➥ *${prefix}listsurah*
╠➥ *${prefix}zodiak [zodiak kamu]*
╠➥ *${prefix}listzodiak*
╠➥ *${prefix}koin*
╠➥ *${prefix}say*
╠➥ *${prefix}bacot*
╠➥ *${prefix}reminder [waktu|kegiatan]*
╠➥ *${prefix}ytkomen [nama|teks]*
║
╠═══✪〘 ANIMALS 〙✪══
║
╠➥ *${prefix}unta*
╠➥ *${prefix}elang*
╠➥ *${prefix}anjing*
╠➥ *${prefix}randomcat*
║
╠═══✪〘 PICT MENU 〙✪══
║
╠➥  *PictMenu*
╠➥  *${prefix}cowok*
╠➥  *${prefix}cewek*
╠➥  *${prefix}lolicon*
╠➥  *${prefix}waifu*
╠➥  *${prefix}neko*
╠➥  *${prefix}hewan*
╠➥  *${prefix}vtuber*
╠➥  *CONTOH:* *${prefix}pictcowok*
║
╠═══✪〘 UPDATE 〙✪══
╠➥  ${prefix}addsticker <optional>
╠➥  ${prefix}getsticker <optional>
╠➥  ${prefix}liststicker
╠➥  ${prefix}addvn <optional>
╠➥  ${prefix}getvn <optional>
╠➥  ${prefix}listvn
╠➥  ${prefix}addvideo <optional>
╠➥  ${prefix}getvideo <optional>
╠➥  ${prefix}listvideo
╠➥  ${prefix}addimage <optional>
╠➥  ${prefix}getimage <optional>
╠➥  ${prefix}listimage
╠➥  ${prefix}info
╠➥  ${prefix}ping
╠➥  ${prefix}creator
╠➥  ${prefix}runtime
╠➥  ${prefix}fordward
╠➥  ${prefix}fordward2
╠➥  ${prefix}hilih
╠➥  ${prefix}holoh
╠➥  ${prefix}apakah
╠➥  ${prefix}kapankah
╠➥  ${prefix}blocklist
╠➥  ${prefix}cekchat
║
╚═  MR KING BOT`, text, tescuk, cr)
					break
					
					case 'gameshop':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					const lps = getLevelingLevel(sender)
                const eap = getLevelingXp(sender)
                const lolar = getDolarExp(sender)
					costum(`
╭══─⊱  ⸨ 𝑰𝒏𝒇𝒐 𝑷𝒆𝒏𝒈𝒈𝒖𝒏𝒂 ⸩ 
├   XP: ${eap}
├   Level: ${lps}
├   Nama: ${pushname2}
└─┤ *${user.length} player*

*_G A M E S H O P_*
╭─⊱   ${prefix}Masuk Grup Dengan Durasi 1 hari Level 7
┣╾⊱   ${prefix}Masuk Grup Dengan Durasi 2 hari Level 10
┣╾⊱   ${prefix}Masuk Grup Dengan Durasi 4 hari Level 13
┣╾⊱   ${prefix}Masuk Grup Dengan Durasi 6 hari Level 15
┣╾⊱   ${prefix}Masuk Grup Dengan Durasi 7 hari Level 17
┣╾⊱   ${prefix}Masuk Grup Dengan Durasi 9 hari Level 19
┣╾⊱   ${prefix}Masuk Grup Dengan Durasi 10 hari Level 20
┣╾⊱   ${prefix}Masuk Grup Dengan Durasi 13 hari Level 23
┣╾⊱   ${prefix}Masuk Grup Dengan Durasi 12 hari Level 25
┣╾⊱   ${prefix}Masuk Grup Dengan Durasi 15 hari Level 30
┣╾⊱   ${prefix}buypremium level 40
╰─⊱   ${prefix}premium+grup dengan durasi 30 hari level 60

Note: 
    ~ premium hanya berlaku 1bulan
    ~ cara naikin level gimana kak? cukup ikut dalam obrolan dan bisa juga ketik ${prefix}farming

ketik ${prefix}rules untuk syarat dan ketentuan penggunaan bot`, text, tescuk, `*GAME SHOP MR KING BOT*`)
					break
					case 'all':
					if (!isOwner) return
					case 'listmenu':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					costum(listmenu(prefix), text, tescuk, cr)
					break
					case 'gamemenu':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					costum(gamemenu(prefix), text, tescuk, cr)
					break
					case 'resetlimit':
				if (!isOwner) return reply(ind.ownerb())
				  var obj = []
				   fs.writeFileSync('./database/user/limit.json', JSON.stringify(obj))
				  await reply(`LIMIT HAS BEEN RESET`)
				break
					case 'limit':

				var found = false

                    const limidat = JSON.parse(fs.readFileSync('./database/user/limit.json'))

                    for (let lmt of limidat) {

                        if (lmt.id === sender) {

                            let limitCounts = limitawal - lmt.limit

                            if (limitCounts <= 0) return reply(from,`Limit request anda sudah habis\n\n_Note : Limit akan direset setiap jam 21:00!_`, id)

                            await reply(`LIMIT ANDA ${limitCounts})`)

                            found = true

                        }

                    }

                    if (found === false) {

                        let obj = { id : sender, limit : 1 }

                        limit.push(obj);

                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(limit, 1));

                        await reply(`LIMIT ANDA ${limitCounts}`)

                    }

					break
					case 'buylimit':
				payout = body.slice(10)
				const koinPerlimit = 40
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					const totalpayout = checkATMuser(sender) - total
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\npengirim : Admin\npenerima : ${pushname2}\nnominal pembelian : ${payout} \n harga limit : ${koinPerlimit}/limit\n uang mu : ${checkATMuser(sender)}\nkembalian ${totalpayout}\n\nproses berhasil dengan nomer pembayaran`)
				} else {reply(`maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)}
				break
				case 'dompet':
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname2, sender, kantong))
				break
				case 'transfer':
				if (!q.includes('|')) return  reply(ind.wrongf())
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                reply(`*「 SUKSES 」*\n\npengiriman uang telah sukses\ndari : ${sender.split("@")[0]}\nke : ${tujuantf}\njumblah transfer : ${jumblah}\npajak : ${fee}`)
                break
                case 'mutual':
                if (!isRegistered) return reply( ind.noregis())
                if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
                await reply(`wa.me/${anug}`)
                await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
            break
            case 'next':
                if (!isRegistered) return reply( ind.noregis())
                if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
                await reply(`wa.me/${anug}`)
                await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
            break
                case 'join':
					if (args.length == 0) return client.reply(from, `maaf ,bot ini hanya bisa dimasukkan ke grup `, id)
					let linkgrup = body.slice(6)
					let islink = linkgrup.match(/(https:\/\/chat.whatsapp.com)/gi)
					let chekgrup = await client.inviteInfo(linkgrup)
					if (!islink) return client.reply(from, 'Maaf link group-nya salah! ', id)
					if (isOwnerBot) {
					  await client.joinGroupViaLink(linkgrup)
					    .then(async () => {
					      await client.sendText(from, 'Berhasil join grup via link!')
					      await client.sendText(chekgrup.id, ` *Hai Minna~*  `)
					    })
					} else {
					  let cgrup = await client.getAllGroups()
					  if (cgrup.length > groupLimit) return client.reply(from, `Sorry, the groups is not valid `, id)
					  if (cgrup.size < memberLimit) return client.reply(from, `Sorry, Bot wil not join if the group members do not exceed ${memberLimit} people`, id)
					  await client.joinGroupViaLink(linkgrup)
					    .then(async () => {
					      await client.reply(from, 'Berhasil join grup via link!', id)
					    })
					    .catch(() => {
					      client.reply(from, 'Gagal!', id)
					    })
					}
					break
			case 'lbuang':
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
                let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
                let nump = 0
                try {
                    for (let i = 0; i < 10; i++) {
                        nump++
                        leaderboarduang += `*[${nump}]* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n┣⊱ *Uang*: _Rp${uang[i].uang}_\n`
                    }
                    await reply(leaderboarduang)
                } catch (err) {
                    console.error(err)
                    await reply(`minimal 10 user untuk bisa mengakses database`)
                }
				break
				case 'lblevel':
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
                let leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
                let nrmp = 0
                try {
                    for (let i = 0; i < 10; i++) {
                        nrmp++
                        leaderboardlvl += `*[${nrmp}]* wa.me/${_level[i].jid.replace('@s.whatsapp.net', '')}\n┗⊱ *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
                    }
                    await reply(leaderboardlvl)
                } catch (err) {
                    console.error(err)
                    await reply(`minimal 10 user untuk bisa mengakses database`)
                }
				break
					case 'afk':
                                        tels = body.slice(4)
                                        if (args.length < 1) return reply('kakak afk karena apa?')
                                        if (!isUser) return reply(mess.only.userB)
                                        var nom = mek.participant
                                        const tug = {
                                                text: `@${nom.split("@s.whatsapp.net")[0]} *SEDANG AFK ${tels} JANGAN GANGGU YA*`,
                                                contextInfo: { mentionedJid: [nom] }
                                        }
                                        client.sendMessage(from, tug, text, {quoted: mek})
                                        break
					case 'poterlogo':
                                        if (isBanned) return reply(mess.only.benned)
                                if (!isUser) return reply(mess.only.userB)
                                        if (!ispublic) return reply(mess.only.public)
                                        if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧𝐲𝐚 𝐤𝐚𝐤')
                                        potter = body.slice(10)
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=harry_potter&text=${potter}&apikey=BotWeA`, {method: 'get'})                                                                                
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek})
                                        break
                                        case 'jail':
                                        if (!isUser) return reply(mess.only.userB)
                                        if (isBanned) return reply(mess.only.benned)
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         reply(mess.wait)
                                         owgi = await client.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", owgi)
                                        teks = `${anu.display_url}`
                                        buffer = await getBuffer(`https://api.zeks.xyz/api/jail?apikey=administrator&img=${teks}`, {method: 'get'})
						                client.sendMessage(from, buffer, image, {quoted: mek})
						                }
                                        break
                                        case 'wolfmetal':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧𝐲𝐚 𝐤𝐚𝐤')
					wometal = body.slice(10)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=wolf_metal&text=${wometal}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
					case 'neb':
					case 'ownercommand':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					costum(ownercommand(prefix), text, tescuk, cr)
					break
					case 'gaminglogo':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!ispublic) return reply(mess.only.public)
					if (!isPremium) return reply(mess.only.premium)
					if (args.length < 1) return reply('Teksnya mana kak? >.<')
					teks = body.slice(11)
					reply(mess.wait)
					loog = await getBuffer(`https://api.vhtear.com/gamelogo?text=${teks}&apikey=${vhtear}`)
					client.sendMessage(from, loog, image, {quoted: mek, caption: 'nih '+teks})
					break
					case 'shadow':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					shad = body.slice(8)
					reply(mess.wait)
					ssha = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/photooxy/shadowtext?text=${shad}`)
					client.sendMessage(from, ssha, image, {caption: 'Nih kak', quoted: mek})
					break
					case 'darkjokes2':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					gatauda = body.slice(11)
					reply(mess.wait)
					anu = await fetchJson(`https://api.zeks.xyz/api/darkjokes?apikey=apivinz`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
		case 'memeindo':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					gatauda = body.slice(10)
					reply(mess.wait)
					anu = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=apivinz`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
					case 'minion':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					minio = body.slice(8)
					reply(mess.wait)
					minn = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/miniontext?text=${minio}`)
					client.sendMessage(from, minn, image, {caption: 'Nih kak', quoted: mek})
					break
					case 'snk':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					costum( snk(), text, tescuk, cr)
					break
					case 'goldbutton':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					gol = body.slice(12)
					if (args.length < 1) return reply('Teksnya mana um')
					reply(mess.wait)
					anu = await fetchJson(`https://api.zeks.xyz/api/gplaybutton?text=${gol}&apikey=apivinz`, {method: 'get'})
					gools = await getBuffer(anu.result)
					client.sendMessage(from, gools, image, {quoted: mek})
					break
				case 'silverbutton':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					gol2 = body.slice(14)
					if (args.length < 1) return reply('Teksnya mana um')
					reply(mess.wait)
					anu = await fetchJson(`https://api.zeks.xyz/api/splaybutton?text=${gol2}&apikey=apivinz`, {method: 'get'})
					gools2 = await getBuffer(anu.result)
					client.sendMessage(from, gools2, image, {quoted: mek})
					break
					
					case 'rang':
					if (!isOwner) return
					case 'kerangmenu':
					if (!isPremium) return reply(`LU BUKAN PREMIUM BODOH MAKANYA BELI KETIK *${prefix}daftarvip*`, text, { quoted: mek })
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					costum( kerangmenu(prefix), text, tescuk, cr)
					client.sendMessage(from, 'anda gay/anda lesby', text, tescuk, cr)
					break
					case 'hurufjepang':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					costum( ` A =あ    Ka =か
I =い     Ki =き
U=う.    Ku =く
E =え.    Ke =け
O =お.    Ko =こ。

Sa = さ       Na = な
Shi = し.     Ni = に
Su =す.       Nu = ぬ
Se =せ.       Ne = ね
So = そ.      No = の

Ma =ま.      Ya = や
Mi =み.       Yu = ゆ
Mu =む.      Yo = よ
Me =め
Mo =も。   Wa = わ
                   Wo = を
Ta= た
Tsu=つ
Te=て
To=と`, text, tescuk, cr)
					break
					case 'hurufkatakanajepang':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					costum( `*KUMPULAN BAHASA JEPANG*

*HARAP DIHAFALKAN YA*

ホテル
Hoteru : Hotel

インターネット
Intaanetto : Internet

バレーボール
Baree Booru : Volley Ball

サッカー
Sakkaa : Soccer

タクシー
Takushii : Taxi

ドキドキ
Doki doki : Deg degan

ペコペコ
Peko Peko : Perut kosong

ピンポン
Pin Pon : Suara bel

ドカン
Dokan : Suara ledakan

スラバヤ
Surabaya

ジャカルタ
Jakaruta : Jakarta

ロンドン
Rondon : London

ハワイ
Hawai

バリ島
Bari tou : Pulau Bali\nDaftar Huruf Katakana Standar
ア a	イ i	ウ u	エ e	オ o
カ ka	キ ki	ク ku	ケ ke	コ ko
サ sa	シ shi	ス su	セ se	ソ so
タ ta	チ chi	ツ tsu	テ te	ト to
ナ na	ニ ni	ヌ nu	ネ ne	ノ no
ハ ha	ヒ hi	フ fu	ヘ he	ホ ho
マ ma	ミ mi	ム mu	メ me	モ mo
ヤ ya		ユ yu		ヨ yo
ラ ra	リ ri	ル ru	レ re	ロ ro
ワ wa				ヲ wo
ン n
Contoh :
ミルク = Miruku, Susu
カメラ= Kamera, Kamera
テニス= Tenisu, Tenis\nDaftar Huruf Katakana Tenten dan Maru
ガ ga	ギ gi	グ gu	ゲ ge	ゴ go
ザ za	ジ ji	ズ zu	ゼ ze	ゾ zo
ダ da	ヂ ji	ヅ zu	デ de	ド do
バ ba	ビ bi	ブ bu	ベ be	ボ bo
パ pa	ピ pi	プ pu	ペ pe	ポ po
Contoh :
テレビ = Terebi, Televisi
パパイヤ = Papaiya, Pepaya\nDaftar Huruf Katakana Yōon
(ya)	(yu)	(yo)
キャ kya	キュ kyu	キョ kyo
シャ sha	シュ shu	ショ sho
チャ cha	チュ chu	チョ cho
ニャ nya	ニュ nyu	ニョ nyo
ヒャ hya	ヒュ hyu	ヒョ hyo
ミャ mya	ミュ myu	ミョ myo
リャ rya	リュ ryu	リョ ryo
ギャ gya	ギュ gyu	ギョ gyo
ジャ ja	ジュ ju	ジョ jo
ビャ bya	ビュ byu	ビョ byo
ピャ pya	ピュ pyu	ピョ pyo
Contoh :
コンピュター = Konpyutaa, Komputer
T シャツ = T Shatsu, Kaos
バナナ= Banana, Pisang\n*Mohon dihafalkan ya, dan jangan lupa latihan menuliskan nya juga, agara nanti Anda bisa menulis aksara Jepang dengan lancar*

*MR KING BOT*`, text, tescuk, cr)
					break
					case 'genreanime':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					costum(`*GENRE ANIME BESERTA ANIME TERBAIKNYA*


1. Action
Berhubungan dengan aksi dan perkelahian, bisa menggunakan senjata atau tanpa senjata. Biasanya ditunjukkan dengan gerakan-gerakan setiap tokoh anime pada alur cerita.

2. Adventure
Menampilkan kisah perjalanan, petualangan dan penjelajahan karakter yang biasanya bertujuan untuk menggapai ambisi atau menyelesaikan misi.

3. Mecha
Berhubungan dengan dunia robot atau yang berhubungan dengan mesin.

Contoh: Aldnoah Zero, Buddy Complex dll.

Aldnoah Zero

4. Cars
Anime yang berfokus pada mobil seperti balapan dll.

Contoh: Bakuso Kyoudai, Initial D dll.

Bakuso Kyoudai

5. Drama
Menampilkan kisah kehidupan yang situasi atau kondisinya secara kompleks, penuh emosional dan konflik batin.

Contoh: Clannad, White Album dll.

Clannad

6. Fantasy
Menceritakan kisah penuh imajinatif atau hal yang tidak pernah ada di dunia nyata.

Contoh: Kyokai No Kanata, Soredemo a Utsukushii dll.

Kyokai No Kanata

7. School Life
Alur cerita lebih sering terjadi di sekolah.

Contoh: Kokoro Conect, tari-tari dll.

8. Slice of Life
Kehidupan sehari-hari yang umumnya kita alami dan bisa di sebut dengan nilai kehidupan keseharian manusia.

Contoh: One Week Friend/ Isshuukan Friend, Tsuki Ga Kirei dll.

One Week Friend/ Isshuukan Friend

9. Samurai
Samurai sendiri merupakan prajurit elit dari kalangan bangsawan. Selain menceritakan tentang tokoh samurai sendiri, anime tersebut juga menunjukkan gambaran tentang kehidupan pada saat itu.

Contoh: Samurai X, Gintamana dll.

Samurai X

10. Military
Jalan ceritanya berlatar belakang peperangan atau serba serbi militer.

Contoh: Gate: Jietai Kanochi nite Kaku Tatakaeri, Fullmetal Alchemist Brotherhood dll.

Gate: Jietai Kanochi nite Kaku Tatakaeri

11. Historical
Jalan ceritanya berlatar belakang lampau atau lawas baik penggambaran atau ceritanya.

Contoh: Kaguya Hime no Monogatari, Eikoku Koi Monogatari dll.

Kaguya Hime no Monogatari

12. Police
Menceritakan tentang polisi atau memiliki karakter utama sebagai aparat yang melindungi warga.

Contoh: Psycho-Pass, Ghost in The Shell dll.

Psycho-Pass

13. Sci-Fi (Science Fiction)
Menceritakan dunia di mana teknologi ilmu pengetahuan yang merajarela di dunia dan khususnya tentang teknologi masa depan.

Contoh: Charlotte, Mahouka koukou no rettousei dll.

Charlotte

14. Sport
Berhubungan dengan olahraga seperti Voli, Renang dll.

Contoh: Haikyuu!!, Free dll.

Haikyuu!!

15. Matrial Art
Semua yang berhubungan dengan seni bela diri seperti karate, judo dll.

Misal: Naruto, Bento dll.

Naruto

16. Musik
Memakai musik sebagai tema biasanya dimainkan oleh tokoh dalam bentuk solo, band, grup dance atau pertunjukan musikal.

Contoh: K-On, Fuuka dll.

K-On

17. Harem
Satu laki-laki dikelilingi banyak perempuan.

Contoh: Nisekoi, To Love ru dll.

Nisekoi

18. Reverse Harem
Satu perempuan dikelilingi banyak laki-laki.

Contoh: Amnesia, Brother Conflic dll.

Amnesia

19. Romance
Menceritakan kisah percintaan perempuan dan laki-laki yang sifatnya menjaga hubungan tersebut.

Contoh: Kimi No Todoke, Chuunibyou dll.

Kimi No Todoke

20. Shoujo
Biasanya berhubungan dengan masalah percintaan atau pengembangan karakter dan ditunjukkan untuk perempuan berusia 10-18 tahun.

Contoh: Ao Haru Ride, Gekkan Shoujo dll.

Ao Haru Ride

21. Josei
Alur ceritanya lebih kompleks dari genre shoujo dan ditunjukkan untuk perempuan berusia 18-30 tahun.

Contoh: Chihayafuru, Nodame Cantabile dll.

Chihayafuru

22. Seinen
Biasanya berhubungan dengan masalah dewasa dan ditunjukkan untuk pria berusia 18-30 tahun.

Contoh: ACCA: 13-ku Kansatsu-ka, Amaama to Imazuma dll.

ACCA: 13-ku Kansatsu-ka

23. Shounen
Biasanya memiliki ciri khas dengan cerita zero to hero atau dalam artian pada tokoh utama dari lemah menjadi kuat dan ditunjukkan untuk laki-laki berusia 10-18 tahun.

Contoh: Guilty Crown, Ao no Exorcist dll.

Guilty Crown

24. Shoujo-ai
Menceritakan hubungan antar sesama jenis perempuan tetapi hanya sebatas teman atau saudara dekat.

Contoh: Yuri-yuri, Candy Boy dll.

Yuri-yuri

25. Shounen-ai
Menceritakan hubungan antar sesama jenis laki-laki tetapi hanya sebatas teman atau saudara dekat.

Contoh: Junjou Romantica, Super Lovers dll.

Junjou Romantica
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
26. Kids
Anime dikhususkan untuk anak-anak saja tetapi tidak menuntut kemungkinan remajapun bisa.

Contoh: Crayon Shin-chan, Crayon Shin-chan dll.

Crayon Shin-chan

27. Space
Anime yang berlatar belakang luar angkasa, biasanya juga berhubungan dengan mendarat ke planet lain.

Contoh: Uchuu Kyoudai, Uchu Show e Youkoso dll.

Uchuu Kyoudai

28. Comedy
Anime yang membuat tertawa.

Contoh: Hataraku Maou-sama!, Baka to Test to Shoukanjuu dll.

Hataraku Maou-sama!

29. Parody
Anime yang membuat lawakan akan tetapi lawakan yang disajikan di genre ini berbeda dengan comedy. Lawakan yang disajikan adalah plesetan dari ‘Komik, manga, film, sinetron, acara komedian, tv, peristiwa, sejarah bahkan anime lain.

Contoh: Genshiken, BinBougami dll.

Genshiken`, text, tescuk, cr)
client.sendMessage(from, `30. Game
Seseorang yang menyukai game dan biasanya permainannya diadaptasi dalam sebuah alur cerita.

Contoh: Accel World, Overloard dll.

Accel World

31. Supranatural
Melibatkan kekuatan yang tidak dapat dijelaskan atau peristiwa yang menentang hukum ilmu pengetahuan manusia.

Contoh: Re-Kan, Devil Survivor dll.

Re-Kan

32. Super Power
Hampir sama dengan supranatural, bedanya super power lebih memperlihatkan kekuatan super yang lebih besar dengan daya hancur yang luar biasa.

Contoh: Kekkai Senssen, Naruto dll.

Kekkai Senssen

33. Magic
Berhubungan dengan sihir seperti penyihir dll.

Contoh: Mohou Shoujo Desuka, Kore Wa Zombie Desu Ka dll.

Mohou Shoujo Desuka

34. Demons
Menceritakan tentang Dewa, Iblis atau Malaikat.

Contoh: Kamisama Hajimemashita, Inuyasha dll.

Kamisama Hajimemashita

35. Horror
Seram, menegangkan atau menakutkan.

Contoh: Another, Ghost Hunter dll.

Another

36. Triller
Menceritakan aksi pertarungan dengan waktu, aksi menantang dan biasanya mendapat halangan dari tokoh antagonis.

Contoh: Mirai Nikki, Zankyou no Terror dll.

Mirai Nikki

37. Vampire
Anime yang mengisahkan atau memiliki nuasa vampire didalamnya.

Contoh: Owari No Seraph, Blood-C dll.

Owari No Seraph

38. Mystery
Menampilkan sebuah misteri dan tentunya tokoh utama yang ditujukan untuk menyelesaikan misteri tersebut.

Contoh: Hyouka, Bungo Stray Dog dll.

Hyouka

39. Psychological
Berkaitan dengan cara berpikir karakter. Biasanya mengandung cara berfikir karakter yang abnormal yang sering di perlihatkan dalam menyelesaikan permasalahan.

Contoh: Boku dake ga Inai, Death Note dll.

Boku dake ga Inai

40. Dementia
Anime yang memiliki plot mind-twisting yaitu cerita yang membingungkan.

Contoh: Neon Genesis Evagelion, FLCL dll.

Neon Genesis Evagelion

41. Ecchi
Berisi adegan-adegan saru atau tidak senonoh namun tidak menjurus ke pornografi melainkan hanya sebagai fanservice.

Contoh: Tasogare Otome x Amnesia, Sankarea dll.

Tasogare Otome x Amnesia

42. Hentai
Sudah mengarah ke ponografi dikhususkan untuk orang dewasa.

Contoh: Kozu No Honkai, B Gata H Kei dll.

Kozu No Honkai

43. Yuri
Hubungan menyimpang yaitu hubungan antar sesama jenis perempuan sampai tahap seksual.

Contoh: Cytrus, Strawberry Panic dll.

Cytrus

44. Yaoi
Hubungan menyimpang yaitu hubungan antar sesama jenis laki-laki sampai tahap seksual.

Contoh: Boku no pico, Sekai Ichi Hatsukoi dll.

Boku no pico

45. NTR (Netore)
Dalam arti namanya mengartikan cinta yang dikhianati. Anime NTR juga merupakan anime yang dihindari karena dapat meninggalkan sakit hati bagi penontonnya.

Contoh: Nagi No Asukara, Boku Ga Ita dll.

Nagi No Asukara

42-45 seharusnya merupakan salah satu jenis genre tapi kebanyakan staff yang berwenang memproduksi anime sangat jarang mencantumkan genre ini meskipun didalamnya ada unsur genre tersebut (yah untuk sekedar info aku tetap memasukkannya ke list).

Apapun genrenya, kita sebagai penonton diharapkan bijak memilih mana tontonan yang baik. Sekian Reviewku untuk hari ini.

*Arigatou Gozaimasu…*



*MR KING BOT*`, text, { quoted: mek })
					break
					case 'min':
					if (!isOwner) return
					case 'adminmenu':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					client.sendMessage(from, adminmenu(prefix), text, { quoted: mek })
					client.sendMessage(from, 'hai admin😃', text, { quoted: mek })
					break
					case 'animesaran2':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					costum( `*Dᴀғᴛᴀʀ ᴀɴɪᴍᴇ+ɢᴇɴʀᴇ*
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
DRAMA+KESEDIHAN
- Pʟᴀsᴛɪᴄ ᴍᴇᴍᴏʀɪᴇs
- Sʜɪɢᴀᴛsᴜ ᴡᴀ Kɪᴍɪ ɴᴏ Usᴏ
- Kᴏᴇ ɴᴏ Kᴀᴛᴀᴄʜɪ
- Kᴏᴋᴏʀᴏ Cᴏɴɴᴇᴄᴛ
- Cʜᴜᴜɴɪʙʏᴏᴜ Dᴇᴍᴏ Kᴏɪ ɢᴀ Sʜɪᴛᴀɪ
- Sᴀᴋᴜʀᴀsᴏᴜ ɴᴏ Pᴇᴛ ɴᴀ Kᴀɴᴏᴊᴏ
- Nᴀɢɪ ɴᴏ Asᴜᴋᴀʀᴀ (Rᴇᴄᴏᴍᴇɴᴅᴇᴅ)
- Jᴜsᴛ Bᴇᴄᴀᴜsᴇ
- Iɴᴜʏᴀsʜɪᴋɪ
- Cʟᴀɴɴᴀᴅ
- Aɴɢᴇʟ Bᴇᴀᴛs
- Yᴀʜᴀʀɪ Oʀᴇ ɴᴏ Sᴇɪsʜᴜᴜɴ Lᴏᴠᴇ Cᴏᴍᴇᴅʏ Mᴀᴄʜɪɢᴀᴛᴛᴇɪʀᴜ
- Rᴇ : LIFE
- Aɴᴏ Hᴀɴᴀ
- Kᴏɪ ᴛᴏ Usᴏ
- Kᴀᴍɪsᴀᴍᴀ Hᴀᴊɪᴍᴇᴍᴀsʜɪᴛᴀ
- Hᴏᴛᴀʀᴜʙɪ ɴᴏ Mᴏʀɪ E
- Sᴀɴᴋᴀ Rᴇᴀ
- Kʏᴏᴜᴋᴀɪ ɴᴏ Kᴀɴᴀᴛᴀ
- Gᴜɪʟᴛʏ Cʀᴏᴡɴ 

GENRE HAREM:

- Tᴏ Lᴏᴠᴇ - ʀᴜ
- Hɪɢʜsᴄʜᴏᴏʟ DxD 
- Hᴇɴᴛᴀɪ Oᴜᴊɪ Wᴀʀᴀᴡᴀɴᴀɪ Nᴇᴋᴏ
- Isᴇᴋᴀɪ ᴡᴀ Sᴍᴀʀᴛᴘʜᴏɴᴇ Tᴏᴍᴏ ɴɪ 
- Gᴀᴋᴜsᴇɴ Tᴏsʜɪ Asᴛᴇʀɪsᴋ
- Mᴀsᴀᴍᴜɴᴇ - Kᴜɴ Rᴇᴠᴇɴɢᴇ
- Lᴀᴅɪᴇs Vs Bᴜᴛʟᴇʀ
- Oʀᴇ ɴᴏ Iᴍᴏᴜᴛᴏ ɢᴀ Kᴏɴɴᴀɴɪ Kᴀᴡᴀɪ Wᴀᴋᴇ ɢᴀ Nᴀɪ
- Mᴀsᴏᴜ Gᴀᴋᴜᴇɴ HxH 
- Mᴏɴsᴛᴇʀ Mᴜsᴜᴍᴇ 
- Sᴇɪʀᴇɪ Tsᴜᴋᴀɪ ɴᴏ Bʟᴀᴅᴇ Dᴀɴᴄᴇ
- Sᴇɪᴋᴇɴ Tsᴜᴋᴀɪ ɴᴏ Wᴏʀʟᴅ Bʀᴇᴀᴋ
- Sᴀɪᴊᴀᴋᴜ Mᴜʜᴀɪ ɴᴏ Bᴀʜᴀᴍᴜᴛ
- Mᴜsᴀɪɢᴇɴ ɴᴏ Pʜᴀɴᴛᴏᴍ Wᴏʀʟᴅ
- Tʀɪɴɪᴛʏ Sᴇᴠᴇɴ
- Hᴜɴᴅʀᴇᴅ
- Dᴀᴋᴀʀᴀ Bᴏᴋᴜ ᴡᴀ H, Dᴇᴋɪɴᴀɪ? 
- Kᴏʀᴇ ᴡᴀ Zᴏᴍʙɪᴇ Dᴇsᴜ Kᴀ?
- Sʜɪᴏᴍɪɴ Sᴀᴍᴘʟᴇ
- Sʜɪɴᴍᴀɪ Mᴀᴏᴜ ɴᴏ Tᴇsᴛᴀᴍᴇɴᴛ 
- Dᴀᴛᴇ A Lɪᴠᴇ
- Kᴏɴᴏ Nᴀᴋᴀ ɴɪ Hɪᴛᴏʀɪ, Iᴍᴏᴜᴛᴏ ɢᴀ Iʀᴜ
- Oɴɪɪ - Cʜᴀɴ Dᴀᴋᴇᴅᴏ Aɪ Sᴀʀᴇʙᴀ Kᴀɴᴋᴇɪ Nᴀɪʏᴏɴᴇ
- Oʀᴇ ɴᴏ Nᴏᴜɴᴀɪ Sᴇɴᴛᴀᴋᴜsʜɪ ɢᴀ, Gᴀᴋᴜᴇɴ Lᴏᴠᴇ Cᴏᴍᴇᴅʏ Zᴇɴʀʏᴏᴋᴜ ᴅᴇ Jᴀᴍᴀ Sʜɪᴛᴇʀᴜ 
- Oʀᴇ ɴᴏ Kᴀɴᴏᴊᴏ ᴛᴏ Osᴀɴᴀɴᴀᴊɪᴍɪ ɢᴀ Sʜᴜʀᴀʙᴀ Sᴜɢɪʀᴜ
- Kᴀɴᴏᴋᴏɴ
- Rᴏᴋᴜᴊᴜᴍᴀ ɴᴏ Sʜɪɴʀʏᴀᴋᴜsʜᴀ
- Nɪsᴇᴋᴏɪ
- Sᴀᴇɴᴀɪ Hᴇʀᴏɪɴᴇ Sᴏᴅᴀᴛᴇᴋᴀᴛᴀ
- Bᴏᴋᴜ ᴡᴀ Tᴏᴍᴏᴅᴀᴄʜɪ ɢᴀ Sᴜᴋᴜɴᴀɪ
- Kᴀᴍɪ Nᴏᴍɪ ᴢᴏ Sʜɪʀᴜ Sᴇᴋᴀɪ
- Rᴇɴᴀɪ Bᴏᴜᴋᴜɴ
- Iɴғɪɴɪᴛᴇ Sᴛʀᴀᴛᴏs
- Yᴏsᴜɢᴀ ɴᴏ Sᴏʀᴀ

GENRE COMEDY

- Gɪɴᴛᴀᴍᴀ 
- Tᴀɴᴀᴋᴀ - ᴋᴜɴ ᴡᴀ Iᴛsᴜᴍᴏ Kᴇᴅᴀʀᴜɢᴇ
- Wᴏʀᴋɪɴɢ!!!
- Bᴀʀᴀᴋᴀᴍᴏɴ
- Bʟᴇɴᴅ S
- Hɪᴍᴏᴜᴛᴏ Uᴍᴀʀᴜ - Cʜᴀɴ
- Nᴇᴡ Gᴀᴍᴇ
- Aɴɪᴍᴇɢᴀᴛᴀʀɪs
- Gᴇᴋᴋᴀɴ Sʜᴏᴜᴊᴏ Nᴏᴢᴀᴋɪ - ᴋᴜɴ
- Gᴀʙʀɪᴇʟ DʀᴏᴘOᴜᴛ
- Kᴏʙᴀʏᴀsʜɪ - ᴄʜᴀɴ Cʜɪ ɴᴏ Mᴀɪᴅ Dʀᴀɢᴏɴ
- Dᴀɴsʜɪ Kᴏᴜᴋᴏsᴇɪ ɴᴏ Nɪᴄʜɪᴊᴏᴜ 

GENRE ROMANCE

- Iᴍᴏᴜᴛᴏ Sᴀᴇ Iʀᴇʙᴀ Iɪ
- Eʀᴏᴍᴀɴɢᴀ Sᴇɴsᴇɪ
- Oʀᴇ ɴᴏ Iᴍᴏᴜᴛᴏ Kᴏɴɴᴀɴɪ Kᴀᴡᴀɪɪ Wᴀᴋᴇ ɢᴀ Nᴀɪ
- Yᴀʜᴀʀɪ Oʀᴇ ɴᴏ Sᴇɪsʜᴜᴜɴ ᴡᴀ Lᴏᴠᴇ Cᴏᴍᴇᴅʏ Mᴀᴄʜɪɢᴀᴛᴛᴇɪʀᴜ
- Bᴏᴋᴜ ᴡᴀ Tᴏᴍᴏᴅᴀᴄʜɪ ɢᴀ Sᴜᴋᴜɴᴀɪ
- Kᴀᴍɪsᴀᴍᴀ Hᴀᴊɪᴍᴇᴍᴀsʜɪᴛᴀ

GENRE ACTION

- Fᴀᴛᴇ/Sᴛᴀʏ Nɪɢʜᴛ 
- UQ Hᴏʟᴅᴇʀ! Mᴀʜᴏᴜ Nᴇɢɪᴍᴀ Sᴇɴsᴇɪ 2
- Aʙsᴏʟᴜᴛᴇ Dᴜᴏ
- Rᴏᴋᴜᴅᴇɴᴀsʜɪ Mᴀᴊᴜᴛsᴜ Kᴏᴜsɪ ɴᴏ Aᴋᴀsʜɪᴄ Rᴇᴄᴏʀᴅ
- Oᴠᴇʀʟᴏʀᴅ
- Kᴇᴋᴋᴀɪ Sᴇɴsᴇɴ
- Sᴡᴏʀᴅ Aʀᴛ Oɴʟɪɴᴇ
- Gᴜɪʟᴛʏ Cʀᴏᴡɴ
- Sᴀɪᴊᴀᴋᴜ Mᴜʜᴀɪ ɴᴏ Bᴀʜᴀᴍᴜᴛ
- Iɴғɪɴɪᴛᴇ Sᴛʀᴀᴛᴏs
- Sᴛᴇɪɴ Gᴀᴛᴇ
- Tᴏᴀʀᴜ Kᴀɢᴀᴋᴜ ɴᴏ Rᴀɪʟɢᴜɴ
- Bʟᴀᴄᴋ Bᴜʟʟᴇᴛ
- Iɴᴜʏᴀsʜɪᴋɪ
- Oɴᴇ Pᴜɴᴄʜ Mᴀɴ
- Mᴏʙ Psʏᴄʜᴏ 100
- Gᴀᴋᴜsᴇɴ Tᴏsʜɪ Asᴛᴇʀɪsᴋ
- Sʜɪɴᴍᴀɪ Mᴀᴏᴜ ɴᴏ Tᴇsᴛᴀᴍᴇɴᴛ
- Bᴜɴɢᴏᴜ Sᴛʀᴀʏ Dᴏɢs

GENRE PHSYCOLOGICAL
- Iɴᴜʏᴀsʜɪᴋɪ
- Mᴀᴅᴏᴋᴀ Mᴀɢɪᴄᴀ
- Mɪʀᴀɪ Nɪᴋᴋɪ
- Kᴀᴋᴇɢᴜʀᴜɪ
- K-Pʀᴏᴊᴇᴄᴛ
- Gʀɪsᴀɪᴀ ɴᴏ Rᴀᴋᴜᴇɴ & Kᴀᴊɪᴛsᴜ
- Dᴇᴀᴛʜ Nᴏᴛᴇ
- Dᴇᴀᴛʜ Pᴀʀᴀᴅᴇ
- Dᴇᴀᴅᴍᴀɴ Wᴏɴᴅᴇʀʟᴀɴᴅ
- Rᴇ : Zᴇʀᴏ Kᴀʀᴀ Hᴀᴊɪᴍᴇʀᴜ Isᴇᴋᴀɪ Sᴇɪᴋᴀᴛsᴜ
- Dᴀɴɢᴀɴʀᴏɴᴘᴀ
- BTOOOM!
- Psʏᴄʜᴏ Pᴀss
- Kɪsᴇɪᴊᴜᴜ : Sᴇɪ ɴᴏ Kᴀᴋᴜʀɪᴛsᴜ
- Tᴏᴋʏᴏ Gʜᴏᴜʟ
- NHK ɴɪ Yᴏᴜᴋᴏsᴏ 

GENRE GAME & ISEKAI

- Mᴏɴᴅᴀɪᴊɪ - ᴛᴀᴄʜɪ ɢᴀ Isᴇᴋᴀɪ Kᴀʀᴀ Kᴜʀᴜ Sᴏ Dᴇsᴜ Yᴏ?
- Nᴏ Gᴀᴍᴇ Nᴏ Lɪғᴇ
- Aᴄᴄᴇʟ Wᴏʀʟᴅ
- Kᴏɴᴏ Sᴜʙᴀʀᴀsʜɪ Isᴇᴋᴀɪ Sᴏɴᴏ Sʜᴜᴋᴜғᴜᴋᴜ ᴡ
- 3 Gᴀᴛsᴜ ɴᴏ Lɪᴏɴ
- Sᴡᴏʀᴅ Aʀᴛ Oɴʟɪɴᴇ
- Mᴀᴅᴀɴ Oᴜ Vᴀɴᴀᴅɪs

GENRE MYSTERI

- Sᴀᴋᴜʀᴀᴅᴀ Rᴇsᴇᴛ
- Hʏᴏᴜᴋᴀ
- Mᴏɴᴏɢᴀᴛᴀʀɪ ᴜʀᴜᴛᴀɴ ᴄᴇʀɪᴛᴀɴʏᴀ
1. Kɪᴢᴜᴍᴏɴᴏɢᴀᴛᴀʀɪ 
2. Nᴇᴋᴏᴍᴏɴᴏɢᴀᴛᴀʀɪ : Kᴜʀᴏ
3. Bᴀᴋᴇᴍᴏɴᴏɢᴀᴛᴀʀɪ
4. Nɪsᴇᴍᴏɴᴏɢᴀᴛᴀʀɪ
5. Mᴏɴᴏɢᴀᴛᴀʀɪ Sᴇʀɪᴇs Sᴇᴄᴏɴᴅ Sᴇᴀsᴏɴ
6. Tsᴜᴋɪᴍᴏɴᴏɢᴀᴛᴀʀɪ
7. Kᴏʏᴏᴍɪᴍᴏɴᴏɢᴀᴛᴀʀɪ (Dᴜʀᴀsɪ 12 ᴍɪɴ)
8. Oᴡᴀʀɪᴍᴏɴᴏɢᴀᴛᴀʀɪ S1
9. Oᴡᴀʀɪᴍᴏɴᴏɢᴀᴛᴀʀɪ S2
10. Hᴀɴᴀᴍᴏɴᴏɢᴀᴛᴀʀɪ
- Dᴀɴɢᴀɴʀᴏɴᴘᴀ
- Mɪʀᴀɪ Nɪᴋᴋɪ
- Dᴇᴀᴛʜ Nᴏᴛᴇ
- Bʟᴀᴄᴋ Bᴜʟʟᴇᴛ
- Aɴᴏᴛʜᴇʀ

SPORT :

- Yᴀᴡᴀᴍᴜsʜɪ ᴘᴇᴅᴀʟ
- Mᴀᴊᴏʀ
- Eʏᴇsʜɪʟᴇᴅ 21
- Dɪᴀᴍᴏɴᴅ ɴᴏ ᴀᴄᴇ
- Sʟᴀᴍ ᴅᴜɴᴋ
- Hᴀᴊɪᴍᴇ ɴᴏ ɪᴘᴘᴏ
- Fʀᴇᴇ
- Pɪɴɢ ᴘᴏɴɢ ᴛʜᴇ ᴀɴɪᴍᴀᴛɪᴏɴ
- Bᴀʙʏ sᴛᴇᴘ
- Aʀᴇᴀ ɴᴏ ᴋɪsʜɪ
- Cᴀᴘᴛᴇɪɴ ᴛsᴜʙᴀᴀᴀ
- Aɪʀ ɢᴇᴀʀ
- Cʜɪʜᴀғᴜʏᴜ
- Cʀᴏss ɢᴀᴍᴇ
- Iɴᴀᴢᴜᴍᴀ ᴇʟᴇᴠᴇɴ

 ROMANCE SAD

- Kɪᴍɪᴋɪss ᴘᴜʀᴇ ʀᴀᴏᴜɢᴇ
- Kᴀᴍɪᴋɪss
- Tᴏʀᴀᴅᴏʀᴀ
- Lᴏᴠᴇʟʏ ᴄᴏᴍᴘʟᴇx
- Sᴀᴋᴜʀᴀsᴏᴜ
- Wʜɪᴛᴇ ᴀʟʙᴜᴍ
- Tᴏɴᴀʀɪ ɴᴏ ᴋᴀɪʙᴜᴛsᴜ-ᴋᴜɴ
- 11ᴇʏᴇs
- Aɴɢᴇʟ ʙᴇᴀᴛs
- Pʟᴀsᴛɪᴄ ᴍᴇᴍᴏʀɪᴇ
- Aᴋᴀᴍᴇ ɢᴀ ᴋɪʟʟ
- Aᴋᴀᴛsᴜᴋɪ ɴᴏ ʏᴏɴᴀ
- Bᴇʀsᴇʀᴋ
- Sᴀᴏ
- Bᴏᴋᴜ ᴡᴀ ᴛᴏᴍᴏᴅᴀᴄʜɪ ᴡᴀ sᴜᴋᴜɴᴀɪ
- Bᴏᴋᴜʀᴀ ᴡᴀ ᴍɪɴɴᴀ ᴋᴀᴡᴀɪsᴏᴜ
- Bᴛᴏᴏᴏᴍ
- Bᴜɴɢᴀᴋᴜ sʜᴏᴜᴊᴏ
- C ᴛʜᴇ ᴍᴏɴᴇʏ ᴏғ sᴏᴜʟ ᴀɴᴅ ᴘᴏssɪʙɪʟɪᴛʏ ᴄᴏɴᴛʀᴏʟ
- Cʜᴀʀʟᴏᴛᴛᴇ
- Cʜɪʜᴀʏᴀғᴜʏᴜ
- Cʜᴜᴜɴɪʙʏᴏᴜ
- Cʟᴀɴɴᴀᴅ
- Dᴀɴᴄᴇ ɪɴ ᴛʜᴇ ᴠᴀᴍᴘɪʀᴇ ʙᴜɴᴅ
- Dᴀɴsᴀɪ ʙᴜɴʀɪ ɴᴏ ᴄʀɪᴍᴇ ᴇᴅɢᴇ
- Dᴀʀᴋᴇɴ ᴛʜᴀɴ ʙʟᴀᴄᴋ
- Dᴇᴠɪʟs ʟɪɴᴇ
- Dᴀᴛᴇ ᴀ ʟɪᴠᴇ
- Dᴇ ᴄᴀᴘɪ sᴇʀɪᴇs
- Tʀᴜᴇᴇ ᴛᴇᴀʀs
- ᴅᴇᴀᴅᴍᴇᴀɴ ᴡᴏɴᴅᴇʀʟᴀɴᴅ
- ʙʟᴏᴏᴅ ʟᴀᴅ
- ᴅᴇɴsᴇᴛsᴜ ɴᴏ ʏᴜsᴀ ɴᴏ ᴅᴇɴsᴇᴛsᴜ
- ᴋʏᴏᴜᴋᴀɪ ɴᴏ ᴋᴀɴᴀᴛᴀ
- Fᴀᴛᴇ/sᴛᴀʏ 
- Mᴀɢɪ
- Gᴇᴋᴋᴀɴ sʜᴏᴜᴊᴏ
- Gᴏʟᴅᴇɴ ᴛɪᴍᴇ
- Gᴜɪʟᴛʏ ᴄʀᴏᴡɴ
- Gᴏsɪᴄᴋ
- Hᴇɴᴛᴀɪ ᴏᴜᴊɪ ᴛᴏ ᴡᴀʀᴀᴡᴀɴᴀɪ ɴᴇᴋᴏ
- Kɪsᴇɪᴊᴜᴜ
- Kᴏᴋᴏʀᴏ ᴄᴏɴɴᴇᴄᴛ
- Mɪᴋᴀᴋᴜɴɪɴ
- Mɪʀᴀɪ ɴɪᴋɪ
- Nᴀɢɪ ɴᴏ ᴀsᴜᴋᴀʀᴀ
- Oʀᴇʟᴍᴏ
- Pᴜɴᴄʜ ʟɪɴᴇ
- Rᴏᴋᴋᴀ ɴᴏ ʏᴜᴜsʜᴀ
- Sʜɪɢᴀᴛᴜ ᴡᴀ ᴋɪᴍɪ ɴᴏ ᴜsᴏ
- Kᴏᴛᴏɴᴏʜᴀ ɴᴏ ᴍɪᴡᴀ
- Kɪᴍɪ ɴᴏ ɴᴀᴡᴀ
- Kᴀɪᴄʜᴏᴜ ᴡᴀ ᴍᴀɪᴅ sᴀᴍᴀ
- Oʀᴇɢᴀɪʀᴜ
- Oᴏᴋᴀᴍɪ ɴᴏ ᴋᴏᴜsʜɪɴʀʏᴏᴜ
- Zᴇʀᴏ ɴᴏ ᴛsᴜᴋᴀɪᴍᴀ
- Asᴛᴇʀɪᴋ
- Kᴏʀᴇ ᴡᴀ ᴢᴏᴍʙɪᴇ ᴅᴇsᴜ ᴋᴀ
- Kᴏᴇ ɴᴏ ᴋᴀᴛᴀᴄʜɪ
- Kɪᴍɪ ɴᴏ ᴛᴇᴅᴏᴋᴇ
- Rᴇʟɪғᴇ
- Tsᴜᴋɪɢᴀ ᴋɪʀᴇɪ
- Tᴀᴍᴀᴋᴏ ᴍᴀʀᴋᴇᴛ
- Sᴜᴋɪᴛᴛᴇ ʟɪ ɴᴀʏᴏᴜ
- Oʀᴇ ᴍᴏɴᴏɢᴀᴛᴀʀɪ
- Mᴏɴᴏɢᴀᴛᴀʀɪ
- Aᴋᴀɢᴀᴍɪ ɴᴏ sʜɪʀᴀʏᴜᴋɪ
- Sᴀɴᴋᴀʀᴇᴀ
- Aᴍᴀɢᴀᴍɪ ss
- Issᴜᴋᴀɴ ғʀɪᴇɴᴅ
- Aᴏ ʜᴀʀᴜ ʀɪᴅᴇ
- Nɪᴊɪʀᴏ ᴅᴀʏs
- Fᴜᴜᴋᴀ
- Aɴᴏ ʜᴀɴᴀ
- Yᴏsᴜɢᴀ ɴᴏ sᴏʀᴀ
MYSTERI:
- Dᴇᴀᴛʜ ɴᴏᴛᴇ
- Gᴏsɪᴄᴋ
- Bᴏᴋᴜ ᴅᴀᴋᴇ ɢᴀ ɪɴᴀɪ ᴍᴀᴄʜɪ
- Bᴀᴄᴄᴀɴᴏ
- Dᴜʀᴀʀᴀʀᴀ
- Sʜɪɴsᴇᴋᴀɪ ʏᴏʀɪ
- Bᴀᴋᴇᴍᴏɴᴏɢᴀᴛᴀʀɪ
- Dᴇᴀᴛʜ ᴘᴀʀᴀᴅᴇ
- Dᴀʀᴋᴇɴ ᴛʜᴀɴ ʙʟᴀᴄᴋ
- Zᴀᴛsᴜᴇɴ ɴᴏ ᴛᴇᴍᴘᴇsᴛ
- Eғ: A ᴛᴀʟᴇ ᴍᴇʟᴏᴅɪᴇs
- Hɪɢᴜʀᴀsʜɪ ɴᴏ ɴᴀᴋᴜ ᴋᴏʀᴏ ɴɪ
- Pᴀᴘʀɪᴋᴀ
- Tɪɢᴇʀ ᴀɴᴅ ʙᴜɴɴʏ
- Tᴀsᴏɢᴀʀᴇ ᴏᴛᴏᴍᴇ x ᴀᴍɴᴇsɪᴀ
- Mɪʀᴀɪ ɴɪᴋɪ
- Tᴏᴋʏᴏᴜ ɢʜᴏᴜʟ
- Eʀɢᴏ ᴘʀᴏxʏ 
- Aɴᴏᴛʜᴇʀ
- Yᴀᴍᴀᴅᴀ ᴋᴜɴ ᴛᴏ 7 ɴɪɴ ɴᴏ ᴍᴀᴊᴏ
- Gᴀᴋᴋᴏᴜ ɢᴜʀᴀsʜɪ
- Kᴀᴍɪsᴀᴍᴀ ɴᴏ ᴍᴇᴍᴏᴄʜᴏᴜ
- Hᴀᴍᴀᴛᴏʀᴀ
- Bʟᴀᴄᴋ ʙᴜʟʟᴇᴛ
- Kᴀᴍɪsᴀᴍᴀ ɴᴏ ɪɴᴀɪ ɴɪᴄʜɪʏᴜʙɪ
- Dᴀɴᴛᴀʟɪᴀɴ ɴᴏ sʜᴏᴋᴀ
- Kᴜᴊɪʀᴀ ɴᴏ ᴋᴏʀᴀ ᴡᴀ sᴀᴊᴏᴜ ɴɪ  ᴊᴀᴍ
- Sᴜʙᴇᴛᴇ ɢᴀ ғ ɴɪ ɴᴀʀᴜ
- Gᴀᴋᴜᴋᴏᴋᴜ ɴᴏ ʙʀʏɴʜɪʟᴅʀ
- Sᴇɪᴋɪᴍᴀᴛsᴜ ᴏᴄᴄᴜʟᴛ ɢᴀᴋᴜɪɴ
- Kᴏɴɪ ɴᴀᴋᴀ ɴɪ ʜɪᴛᴏʀɪ ɪᴍᴏᴜᴛᴏ ɢᴀ ɪʀᴜ 
- Mᴀʏᴏɪɢᴀ
- Kʏᴏᴛᴏ ᴛᴇʀᴀᴍᴀᴄʜɪ sᴀɴᴊᴏᴜ ɴᴏ ʜᴏʟᴍᴇs
- 18ɪғ
- ᴏᴜsᴀᴍᴀ ɢᴀᴍᴇ ᴛʜᴇ ᴀɴɪᴍᴀᴛɪᴏɴ
- ᴍᴀᴅᴇ ɪɴ ᴀʙʏss

COMEDY SCHOOL :
- Pʀᴇsᴏɴ sᴄʜᴏᴏʟ
- Gᴇᴋᴋᴀɴ sʜᴏᴜᴊᴏ ɴᴏᴢᴀᴋɪ ᴋᴜɴ
- Bᴇᴇʟᴢᴇʙᴜʙ
- Sʜɪᴍᴏɴᴇᴛᴀ
- Aʜᴏ ɢɪʀʟ
- Tᴀɴᴀᴋᴀ ᴋᴜɴ
- D ғʀᴀɢ
- Hᴀɴᴅᴀ ᴋᴜɴ
- Tᴏɴᴀʀᴜ ɴᴏ sᴇᴋɪ ᴋᴜɴ
- Aɴsᴀᴛsᴜ ᴋʏᴏᴜsʜɪᴛᴇ
- Sᴀɪᴋɪ ᴋᴜsᴜᴏ
- Tᴏʀᴀᴅᴏʀᴀ
- Bᴀᴋᴀ ᴛᴏ ᴛᴇsᴛ
- Sᴀᴋᴀᴍᴏᴛᴏ ᴅᴇsᴜ ɢᴀ
- Gʀᴇᴀᴛ ᴛᴇᴀᴄʜsʀ ᴏɴɪᴢᴜᴋᴀ
- Nɪᴄʜɪᴊᴏᴜ
- Sᴋᴇᴛ ᴅᴀɴᴄᴇ
- Dᴀɴsʜɪ ᴋᴏᴜᴋᴏᴜsᴇɪ ɴᴏ ɴɪᴄʜɪᴊᴏ

Aɴɪᴍᴇ ᴅᴜʀᴀsɪ ᴘᴇɴᴅᴇᴋ:
Aʜᴏ ɢɪʀʟ
Tsᴜʀᴇᴛᴢᴜʀᴇ ᴄʜɪʟᴅᴇʀɴ
Uᴄʜᴜᴜ sᴇɴᴋᴀɴ ᴛɪʀᴀᴍɪsᴜ
Mᴀɴɢᴀᴋᴀ sᴀɴ ᴛᴏ ᴀssɪsᴛᴀɴᴛ sᴀɴ
Tᴏɴᴀʀɪ ɴᴏ sᴇᴋɪ ᴋᴜɴ
Dᴀɴɴᴀ ɢᴀ ɪᴛᴛᴇɪʀᴜ ᴋᴀ ᴡᴀᴋᴀʀᴀɴᴀɪ ᴋᴇɴ
Fᴜᴍɪᴋɪʀɪ ᴊɪᴋᴀɴ
Oɴᴇᴇ ᴄʜᴀɴ ɢᴀ ᴋɪᴛᴀ
Osᴀᴋᴇ ғᴜғᴜ ɴɪɴᴀᴛᴛᴇ
Aᴄᴛɪᴏɴ Sᴜᴘᴇʀɴᴀᴛᴜʀᴀʟ :
- Sᴀɪᴋɪ ᴋᴜsᴜᴏ
- Oᴠᴇʀʟᴏʀᴅ
- Hᴀᴛᴀʀᴀᴋᴜ ᴍᴀᴏ sᴀᴍᴀ
- Mᴀʜᴏᴜᴋᴀ ᴋᴏᴜᴋᴀ
- Bʟᴏᴏᴅ ʟᴀᴅ
- Sᴀᴏ
- Nᴀɴᴀᴛsᴜ ɴᴏ ᴛᴀɪᴢᴀɪ
- Aɴsʏᴀᴛsᴜ ᴋʏᴏᴜʜɪᴛsᴜ
- Cᴏᴅᴇ ɢᴇᴀss
- Nᴏ ɢᴀᴍᴇ ɴᴏ ʟɪғᴇ
- Mᴏʙ ᴘsʏᴄᴏ 100
- Mᴏɴᴅᴀɪᴊɪ-ᴛᴀᴄʜɪ ɢᴀ ɪsᴇᴋᴀɪ ᴋᴀʀᴀ ᴋᴜʀᴜ ᴢᴏᴜ ᴅᴇsᴜ ʏᴏ

Rᴏᴍᴀɴᴄᴇ Sʜᴏᴜᴊᴏ
- Sᴀᴇɪᴋᴀɴᴏ
- Sᴘᴇᴄɪᴀʟ A
- Cᴏᴄᴏʀᴏ ᴄᴏɴɴᴇᴄᴛ
- Kᴀᴍɪsʜᴀᴍᴀ ʜᴀᴊɪᴍᴇᴍᴀsʜɪᴛᴀ
- Lᴏᴠᴇʟʏ ᴄᴏᴍᴘʟᴇx
- Gᴏʟᴅᴇɴ ᴛɪᴍᴇ
- Tᴏɴᴀʀɪ ɴᴏ ᴋᴀɪʙᴜᴛsᴜ-ᴋᴜɴ
- Sɪᴋɪᴛᴛᴇ ʟɪ ɴᴀ ʏᴏ
- Bᴀᴋᴀ ᴛᴏ ᴛᴇsᴛ
- Cʜᴜᴜɴɪʙʏᴏᴜ
- Aɴᴏ ɴᴀᴛsᴜ ᴅᴇ ᴍᴀᴛᴛᴇʀᴜ
- Aᴏ ʜᴀʀᴜ ʀɪᴅᴇ
- Nɪᴊɪʀᴏ ᴅᴀʏs
- Rᴇ ᴢᴇʀᴏ ᴋᴀʀᴀ
- Dᴇɴsᴇᴛsᴜ ɴᴏ ʏᴜᴜsʜᴀ ɴᴏ ᴅᴇɴsᴇᴛsᴜ
- Dᴀɴᴍᴀᴄʜɪ
- Sᴜᴋᴀsᴜᴋᴀ
- Rᴀᴋᴜᴅᴀʏ ᴋɪsʜʏ ɴᴏ ᴄᴀᴠᴀʟʀʏ
- Cᴏᴅᴇ:Rᴇᴀʟɪᴢᴇ
- Cᴏᴅᴇ ʙʀᴇᴀᴋᴇʀ
- ᴢᴇʀᴏ ɴᴏ ᴛsᴜᴋᴀɪᴍᴀ

Cʜᴀʀᴀ GENIUS :
-ᴍᴀsᴀᴍᴜɴᴇ ᴋᴜɴ ɴᴏ ʀᴇᴠᴇɴɢᴇ
-ᴀᴍᴀɢɪ ʙʀɪʟʟɪᴀɴᴛ ᴘᴀʀᴋ
-ʜʏᴏᴜᴋᴀ
-ᴏʀᴇɢᴀɪʀᴜ
-ᴛᴀɴᴀᴋᴀ ᴋᴜɴ
-ᴋɪsʜᴜᴋᴜ ɢᴀᴋᴋᴏᴜ ᴊᴜʟʟɪᴇᴛ
-ʏᴏᴜᴋᴏsᴏ ᴊᴏᴛsᴜʀʏᴏᴋᴜ sʜɪᴊᴏᴜ sʜᴜɢɪ ɴᴏ ᴋʏᴏᴜsʜɪᴛsᴜ ᴇ
-ᴀᴍᴀɢᴀᴍɪ SS
HOROR:
- Gʜᴏsᴛ ᴀᴛ sᴄʜᴏᴏʟ
- Bᴏᴏɢɪᴇᴘᴏᴘ ᴘʜᴀɴᴛᴏᴍ
- Pᴇᴛ sʜᴏᴘs ᴏғ ʜᴏʀʀᴏʀ
- Cᴀᴛ sᴏᴜᴘ
- Hɪʜᴜʀᴀsʜɪ ɴᴏ ɴᴀᴋᴜ ᴋᴏʀᴏ ɴɪ

- Iᴛᴏᴜ ᴊᴜɴᴊɪ
- Aɴᴏᴛʜᴇʀ
- Kᴏᴡᴀʙᴏɴ
- Bʟᴏᴏᴅ ᴄ
- Bʟᴏᴏᴅ +
- Kᴀᴋᴜʀᴇɴʙᴏ
- Jɪᴋᴏɢᴜ sʜᴏᴜᴊᴏ
- Gʜᴏsᴛ ʜᴜɴᴛ
- Kᴀɢᴇᴡᴀɴɪ
- Yᴀᴍɪ sʜɪʙᴀɪɪ
- Hɪɢᴜʀᴀsʜɪ ɴᴏ ɴᴀᴋᴜ ᴋᴏʀᴏ ɴɪ
- Cᴏʀᴘsᴇ ᴘᴀʀᴛʏ
- Sᴇʀɪᴀʟ ᴇxᴘᴇʀɪᴍᴇɴᴛ ʟᴀɪɴ
- Eʟғᴇɴ ʟᴇɪᴅ
- Sʜɪᴋɪ
- Gᴀɴᴛᴢ
- Gʏᴏ : Tᴏᴋʏᴏ ғɪsʜ ᴀᴛᴛᴀᴄᴋ
- Tᴏᴋʏᴏ ɢʜᴏᴜʟ
- Kɪsᴇɪᴊᴜ
- Mᴏɴᴏɴᴏᴋᴇ
- Aᴊɪɴ
- Gᴀᴋᴋᴏᴜɢᴜʀᴀsʜɪ
- Dᴇᴀᴅᴍᴀɴ ᴡᴏɴᴅᴇʀʟᴀɴᴅ
- Hᴇʟʟsɪɴɢ
Cᴀʀɪ ʏɢ ʟᴜ sᴜᴋᴀ
[11/5 20:43] Eʟғ: Rᴇᴋᴏᴍᴇɴᴅᴀsɪ Aɴɪᴍᴇ

Aᴄᴛɪᴏɴ
1. Oɴᴇ Pɪᴇᴄᴇ
2. Nᴀʀᴜᴛᴏ
3. Dʀᴀɢᴏɴ Bᴀʟʟ
4. Sʜɪɴɢᴇᴋɪ ɴᴏ Kʏᴏᴊɪɴ
5. Oɴᴇ Pᴜɴᴄʜ Mᴀɴ
6. Hᴜɴᴛᴇʀ x Hᴜɴᴛᴇʀ
7. Bʟᴇᴀᴄʜ
8. Cᴏᴅᴇ: Bʀᴇᴀᴋᴇʀ
9. Fᴜʟʟᴍᴇᴛᴀʟ Aʟᴄʜᴇᴍɪsᴛ : Bʀᴏᴛʜᴇʀʜᴏᴏᴅ
10. Fᴀɪʀʏ Tᴀɪʟ
11. Gɪɴᴛᴀᴍᴀ
12. Sᴡᴏʀᴅ Aʀᴛ Oɴʟɪɴᴇ
13. 91 Dᴀʏs
14. Aᴄᴄᴇʟ Wᴏʀʟᴅ
15. Aɪʀ Gᴇᴀʀ
16. Aᴋᴀᴍᴇ ɢᴀ Kɪʟʟ!
17. Aʟᴅɴᴏᴀʜ.Zᴇʀᴏ
18. Aɴsᴀᴛsᴜ Kʏᴏᴜsʜɪᴛsᴜ
19. Aᴏ ɴᴏ Exᴏʀᴄɪsᴛ
20. Aʀsʟᴀɴ Sᴇɴᴋɪ
21. Bᴀᴄᴄᴀɴᴏ!
22. Bᴇᴇʟᴢᴇʙᴜʙ
23. Bᴇʀsᴇʀᴋ
24. Bʟᴀᴄᴋ Bᴜʟʟᴇᴛ
25. Bʟᴏᴏᴅ Lᴀᴅ
26. Bʟᴏᴏᴅ+
27. Bᴏᴋᴜ ɴᴏ Hᴇʀᴏ Aᴄᴀᴅᴇᴍɪᴀ
28. Bᴏʀᴜᴛᴏ
29. Bᴛᴏᴏᴏᴍ!
30. Cʟᴀʏᴍᴏʀᴇ
31. Cᴏᴅᴇ Gᴇᴀss
32. Cᴏᴡʙᴏʏ Bᴇʙᴏᴘ
33. D.Gʀᴀʏ-ᴍᴀɴ
34. Dᴀɴɢᴀɴʀᴏɴᴘᴀ Sᴇʀɪᴇs
35. Dᴀʀᴋᴇʀ ᴛʜᴀɴ Bʟᴀᴄᴋ Sᴇʀɪᴇs
36. Dᴇᴀᴅᴍᴀɴ Wᴏɴᴅᴇʀʟᴀɴᴅ
37. Fᴀᴛᴇ Sᴇʀɪᴇs
38. Fʟᴀᴍᴇ ᴏғ Rᴇᴄᴄᴀ
39. Fᴜʟʟ Mᴇᴛᴀʟ Pᴀɴɪᴄ!
40. Gᴀɴɢsᴛᴀ
41. Gᴀɴᴛᴢ
42. Gᴀ-Rᴇɪ: Zᴇʀᴏ
43. Gᴏᴅ Eᴀᴛᴇʀ
44. Gᴜɪʟᴛʏ Cʀᴏᴡɴ
45. Hᴇʟʟsɪɴɢ
46. Hɪɢᴀsʜɪ ɴᴏ Eᴅᴇɴ
47. Hɪɢʜsᴄʜᴏᴏʟ ᴏғ ᴛʜᴇ Dᴇᴀᴅ
48. IɴᴜYᴀsʜᴀ
49. K (Pʀᴏᴊᴇᴄᴛ K)
50. Kᴀᴛᴀɴᴀɢᴀᴛᴀʀɪ
51. Kᴀᴛᴇᴋʏᴏ Hɪᴛᴍᴀɴ Rᴇʙᴏʀɴ!
52. Kɪʟʟ ʟᴀ Kɪʟʟ
53. Kɪsᴇɪᴊᴜᴜ: Sᴇɪ ɴᴏ Kᴀᴋᴜʀɪᴛsᴜ
54. Kᴏᴜᴛᴇᴛsᴜᴊᴏᴜ ɴᴏ Kᴀʙᴀɴᴇʀɪ
55. Kᴜʀᴏsʜɪᴛsᴜᴊɪ (Bʟᴀᴄᴋ Bᴜᴛʟᴇʀ)
56. Mᴀɢɪ Sᴇʀɪᴇs
57. Mɪʀᴀɪ Nɪᴋᴋɪ
58. Mᴏʙ Psʏᴄʜᴏ 100
59. Nᴀɴᴀᴛsᴜ ɴᴏ Tᴀɪᴢᴀɪ
60. Nᴇᴏɴ Gᴇɴᴇsɪs Eᴠᴀɴɢᴇʟɪᴏɴ
61. Nᴏʀᴀɢᴀᴍɪ
62. Nᴜʀᴀʀɪʜʏᴏɴ ɴᴏ Mᴀɢᴏ
63. Oᴠᴇʀʟᴏʀᴅ
64. Oᴡᴀʀɪ ɴᴏ Sᴇʀᴀᴘʜ
65. Psʏᴄʜᴏ-Pᴀss
66. Rᴜʀᴏᴜɴɪ Kᴇɴsʜɪɴ
67. Sᴀᴍᴜʀᴀɪ Cʜᴀᴍᴘʟᴏᴏ
68. Sʜᴀᴋᴜɢᴀɴ ɴᴏ Sʜᴀɴᴀ
69. Sʜɪᴊᴏᴜ Sᴀɪᴋʏᴏᴜ ɴᴏ Dᴇsʜɪ Kᴇɴɪᴄʜɪ
70. Sʜɪɴɢᴇᴋɪ ɴᴏ Bᴀʜᴀᴍᴜᴛ Sᴇʀɪᴇs
71. Sᴏᴜʟ Eᴀᴛᴇʀ
72. Sᴛʀɪᴋᴇ ᴛʜᴇ Bʟᴏᴏᴅ
73. Tᴀʟᴇs ᴏғ Zᴇsᴛɪʀɪᴀ ᴛʜᴇ X
74. Tᴏᴀʀᴜ Sᴇʀɪᴇs
75. Tᴏᴋʏᴏ Gʜᴏᴜʟ
76. Usʜɪᴏ ᴛᴏ Tᴏʀᴀ
77. Zᴇᴛsᴜᴇɴ ɴᴏ Tᴇᴍᴘᴇsᴛ

Aᴅᴠᴇɴᴛᴜʀᴇ
1. Oɴᴇ Pɪᴇᴄᴇ
2. Mᴜsʜɪsʜɪ
3. Zᴇʀᴏ ɴᴏ Tsᴜᴋᴀɪᴍᴀ
4. Mᴀᴅᴇ Iɴ Aʙʏss
5. Cʟᴀʏᴍᴏʀᴇ
6. BTOOOM
7. Sʜɪɴɢᴇᴋɪ ɴᴏ Bᴀʜᴀᴍᴜᴛ Sᴇʀɪᴇs
8. Rᴏᴋᴋᴀ Nᴏ Yᴜᴜsʜᴀ
9. Fᴜʟʟᴍᴇᴛᴀʟ Aʟᴄʜᴇᴍɪsᴛ: Bʀᴏᴛʜᴇʀʜᴏᴏᴅ
10. Mᴀɢɪ Sᴇʀɪᴇs
11. Hᴜɴᴛᴇʀ x Hᴜɴᴛᴇʀ 
12. Aᴋᴀᴛsᴜᴋɪ ɴᴏ Yᴏɴᴀ 
13. Nᴀʀᴜᴛᴏ Sᴇʀɪᴇs
14. Oᴏᴋᴀᴍɪ ᴛᴏ Kᴏᴜsʜɪɴʀʏᴏᴜ 
15. Fᴀɪʀʏ Tᴀɪʟ
16. Hᴏᴡʟ ɴᴏ Uɢᴏᴋᴜ Sʜɪʀᴏ
17. Kᴀᴛᴀɴᴀɢᴀᴛᴀʀɪ 
18. Cᴏᴅᴇ Gᴇᴀss
19. Kɪɴᴏ ɴᴏ Tᴀʙɪ: Tʜᴇ Bᴇᴀᴜᴛɪғᴜʟ Wᴏʀʟᴅ
20. Sᴏᴜʟ Eᴀᴛᴇʀ
21. Tᴇɴɢᴇɴ Tᴏᴘᴘᴀ Gᴜʀʀᴇɴ Lᴀɢᴀɴɴ
22. Aᴋᴀᴍᴇ ɢᴀ Kɪʟʟ!
23. Sᴡᴏʀᴅ Aʀᴛ Oɴʟɪɴᴇ
24. Dʀᴀɢᴏɴ Bᴀʟʟ
25. Nᴀɴᴀᴛsᴜ ɴᴏ Tᴀɪᴢᴀɪ 
26. Lɪᴛᴛʟᴇ Wɪᴛᴄʜ Aᴄᴀᴅᴇᴍɪᴀ
27. Rᴏᴍᴇᴏ ɴᴏ Aᴏɪ Sᴏʀᴀ
28. Sᴏʀᴀ ʏᴏʀɪ ᴍᴏ Tᴏᴏɪ Bᴀsʜᴏ
29. Cᴏᴡʙᴏʏ Bᴇʙᴏᴘ
30. Sᴇɴ ᴛᴏ Cʜɪʜɪʀᴏ ɴᴏ Kᴀᴍɪᴋᴀᴋᴜsʜɪ
31. Nᴜʀᴀʀɪʜʏᴏɴ Nᴏ Mᴀɢᴏ
32. Lᴏɢ Hᴏʀɪᴢᴏɴ
33. Tᴏʀɪᴋᴏ
34. Gᴀʀɢᴀɴᴛɪᴀ ᴏɴ ᴛʜᴇ Vᴇʀᴅᴜʀᴏᴜs Pʟᴀɴᴇᴛ
35. Jᴏᴊᴏ’s Bɪᴢᴀʀʀᴇ Aᴅᴠᴇɴᴛᴜʀᴇ
36. Eᴜʀᴇᴋᴀ Sᴇᴠᴇɴ
37. Bʟᴀᴄᴋ Lᴀɢᴏᴏɴ
38. D.Gʀᴀʏ-ᴍᴀɴ
39. Aᴛᴛᴀᴄᴋ ᴏɴ Tɪᴛᴀɴ
40. IɴᴜYᴀsʜᴀ
41. Sᴀᴍᴜʀᴀɪ Cʜᴀᴍᴘʟᴏᴏ
42. Nᴏʀᴀɢᴀᴍɪ
43. Nᴏ Gᴀᴍᴇ Nᴏ Lɪғᴇ
44. Rᴀᴅɪᴀɴᴛ

Mᴇᴄʜᴀ
1. Tᴇɴɢᴇɴ Tᴏᴘᴘᴀ Gᴜʀʀᴇɴ Lᴀɢᴀɴɴ
2. Fᴜʟʟ Mᴇᴛᴀʟ Pᴀɴɪᴄ!
3. Cʀᴏss Aɴɢᴇ: Tᴇɴsʜɪ ᴛᴏ Rʏᴜᴜ ɴᴏ Rᴏɴᴅᴏ
4. Nᴇᴏɴ Gᴇɴᴇsɪs Eᴠᴀɴɢᴇʟɪᴏɴ
5. Eᴜʀᴇᴋᴀ Sᴇᴠᴇɴ
6. Kᴀᴋᴜᴍᴇɪᴋɪ Vᴀʟᴠʀᴀᴠᴇ (Vᴀʟᴠʀᴀᴠᴇ ᴛʜᴇ Lɪʙᴇʀᴀᴛᴏʀ)
7. Mᴏʙɪʟᴇ Sᴜɪᴛ Gᴜɴᴅᴀᴍ 00
8. Bᴜᴅᴅʏ Cᴏᴍᴘʟᴇx
9. Aʟᴅɴᴏᴀʜ.Zᴇʀᴏ
10. Cᴏᴅᴇ Gᴇᴀss
11. Dᴀᴛᴇ A Lɪᴠᴇ
12. Gᴇɴᴇsɪs ᴏғ Aϙᴜᴀʀɪᴏɴ (Sᴏᴜsᴇɪ ɴᴏ Aϙᴜᴀʀɪᴏɴ)
13. Vɪsɪᴏɴ ᴏғ Esᴄᴀғʟᴏᴡɴᴇ 
14. Mᴀᴄʀᴏss Sᴇʀɪᴇs
15. Gʜᴏsᴛ ɪɴ ᴛʜᴇ Sʜᴇʟʟ: Sᴛᴀɴᴅ Aʟᴏɴᴇ Cᴏᴍᴘʟᴇx
16. RᴀʜXᴇᴘʜᴏɴ
17. Yᴜᴜsʜᴀ-Oᴜ GᴀᴏGᴀɪGᴀʀ
18. FLCL
19. IS: Iɴғɪɴɪᴛᴇ Sᴛʀᴀᴛᴏs
20. Dᴀʀʟɪɴɢ ɪɴ ᴛʜᴇ FʀᴀɴXX
21. Sᴜɪsᴇɪ ɴᴏ Gᴀʀɢᴀɴᴛɪᴀ
22. Uɴᴅᴇғᴇᴀᴛᴇᴅ Bᴀʜᴀᴍᴜᴛ Cʜʀᴏɴɪᴄʟᴇ
23. Hᴜɴᴅʀᴇᴅ
24. Sɪᴅᴏɴɪᴀ ɴᴏ Kɪsʜɪ
25. Rᴏʙᴏᴛɪᴄs;Nᴏᴛᴇs
26. Hᴏsʜɪ ɴᴏ Kᴏᴇ
27. Gᴜɴᴅᴀᴍ Wɪɴɢ
28. Bᴏᴋᴜʀᴀɴᴏ
29. MᴏʙɪʟᴇSᴜɪᴛGᴜɴᴅᴀᴍ:Iʀᴏɴ-Bʟᴏᴏᴅᴇᴅ Oʀᴘʜᴀɴs
30. Kɴɪɢʜᴛ’s & Mᴀɢɪᴄ
31. Hᴇᴀᴠʏ Oʙᴊᴇᴄᴛ
32. Sᴀᴍᴜʀᴀɪ Sᴇᴠᴇɴ
33. Cᴏᴍᴇᴛ Lᴜᴄɪғᴇʀ
34. Sᴛᴀʀ Dʀɪᴠᴇʀ: Kᴀɢᴀʏᴀᴋɪ ɴᴏ Tᴀᴋᴜᴛᴏ
35. Asᴜʀᴀ Cʀʏɪɴ'
36. Hᴇʀᴏɪᴄ Aɢᴇ
37. Aϙᴜᴀʀɪᴏɴ Eᴠᴏʟ
38. Kᴜʀᴏᴍᴜᴋᴜʀᴏ
39. Nᴏʙᴜɴᴀɢᴀ ᴛʜᴇ Fᴏᴏʟ
40. Sᴄʜᴡᴀʀᴢᴇsᴍᴀʀᴋᴇɴ
41. Tᴏᴘ ᴡᴏ Nᴇʀᴀᴇ! Gᴜɴʙᴜsᴛᴇʀ
42. Sᴄʀᴀᴘᴘᴇᴅ Pʀɪɴᴄᴇss
43. Bʀᴇᴀᴋ Bʟᴀᴅᴇ
44. Mᴜᴠ-Lᴜᴠ Aʟᴛᴇʀɴᴀᴛɪᴠᴇ: Tᴏᴛᴀʟ Eᴄʟɪᴘsᴇ
45. Rᴀᴋᴜᴇɴ Tsᴜɪʜᴏᴜ 
46. Vᴀɴᴅʀᴇᴀᴅ
47. Bᴜʙᴜᴋɪ Bᴜʀᴀɴᴋɪ
48. Aᴘᴘʟᴇsᴇᴇᴅ (2004)
49. Dʀᴀɢᴏɴᴀᴜᴛ: Tʜᴇ Rᴇsᴏɴᴀɴᴄᴇ
50. Gᴜɴ X Sᴡᴏʀᴅ

Cᴀʀs
1. Tᴀᴋᴜᴍɪ's AE86 / Iɴɪᴛɪᴀʟ D
2. Aᴋɪᴏ's Fᴀɪʀ Lᴀᴅʏ Z / Wᴀɴɢᴀɴ Mɪᴅɴɪɢʜᴛ
3. JP's Tʀᴀɴsᴀᴍ / Rᴇᴅʟɪɴᴇ
4. Nɪᴄᴏ's Mᴇʀᴄᴇᴅᴇs A-ᴄʟᴀss / Nᴇxᴛ A-ᴄʟᴀss
5. Kᴀᴋᴇʀᴜ's Rᴀɪʟʙɪʀᴅ / Cʜᴏᴜsᴏᴋᴜ Hᴇɴᴋᴇɪ Gʏʀᴏᴢᴇᴛᴛᴇʀ
6. Sᴏɪᴄʜɪ's Lᴏᴛᴜs Sᴜᴘᴇʀ 7 / ᴇX-Dʀɪᴠᴇʀ: Tʜᴇ ᴍᴏᴠɪᴇ
7. Sʜɪʀᴏ's ᴍᴏᴅɪғɪᴇᴅ F-1 / Tᴀɪʟᴇɴᴅᴇʀs
8. Vɪᴄᴇ Pʀɪɴᴄɪᴘᴀʟ Uᴄʜɪʏᴀᴍᴀᴅᴀ's Tᴏʏᴏᴛᴀ Cʀᴇsᴛᴀ / GTO
9. Cᴀᴘᴇᴛᴀ's Fᴏʀᴍᴜʟᴀ Oɴᴇ / Cᴀᴘᴇᴛᴀ
10. Rᴏᴍᴀɴ ᴀɴᴅ Oᴛᴛᴏ's sʜᴀʀᴋ ᴄᴀʀ / Cᴏᴍᴇᴛ Lᴜᴄɪғᴇʀ

Dʀᴀᴍᴀ
1. RᴇLIFE
2. Tsᴜᴋɪ ɢᴀ Kɪʀᴇɪ
3. AɴᴏHᴀɴᴀ
4. Sʜɪɢᴀᴛsᴜ ᴡᴀ Kɪᴍɪ ɴᴏ Usᴏ
5. Mᴀᴅᴇ Iɴ Aʙʏss
6. Kɪᴍɪ ɴᴏ Nᴀᴡᴀ
7. Rᴇ: Zᴇʀᴏ ᴋᴀʀᴀ Hᴀᴊɪᴍᴇʀᴜ Isᴇᴋᴀɪ Sᴇɪᴋᴀᴛsᴜ
8. Fᴜʟʟᴍᴇᴛᴀʟ Aʟᴄʜᴇᴍɪsᴛ: Bʀᴏᴛʜᴇʀʜᴏᴏᴅ
9. Aɴɢᴇʟ Bᴇᴀᴛs
10. Cʜᴜᴜɴɪʙʏᴏᴜ ᴅᴇᴍᴏ Kᴏɪ ɢᴀ Sʜɪᴛᴀɪ!
11. Cʜᴀʀʟᴏᴛᴛᴇ
12. Sᴀᴋᴜʀᴀsᴏᴜ ɴᴏ Pᴇᴛ ɴᴀ Kᴀɴᴏᴊᴏ
13. Kᴜᴢᴜ ɴᴏ Hᴏɴᴋᴀɪ
14. Eʀᴏᴍᴀɴɢᴀ-sᴇɴsᴇɪ
15. Aᴏ Hᴀʀᴜ Rɪᴅᴇ
16. Kᴏᴇ ɴᴏ Kᴀᴛᴀᴄʜɪ
17. Sʜɪɴɢᴇᴋɪ ɴᴏ Kʏᴏᴜᴊɪɴ
18. Cʟᴀɴɴᴀᴅ
19. Wʜɪᴛᴇ Aʟʙᴜᴍ

Fᴀɴᴛᴀsʏ
1. Oɴᴇ Pɪᴇᴄᴇ
2. Mᴀᴅᴇ ɪɴ Aʙʏss
3. Rᴇ:Zᴇʀᴏ ᴋᴀʀᴀ Hᴀᴊɪᴍᴇʀᴜ Isᴇᴋᴀɪ Sᴇɪᴋᴀᴛsᴜ
4. DᴀɴMᴀᴄʜɪ
5. OᴠᴇʀLᴏʀᴅ
6. Sᴀʏᴏɴᴀʀᴀ ɴᴏ Asᴀ ɴɪ Yᴀᴋᴜsᴏᴋᴜhɴᴏ Hᴀɴᴀ ᴡᴏ 
7. Tᴀʟᴇs ᴏғ Zᴇsᴛɪʀɪᴀ ᴛʜᴇ X
8. Oᴏᴋᴀᴍɪ ᴛᴏ Kᴏᴜsʜɪɴʀʏᴏᴜ
9. Aᴋᴀᴛsᴜᴋɪ ɴᴏ Yᴏɴᴀ
10. Fᴜʟʟᴍᴇᴛᴀʟ Aʟᴄʜᴇᴍɪsᴛ: Bʀᴏᴛʜᴇʀʜᴏᴏᴅ
11. Lᴏɢ Hᴏʀɪᴢᴏɴ
12. Bᴇʀsᴇʀᴋ
13. Nᴏ Gᴀᴍᴇ Nᴏ Lɪғᴇ
14. Nᴀɴᴀᴛsᴜ ɴᴏ Tᴀɪᴢᴀɪ
15. Mᴀɢɪ Sᴇʀɪᴇs
16. Fᴀɪʀʏ Tᴀɪʟ
17. Hᴜɴᴛᴇʀ x Hᴜɴᴛᴇʀ
18. Nᴀᴛsᴜᴍᴇ Yᴜᴜᴊɪɴᴄʜᴏᴜ
19. Sᴏᴜʟ Eᴀᴛᴇʀ
20. Fᴀᴛᴇ/sᴛᴀʏ ɴɪɢʜᴛ: Uɴʟɪᴍɪᴛᴇᴅ Bʟᴀᴅᴇ Wᴏʀᴋs
21. Zᴇᴛsᴜᴇɴ ɴᴏ Tᴇᴍᴘᴇsᴛ
22. Kᴇᴋᴋᴀɪ Sᴇɴsᴇɴ
23. Kᴏʙᴀᴛᴏ.
24. Dʀɪғᴛᴇʀs
25. Hᴀɪʙᴀɴᴇ Rᴇɴᴍᴇɪ
26. Mᴀʜᴏᴜᴊɪɴ Gᴜʀᴜɢᴜʀᴜ
27. Gᴀᴛᴇ: Jɪᴇɪᴛᴀɪ Kᴀɴᴏᴄʜɪ Nɪᴛᴇ, Kᴀᴋᴜ Tᴀᴛᴀᴋᴀᴇʀɪ
28. Sʜɪɴɢᴇᴋɪ ɴᴏ Bᴀʜᴀᴍᴜᴛ Sᴇʀɪᴇs
29. Kᴏɴᴏsᴜʙᴀ
30. Sᴡᴏʀᴅ Aʀᴛ Oɴʟɪɴᴇ
31. Vɪᴏʟᴇᴛ Eᴠᴇʀɢᴀʀᴅᴇɴ
32. Mᴜsʜɪsʜɪ
33. Hᴏᴡʟ ɴᴏ Uɢᴏᴋᴜ Sʜɪʀᴏ
34. Aʀɪᴀ Tʜᴇ Oʀɪɢɪɴᴀᴛɪᴏɴ
35. Kᴀᴍɪsᴀᴍᴀ Hᴀᴊɪᴍᴇᴍᴀsʜɪᴛᴀ
36. Hᴏᴜsᴇᴋɪ ɴᴏ Kᴜɴɪ
37. Pʀɪɴᴄᴇss Mᴏɴᴏɴᴏᴋᴇ
38. Kᴇᴍᴏɴᴏ ɴᴏ Sᴏᴜᴊᴀ Eʀɪɴ
39. Yᴀᴏɢᴜᴀɪ Mɪɴɢᴅᴀɴ
40. Jᴜᴜɴɪ Kᴏᴋᴜᴋɪ
41. Cᴀʀᴅᴄᴀᴘᴛᴏʀ Sᴀᴋᴜʀᴀ: Cʟᴇᴀʀ Cᴀʀᴅ-ʜᴇɴ
42. Kᴏʙᴀʏᴀsʜɪ-sᴀɴ Cʜɪ ɴᴏ Mᴀɪᴅ Dʀᴀɢᴏɴ
43. Uᴄʜᴏᴜᴛᴇɴ Kᴀᴢᴏᴋᴜ
44. Nᴀɢɪ ɴᴏ Asᴜᴋᴀʀᴀ
45. Mᴀʜᴏᴜᴛsᴜᴋᴀɪ ɴᴏ Yᴏᴍᴇ
46. Lɪᴛᴛʟᴇ Wɪᴛᴄʜ Aᴄᴀᴅᴇᴍɪᴀ

Sᴄʜᴏᴏʟ Lɪғᴇ
1. Aᴏ Hᴀʀᴜ Rɪᴅᴇ
2. Hʏᴏᴜᴋᴀ
3. Cʜᴀʀʟᴏᴛᴛᴇ
4. Kᴏᴋᴏʀᴏ Cᴏɴɴᴇᴄᴛ
5. Kᴀʀᴀᴋᴀɪ Jᴏᴜᴢᴜ ɴᴏ Tᴀᴋᴀɢɪ-sᴀɴ
6. Bᴏᴋᴜ Dᴀᴋᴇ ɢᴀ Iɴᴀɪ Mᴀᴄʜɪ
7. Tᴏʀᴀᴅᴏʀᴀ!
8. Tsᴜᴋɪ ɢᴀ Kɪʀᴇɪ
9. Kʏᴏᴜᴋᴀɪ ɴᴏ Kᴀɴᴀᴛᴀ
10. RᴇLIFE
11. Sᴡᴏʀᴅ Aʀᴛ Oɴʟɪɴᴇ
12. AɴᴏHᴀɴᴀ
13. Issʜᴜᴋᴀɴ Fʀɪᴇɴᴅs
14. Sʜɪɢᴀᴛsᴜ ᴡᴀ Kɪᴍɪ ɴᴏ Usᴏ
15. Kᴜᴢᴜ ɴᴏ Hᴏɴᴋᴀɪ
16. Kɪᴍɪ ɴᴏ Nᴀᴡᴀ
17. Sᴜᴋɪᴛᴛᴇ Iɪ ɴᴀ ʏᴏ
18. Sᴀᴋᴜʀᴀsᴏᴜ ɴᴏ Pᴇᴛ ɴᴀ Kᴀɴᴏᴊᴏ
19. Tᴏᴋʏᴏ Rᴀᴠᴇɴs
20. Hɪᴍᴏᴜᴛᴏ Uᴍᴀʀᴜ-ᴄʜᴀɴ
21. Mᴀsᴀᴍᴜɴᴇ-ᴋᴜɴ ɴᴏ Rᴇᴠᴇɴɢᴇ
22. Tʀɪɴɪᴛʏ Sᴇᴠᴇɴ
23. Aɴɢᴇʟ Bᴇᴀᴛs
24. Bʟᴇᴀᴄʜ
25. Bʟᴏᴏᴅ-C
26. Hɪɢʜ Sᴄʜᴏᴏʟ DxD
27. Bᴏᴋᴜ ɴᴏ Hᴇʀᴏ Aᴄᴀᴅᴇᴍɪᴀ
28. Sʜᴏᴋᴜɢᴇᴋɪ ɴᴏ Sᴏᴜᴍᴀ
29. Aɴsᴀᴛsᴜ Kʏᴏᴜsʜɪᴛsᴜ
30. Tᴏɴᴀʀɪ ɴᴏ Kᴀɪʙᴜᴛsᴜ-ᴋᴜɴ
31. Oʀᴀɴɢᴇ
32. Kɪᴍɪ ɴɪ Tᴏᴅᴏᴋᴇ
33. Sᴀᴋᴀᴍᴏᴛᴏ ᴅᴇsᴜ ɢᴀ?
34. Cʜᴜᴜɴɪʙʏᴏᴜ ᴅᴇᴍᴏ Kᴏɪ ɢᴀ Sʜɪᴛᴀɪ!
35. Kᴜʀᴏᴋᴏ ɴᴏ Bᴀsᴜᴋᴇ
36. Nɪsᴇᴋᴏɪ
37. Sᴀᴇɴᴀɪ Hᴇʀᴏɪɴᴇ ɴᴏ Sᴏᴅᴀᴛᴇᴋᴀᴛᴀ
38. Hɪʙɪᴋᴇ! Eᴜᴘʜᴏɴɪᴜᴍ
39. Nᴏɴ Nᴏɴ Bɪʏᴏʀɪ
40. Gᴀʙʀɪᴇʟ DʀᴏᴘOᴜᴛ
41. Aʜᴏ Gɪʀʟ
42. Iᴛsᴜᴅᴀᴛᴛᴇ Bᴏᴋᴜʀᴀ ɴᴏ Kᴏɪ ᴡᴀ 10-Cᴇɴᴛɪᴍᴇᴛᴇʀs Dᴀᴛᴛᴀ
43. Jᴜsᴛ Bᴇᴄᴀᴜsᴇ!
44. Kᴏᴇ ɴᴏ Kᴀᴛᴀᴄʜɪ
45. Kᴏᴋᴏʀᴏ ɢᴀ Sᴀᴋᴇʙɪᴛᴀɢᴀᴛᴛᴇʀᴜɴᴅᴀ

Sʟɪᴄᴇ ᴏғ Lɪғᴇ
1. Gᴇɴsʜɪᴋᴇɴ
2. Sʜɪɴʀʏᴀᴋᴜ! Iᴋᴀ Mᴜsᴜᴍᴇ
3. Uᴄʜᴏᴜᴛᴇɴ Kᴀᴢᴏᴋᴜ
4. Kᴏᴛᴏɴᴏʜᴀ ɴᴏ Nɪᴡᴀ
5. Mᴜsʜɪsʜɪ
6. Pᴀᴘᴀ ɴᴏ Iᴜᴋᴏᴛᴏ ᴡᴏ Kɪᴋɪɴᴀsᴀɪ!
7. Aɪʀ
8. Aɴᴏ Hɪ Mɪᴛᴀ Hᴀɴᴀ ɴᴏ Nᴀᴍᴀᴇ ᴡᴏ Bᴏᴋᴜᴛᴀᴄʜɪ ᴡᴀ Mᴀᴅᴀ Sʜɪʀᴀɴᴀɪ.
9. Nᴀᴛsᴜᴍᴇ Yᴜᴜᴊɪɴᴄʜᴏᴜ
10. Bᴀʀᴀᴋᴀᴍᴏɴ ᴅᴀɴ Hᴀɴᴅᴀ-ᴋᴜɴ
11. Dᴀɢᴀsʜɪ Kᴀsʜɪ
12. Aᴍᴀᴀᴍᴀ ᴛᴏ Iɴᴀᴢᴜᴍᴀ
13. Cʟᴀɴɴᴀᴅ
14. Kᴏʙᴀʏᴀsʜɪ-sᴀɴ Cʜɪ ɴᴏ Mᴀɪᴅ Dʀᴀɢᴏɴ
15. Hɪᴍᴏᴜᴛᴏ! Uᴍᴀʀᴜ-ᴄʜᴀɴ
16. Sᴀᴋᴜʀᴀ Qᴜᴇsᴛ
17. Mᴀʜᴏᴜᴛsᴜᴋᴀɪ ɴᴏ Yᴏᴍᴇ
18. Kᴀʀᴀᴋᴀɪ Jᴏᴜᴢᴜ ɴᴏ Tᴀᴋᴀɢɪ-sᴀɴ
19. Sᴏʀᴀ ʏᴏʀɪ ᴍᴏ Tᴏᴏɪ Bᴀsʜᴏ
20. Sᴇʀᴠᴀɴᴛ x Sᴇʀᴠɪᴄᴇ
21. Tᴀᴍᴀᴋᴏ Lᴏᴠᴇ Sᴛᴏʀʏ
22. Nᴏɴ Nᴏɴ Bɪʏᴏʀɪ
23. Usᴀɢɪ Dʀᴏᴘ
24. Nᴇᴡ Gᴀᴍᴇ!
25. Wᴏʀᴋɪɴɢ!! (Wᴀɢɴᴀʀɪᴀ!!) Sᴇʀɪᴇs
26. Gᴏᴄʜᴜᴜᴍᴏɴ ᴡᴀ Usᴀɢɪ ᴅᴇsᴜ ᴋᴀ??
27. Aʀɪᴀ Tʜᴇ Oʀɪɢɪɴᴀᴛɪᴏɴ
28. Uᴄʜᴜᴜ Kʏᴏᴜᴅᴀɪ
28. Nɪᴄʜɪᴊᴏᴜ
30. Nᴀɴᴀ
31. Kᴇᴍᴏɴᴏ ɴᴏ Sᴏᴜᴊᴀ Eʀɪɴ
32. Nᴏᴅᴀᴍᴇ Cᴀɴᴛᴀʙɪʟᴇ
33. Dᴀɴsʜɪ Kᴏᴜᴋᴏᴜsᴇɪ ɴᴏ Nɪᴄʜɪᴊᴏᴜ
34. K-Oɴ!
35. Yᴜʀᴜ Cᴀᴍᴘ
36. Gɪɴ ɴᴏ Sᴀᴊɪ
37. Hᴀᴄʜɪᴍɪᴛsᴜ ᴛᴏ Cʟᴏᴠᴇʀ
38. Sᴀᴋᴜʀᴀsᴏᴜ ɴᴏ Pᴇᴛ ɴᴀ Kᴀɴᴏᴊᴏ
39. RᴇLIFE
40. Kᴜʀᴀɢᴇʜɪᴍᴇ
41. Sʜᴏᴜᴊᴏ Sʜᴜᴜᴍᴀᴛsᴜ Rʏᴏᴋᴏᴜ
42. Eᴠᴇ ɴᴏ Jɪᴋᴀɴ
43. Hʏᴏᴜᴋᴀ
44. Iᴇ Nᴀᴋɪ Kᴏ Rᴇᴍʏ
45. Tᴀɴᴀᴋᴀ-ᴋᴜɴ ᴡᴀ Iᴛsᴜᴍᴏ Kᴇᴅᴀʀᴜɢᴇ
46. Sʜɪʀᴏʙᴀᴋᴏ
47. Gʀᴇᴀᴛ Tᴇᴀᴄʜᴇʀ Oɴɪᴢᴜᴋᴀ
48. Sᴀɪᴋɪ Kᴜsᴜᴏ ɴᴏ Ψ Nᴀɴ
49. Vɪᴏʟᴇᴛ Eᴠᴇʀɢᴀʀᴅᴇɴ
50. 3-ɢᴀᴛsᴜ ɴᴏ Lɪᴏɴ
51. Gᴀᴋᴜᴇɴ Bᴀʙʏsɪᴛᴛᴇʀs
52. Mɪᴛsᴜʙᴏsʜɪ Cᴏʟᴏʀs
53. Hɪɴᴀᴍᴀᴛsᴜʀɪ
54. Tᴀᴅᴀ-ᴋᴜɴ ᴡᴀ Kᴏɪ ᴡᴏ Sʜɪɴᴀɪ
55. Cᴏᴍɪᴄ Gɪʀʟs
56. Bʏᴏᴜsᴏᴋᴜ 5 Cᴇɴᴛɪᴍᴇᴛᴇʀ
57. Hᴀɴᴀsᴀᴋᴜ Iʀᴏʜᴀ
58. Dᴇɴᴘᴀ Oɴɴᴀ ᴛᴏ Sᴇɪsʜᴜɴ Oᴛᴏᴋᴏ

Sᴀᴍᴜʀᴀɪ
1. Sᴀᴍᴜʀᴀɪ 7
2. Rᴜʀᴏᴜɴɪ Kᴇɴsʜɪɴ
3. Sᴀᴍᴜʀᴀɪ Cʜᴀᴍᴘʟᴏᴏ
4. Aғʀᴏ Sᴀᴍᴜʀᴀɪ
5. Sᴇɴɢᴏᴋᴜ Bᴀsᴀʀᴀ: Sᴀᴍᴜʀᴀɪ Kɪɴɢs
6. Gɪɴᴛᴀᴍᴀ
7. Hᴀᴋᴜᴏᴜᴋɪ
8. Sᴡᴏʀᴅ ᴏғ ᴛʜᴇ Sᴛʀᴀɴɢᴇʀ
9. Bʟᴀᴅᴇ ᴏғ ᴛʜᴇ Iᴍᴍᴏʀᴛᴀʟ
10. Rᴏɴɪɴ Wᴀʀʀɪᴏʀs
11.Sᴀᴍᴜʀᴀɪ X

Mɪʟɪᴛᴀʀʏ
1. Fᴜʟʟᴍᴇᴛᴀʟ Aʟᴄʜᴇᴍɪsᴛ: Bʀᴏᴛʜᴇʀʜᴏᴏᴅ
2. Sʜɪɴɢᴇᴋɪ ɴᴏ Kʏᴏᴊɪɴ
3. Cᴏᴅᴇ Gᴇᴀss: Hᴀɴɢʏᴀᴋᴜ ɴᴏ Lᴇʟᴏᴜᴄʜ
4. Oᴡᴀʀɪ ɴᴏ Sᴇʀᴀᴘʜ
5. Gᴀᴛᴇ: Jɪᴇɪᴛᴀɪ Kᴀɴᴏᴄʜɪ ɴɪᴛᴇ, Kᴀᴋᴜ Tᴀᴛᴀᴋᴀᴇʀɪ
6. Aʟᴅɴᴏᴀʜ .Zᴇʀᴏ
7. Gᴏᴅ Eᴀᴛᴇʀ
8. Yᴏᴜᴊᴏ Sᴇɴᴋɪ 
9. SAO Aʟᴛᴇʀɴᴀᴛɪᴠᴇ: Gᴜɴ Gᴀʟᴇ Oɴʟɪɴᴇ
10. Nᴇᴊɪᴍᴀᴋɪ Sᴇɪʀᴇɪ Sᴇɴᴋɪ: Tᴇɴᴋʏᴏᴜ ɴᴏ Aʟᴅᴇʀᴀᴍɪɴ
11. Gɪʀʟs ᴜɴᴅ Pᴀɴᴢᴇʀ
12. Kᴀɴᴛᴀɪ Cᴏʟʟᴇᴄᴛɪᴏɴ
13. Mᴜᴠ-Lᴜᴠ Aʟᴛᴇʀɴᴀᴛɪᴠᴇ: Tᴏᴛᴀʟ Eᴄʟɪᴘsᴇ
14. 07-Gʜᴏsᴛ
15. Mᴏʙɪʟᴇ Sᴜɪᴛ Gᴜɴᴅᴀᴍ 00
16. Kɪɴɢᴅᴏᴍ
17. Kᴀᴋᴜᴍᴇɪᴋɪ Vᴀʟᴠʀᴀᴠᴇ
18. Sᴛʀɪᴋᴇ Wɪᴛᴄʜᴇs
19. Mᴀᴄʀᴏss Fʀᴏɴᴛɪᴇʀ
20. Sᴏ Rᴀ Nᴏ Wᴏ Tᴏ
21. Hᴇᴀᴠʏ Oʙᴊᴇᴄᴛ
22. Sᴇɴᴊᴏᴜ ɴᴏ Vᴀʟᴋʏʀɪᴀ
23. Oᴛᴏᴍᴇ Yᴏᴜᴋᴀɪ Zᴀᴋᴜʀᴏ
24. Aɴɢᴏʟᴍᴏɪs: Gᴇɴᴋᴏᴜ Kᴀssᴇɴᴋɪ
25. Bʀᴇᴀᴋ Bʟᴀᴅᴇ
26. Hɪɢʜ Sᴄʜᴏᴏʟ Fʟᴇᴇᴛ
27. Tᴏsʜᴏᴋᴀɴ Sᴇɴsᴏᴜ
28. Sᴀʙᴀɢᴇʙᴜ!
29. Tᴀɪᴍᴀᴅᴏᴜ Gᴀᴋᴜᴇɴ 35 Sʜɪᴋᴇɴ Sʜᴏᴜᴛᴀɪ
30. Jᴏᴋᴇʀ Gᴀᴍᴇ

Hɪsᴛᴏʀɪᴄᴀʟ
1. Gɪɴᴛᴀᴍᴀ
2. Mᴜsʜɪsʜɪ
3. Dᴏʀᴏʀᴏ
4. Sᴀᴍᴜʀᴀɪ Cʜᴀᴍᴘʟᴏᴏ
5. Bᴀᴄᴄᴀɴᴏ!
6. Kᴀᴛᴀɴᴀɢᴀᴛᴀʀɪ
7. Rᴜʀᴏᴜɴɪ Kᴇɴsʜɪɴ: Mᴇɪᴊɪ Kᴇɴᴋᴀᴋᴜ Rᴏᴍᴀɴᴛᴀɴ
8. Gᴏsɪᴄᴋ
9. Kɪɴɢᴅᴏᴍ
10. Kᴜʀᴏsʜɪᴛsᴜᴊɪ
11. Aᴏɪ Bᴜɴɢᴀᴋᴜ Sᴇʀɪᴇs
12. Hᴇᴛᴀʟɪᴀ Axɪs Pᴏᴡᴇʀs
13. Hᴀᴋᴜᴏᴜᴋɪ
14. Sᴇɴɢᴏᴋᴜ Bᴀsᴀʀᴀ
15. Jᴏᴋᴇʀ Gᴀᴍᴇ
16. Kᴀɢᴜʏᴀ Hɪᴍᴇ ɴᴏ Mᴏɴᴏɢᴀᴛᴀʀɪ
17. Eɪᴋᴏᴋᴜ Kᴏɪ Mᴏɴᴏɢᴀᴛᴀʀɪ 

Pᴏʟɪᴄᴇ
1. Tᴀɪʜᴏ Sʜɪᴄʜᴀᴜ ᴢᴏ
2. Gʜᴏsᴛ ɪɴ ᴛʜᴇ Sʜᴇʟʟ
3. Kᴏᴄʜɪʀᴀ Kᴀᴛsᴜsʜɪᴋᴀᴋᴜ Kᴀᴍᴇᴀʀɪ Kᴏᴜᴇɴᴍᴀᴇ 
4. Hᴀsʜᴜᴛsᴜᴊᴏ
5. Psʏᴄʜᴏ-Pᴀss
6. Mᴏʙɪʟᴇ Pᴏʟɪᴄᴇ Pᴀᴛʟᴀʙᴏʀ
7. Mɪʀᴀɪ Kᴇɪsᴀᴛsᴜ Uʀᴀsʜɪᴍᴀɴ
8. Wɪʟᴅ 7
9. Yᴜᴜsʜᴀ Kᴇɪsᴀᴛsᴜ J-Dᴇᴄᴋᴇʀ
10. Hɪᴍɪᴛsᴜ: Tʜᴇ Rᴇᴠᴇʟᴀᴛɪᴏɴ
11. Sᴀᴍᴜʀᴀɪ Fʟᴀᴍᴇɴᴄᴏ
12. B: Tʜᴇ Bᴇɢɪɴɴɪɴɢ
13. Jɪɴ-Rᴏʜ: Tʜᴇ Wᴏʟғ Bʀɪɢᴀᴅᴇ
14. Oɴɪʜᴇɪ
15. Kɪᴅᴏᴜ Kᴇɪsᴀᴛsᴜ Pᴀᴛʟᴀʙᴏʀ: Oɴ ᴛᴇʟᴇᴠɪsɪᴏɴ
16. Mᴏᴜsᴏᴜ Dᴀɪʀɪɴɪɴ
17. Pᴇᴀᴄᴇ Mᴀᴋᴇʀ Kᴜʀᴏɢᴀɴᴇ
18. Hʏᴘᴇʀ Pᴏʟɪᴄᴇ

Sᴄɪ-ғɪ
1. Sᴛᴇɪɴs;Gᴀᴛᴇ
2. Iɴᴜʏᴀsʜɪᴋɪ
3. Mᴀᴅᴇ ɪɴ Aʙʏss
4. Cᴏᴡʙᴏʏ Bᴇʙᴏᴘ
5. Pʟᴀsᴛɪᴄ Mᴇᴍᴏʀɪᴇs
6. Eᴜʀᴇᴋᴀ Sᴇᴠᴇɴ
7. Mᴀʜᴏᴜᴋᴀ Kᴏᴜᴋᴏᴜ ɴᴏ Rᴇᴛᴛᴏᴜsᴇɪ
8. Dɪᴍᴇɴsɪᴏɴ W
9. Dᴀʀʟɪɴɢ ɪɴ ᴛʜᴇ FʀᴀɴXX
10. Dᴇɴɴᴏᴜ Cᴏɪʟ
11. Sᴘᴀᴄᴇ☆Dᴀɴᴅʏ
12. Kɪᴢɴᴀɪᴠᴇʀ
13. Nᴇᴏɴ Gᴇɴᴇsɪs Eᴠᴀɴɢᴇʟɪᴏɴ
14. Rᴏʙᴏᴛɪᴄs;Nᴏᴛᴇs
15. Pᴀᴘʀɪᴋᴀ
16. Mᴇɢᴀʟᴏ Bᴏx
17. Gʜᴏsᴛ ɪɴ ᴛʜᴇ Sʜᴇʟʟ
18. Gᴀᴛᴄʜᴀᴍᴀɴ Cʀᴏᴡᴅs
19. Gᴀᴋᴜsᴇɴ Tᴏsʜɪ Asᴛᴇʀɪsᴋ
20. Gɪɴᴛᴀᴍᴀ
21. Sᴀᴋᴀsᴀᴍᴀ ɴᴏ Pᴀᴛᴇᴍᴀ
22. Eᴠᴇ ɴᴏ Jɪᴋᴀɴ
23. Psʏᴄʜᴏ-Pᴀss
24. Dᴇɴᴘᴀ Oɴɴᴀ ᴛᴏ Sᴇɪsʜᴜɴ Oᴛᴏᴋᴏ
25. Mᴇᴋᴀᴋᴜᴄɪᴛʏ Aᴄᴛᴏʀs
26. Pʟᴀɴᴇᴛᴇs
27. Bᴜᴅᴅʏ Cᴏᴍᴘʟᴇx
28. Pᴇʀsᴏɴᴀ Sᴇʀɪᴇs
29. Sᴏʀᴀ ɴᴏ Oᴛᴏsʜɪᴍᴏɴᴏ

Sᴘᴏʀᴛ
1. Cᴀᴘᴛᴀɪɴ Tsᴜʙᴀsᴀ
2. Gɪᴀɴᴛ Kɪʟʟɪɴɢ
3. Tʜᴇ Kɴɪɢʜᴛ ɪɴ Tʜᴇ Aʀᴇᴀ (Aʀᴇᴀ ɴᴏ Kɪsʜɪ )
4. Aᴏᴋɪ Dᴇɴsᴇᴛsᴜ Sʜᴏᴏᴛ! (Bʟᴜᴇ Lᴇɢᴇɴᴅ Sʜᴏᴏᴛ!)
5. Dᴀʏs
6. Wʜɪsᴛʟᴇ!
7. Oғғsɪᴅᴇ
8. Dʀᴀɢᴏɴ Lᴇᴀɢᴜᴇ
9. Fᴀɴᴛᴀsɪsᴛᴀ Sᴛᴇʟʟᴀ
10. Iɴᴀᴢᴜᴍᴀ Eʟᴇᴠᴇɴ
11. Gɪɴɢᴀ ᴇ Kɪᴄᴋᴏғғ!!
12. Hᴜɴɢʀʏ Hᴇᴀʀᴛ Wɪʟᴅ Sᴛʀɪᴋᴇʀ
13. Gᴀɴʙᴀʀᴇ Kɪᴄᴋᴇʀs
14. Kᴜʀᴏᴋᴏ Nᴏ Bᴀsᴋᴇᴛ
15. Sʟᴀᴍ Dᴜɴᴋ
16. Dᴇᴀʀ Bᴏʏs
17. I’ʟʟ/CKBC
18. Bᴜᴢᴢᴇʀ Bᴇᴀᴛᴇʀ
19. Bᴀsϙᴜᴀsʜ!
20. Rᴏ-Kʏᴜ-Bᴜ!
21. Dᴀsʜ Kᴀᴘᴘᴇɪ
22. Dɪᴀᴍᴏɴᴅ ɴᴏ Aᴄᴇ (Aᴄᴇ ᴏғ Dɪᴀᴍᴏɴᴅ)
23. Pʀɪɴᴄᴇss Nɪɴᴇ: Kɪsᴀʀᴀɢɪ Jᴏsʜɪᴋᴏᴜ Yᴀᴋʏᴜᴜʙᴜ
24. Mᴀᴊᴏʀ
25. Tᴏᴜᴄʜ
26. H2
27. Cʀᴏss Gᴀᴍᴇ
28. Tᴀɪsʜᴏᴜ Yᴀᴋʏᴜᴜ Mᴜsᴜᴍᴇ
29. Mᴏsʜɪᴅᴏʀᴀ (Wʜᴀᴛ Iғ ᴀ Fᴇᴍᴀʟᴇ Mᴀɴᴀɢᴇʀ ᴏғ ᴀ Hɪɢʜ Sᴄʜᴏᴏʟ Bᴀsᴇʙᴀʟʟ Tᴇᴀᴍ Rᴇᴀᴅ Dʀᴜᴄᴋᴇʀ’s)
30. Oɴᴇ Oᴜᴛs
31. Oᴏᴋɪᴋᴜ Fᴜʀɪᴋᴀʙᴜᴛᴛᴇ (Bɪɢ Wɪɴᴅᴜᴘ!)
32. Hᴀɪᴋʏᴜᴜ
33. Aᴛᴛᴀᴄᴋ ᴏɴ Tᴏᴍᴏʀʀᴏᴡ
34. Aᴛᴛᴀᴄᴋ Nᴏ.1
35. Aᴛᴛᴀᴄᴋᴇʀ Yᴏᴜ
36. Yᴏᴡᴀᴍᴜsʜɪ Pᴇᴅᴀʟ
37. Iᴅᴀᴛᴇɴ Jᴜᴍᴘ
38. Oᴠᴇʀ Dʀɪᴠᴇ
39. Nᴀsᴜ: Sᴜᴍᴍᴇʀ ɪɴ Aɴᴅᴀʟᴜsɪᴀ
40. Nᴀsᴜ : A Mɪɢʀᴀᴛᴏʀʏ Bɪʀᴅ ᴡɪᴛʜ Sᴜɪᴛᴄᴀsᴇ
41. Hᴀᴊɪᴍᴇ ɴᴏ Iᴘᴘᴏ
42. Asʜɪᴛᴀ ɴᴏ Jᴏᴇ
43. Gᴀɴʙᴀʀᴇ Gᴇɴᴋɪ
44. Nᴏᴢᴏᴍɪ Wɪᴛᴄʜᴇs
45. Oɴᴇ Pᴏᴜɴᴅ Gᴏsᴘᴇʟ
46. Aɪᴍ ғᴏʀ ᴛʜᴇ Aᴄᴇ!
47. Tʜᴇ Pʀɪɴᴄᴇ ᴏғ Tᴇɴɴɪs
48. Bᴀʙʏ Sᴛᴇᴘs
49. Eʏᴇsʜɪᴇʟᴅ 21
50. Sᴍᴀsʜ
51. Sʜᴀᴋᴜɴᴇᴛsᴜ ɴᴏ ᴛᴀᴋᴋʏᴜᴜ ᴍᴜsᴜᴍᴇ
52. Aɪʀ ɢᴇᴀʀ
53. Pʀɪɴᴄᴇ Oғ Sᴛʀɪᴅᴇ Aʟᴛᴇʀɴᴀᴛɪᴠᴇ
54. Fʀᴇᴇ!
55. Kᴇɴᴋᴏᴜ Zᴇɴʀᴀᴋᴇɪ Sᴜɪᴇɪʙᴜ Uᴍɪsʜᴏᴜ

Mᴀʀᴛɪᴀʟ Aʀᴛ
1. Bᴏʀᴜᴛᴏ: Nᴀʀᴜᴛᴏ Nᴇxᴛ Gᴇɴᴇʀᴀᴛɪᴏɴs
2. Sʜɪᴋᴀʙᴀɴᴇ Hɪᴍᴇ: Aᴋᴀ
3. Kᴀᴛᴀɴᴀɢᴀᴛᴀʀɪ
4. Sʜɪᴊᴏᴜ Sᴀɪᴋʏᴏᴜ ɴᴏ Dᴇsʜɪ Kᴇɴɪᴄʜɪ (KᴇɴIᴄʜɪ: Tʜᴇ Mɪɢʜᴛɪᴇsᴛ Dɪsᴄɪᴘʟᴇ)
5. Mᴀᴊɪ ᴅᴇ Wᴀᴛᴀsʜɪ ɴɪ Kᴏɪ Sʜɪɴᴀsᴀɪ!
6. Tᴀʙᴏᴏ Tᴀᴛᴛᴏᴏ
7. Sᴇɴɢᴏᴋᴜ Bᴀsᴀʀᴀ
8. Bᴇɴ-ᴛᴏ
9. Mᴇᴅᴀᴋᴀ Bᴏx
10. Mᴜsʜɪʙᴜɢʏᴏᴜ
11. Mᴀᴋᴇɴ-ᴋɪ!
12. Bʟᴀᴅᴇ & Sᴏᴜʟ
13. Fʀᴇᴇᴢɪɴɢ
14. Iᴋᴋɪᴛᴏᴜsᴇɴ (Iᴋᴋɪ Tᴏᴜsᴇɴ)
15. Asᴜ ɴᴏ Yᴏɪᴄʜɪ!
16. Kᴜʀᴏᴋᴀᴍɪ Tʜᴇ Aɴɪᴍᴀᴛɪᴏɴ
17. Tᴏᴋʏᴏ Mᴀᴊɪɴ Gᴀᴋᴜᴇɴ Kᴇɴᴘᴜᴄʜᴏ: Tᴏᴜ
18. Tᴇɴᴊᴏᴜ Tᴇɴɢᴇ
19. Bᴀᴋɪ (2018)
20. Kᴏɪʜɪᴍᴇ †Mᴜsᴏᴜ
21. Dʀᴀɢᴏɴ Bᴀʟʟ

Mᴜsɪᴋ
1. Sʜɪɢᴀᴛsᴜ ᴡᴀ Kɪᴍɪ ɴᴏ Usᴏ
2. Hɪʙɪᴋᴇ! Eᴜᴘʜᴏɴɪᴜᴍ
3. Zᴏᴍʙɪᴇʟᴀɴᴅ Sᴀɢᴀ
4. K-Oɴ!
5. Nᴏᴅᴀᴍᴇ Cᴀɴᴛᴀʙɪʟᴇ
6. Sᴏ Rᴀ Nᴏ Wᴏ Tᴏ
7. Bᴇᴄᴋ
8. BᴀɴG Dʀᴇᴀᴍ!
9. Tʜᴇ ɪDOLM@STER
10. Lᴏᴠᴇ Lɪᴠᴇ! Sᴄʜᴏᴏʟ Iᴅᴏʟ Pʀᴏᴊᴇᴄᴛ
11. Dᴇᴛʀᴏɪᴛ Mᴇᴛᴀʟ Cɪᴛʏ
12. Nᴀɴᴀ
13. IDOLɪSH7
14. Sᴀᴋᴀᴍɪᴄʜɪ ɴᴏ Aᴘᴏʟʟᴏɴ
15. Kɪɴɪʀᴏ ɴᴏ Cᴏʀᴅᴀ
16. Mᴀɢɪᴄ-Kʏᴜɴ! Rᴇɴᴀɪssᴀɴᴄᴇ
17. Pɪᴀɴᴏ ɴᴏ Mᴏʀɪ
18. Fᴜʟʟ Mᴏᴏɴ ᴡᴏ Sᴀɢᴀsʜɪᴛᴇ
19. Wʜɪᴛᴇ Aʟʙᴜᴍ
20. Wᴀᴋᴇ Uᴘ, Gɪʀʟs!
21. Tᴀʀɪ Tᴀʀɪ
22. Gʀᴀᴠɪᴛᴀᴛɪᴏɴ
23. Mᴀᴄʀᴏss Sᴇʀɪᴇs
24. ᴇғ: A Tᴀʟᴇ ᴏғ Mᴇᴍᴏʀɪᴇs.
25. Kᴀᴄʜᴏᴜ Oᴜᴊɪ
26. Lɪᴢ ᴛᴏ Aᴏɪ Tᴏʀɪ
27. Yᴏᴀᴋᴇ Tsᴜɢᴇʀᴜ Lᴜ ɴᴏ Uᴛᴀ
28. Aɪᴋᴀᴛsᴜ!
29. Sᴛᴀʀᴍʏᴜ
30. Fᴜᴜᴋᴀ
31. Sʜᴇʟᴛᴇʀ
32. AKB0048
33. Sʜᴏᴡ Bʏ Rᴏᴄᴋ!!
34. Sʏᴍᴘʜᴏɢᴇᴀʀ 

Hᴀʀᴇᴍ
1. Dᴀᴛᴇ ᴀ Lɪᴠᴇ
2.Mᴀʏᴏ Cʜɪᴋɪ!
3. Mᴏɴsᴛᴇʀ Mᴜsᴜᴍᴇ Nᴏ Iʀᴜ Nɪᴄʜɪᴊᴏᴜ
4. Tᴀɪᴍᴀᴅᴏᴜ Gᴀᴋᴜᴇɴ 35 Sʜᴏᴜᴛᴀɪ
5. Tʜᴇ Wᴏʀʟᴅ Gᴏᴅ Oɴʟʏ Kɴᴏᴡs
6. Dᴇɴᴘᴀ Kʏᴏᴜsʜɪ
7. Kᴏʀᴇ Wᴀ Zᴏᴍʙɪᴇ Dᴇsᴜᴋᴀ
8. Mᴏɴᴏɢᴀᴛᴀʀɪ Sᴇʀɪᴇs
9. OʀᴇIᴍᴏ
10. Zᴇʀᴏ ɴᴏ Tsᴜᴋᴀɪᴍᴀ
11. Mᴀʜᴏᴜ Sᴇɴsᴇɪ Nᴇɢɪᴍᴀ!
12. Isᴇᴋᴀɪ ɴᴏ Sᴇɪᴋɪsʜɪ Mᴏɴᴏɢᴀᴛᴀʀɪ
13. Mᴀɴɢᴀᴋᴀ-sᴀɴ ᴛᴏ Assɪsᴛᴀɴᴛ-sᴀɴ ᴛᴏ Tʜᴇ Aɴɪᴍᴀᴛɪᴏɴ
14. Iᴄʜɪɢᴏ 100%
15. Hᴀɪʏᴏʀᴇ! Nʏᴀʀᴜᴋᴏ-sᴀɴ
16. Sᴡᴏʀᴅ Aʀᴛ Oɴʟɪɴᴇ
17. Cᴀᴍᴘɪᴏɴᴇ!
18. Gʀɪsᴀɪᴀ Sᴇʀɪᴇs
19. Fʀᴇᴇᴢɪɴɢ
20. MM!
21. NᴏᴜCᴏᴍᴇ
22. Aʜ, Mʏ Gᴏᴅᴅᴇss
23. Lᴏᴠᴇ Hɪɴᴀ
24. Hɪɢʜ Sᴄʜᴏᴏʟ ᴏғ ᴛʜᴇ Dᴇᴀᴅ
25. Kɪss x sɪs
26. Hᴇɴᴛᴀɪ Oᴜᴊɪ ᴛᴏ Wᴀʀᴀᴡᴀɴᴀɪ Nᴇᴋᴏ.
27. Sʜɪɴᴍᴀɪ Mᴀᴏᴜ ɴᴏ Tᴇsᴛᴀᴍᴇɴᴛ
28. Sᴇᴋɪʀᴇɪ
29. Gᴀᴋᴜsᴇɴ Tᴏsʜɪ Asᴛᴇʀɪsᴋ
30. Sᴀᴇɴᴀɪ Hᴇʀᴏɪɴᴇ ɴᴏ Sᴏᴅᴀᴛᴇᴋᴀᴛᴀ
31. Mᴀsᴀᴍᴜɴᴇ-ᴋᴜɴ ɴᴏ Rᴇᴠᴇɴɢᴇ
32. Oʀᴇ ɴᴏ Kᴀɴᴏᴊᴏ ᴛᴏ Osᴀɴᴀɴᴀᴊɪᴍɪ ɢᴀ Sʜᴜʀᴀʙᴀ Sᴜɢɪʀᴜ
33. Sʜᴜғғʟᴇ!
34. Nʏᴀɴ Kᴏɪ!
35. Oᴜᴛʙʀᴇᴀᴋ Cᴏᴍᴘᴀɴʏ
36. Mᴀᴅᴀɴ ɴᴏ Oᴜ ᴛᴏ Vᴀɴᴀᴅɪs
37. Mᴀᴊɪ ᴅᴇ Wᴀᴛᴀsʜɪ ɴɪ Kᴏɪ Sʜɪɴᴀsᴀɪ!
38. Pʀɪɴᴄᴇss Lᴏᴠᴇʀ!
29. Sᴇɪᴋᴇɴ Tsᴜᴋᴀɪ ɴᴏ Wᴏʀʟᴅ Bʀᴇᴀᴋ
40. Rᴏᴋᴜᴊᴏᴜᴍᴀ ɴᴏ Sʜɪɴʀʏᴀᴋᴜsʜᴀ!?
41. Hɪɢʜ Sᴄʜᴏᴏʟ DxD
42. Nɪsᴇᴋᴏɪ
43. Bᴏᴋᴜ ᴡᴀ Tᴏᴍᴏᴅᴀᴄʜɪ ɢᴀ Sᴜᴋᴜɴᴀɪ
44. Rᴏsᴀʀɪᴏ ᴛᴏ Vᴀᴍᴘɪʀᴇ
45. IS: Iɴғɪɴɪᴛᴇ Sᴛʀᴀᴛᴏs
46. Tᴏ LOVE-Rᴜ Sᴇʀɪᴇs
47. Sᴏʀᴀ ɴᴏ Oᴛᴏsʜɪᴍᴏɴᴏ
48. Tʀɪɴɪᴛʏ Sᴇᴠᴇɴ
49. Yᴀᴍᴀᴅᴀ-ᴋᴜɴ ᴛᴏ 7-ɴɪɴ ɴᴏ Mᴀᴊᴏ
50. Iᴄʜɪʙᴀɴ Usʜɪʀᴏ ɴᴏ Dᴀɪᴍᴀᴏᴜ

Rᴇᴠᴇʀsᴇ Hᴀʀᴇᴍ
1. Hᴀɴᴀsᴀᴋᴇʀᴜ Sᴇɪsʜᴏᴜɴᴇɴ
2. Uᴛᴀ ɴᴏ☆Pʀɪɴᴄᴇ-sᴀᴍᴀ♪
3. Hᴀᴋᴜᴏᴜᴋɪ
4. Yᴀᴍᴀᴛᴏ Nᴀᴅᴇsʜɪᴋᴏ Sʜɪᴄʜɪ Hᴇɴɢᴇ
5. Aᴋᴀᴛsᴜᴋɪ ɴᴏ Yᴏɴᴀ
6. Fᴜsʜɪɢɪ Yᴜᴜɢɪ (Mʏsᴛᴇʀɪᴏᴜs Pʟᴀʏ)
7. Dɪᴀʙᴏʟɪᴋ Lᴏᴠᴇʀs
8. Aʀᴄᴀɴᴀ Fᴀᴍɪɢʟɪᴀ
9. Bʀᴏᴛʜᴇʀs Cᴏɴғʟɪᴄᴛ
10. Dᴀɴᴄᴇ ᴡɪᴛʜ Dᴇᴠɪʟs
11. Oᴜʀᴀɴ Hɪɢʜ Sᴄʜᴏᴏʟ Hᴏsᴛ Cʟᴜʙ
12. Kᴀᴍɪsᴀᴍᴀ Hᴀᴊɪᴍᴇᴍᴀsʜɪᴛᴀ
13. Aᴍɴᴇsɪᴀ
14. Bᴏɴᴊᴏᴜʀ Sᴡᴇᴇᴛ Lᴏᴠᴇ Pᴀᴛɪssᴇʀɪᴇ
15. Kᴀᴍɪɢᴀᴍɪ ɴᴏ Asᴏʙɪ
16. Hɪɪʀᴏ ɴᴏ Kᴀᴋᴇʀᴀ

Rᴏᴍᴀɴᴄᴇ
1 Cʟᴀʏ & Mᴀʀɪᴀ
2. Wʜɪᴛᴇ Aʟʙᴜᴍ 
3. Cʟᴀɴɴᴀᴅ Aғᴛᴇʀ Sᴛᴏʀʏ
4. Aɴɢᴇʟ Bᴇᴀᴛs
5. Isʜᴜᴜᴋᴀɴ Fʀɪᴇɴᴅs.
6. Sʜɪɢᴀᴛsᴜ ᴡᴀ Kɪᴍɪ ɴᴏ Usᴏ
7. Nɪsᴇᴋᴏɪ
8. Gᴏʟᴅᴇɴ Tɪᴍᴇ
9. Nᴀɢɪ ɴᴏ Asᴜᴋᴀʀᴀ
10. Aᴏ Hᴀʀᴜ Rɪᴅᴇ
11. Oʀᴇ Mᴏɴᴏɢᴀᴛᴀʀɪ
12. Sᴀᴇɴᴀɪ Hᴇʀᴏɪɴᴇ Nᴏ Sᴏᴅᴀᴛᴇᴋᴀ
13. Gᴇᴋᴋᴀɴ Sʜᴏᴊᴏᴜ Nᴏᴢᴀᴋɪ-Kᴜɴ
14. Sᴀɴᴋᴀʀᴇᴀ
15. Kᴏᴋᴏʀᴏ Cᴏɴɴᴇᴄᴛ
16. Aᴍᴀɢᴀᴍɪ SS
17. Kᴏᴛᴏᴜʀᴀ-sᴀɴ (Mᴀsᴜᴋɪɴ Dᴀғᴛᴀʀ Cᴀᴅᴀɴɢᴀɴ Aᴊᴀʜ)
18. Hᴇɴᴛᴀɪ Oᴜᴊɪ ᴛᴏ Wᴀʀᴀᴡᴀɴᴀɪ Nᴇᴋᴏ
19. Tᴏɴᴀʀɪ ɴᴏ Kᴀɪʙᴜᴛsᴜ-ᴋᴜɴ
20. Kᴀɪᴄʜᴏᴜ ᴡᴀ Mᴀɪᴅ-sᴀᴍᴀ!
21. Pʟᴀsᴛɪᴄ Mᴇᴍᴏʀɪᴇs
22. Tᴏʀᴀᴅᴏʀᴀ!
23. Aɴᴏ Hɪ Mɪᴛᴀ Hᴀɴᴀ
24. Zᴇʀᴏ ɴᴏ Tsᴜᴋᴀɪᴍᴀ
25. Bᴏᴋᴜʀᴀ ᴡᴀ Mɪɴɴᴀ Kᴀᴡᴀɪsᴏᴜ
26. Iᴛᴀᴢᴜʀᴀ ɴᴀ Kɪss
27. Yᴀᴍᴀᴅᴀ-ᴋᴜɴ ᴛᴏ 7 ɴɪɴ ɴᴏ Mᴀᴊᴏ
28. Aᴋᴀᴛsᴜᴋɪ Nᴏ Yᴏɴᴀ
29. Oʀᴇ ɴᴏ Kᴀɴᴏᴊᴏ ᴛᴏ Osᴀɴᴀɴᴀᴊɪᴍɪ ɢᴀ Sʜᴜʀᴀʙᴀ Sᴜɢɪʀᴜ
30. Yᴏsᴜɢᴀ ɴᴏ Sᴏʀᴀ
31. Sᴡᴏʀᴅ Aʀᴛ Oɴʟɪɴᴇ
32. Aɴᴏ Nᴀᴛsᴜ ᴅᴇ Mᴀᴛᴛᴇʀᴜ
33. Nᴀʀᴜᴛᴏ Sʜɪᴘᴘᴜᴅᴇɴ : Tʜᴇ Lᴀsᴛ
34. Kɪᴍɪ ɴɪ Tᴏᴅᴏᴋᴇ
35. Gᴏsɪᴄᴋ
36. Nᴀɢᴀᴛᴏ Yᴜᴋɪ-Cʜᴀɴ ɴᴏ Sᴏᴜsʜɪᴛsᴜ (Gᴀᴍʙᴀʀ ᴅᴀʀɪ Sᴢᴜᴍɪʏᴀ Hᴀʀᴜʜɪ ɴᴏ Sᴏᴜsʜɪᴛsᴜ)
37. Kᴀᴍɪsᴀᴍᴀ Hᴀᴊɪᴍᴇᴍᴀsʜɪᴛᴀ
38. Oʀᴇɢᴀɪʀᴜ
39. Sᴏʀᴇᴅᴇᴍᴏ Sᴇᴋᴀɪ ᴡᴀ Uᴛsᴜᴋᴜsʜɪɪ
42. Sᴇʀᴠᴀɴᴛ x Sᴇʀᴠɪᴄᴇ
43. Wᴏʀᴋɪɴɢ
44. Aᴋᴀɢᴀᴍɪ ɴᴏ Sʜɪʀᴀʏᴜᴋɪ Hɪᴍᴇ
45. Dᴇɴᴘᴀ Oɴɴᴀ ᴛᴏ Sᴇɪsʜᴜɴ Oᴛᴏᴋᴏ
46. Tᴀsᴏɢᴀʀᴇ Oᴛᴏᴍᴇ x Aᴍɴᴇsɪᴀ
47. NHK Nɪ Yᴏᴜᴋᴏsᴏ
48. Bᴏᴋᴜ Dᴀᴋᴇ ɢᴀ Iɴᴀɪ Mᴀᴄʜɪ
49. Iɴᴜ x Bᴏᴋᴜ Sᴇᴄʀᴇᴛ Sᴇʀᴠɪᴄᴇ
50. Nᴀᴢᴏ ɴᴏ Kᴀɴᴏᴊᴏ X
51. Sᴘᴇᴄɪᴀʟ A
52. Lᴏᴠᴇʟʏ Cᴏᴍᴘʟᴇx
53. Sᴜᴋɪᴛᴛᴇ Iɪ ɴᴀ ʏᴏ
54. Eɪᴋᴏᴋᴜ Kᴏɪ Mᴏɴᴏɢᴀᴛᴀʀɪ Eᴍᴍᴀ
55. Nᴀɴᴀ
56. Rᴏᴍᴇᴏ x Jᴜʟɪᴇᴛ
57. Hᴀᴄʜɪᴍɪᴛsᴜ ᴛᴏ Cʟᴏᴠᴇʀ
58. Bʏᴏᴜsᴏᴋᴜ 5 Cᴇɴᴛɪᴍᴇᴛᴇʀ
59. Bᴏᴋᴜʀᴀ ɢᴀ Iᴛᴀ
60. Kᴏɪ Kᴀᴢᴇ
61. Oᴏᴋᴀᴍɪ ᴛᴏ Kᴏᴜsʜɪɴʀʏᴏᴜ
62. Nᴏᴅᴀᴍᴇ Cᴀɴᴛᴀʙɪʟᴇ 
63. Hᴏᴛᴀʀᴜʙɪ ɴᴏ Mᴏʀɪ ᴇ
64. Kɪᴍɪ ɴᴏ Nᴀ Wᴀ?
65. Hᴏʀɪ-sᴀɴ ᴛᴏ Mɪʏᴀᴍᴜʀᴀ-ᴋᴜɴ
66. Rᴇᴄ
67. Cʜɪʜᴀʏᴀғᴜʀᴜ
68. Mᴀsʜɪʀᴏ-ɪʀᴏ Sʏᴍᴘʜᴏɴʏ
70. Cʀᴏss Gᴀᴍᴇ
71. Tʀᴜᴇ Tᴇᴀʀs
72. Mᴀsᴀᴍᴜɴᴇ-ᴋᴜɴ ɴᴏ Rᴇᴠᴇɴɢᴇ 
73. Sᴇɪʀᴇɴ 
74. RᴇLIFE
75. Hᴏsʜɪᴢᴏʀᴀ ᴇ Kᴀᴋᴀʀᴜ Hᴀsʜɪ
76. Eʀᴏᴍᴀɴɢᴀ-Sᴇɴsᴇɪ
77. Kᴏᴇ ɴᴏ Kᴀᴛᴀᴄʜɪ
78. Nᴏɢɪᴢᴀᴋᴀ Hᴀʀᴜᴋᴀ ɴᴏ Hɪᴍɪᴛsᴜ
79. Kɪᴢɴᴀɪᴠᴇʀ
80. Gᴜɪʟᴛʏ Cʀᴏᴡɴ
81. Oʀᴀɴɢᴇ
82. Tsᴜᴋɪ ɢᴀ Kɪʀᴇɪ
83. Gᴀᴍᴇʀs
84. Sᴀᴋᴜʀᴀsᴏᴜ ɴᴏ ᴘᴇᴛ ɴᴀ ᴋᴀɴᴏᴊᴏᴜ
85. Oʀᴇ ɴᴏ Iᴍᴏᴜᴛᴏ ɢᴀ Kᴏɴɴᴀɴɪ Kᴀᴡᴀɪɪ Wᴀᴋᴇ ɢᴀ Nᴀɪ`, text, tescuk, cr)
					break
					case 'wer':
					if (!isOwner) return
					case 'ownermenu':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					costum( ownermenu(prefix), text, tescuk, cr)
					client.sendMessage(from, 'Hai bang😃', text, { quoted: mek })
					break
					case 'sfw':
					if (!isOwner) return
					case 'nsfwmenu':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					client.sendMessage(from, nsfwmenu(prefix), text, tescuk, cr)
					client.sendMessage(from,'SANGEAN AOWKWOWK',text, { quoted: mek })
					break
					case 'nime':
					if (!isOwner) return
					case 'animemenu':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					costum( animemenu(prefix), text, tescuk, cr)
					client.sendMessage(from, 'Hai bang😃', text, { quoted: mek })
					break
					case 'med':
					if (!isOwner) return
					case 'mediamenu':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					costum( mediamenu(prefix), text, tescuk, cr)
					client.sendMessage(from, 'Hai bang😃', text, { quoted: mek })
					break
					case 'bahasalist':
					client.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
					costum( bahasa(), text, tescuk, cr)
					break
				  case 'tem':
				if (!isOwner) return
					case 'othermenu':
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					costum( othermenu(prefix), text, tescuk, cr)
					client.sendMessage(from, 'Hai bang😃', text, { quoted: mek })
					break
					case 'group':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					costum( '*GROUP*\n\n_Yuk masuk kak_\n_sama sama belajar buat bot_\n*TIDAK TERSEDIA*', text, tescuk, cr)
					break
					case 'fume':
					if (!isOwner) return
					case 'funmenu':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					costum( funmenu(prefix), text, tescuk, cr)
					client.sendMessage(from, 'Hai bang😃', text, { quoted: mek })
					break
				 case 'menker':
				if (!isOwner) return
					case 'makermenu':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					costum( makermenu(prefix), text, tescuk, cr)
					client.sendMessage(from, 'Hai bang😃', text, { quoted: mek })
					break
					case 'sjsjs':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					client.sendMessage(from, 'Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker' , text, { quoted: mek })
					break
					case 'sk':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					client.sendMessage(from, 'Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker' , text, { quoted: mek })
					break
					case 'level':
                if (!isLevelingOn) return reply(mess.levelnoton)
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(mess.levelnol)
                sem = sender.replace('@s.whatsapp.net','')
                if (!isOwner) costum(`┏━━❉ *LEVEL* ❉━━\n┣⊱ Nama : ${pushname2}\n┣⊱ User XP :  ${userXp}\n┣⊱ User Level : ${userLevel}\n┗━━━━━━━━━━━━`, text, tescuk,`*Level Mu ${userLevel}*`)
              if (isOwner)  costum (`┏━━❉ *LEVEL* ❉━━\n┣⊱ Nama : ${pushname2}\n┣⊱ User XP :  9999999\n┣⊱ User Level : 9999\n┗━━━━━━━━━━━━`, text, tescuk,`*Level Mu 9999*`)
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
            break
            case 'dolar':
                const dojar = getDolarExp(sender)
                lax = sender.replace('@s.whatsapp.net','')
                if (!isOwner) return costum( `┏━━❉ *DOLAR* ❉━━\n┣⊱ Nama : ${pushname2}\n┣⊱ Balance :  ${dojar}\n┗━━━━━━━━━━━━`, text, tescuk,`Dolar Mu ${dojar}`)
                if (isOwner) return costum(`┏━━❉ *DOLAR* ❉━━\n┣⊱ Nama : ${pushname2}\n┣⊱ Balance :  99999\n┗━━━━━━━━━━━━`, text, tescuk,`Dolar Mu 99999`)
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
            break
            case 'limit':
                const lhs = getLimit(sender)
                lax = sender.replace('@s.whatsapp.net','')
                if (!isOwner) return costum( `┏━━❉ *DOLAR* ❉━━\n┣⊱ Nama : ${pushname2}\n┣⊱ Limit :  ${lhs}\n┗━━━━━━━━━━━━`, text, tescuk,`Limit Mu ${lhs}`)
                if (isOwner) return costum(`┏━━❉ *Limit* ❉━━\n┣⊱ Nama : ${pushname2}\n┣⊱ Limit :  99999\n┗━━━━━━━━━━━━`, text, tescuk,`Limit Mu 99999`)
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
            break
            case 'leveling':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (args.length < 1) return reply('Pilih enable atau disable udin!! :𝘃')
                if (args[0] === 'enable') {
                    if (isLevelingOn) return reply('*fitur level sudah aktif sebelum nya*')
                    _leveling.push(groupId)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(mess.levelon)
                } else if (args[0] === 'disable') {
                    _leveling.splice(groupId, 1)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(mess.leveloff)
                } else {
                    reply(' *Pilih enable atau disable udin!!*')
                }
            break
                   case 'cuy':
                   client.sendMessage(from, 'uy ada apa' , text, { quoted: mek })
                    break
                    case 'rules':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isUser) return reply(mess.only.userB)
                   costum( rules(prefix), text, tescuk, cr)
                    break
                    case 'modapk':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isUser) return reply(mess.only.userB)
                   client.sendMessage(from, modapk(), text, tescuk, cr)
                    break
					case 'sls':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					client.sendMessage(from, 'Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker' , text, { quoted: mek })
					break
					case 'sk':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('khusus owner tolol')
					client.sendMessage(from, addfoto(), text, { quoted: mek })
					break
					case 'mm':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('khusus owner tolol')
					if (args.length < 1) return reply('Teksnya mana kak')
					reply(mess.wait)
					client.sendMessage(from, 'Berhasil Menambahkan ke List Message' , text, { quoted: mek })
					client.sendMessage(from, addsay(), text, { quoted: mek })
					break
					case 'kodenuklir':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isNsfw) return reply('Fitur Nsfw Belum Dihidupkan Ketik /nsfw1 jika ingin mematikan ketik /nsfw 0')
					costum( kodenuklir(), text, tescuk, cr)
					break
					case 'kodenuklir2':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isNsfw) return reply('Fitur Nsfw Belum Dihidupkan Ketik /nsfw1 jika ingin mematikan ketik /nsfw 0')
					costum( kodenuklir2(), text, tescuk, cr)
					break
					case 'listsay':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('khusus owner tolol')
					client.sendMessage(from, listsay(), text, { quoted: mek })
					break
					case 'brangay':
					case 'agunggay':
					case 'fajargay':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					client.sendMessage(from, 'iya emang gay dia kak parah banget pokoknya' , text, { quoted: mek })
					break
					case 'orang':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					client.sendMessage(from, 'siapaa?' , text, { quoted: mek })
					break
					case 'masougakuenhxh':
			       case 'valxlove':
                    case 'prisonschool':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isUser) return reply(mess.only.userB)
					client.sendMessage(from, 'anime Harem itu kak bagus banget' , text, { quoted: mek })
					break
					case 'delsay':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('khusus owner tolol')
					if (args.length < 1) return reply('Teksnya mana kak')
					reply(mess.wait)
					client.sendMessage(from, 'berhasil menghapus Message di List Message' , text, { quoted: mek })
					break
					case 'daftarvip':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					client.sendMessage(from, daftarvip(prefix) , text, tescuk, cr)
					break
					case 'readmore':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('teks nya mana om?')
					var kls = body.slice(9)
					var has = kls.split("|")[0];
					var kas = kls.split("|")[1];
					if (args.length < 1) return reply(mess.blank)
				client.sendMessage(from, `${has}‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎${kas}` , text, { quoted: mek })
					break
					case 'ytsearch':
					client.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (args.length < 1) return reply('Yang mau di cari apaan? titit?')
					anu = await fetchJson(`https://mhankbarbar.tech/api/ytsearch?q=${body.slice(10)}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = '--------------------------\n'
					for (let i of anu.result) {
						teks += `*Title* : ${i.title}\n*links* : https://youtu.be/${i.id}\n*Published* : ${i.publishTime}\n*Duration* : ${i.duration}\n*Views* : ${h2k(i.views)}\n--------------------------\n`
					}
					reply(teks.trim())
					break
					case 'nekopoi':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					client.sendMessage(from, nekopoi() , text, tescuk, cr)
					break
					case 'cekvip':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik */daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					me = client.user
					uptime = process.uptime()
					client.sendMessage(from,  `*──────────────────*\n*Nama:* *${pushname2}*\n*─────────────────*\n『 *𝐕𝐈𝐏 𝐔𝐒𝐄𝐑*』\n*──────────────────*\n*•Nomor:* *${sender.split("@s.whatsapp.net")[0]}*\n*•Since:* *${date}*\n*•Expired:* *${timo}*\n*•Status:* *ACTIVE*\n*──────────────────*\n*Status Bot:* *${kyun(uptime)}*\n*──────────────────*` , text, { quoted: mek, })
					break
					case 'gambar':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik */daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					const items = ["anime high school dxd", "anime high school dxd hd", "karakter anime high school dxd", "anime high school dxd aesthetic", "wallpaper komputer high school dxd", "wallpaper android high school dxd"];
					const pepw = items[Math.floor(Math.random() * items.length)]
					tod = await getBuffer(`https://api.fdci.se/rep.php?gambar=${items}`)
					client.sendMessage(from, tod, image, { quoted: mek, caption: 'tes'+pepw })
					break
					case 'vipadd':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik */daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = '╭────「 *PREMIUM👑* 」──*\n│+ *Number* : \n│+ *Expired*: *30 Days*\n│+ *Status*: *ACTIVE*\n│ Thx for Upgrade to Premium🥰\n*╰──────「 *MR KING BOT* 」────'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.sendMessage(from, mentioned)
					} else {
						mentions(`╭────「 *PREMIUM👑* 」──*\n│+ *Number* : @${mentioned[0].split('@')[0]}\n│+ *Expired*: *30 Days*\n│+ *Status*: *ACTIVE*\n│ Thx for Upgrade to Premium🥰\n*╰──────「 *MR KING BOT* 」────`, mentioned, true)
					client.sendMessage(from, mentioned)
				    }
					break
					case 'cipok':

					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di cipok!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var nom = mek.participant
					if (mentioned.length > 1) {
						teks = 'cipok terus sama dia'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
							teks += `@${nom.split("@s.whatsapp.net")[0]} \n`
						}
						mentions(teks, mentioned, true)
						contextInfo: { mentionedJid: [nom] }
						client.sendMessage(from, mentioned)
					} else {
						mentions(`@${nom.split("@s.whatsapp.net")[0]} cipok terus sama dia @${mentioned[0].split('@')[0]}`, mentioned, true)
					client.sendMessage(from, mentioned)
					}
				    break
					case 'vipdell':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik */daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = '╭────「 *PREMIUM👑* 」──*\n│+ *Number* : \n│+ *Status*: *DEACTIVE*\n│ See u for next order🙂\n*╰──────「 *MR KING BOT* 」────'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.sendMessage(from, mentioned)
					} else {
						mentions(`╭────「 *PREMIUM👑* 」──*\n│+ *Number* : @${mentioned[0].split('@')[0]}\n│+ *Status*: *DEACTIVE*\n│ See u for next order🙂\n*╰──────「 *MR KING BOT* 」────`, mentioned, true)
					client.sendMessage(from, mentioned)
				    }
					break
					case 'admin':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					costum( '*╭────*「 *ADMINBOT MR KING✨* 」\n*│+wa.me/18313535216*\n*│+wa.me/6282255123081*\n*╰──────*「 *MR KING BOT* 」*────*\n\n*_JIKA INGIN MENJADI ADMIN MR KING BOT_*\n*_Ketik /iklan_*' ,tescuk, cr)
					break
					case 'premiumcek':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					sa = await getBuffer(`https://i.ibb.co/Gv5W97v/IMG-20210106-WA1995.jpg`)
					client.sendMessage(from, sa, image, { quoted: mek, caption: '*╭────*「 *PREMIUM USER👑* 」\n*│+ wa.me/6282198571732*\n*│+ wa.me/62895801181650*\n*│+ wa.me/6289655478810*\n*│+ wa.me/6289655478810*\n*│+ wa.me/6285807107404*\n*╰──────*「 *MR KING* 」*────*\n\n*_JIKA INGIN MENJADI PREMIUM USER MR KING BOT_*\n*_Ketik /daftarvip*' })
					break
					case 'addpremium':
					if (isBanned) return reply(mess.only.benned)    
					client.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					premium = args[0]
					reply(`Perintah Diterima menambah User Premium : ${premium}`)
					break
					case 'katakata':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					qute = await getBuffer(`https://i.ibb.co/tMnTJ4b/proses-1.jpg`)
					client.sendMessage(from, qute, image, { quoted: mek, caption: '*Nih kak*' })
					break
					case 'indo1':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik */daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' })
					break
					case 'listgroup':
                    client.groupId().then((res) => {
                        let berhitung1 = 1
                        let gc = `
❉──────────────────❉
    *LIST GROUP*
❉──────────────────❉\n`
                        for (let i = 0; i < res.length; i++) {
                            gc += `\n═════════════════\n\n*No : ${i+1}*\n*Nama* : ${res[i].name}\n*Pesan Belum Dibaca* : ${res[i].unreadCount} chat\n*Tidak Spam* : ${res[i].notSpam}\n`
                        }
                        reply( gc)
                    })
                    break
					case 'indo2':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik */daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' })
					break
					case 'indo3':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik */daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file' })
					break
					case 'indo4':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik */daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' })
					break
					case 'indo5':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik */daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' })
					break
					case 'indo6':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik */daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' })
					break
					case 'indo7':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik */daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' })
					break
					case 'bokehtext':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					grre = body.slice(11)
					reply(mess.wait)
					gree = await getBuffer(`https://naufalhoster.xyz/textmaker/bokeh?apikey=john-doe&text=${grre}`)
					client.sendMessage(from, gree, image, {caption: 'Nih kak', quoted: mek})
					break
					case 'fbbutton':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					grre = body.slice(9)
					reply(mess.wait)
					gree = await getBuffer(`https://naufalhoster.xyz/textmaker/fb_golden_play_button?apikey=john-doe&text=${grre}`)
					client.sendMessage(from, gree, image, {caption: 'Nih kak', quoted: mek})
					break
					case 'fotbaltext':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					grre = body.slice(11)
					reply(mess.wait)
					teks90 = grre.split("|")[0];
                    teks80 = grre.split("|")[1];
					gree = await getBuffer(`https://naufalhoster.xyz/textmaker/football?apikey=john-doe&text1=${teks90}&text2=${teks80}`)
					client.sendMessage(from, gree, image, {caption: 'Nih kak', quoted: mek})
					break
					case 'gtatext':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					grre = body.slice(9)
					reply(mess.wait)
					teks89 = grre.split("|")[0];
                    teks88 = grre.split("|")[1];
					gree = await getBuffer(`https://naufalhoster.xyz/textmaker/gta_original?apikey=john-doe&text1=${teks89}&text2=${teks88}`)
					client.sendMessage(from, gree, image, {caption: 'Nih kak', quoted: mek})
					break
					case 'yk':
					if (!isOwner) return
					case 'ytkomen':
					if (isBanned) return reply(mess.only.benned)    
                                         if (!isUser) return reply(mess.only.userB)
                                         if (args.length < 1) return reply('teks nya mana om?')
                                         gh = body.slice(9)
                                         usnm = gh.split("|")[0];
                                         cmn = gh.split("|")[1];
                                         var imgbb = require('imgbb-uploader')
                                         ghost = mek.participant
                                         try {
                                         pp = await client.getProfilePicture(ghost)
                                         } catch {
                                         pp = 'https://i.ibb.co/64dN6bQ/IMG-20201220-WA0024.jpg'
                                         }
                                         media = await getBuffer(pp)
                                         datae = await imageToBase64(JSON.stringify(pp).replace(/\"/gi, ''))
                                           fs.writeFileSync('getpp.jpeg', datae, 'base64')
                                         res = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", 'getpp.jpeg')
                                         buffer = await getBuffer(`https://some-random-api.ml/canvas/youtube-comment?avatar=${res.display_url}&comment=${cmn}&username=${usnm}`)
                                         client.sendMessage(from, buffer, image, {quoted: mek, caption: `*${usnm}* : ${cmn}`})
                                         break
                                         case 'phubkomen':
					if (isBanned) return reply(mess.only.benned)    
                                         if (!isUser) return reply(mess.only.userB)
                                         if (args.length < 1) return reply('teks nya mana om?')
                                         gh = body.slice(10)
                                         usrm = gh.split("|")[0];
                                         mantap = gh.split("|")[1];
                                         var imgbb = require('imgbb-uploader')
                                         ghost = mek.participant
                                         try {
                                         pp = await client.getProfilePicture(ghost)
                                         } catch {
                                         pp = 'https://i.ibb.co/64dN6bQ/IMG-20201220-WA0024.jpg'
                                         }
                                         media = await getBuffer(pp)
                                         datae = await imageToBase64(JSON.stringify(pp).replace(/\"/gi, ''))
                                           fs.writeFileSync('getpp.jpeg', datae, 'base64')
                                         res = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", 'getpp.jpeg')
                                         buffer = await getBuffer(`https://api.zeks.xyz/api/phub?apikey=administrator&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=${usrm}&msg=${mantap}`)
                                         client.sendMessage(from, buffer, image, {quoted: mek, caption: `*${usrm}* : ${mantap}`})
                                         break
                                         case 'send':
                                         if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik */daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					var pc = body.slice(6)
					var nomor = pc.split("|")[0];
					var sms = pc.split("|")[1];
					client.sendMessage(nomor+'@s.whatsapp.net', sms, text)
					break
					case 'googleimage':
				   client.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
				   if (args.length < 1) return reply('Apa yang mau dicari kak?')
					goo = body.slice(7)
					anu = await fetchJson(`https://api.vhtear.com/googleimg?query=${goo}&apikey=${vhtear}`, {method: 'get'})
					reply(`Harap Sabar Jangan Spam,Jika Ketahuan Spam Banned Balasannya`)
				    var pol = JSON.parse(JSON.stringify(anu.result.result_search));
                    var tes2 =  pol[Math.floor(Math.random() * pol.length)];
					pint = await getBuffer(tes2)
					client.sendMessage(from, pint, image, {caption: '*Pencarian : '+goo+'*', quoted: mek })
					break
					case 'googlesearch':
				   client.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
				   if (args.length < 1) return reply('Apa yang mau dicari kak?')
					canda = body.slice(7)
					anu = await fetchJson(`https://api.vhtear.com/googlesearch?query=${canda}&apikey=${vhtear}`)
					reply(mess.wait)
				    var upu = JSON.parse(JSON.stringify(anu.result.result_search));
                    var tes78 =  upu[Math.floor(Math.random() * upu.length)];
					pint = await getBuffer(tes2)
					client.sendMessage(from, pint, text, { caption: '*Google search*\n\n*Hasil Pencarian : '+tes78+'*', quoted: mek })
					break
					case 'delete':
					case 'del':
					case 'd':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
					if (!isGroup)return reply(mess.only.group)
					if (!isGroupAdmins)return reply(mess.only.admin)
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
					case 'kalkulator':
					if (isBanned) return reply(mess.only.benned)    
				   if (!isUser) return reply(mess.only.userB)
				     if (args.length < 1) return reply(`[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`)
				    const Math_js = require('mathjs')
				    mtk = body.slice(6)
				    if (typeof Math_js.evaluate(mtk) !== "number") {
					reply(`"${mtk}", bukan angka!\n[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`)
				} else {
					reply(`*「 MATH 」*\n\n*Kalkulator*\n${mtk} = ${Math_js.evaluate(mtk)}`)
				}
				    break
					case 'chatdelete':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
					case 'indo8':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik */daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' })
					break
					case 'indo9':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik */daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/aipi6xisyppe751/VID-20210107-WA1465.mp4/file' })
					break
					case 'indo10':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik */daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })
					break
					case 'indo11':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik */daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' })
					break
					case 'indo12':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik */daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' })
					break
					case 'burning':
					if (isBanned) return reply(mess.only.benned)
                                        if (!isUser) return reply(mess.only.userB)
                                        if (!ispublic) return reply(mess.only.public)
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         reply(mess.wait)
                                         owgi = await client.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", owgi)
                                        teks = `${anu.imgUrl}`
                                        ranp = getRandom('.gif')
                                        rano = getRandom('.webp')
                                        anu1 = `https://api.vhtear.com/burning_fire?link=${teks}&apikey=${vhtear}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                client.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             break
					case 'indo13':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik */daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' })
					break
					case 'indo14':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik */daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' })
					break
					case 'ger':
					if (!isOwner) return
					case 'triggerd':
                                         
                                        if (!isUser) return reply(mess.only.userB)
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         reply(mess.wait)
                                         owgi = await client.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", owgi)
                                        teks = `${anu.display_url}`
                                        ranp = getRandom('.gif')
                                        rano = getRandom('.webp')
                                        anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                client.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             break
					case 'indo15':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik */daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' })
					break
					case 'darkjokes':
				client.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
				 data = fs.readFileSync('./src/darkjokes.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '\`\`\`DARKJOKES\`\`\`')
				break
				case 'indiahot':
				client.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
				 data = fs.readFileSync('./src/bokep.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '\`\`\`DARKJOKES\`\`\`')
				break
				case 'aesthetic':
				client.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
				 data = fs.readFileSync('./src/walpaper.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '\`\`\`NIH WALPAPERNYA KAK\`\`\`')
				break
				case 'walpaper':
				client.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
				 data = fs.readFileSync('./src/sakura.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '\`\`\`NIH WALPAPERNYA KAK\`\`\`')
				break
				case 'glass':
                                         
                                        if (!isUser) return reply(mess.only.userB)
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         reply(mess.wait)
                                         owgi = await client.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", owgi)
                                        teks = `${anu.display_url}`
                                        ranp = getRandom('.png')
                                        rano = getRandom('.webp')
                                        anu1 = `https://some-random-api.ml/canvas/glass?avatar=${teks}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                client.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             break
                                             case 'colors':
                                         
                                        if (!isUser) return reply(mess.only.userB)
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         reply(mess.wait)
                                         owgi = await client.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", owgi)
                                        teks = `${anu.display_url}`
                                        ranp = getRandom('.png')
                                        rano = getRandom('.webp')
                                        anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                client.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             break
				case 'wated':
                                         
                                        if (!isUser) return reply(mess.only.userB)
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         reply(mess.wait)
                                         owgi = await client.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", owgi)
                                        teks = `${anu.display_url}`
                                        ranp = getRandom('.png')
                                        rano = getRandom('.webp')
                                        anu1 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                client.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             break
					case 'indo16':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik */daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/mgmynqghjnon2q7/VID-20210107-WA1533.mp4/file' })
					break
					case 'indo17':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik */daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/ecly00at6adxs20/VID-20210107-WA1540.mp4/file' })
					break
					case 'indo18':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik */daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/7qkn8nuog22jsco/VID-20210107-WA1534.mp4/file' })
					break
					case 'indo19':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik */daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/vza5uaben93dfdr/VID-20210107-WA1527.mp4/file' })
					break
					case 'indo20':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik */daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/l7uzd4v9p95wpeb/VID-20210107-WA1541.mp4/file' })
					break
					case 'indo21':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik */daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/icpnxsr18j6l2pp/VID-20210107-WA1528.mp4/file' })
					break
					case 'indo22':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik */daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/cscj9taoq5s5oj9/VID-20210107-WA1538.mp4/file' })
					break
					case 'indo23':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik */daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/saer161lthn4sy3/VID-20210107-WA1525.mp4/file' })
					break
					case 'indo24':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik */daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/9jy3nj2b2ljjzxb/VID-20210107-WA1539.mp4/file' })
					break
					case 'indo25':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik */daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					qute = await getBuffer(`https://i.ibb.co/LvCvdP3/IMG-20210107-WA1487.png`)
					client.sendMessage(from, qute, image, { quoted: mek, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/j3hxseqc3uoc1v7/VID-20210107-WA1526.mp4/file' })
					break
					case 'vipmenu':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					if (!isPremium) return reply('Anda bukan Member Premium, silakan hubungi owner atau ketik */daftarvip* untuk membeli akses Premium!' ,text, { quoted: mek })
					client.sendMessage(from, vipmenu(prefix) , text, { quoted: mek })
					break
					case 'iklan':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					client.sendMessage(from, iklan() , text, { quoted: mek })
					break
                case 'kodenegara':
               client.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
               client.sendMessage(from, negara(prefix, sender), text, {quoted: mek})
               break
					case 'animesaran':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					qute = await getBuffer(`https://i.ibb.co/F7y89KS/images-2021-01-06-T011202-662.jpg`)
					client.sendMessage(from, qute, image, { quoted: mek, caption: animesaran() })
					break
					case 'listsurah':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					client.sendMessage(from, listsurah() , text, tescuk, cr)
					break
					case 'tnc':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					costum(tnc() , text, tescuk, cr)
					break
					case 'listzodiak':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					costum( listzodiak() , text, tescuk, cr)
					break
					case 'zodiak':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
	if (args.length === 0) {
	client.sendMessage(from, listzodiak(), text)
	} else if (args.includes('aries')) {
	client.sendMessage(from, aries(), text)
	} else if (args.includes('taurus')) {
	client.sendMessage(from, taurus(), text)
	} else if (args.includes('gemini')) {
	client.sendMessage(from, gemini(), text)
	} else if (args.includes('cancer')) {
	client.sendMessage(from, cancer(), text)
	} else if (args.includes('leo')) {
	client.sendMessage(from, Leo(), text)
	} else if (args.includes('virgo')) {
	client.sendMessage(from, Virgo(), text)
	} else if (args.includes('libra')) {
	client.sendMessage(from, Libra(), text)
	} else if (args.includes('scorpio')) {
	client.sendMessage(from, Scorpio(), text)
	} else if (args.includes('sagittarius')) {
	client.sendMessage(from, Sagittarius(), text)
	} else if (args.includes('capricorn')) {
	client.sendMessage(from, Capricorn(), text)
	} else if (args.includes('aquarius')) {
	client.sendMessage(from, Aquarius(), text)
	} else if (args.includes('pisces')) {
	client.sendMessage(from, Pisces(), text)
	}
	break
					
					
					
                case 'welot':
              case 'kangcopet':
              case 'bangkadada':
                    let elot = fs.readFileSync('./lindy/welot.mp3')
                    client.sendMessage(from, elot, MessageType.audio, { ptt: true, quoted: mek })
                    break
                    case 'hantu':
              case 'kunti':
              case 'haha':
                    let nek = fs.readFileSync('./lindy/AUD-20210110-WA0311.mp3')
                    client.sendMessage(from, nek, MessageType.audio, { ptt: true, quoted: mek })
                    break
		case 'IRI':
              case 'iri':
              case 'Iri':
                    let iri = fs.readFileSync('./lindy/iri.mp3')
                    client.sendMessage(from, iri, MessageType.audio, { ptt: true, quoted: mek })
                    break
                case 'BAKA':
              case 'baka':
              case 'Baka':
                    let baka = fs.readFileSync('./lindy/baka.mp3')
                    client.sendMessage(from, baka, MessageType.audio, { ptt: true, quoted: mek })
                    break
                    case 'tariksis':
              case 'tarekses':
              case 'tareksis':
                    let ses = fs.readFileSync('./lindy/tarekses.mp3')
                    client.sendMessage(from, ses, MessageType.audio, { ptt: true, quoted: mek })
                    break
                case 'jago':
              case 'abangjago':
              case 'abgjago':
                    let eerrr = fs.readFileSync('./lindy/abangjago.mp3')
                    client.sendMessage(from, eerrr, MessageType.audio, { ptt: true, quoted: mek })
                    break
                
                
                
				case 'info':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					me = client.user
					uptime = process.uptime()
					costum(`*Nama bot* : ${me.name}\n*Author* : *MR KING *\n*FRENDS* : ORANG MISTERIUS\n*Nomor Bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total Block Contact* : ${blocked.length}\n*The bot is active on* : ${kyun(uptime)}\n*Public:* ON\n*Total User Premium*: ${premium.length}\n*Total Chat* : ${totalchat.length}`, text, tescuk, `*Info MR KING BOT!*`)
					break
					case 'profile':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
					me = client.user
					uptime = process.uptime()
					teks = `*Nama bot* : ${me.name}\n*Anuther* : *MR KING*\n*FRENDS* : TANPA NAMA\n*Nomor Bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total Block Contact* : ${blocked.length}\n*The bot is active on* : ${kyun(uptime)}\n*Public:* OFF\nTime: ${time}\nDate: ${date}\nTes: ${timi}`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
					case 'fakta':
               if (isBanned) return reply(mess.only.benned)    

				if (!isUser) return reply(mess.only.userB)

               data = await fetchJson('http://xptnewapi.xp3.biz/Faktaaas.php?apikey=xptn3')
               hasil = data.result
                client.sendMessage(from, hasil, text, {quoted: mek})
				case 'blocklist':
					client.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
					teks = 'This is list of blocked number :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
				case 'translate':
               if (isBanned) return reply(mess.only.benned)    
		       if (!isUser) return reply(mess.only.userB)
               gh = body.slice(10)
               teks9 = gh.split("|")[0];
               teks10 = gh.split("|")[1];
               data = await fetchJson('https://docs-jojo.herokuapp.com/api/translate?text=${teks9}&from=id&to=${teks10}')
               hasil = `Semula : ${data.original_text}\nArti : ${data.translated_text}`
                client.sendMessage(from, hasil, text, tescuk, cr)
               break
				case 'ocr':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)    
				if (!ispublic) return reply(mess.only.public)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Foto aja mas')
					}
					break
				
				case '':
				if (!isOwner) return 
				case 'sticker':
				case 'stiker':
			
				if (isBanned) return reply(mess.only.benned)    
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								costum(buffer, sticker, tescuk,`Nih Asu`)
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								costum(buffer, sticker, tescuk,`Nih Asu`)
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								buffer = fs.readFileSync(ranw)
								costum(buffer, sticker, tescuk,`Nih Asu`)
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								buffer = fs.readFileSync(ran)
								costum(buffer, sticker, tescuk,`Nih Asu`)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
                                          }
                                        break
                                        case 'stikergif':
                case 'stickergif':
                case 'sgif':
                if ((isMedia && !mek.message.videoMessage.seconds < 11 || isQuotedVideo && !mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								costum(buffer, sticker, tescuk,`Nih Asu`)
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else {
						reply(`Kirim video dengan caption ${prefix}stickergif atau tag video yang sudah dikirim`)
					}
					break
			case 'creator':
			case 'owner':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                 client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                 client.sendMessage(from, 'itu pacar ku eh owner ku ><',MessageType.text, { quoted: mek} )
                 tod = await getBuffer(`https://i.ibb.co/ZfS1nPC/images-2020-12-28-T142415-021.jpg`)
                 client.sendMessage(from, tod, image, { quoted: mek, caption: '*ini waifu owner ku mau apa kau*'})
                 break
                 case 'getpic':
                 case 'yourpic':
					client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
				if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
						if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return 
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TUNGGU DULU KANG COLONG')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
						try {
						pp = await client.getProfilePicture(mentioned)
						buffer = await getBuffer(pp)
						sendImage(buffer, mek, 'Nih mank')
					} catch (e) {
						reply('Gagal Kak!')
					}
					break
                 case 'antilink':
					client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('pilih enable atau disable udin!!')
					if (args[0] == 'enable') {
						if (isSimi) return reply('Mode antilink sudah aktif')
						anlink.push(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(anlink))
						reply(`Sukses mengaktifkan mode antilink`)
					} else if (args[0] == 'disable') {
						anlink.splice(from, 1)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(anlink))
						reply('Sukes menonaktifkan mode antilink️')
					} else {
						reply('pilih enable atau disable udin!!')
					}
					break
                 case 'jomblo':
                                         
                                        if (!isUser) return reply(mess.only.userB)
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         reply(mess.wait)
                                         owgi = await client.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", owgi)
                                        teks = `${anu.display_url}`
                                        ranp = getRandom('.gif')
                                        rano = getRandom('.webp')
                                        anu1 = `https://some-random-api.ml/animu/pat?avatar=${teks}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                client.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             break
                 case 'emailtome':
            try {
            	if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
                .then((response) => {
                    let hehex = '╔══✪〘 List Surah 〙✪══\n'
                    for (let i = 0; i < response.data.data.length; i++) {
                        hehex += '╠➥ '
                        hehex += response.data.data[i].name.transliteration.id.toLowerCase() + '\n'
                            }
                        hehex += '╚═〘 *R I Z K Y B O T* 〙'
                    reply(from, hehex, text)
                })
            } catch(err) {
                reply(from, err, text)
            }
            break
                 case 'fitnah':
                 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                 if (!ispublic) return reply(mess.only.public)
				if (!isPremium) return reply(mess.only.premium)
				if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
				var gh = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("|")[0];
					var target = gh.split("|")[1];
					var bot = gh.split("|")[2];
					client.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break
                case 'faks':
                   client2.fakeReply("ange mas", "mending lari", "0823-877101916", MessageType.text)
                   break
                   case 'fake':
costum('kamu gay', '0@s.whatsapp.net', `njir`, {quoted: mek})
break
case 'burnpaper':
					if (isBanned) return reply(mess.only.benned)    
				    	if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧𝐲𝐚 𝐤𝐚𝐤')
					npaper = body.slice(10)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=burn_paper&text=${npaper}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
					case 'undergras':
					if (isBanned) return reply(mess.only.benned)    
				    	if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧𝐲𝐚 𝐤𝐚𝐤')
					thegra = body.slice(10)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=message_under_the_grass&text=${thegra}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
					case 'boardlogo':
					if (isBanned) return reply(mess.only.benned)    
				    	if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧??𝐚 𝐤𝐚𝐤')
					boards = body.slice(10)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=wooden_boards&text=${boards}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
					case 'carbon':
					if (args.length < 1)return reply('Sertakan teks nya')
					targed = mek.participant
					teks = body.slice(8)
					drc = await getBuffer(`https://carbonnowsh.herokuapp.com/?code=${teks}`)
					client.sendMessage(from, drc, image, {quoted: mek})
					break
					case 'film':
		data = await fetchJson(`https://api.zeks.xyz/api/film?q=${body.slice(6)}&apikey=apivinz`)
		teks = '\n'
		for (let i of data.result) {
		teks += `Judul: ${i.tile}\nLink: ${i.url}`
		buffer = await getBuffer(data.result[0].thumb)
		client.sendMessage(from, buffer, image, {quoted: mek, caption: teks}) 
		}
		break
					case 'goldmetal':
					if (isBanned) return reply(mess.only.benned)    
				    	if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧𝐲𝐚 𝐤𝐚𝐤')
					metali = body.slice(10)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=metalic_text_glow&text=${metali}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
					case 'lovecoffe':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧𝐲𝐚 𝐤𝐚𝐤')
					coffee = body.slice(10)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=coffee&text=${coffee}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
					case 'woodblock':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧𝐲𝐚 𝐤𝐚𝐤')
					gjelas = body.slice(10)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=wood_block&text=${gjelas}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
					case 'wolfmetal':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧𝐲𝐚 𝐤𝐚𝐤')
					wometal = body.slice(10)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=wolf_metal&text=${wometal}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
					case 'poterlogo':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧𝐲𝐚 𝐤𝐚𝐤')
					potter = body.slice(10)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=harry_potter&text=${potter}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
					case 'vinta':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					vin = body.slice(6)
					reply(mess.wait)
					vintage = await getBuffer(`https://m.arugaz.my.id/api/textpro/realvintage?text=${vin}`)
					client.sendMessage(from, vintage, image, {caption: 'Nih kak', quoted: mek})
					break
                   case 'sep':
                   if (!isOwner) return reply(`khusus Owner Tolol`)
                   if (!isPremium) return reply(mess.only.premium)
                    if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
                     if (!isQuotedSticker) return reply('Reply stiker nya om')
                     svst = body.slice(4)
                     if (!svst) return reply('Nama file nya apa?')
                   boij = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                     delb = await client.downloadMediaMessage(boij)
                   fs.writeFileSync(`./stik/${svst}.webp`, delb)
                    reply('Berhasil menyimpan file!')
                     break
                     case 'addfoto':
                   if (!isOwner) return reply(`khusus Owner Tolol`)
                   if (!isPremium) return reply(mess.only.premium)
                    if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
                     if (!isQuotedImage) return reply('Reply foto nya om')
                     aga = body.slice(8)
                     if (!aga) return reply('Nama file nya apa?')
                   buy = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                     dehh = await client.downloadMediaMessage(buy)
                   fs.writeFileSync(`./stok/${aga}.jpg`, dehh)
                    reply('Berhasil menyimpan foto!')
                     break
                     case 'addvideo':
                   if (!isOwner) return reply(`khusus Owner Tolol`)
                   if (!isPremium) return reply(mess.only.premium)
                    if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
                     if (!isQuotedVideo) return reply('Reply video nya om')
                     sgu = body.slice(9)
                     if (!sgu) return reply('Nama file nya apa?')
                   gsa = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                     aps = await client.downloadMediaMessage(gsa)
                   fs.writeFileSync(`./stek/${sgu}.mp4`, aps)
                    reply('Berhasil menyimpan video!')
                     break
                     case 'addaudio':
                   if (!isOwner) return reply(`khusus Owner Tolol`)
                   if (!isPremium) return reply(mess.only.premium)
                    if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
                     if (!isQuotedAudio) return reply('Reply audio nya om')
                     gsh = body.slice(9)
                     if (!gsh) return reply('Nama file nya apa?')
                   uyw = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                     gx = await client.downloadMediaMessage(uyw)
                   fs.writeFileSync(`./stak/${gsh}.mp3`, gx)
                    reply('Berhasil menyimpan audio!')
                     break
                     case 'getaudio':
                  if (!isOwner) return reply(`khusus Owner Tolol`)
                  if (!isPremium) return reply(mess.only.premium)
				    if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
				    audiou = body.slice(9)
				    try {
				    buffer = fs.readFileSync(`./stak/${audiou}.mp3`)
				    client.sendMessage(from, buffer, MessageType.audio, { ptt: true, quoted: mek })
                } catch (e) {
			client.sendMessage(from, buffer, MessageType.audio, { ptt: true, quoted: mek })
		}
		break
		case 'alquran1':
                  if (!isOwner) return reply(`khusus Owner Tolol`)
                  if (!isPremium) return reply(mess.only.premium)
				    if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
				    audiou = body.slice(9)
				    try {
				    buffer = fs.readFileSync(`./stak/ngaji1.mp3`)
				    client.sendMessage(from, buffer, MessageType.audio, { ptt: true, quoted: mek })
                } catch (e) {
                	buffer = fs.readFileSync(`./stak/ngaji1.mp3`)
			client.sendMessage(from, buffer, MessageType.audio, { ptt: true, quoted: mek })
		}
		break
                     case 'getvideo':
                  if (!isOwner) return reply(`khusus Owner Tolol`)
                  if (!isPremium) return reply(mess.only.premium)
				    if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
				    videou = body.slice(9)
				    try {
				    buffer = fs.readFileSync(`./stek/${videou}.mp4`)
				    client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
                } catch (e) {
			client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
		}
		break
                     case 'getfoto':
                  if (!isOwner) return reply(`khusus Owner Tolol`)
                  if (!isPremium) return reply(mess.only.premium)
				    if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
				    fotou = body.slice(8)
				    try {
				    buffer = fs.readFileSync(`./stok/${fotou}.jpg`)
				    client.sendMessage(from, buffer, image, { quoted: mek, caption: 'nih bos'})
                } catch (e) {
			client.sendMessage(from, buffer, image, { quoted: mek, caption: 'nih bos'})
		}
		break
                  case 's':
                  if (!isOwner) return reply(`khusus Owner Tolol`)
                  if (!isPremium) return reply(mess.only.premium)
				    if (!isUser) return reply(mess.only.userB)
                   if (isBanned) return reply(mess.only.benned)
				    namastc = body.slice(2)
				    try {
				    buffer = fs.readFileSync(`./stik/${namastc}.webp`)
				    costum(buffer, sticker, tescuy, cr)
                } catch (e) {
			costum( buffer, sticker, tescuy, cr)
		}
		break
		case 'resetsticker':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isUser) return reply(mess.only.userB)
				    gsu = body.slice(13)
						gsu.splice(gsu)
						fs.writeFileSync('./stik/${gsu}', JSON.stringify(gsu))
						reply(`Sukses, database say telah direset`)
						break
				case 'tes':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
				client.updatePresence(from, Presence.composing)
				if (!isGroup) return reply(mess.only.group)
					try {
					ppimg = await client.getProfilePicture(from)
				} catch {
					ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
				}
					let buf = await getBuffer(ppimg)
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `*Nama grup :* ${groupName}\n*Deskripsi :* ${groupDesc}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Member :* ${groupMembers.length}\n*NSFW : ${nsfw ? 'Aktif' : 'Tidak Aktif'}*`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}]`
					}
					client.sendMessage(from, buf, image, {quoted: mek, caption: teks})
					break
				case 'groupinfo':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                client.updatePresence(from, Presence.composing)
                if (!isGroup) return reply(mess.only.group)
                ppUrl = await client.getProfilePicture(from) // leave empty to get your own
			    buffer = await getBuffer(ppUrl)
		        client.sendMessage(from, buffer, image, {quoted: mek, caption: `*NAME* : *${groupName}*\n*MEMBER* : *${groupMembers.length}*\n*ADMIN* : *${groupAdmins.length}*\n*NSFW : ${nsfw ? 'Aktif' : 'Tidak Aktif'}*\n*Simsimi : ${simih ? 'Aktif' : 'Tidak Aktif'}*\n*Welcome : ${welkom ? 'Aktif' : 'Tidak Aktif'}*\n*DESKRIPSI* : \n*${groupDesc}*`})
                break
                case 'tomp3':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!ispublic) return reply(mess.only.public)
                	client.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('❌ reply videonya um ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi video ke mp3 ❌')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					break
					case 'toptt':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!ispublic) return reply(mess.only.public)
                	client.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('❌ reply videonya um ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi video ke mp3 ❌')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek })
						fs.unlinkSync(ran)
					})
					break
					case 'mp3toptt':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!ispublic) return reply(mess.only.public)
                	client.updatePresence(from, Presence.composing) 
					if (!isQuotedAudio) return reply('❌ reply videonya um ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi video ke ptt ❌')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp3', ptt: true, quoted: mek })
						fs.unlinkSync(ran)
					})
					break
					case 'chatlist':
					client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
					teks = 'This is list of chat number :\n'
					for (let all of totalchat) {
						teks += `~> @${all}\n`
					}
					teks += `Total : ${totalchat.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": totalchat}})
					break
					case 'daftar':
					client.updatePresence(from, Presence.composing)
					if (isUser) return reply('kamu sudah terdaftar')
					if (args.length < 1) return reply(`Parameter Salah\nCommand : ${prefix}daftar nama|umur\nContoh : ${prefix}daftar ${pushname2}|12`)
					const usey =['SM06GK8PL2BSGAH10J','TM08GK8PPHBSJDH10J','LA08IE8PPKRSJDWE10J','SD23GK8PUPBSKSKH11J','LO52GK8LULSSKXKH01J','UX82GK2APLS2SJDH10J']
					const mls = usey[Math.floor(Math.random() * usey.length)]
					var reg = body.slice(8)
					var jeneng = reg.split("|")[0];
					var umure = reg.split("|")[1];
					var peken = reg.split("|")[2];
					console.log(+[]); //=> 0
					console.log(+''); //=> 0
					console.log(+'   '); //=> 0
					console.log(typeof NaN); //=> 'number'
					if(isNaN(umure)) return reply(`Umur harus berupa angka!!\ncontoh: ${prefix}daftar DuingZ|14`)
					if (umure <= 14) return reply('kamu terlalu muda untuk menggunakan bot ini sayang')
						user.push(sender)
						fs.writeFileSync('./src/user.json', JSON.stringify(user))
						costum(`\`\`\`Pendaftaran berhasil dengan SN: ${mls}\`\`\`\n\n\`\`\`Pada ${date} ${time}\`\`\`\n\`\`\`[Nama]: ${jeneng}\`\`\`\n\`\`\`[Nomor]: wa.me/${sender.split("@")[0]}\`\`\`\n\`\`\`[Umur]: ${umure}\`\`\`\n\`\`\`[Kelamin]: ${peken}\`\`\`\n\`\`\`Untuk menggunakan bot\`\`\`\n\`\`\`silahkan\`\`\`\n\`\`\`kirim ${prefix}help\`\`\`\n\`\`\`\nTotal Pengguna ${user.length}\`\`\``, text, tescuk, vz)
					break
					case 'duftar':
                if (isRegistered) return  reply(ind.rediregis())
                if (!q.includes('|')) return  reply(ind.wrongf())
                const namaUser = q.substring(0, q.indexOf('|') - 0)
                const umurUser = q.substring(q.lastIndexOf('|') + 1)
                const serialUser = createSerial(20)
                if (namaUser.length >= 30) return reply(`why is your name so long it's a name or a train`)
                if (umurUser.length >= 3, umurUser.length <= 1) return reply(`your age is too young / old minimum age 10 years and maximum 40 years`)
                veri = sender
                if (isGroup) {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await reply(ind.registered(namaUser, umurUser, serialUser, time, sender))
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                } else {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await reply(ind.registered(namaUser, umurUser, serialUser, time, sender))
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                }
					break
                         case 'burning':
                                         
                                        if (!isUser) return reply(mess.only.userB)
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         reply(mess.wait)
                                         owgi = await client.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", owgi)
                                        teks = `${anu.imgUrl}`
                                        ranp = getRandom('.gif')
                                        rano = getRandom('.webp')
                                        anu1 = `https://api.vhtear.com/burning_fire?link=${teks}&apikey=${vhtear}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                client.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             break
                  case 'pelangi':
                                         
                                        if (!isUser) return reply(mess.only.userB)
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         reply(mess.wait)
                                         owgi = await client.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", owgi)
                                        teks = `${anu.display_url}`
                                        ranp = getRandom('.png')
                                        rano = getRandom('.webp')
                                        anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                client.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             break
                      case 'glass':
                                         
                                        if (!isUser) return reply(mess.only.userB)
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         reply(mess.wait)
                                         owgi = await client.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", owgi)
                                        teks = `${anu.display_url}`
                                        ranp = getRandom('.png')
                                        rano = getRandom('.webp')
                                        anu1 = `https://some-random-api.ml/canvas/glass?avatar=${teks}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                client.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             break
                                             
					case 'resetuser':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isUser) return reply(mess.only.userB)
				    beb = body.slice(10)
						user.splice(beb)
						fs.writeFileSync('./src/user.json', JSON.stringify(user))
						reply(`Sukses, User Telah Direset\nHarap *DAFTAR ULANG*`)
						break
						case 'resetalluservip':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isUser) return reply(mess.only.userB)
				    alay = body.slice(10)
						premium.splice(alay)
						fs.writeFileSync('./src/vip.json', JSON.stringify(vip))
						teks = '╭────*「 *PREMIUM USER👑* 」\n'
					for (let V of premium) {
						teks += `│+  @${V.split('@')[0]}\n`
					}
					reply( `Berhasil Menghapus : ${premium.length} UserVip\n╰──────*「 *MR KING* 」*────`)
						break
				case 'testime':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					setTimeout( () => {
					client.sendMessage(from, '100', text) // ur cods
					client.sendMessage(from, '50', text) // ur cods
					client.sendMessage(from, '60', text) // ur cods
					}, 10000) // 1000 = 1s,
					break
					case 'totaluser':
					client.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply(mess.only.ownerB)    
					teks = `\`\`\`╭────*「 *TOTAL USER BOT MR KING👑* 」\n\`\`\``
					no = 0
					for (let hehehe of user) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `│+ Total Pengguna : ${user.length}\n╰──────*「 *MR KING* 」*────`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": user}})
					break
					case 'tstiker':
				case 'tsticker':
				case 'ttp':
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (args.length < 1) return reply('Textnya mana um?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(5).trim()
					anu = await fetchJson(`https://mhankbarbar.tech/api/text2image?text=${teks}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'tagall5':
				client.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `╠➥ ${mem.jid.split('@')[0]}@s.whatsapp.net\n`
						members_id.push(mem.jid)
					}
					reply('╔══✪〘 Mention All 〙✪══\n╠➥'+teks+'╚═〘 MR KING BOT 〙')
					break
					case 'gifttp':
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
				    data = await getBuffer(`https://api.vhtear.com/textxgif?text=${body.slice(6)}&apikey=${vhtear}`)
				    client.sendMessage(from, data, video, {quoted: mek})
					break
            case 'slink':
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (args.length < 1) return reply('Textnya mana um?')
					ranp = getRandom('.jpg')
					rano = getRandom('.webp')
					teks = body.slice(7).trim()
					exec(`wget ${teks} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
				case 'linkgroup':
				case 'linkgrup':
				case 'linkgc':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
				    if (!isGroup) return reply(mess.only.group)
				    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				    linkgc = await client.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    client.sendMessage(from, yeh, text, {quoted: mek})
			        break
			case 'fml':
                 
                if (!isUser) return reply(mess.only.userB)
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/fml`)
                hasil = data.result.fml
                reply(hasil)
                break
                case 'tag':
                if (!isOwner) return reply(mess.only.ownerB)
				case 'hidetag':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isPremium) return reply(mess.only.premium)
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					break
					case 'koin':
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					ranp = getRandom('.png')
					rano = getRandom('.webp')
			        random = koin[Math.floor(Math.random() * (koin.length))]
					exec(`wget ${random} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					     case 'dadu':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					ranp = getRandom('.png')
					rano = getRandom('.webp')
			        random = `${Math.floor(Math.random() * 6)}`
                    hasil = 'https://www.random.org/dice/dice' + random + '.png'
					exec(`wget ${hasil} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
			case 'randomnekonime':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!ispublic) return reply(mess.only.public)
                    anu = await fetchJson(`https://mhankbarbar.tech/api/nekonime`).json()
                    if (nekonime.result.endsWith('.png')) {
                    var ext = '.png'
                 } else {
                   var ext = '.jpg'
            }
            client.sendFileFromUrl(from, nekonime.result, `Nekonime${ext}`, 'Nekonime!', id)
            break
            case 'afk':
                                        tels = body.slice(11)
                                        if (args.length < 1) return reply('kakak afk karena apa?')
                                        if (!isUser) return reply(mess.only.daftarB)
                                        var nom = mek.participant
                                        const teg = {
                                                text: `@${nom.split("@s.whatsapp.net")[0]} *SEDANG AFK ${tels} JANGAN GANGGU YA*`,
                                                contextInfo: { mentionedJid: [nom] }
                                        }
                                        client.sendMessage(from, teg, text, {quoted: mek})
                                        break
				case 'block':
					client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					client.blockUser (`${body.slice(8)}@c.us`, "add")
					client.sendMessage(from, `perintah Diterima, memblokir ${body.slice(8)}@c.us`, text)
					break
				case 'unblock':
					client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					client.blockUser (`${body.slice(10)}@c.us`, "remove")
					client.sendMessage(from, `perintah Diterima, membuka blokir ${body.slice(10)}@c.us`, text)
					break
					case 'ssphone':
                buffer = await getBuffer(`https://api.vhtear.com/ssweb?link=${body.slice(9)}&type=phone&apikey=${vhtear}`)
                
				client.sendMessage(from, buffer, image, {quoted: mek})
				break   
				                case 'sspc':
                buffer = await getBuffer(`https://api.vhtear.com/ssweb?link=${body.slice(6)}&type=pc&apikey=${vhtear}`)
                
				client.sendMessage(from, buffer, image, {quoted: mek})
				break     
                case 'play':
                if (!isUser) return reply(mess.only.userB)
                if (isBanned) return reply(mess.only.benned)
                if (!isPremium) return reply('khusus premium tolol')
                if (args.length < 1) return reply('Lagu apa kak?')
					data = await fetchJson(`https://api.vhtear.com/ytmp3?query=${body.slice(6)}&apikey=${vhtear}`, {method: 'get'})
					teks = '*=================*\n'
					const play = data.result
						teks += `Lagu Ditemukan!!!\n*Judul:* ${play.title}\n*Durasi:* ${play.duration}\n*size*: ${play.size}\n*Link:* ${play.mp3}\n*MOHON JANGAN SPAM!*\n*AUDIO SEDANG DIKIRIM!*\n*=================*\n`
					thumb = await getBuffer(play.image)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(play.mp3)
					client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${play.title}.mp3`, quoted: mek})
					break
					case 'play2':
					if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
                reply(mess.wait)
                anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/yt-play?q=${body.slice[6]}`)
                 if (anu.error) return reply(anu.error)
                 infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${anu.result.title}\nDurasi : ${anu.result.duration}\nUkuran : ${anu.result.size}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM YA SAYANG*`
                buffer = await getBuffer(anu.result.thumb)
                lagu = await getBuffer(anu.result.mp3)
                client.sendMessage(from, buffer, image, {quoted: mek, captplay: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                break
					case 'tabok':
					
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://nekos.life/api/v2/img/spank', {method: 'get'})
					if (anu.error) return reply(anu.error)

					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'text':
					lei = body.slice(5)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					buffer = await getBuffer('https://api.vhtear.com/slidingtext?text=${lei}&apikey=${vhtear}')
					if (buffer.error) return reply(buffer.error)

					exec(`wget ${buffer.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
                case 'teskuy':
                                        if (isBanned) return reply(mess.only.benned)
                                if (!isPremium) return reply('khusus premium tolol')
                reply('tunggu sekitar 5+ menit bro')
                anu = await fetchJson(`https://api.vhtear.com/ytmp3?query=${body.slice(6)}&apikey=${vhtear}`)
               if (anu.error) return reply(anu.error)
                 infomp4 = `*Lagu Ditemukan!!!*\nJudul : ${anu.result.title}\nDurasi : ${anu.result.duration}\nUkuran : ${anu.result.size}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM YA SAYANG*`
                buffer = await getBuffer(anu.result.thumb)
                vidio = await getBuffer(anu.result.mp4)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp4})
                client.sendMessage(from, vidio, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
                break
                case 'reminder':
 
 if (!isOwner) return reply(mess.only.ownerB)
					var gh = body.slice(10)
					var anu = gh.split("|")[0];
					var ani = gh.split("|")[1];
					jm = `${anu}000`
					client.sendMessage(from, `*「 REMINDER 」*\n\nReminder diaktifkan!\n\n╠➥  *Pesan*: ${ani}\n╠➥  *Durasi*: ${anu} detik\n╠➥  *Untuk*: @${sender.split("@s.whatsapp.net")[0]}`, text, {contextInfo: {mentionedJid: [sender]}})
					setTimeout( () => {
					client.sendMessage(from, `*「 REMINDER 」*\n\nAkhirnya tepat waktu~@${sender.split("@s.whatsapp.net")[0]}\n\n╠➥  *Pesan*: ${ani}`, text, {contextInfo: {mentionedJid: [sender]}}) // ur cods
					}, jm) // 1000 = 1s,
					break    
					case 'tutup':
 
 if (!isOwner) return reply(mess.only.ownerB)
					var gh = body.slice(10)
					var yu = gh.split("|")[0];
					var ui = gh.split("|")[1];
					jm = `${anu}000`
					client.sendMessage(from, `*「 REMINDER 」*\n\nReminder diaktifkan!\n\n╠➥  *Pesan*: ${ui}\n╠➥  *Durasi*: ${yu} detik\n╠➥  *Untuk*: @${sender.split("@s.whatsapp.net")[0]}`, text, {contextInfo: {mentionedJid: [sender]}})
					setTimeout( () => {
					client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					client.sendMessage(from, `*「 REMINDER 」*\n\nAkhirnya tepat waktu~@${sender.split("@s.whatsapp.net")[0]}\n\n╠➥  *Pesan*: ${ui}`, text, {contextInfo: {mentionedJid: [sender]}}) // ur cods
					}, jm) // 1000 = 1s,
					break    
					case 'pemilikasli':
                 client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                 client.sendMessage(from, 'itu pacar ku eh owner ku ><',MessageType.text, { quoted: mek} )
                 break
					case 'wibu':
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/randomwibu&apikey=${vhtear}`)
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result.foto)
					wibu = ` ➸ *nama* ${anu.result.nama} ➸ *deskripsi* ${anu.result.deskripsi}`
					client.sendMessage(from, buffer, image, {quoted: mek, caption: wibu})
					break
				case 'premiumlist':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					teks = '╭────*「 *PREMIUM USER👑* 」\n'
					for (let V of premium) {
						teks += `│+  @${V.split('@')[0]}\n`
					}
					teks += `│+ Total : ${premium.length}\n╰──────*「 *MR KING* 」*────`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": premium}})
					break
                case 'quotemaker':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!ispublic) return reply(mess.only.public)
					var gh = body.slice(12)
					var quote = gh.split("|")[0];
					var wm = gh.split("|")[1];
					var bg = gh.split("|")[2];
					const pref = `Usage: \n${prefix}quotemaker teks|watermark|theme\n\nEx :\n${prefix}quotemaker ini contoh|bicit|random`
					if (args.length < 1) return reply(pref)
					reply(mess.wait)
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=${bg}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {caption: 'Nih anjim', quoted: mek})
					break
				case 'galaxtext':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					if (args.length < 1) return reply('mau apa om')
					teks = body.slice(12)
					if (teks.length > 8) return reply('Teksnya kepanjangan, maksimal 8 karakter')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/galaxytext?text=${teks}&apikey=${vhtear}`)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
					case 'citacita': 
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
            if (!isGroup) return reply(mess.only.group)
                citacita = body.slice(1)
                    .then(async (body) => {
                        const cita = body.split('\n')
                        const randomCita = cita[Math.floor(Math.random() * cita.length)]
                        client.sendMessange(from, randomCita, 'cita.mp3', '', id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        reply(from, 'Error!', id)
                    })
            break
					case 'jsholat':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					if (args.length < 1) return reply('Masukan nama daerah!!')
					sholat = body.slice(9)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/jadwalshalat?q=${sholat}&apikey=BotWeA`)
					reply(mess.wait)
					if (anu.error) return reply('[\u2757] Maaf, Daerah yang anda masukan salah!')
					jsol = `Jadwal sholat di ${sholat} hari ini adalah\n\n*➸ Imsyak :* ${anu.result.imsak} WIB\n*➸ Subuh :* ${anu.result.subuh} WIB\n*➸ Dzuhur :* ${anu.result.dzuhur} WIB\n*➸ Ashar :* ${anu.result.ashar} WIB\n*➸ Maghrib :* ${anu.result.maghrib} WIB\n*➸ Isya :* ${anu.result.isha} WIB\n*➸ Tengah Malam :* ${anu.result.midnight} WIB`
					client.sendMessage(from, jsol, text, {quoted: mek})
					break
					case 'runtime':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
				client.updatePresence(from, Presence.composing) 
				uptime = process.uptime()
				reply(`Bot Telah Aktif Selama\n*${kyun(uptime)}*`)
				break
					case 'covid':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
                   client.updatePresence(from, Presence.composing) 
                   data = await fetchJson(`https://arugaz.herokuapp.com/api/corona?country=${body.slice(7)}`)
                   if (data.result) reply(data.result)
                   hasil = `Negara : ${data.result.country}\n\nActive : ${data.result.active}\ncasesPerOneMillion : ${data.result.casesPerOneMillion}\ncritical : ${data.result.critical}\ndeathsPerOneMillion : ${data.result.deathsPerOneMillion}\nrecovered : ${data.result.recovered}\ntestPerOneMillion : ${data.result.testPerOneMillion}\ntodayCases : ${data.result.todayCases}\ntodayDeath : ${data.result.todayDeath}\ntotalCases : ${data.result.totalCases}\ntotalTest : ${data.result.totalTest}`
                   reply(hasil)
                   break
                case 'pronlogo':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!ispublic) return reply(mess.only.public)
					var gh = body.slice(10)
					var gbl1 = gh.split("|")[0];
					var gbl2 = gh.split("|")[1];
					if (args.length < 1) return reply('Teksnya mana um')
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/textpro?theme=pornhub&text1=${gbl1}&text2=${gbl2}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
					case 'tel':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					var gh = body.slice(10)
					var gbl1 = gh.split("|")[0];
					var gbl2 = gh.split("|")[1];
					if (args.length < 1) return reply('Teksnya mana um')
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/gamelogo?text=VEZA&apikey=${tear}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'primbonjodoh':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					var gh = body.slice(14)
					var gbl1 = gh.split("|")[0];
					var gbl2 = gh.split("|")[1];
					anu = await fetchJson(`https://api.vhtear.com/primbonjodoh?nama=${gbl1}&pasangan=${gbl2}&apikey=${vhtear}`)
					reply(anu.result.hasil)
					break
				case 'ramaljadian':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					var gh = body.slice(10)
					var gbl1 = gh.split("|")[0];
					var gbl2 = gh.split("|")[1];
					var gbl3 = gh.split("|")[2];
					anu = await fetchJson(`https://api.vhtear.com/harijadian?tgl=${gbl1}&bln=${gbl2}&thn=${gbl3}&apikey=${vhtear}`)
					reply(anu.result.hasil)
					break
                case 'tahta':
                limitAdd(sender) 
				isLimit(sender)
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!ispublic) return reply(mess.only.public)
					if (args.length < 1) return reply('Teksnya mana kak? >.<')
					teks = body.slice(7)
					if (teks.length > 9) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/hartatahta?text=${teks}&apikey=${vhtear}`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Harta Tahta '+teks})
					break
					case 'agung':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.search)
					pinte = body.slice(11)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=${pin}&apikey=${vhtear}`, {method: 'get'})
					reply(mess.wait)
					var pin = JSON.parse(JSON.stringify(anu.result));
					var trest =  pin[Math.floor(Math.random() * pin.length)];
					pine = await getBuffer(trest)
					client.sendMessage(from, pine, image, { caption: '*Pinterest*\n\n*Hasil Pencarian : '+pinte+'*', quoted: mek })
					break
					case 'pussy':
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://nekos.life/api/v2/img/pussy', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'puisi':
                buffer = await getBuffer(`https://api.vhtear.com/puisi_image&apikey=${vhtear}`)
				client.sendMessage(from, buffer, image, {quoted: mek})
				break
				case 'holoh': 
					if (args.length < 1) return reply('𝗸𝗮𝘀𝗶𝗵 𝘁𝗲𝗸𝘀 𝗹𝗮𝗵!!!')
					anu = await fetchJson(`https://shirayuki-api.herokuapp.com/api/v1/holoh?kata=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					break
					case 'yt2mp3':
					if (args.length < 1) return reply('Urlnya mana um?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://api.vhtear.com/ytdl?link=${args[0]}&apikey=${vhtear}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Filesize* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, audio, ytmp3, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					break
					case 'addsay':
					if (!isOwner) return
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
				    hai = body.slice(8)
						sayrandom.push(hai)
						fs.writeFileSync('./src/say.json', JSON.stringify(sayrandom))
						reply(`Sukses, Kata ${hai} Telah Ditambahkan ke database\nTotal Say Didalam Database: ${sayrandom.length}`)
						break
						case 'modroid':

			data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(9)}&apikey=BotWeA`)

			hepi = data.result[0] 

			teks = `*Nama*: ${data.result[0].title}\n*publisher*: ${hepi.publisher}\n*mod info:* ${hepi.mod_info}\n*size*: ${hepi.size}\n*latest version*: ${hepi.latest_version}\n*genre*: ${hepi.genre}\n*link:* ${hepi.link}\n*download*: ${hepi.download}`

			buffer = await getBuffer(hepi.image)

			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})

			break
			case 'apkpure':

			data = await fetchJson(`https://api.zeks.xyz/api/apkpure?q=${body.slice(8)}&apikey=administrator`)

			hepi = data.result[0] 

			teks = `*Nama*: ${data.result[0].title}\n*publisher*: ${hepi.publisher}\n*mod info:* ${hepi.mod_info}\n*size*: ${hepi.size}\n*latest version*: ${hepi.latest_version}\n*genre*: ${hepi.genre}\n*link:* ${hepi.link}\n*download*: ${hepi.download}`

			buffer = await getBuffer(hepi.image)

			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})

			break
						case 'addvip':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isOwner) return reply(mess.only.ownerB)
					if (!isUser) return reply(mess.only.userB)
				    huui = body.slice(8)
						premium.push(huui)
						fs.writeFileSync('./src/vip.json', JSON.stringify(premium))
						reply(`╭────「 *PREMIUM👑* 」──*\n│+ *Nomor:* *${huui}*\n│+ *Status:* *ACTIVE*\n│+ *Since:* *${date}*\n│+ *Expired:* *${timi}*\n│ Thx for Upgrade to Premium🥰\n*╰──────「 *MR KING* 」────`)
						break
                   case 'saylist':
                   if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
					teks = 'This is list of say list :\n'
					for (let awokwkwk of sayrandom) {
						teks += `╠➥ ${awokwkwk}\n`
					}
					teks += `Total : ${sayrandom.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": sayrandom}})
					break
					case 'neon2':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					grre = body.slice(11)
					reply(mess.wait)
					gree = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/greenneontext?text=${grre}`)
					client.sendMessage(from, gree, image, {caption: 'Nih kak', quoted: mek})
					break
                    case 'resetsay':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isUser) return reply(mess.only.userB)
				    hai = body.slice(10)
						sayrandom.splice(hai)
						fs.writeFileSync('./src/say.json', JSON.stringify(sayrandom))
						reply(`Sukses, database say telah direset`)
						break
						case 'bacakomik':

			data = await fetchJson(`https://api.zeks.xyz/api/bacakomik?apikey=apivinz&q=${body.slice(9)}`)

			hepi = data.result[0] 

			teks = `*Nama*: ${data.result[0].title}\n*url*: ${hepi.url}\n*rating:* ${hepi.rating}`

			buffer = await getBuffer(hepi.thumb)

			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})

			break
                    case 'say':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
                    hasil = sayrandom[Math.floor(Math.random() * (sayrandom.length))]
                    reply(hasil)
                    break
                    case 'addbacot':
                    if (!isOwner) return
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
				    huu = body.slice(9)
						bacotrandom.push(huu)
						fs.writeFileSync('./src/bacot.json', JSON.stringify(bacotrandom))
						reply(`Sukses, Kata ${huu} Telah Ditambahkan ke database`)
						break
                   case 'bacotlist':
                   if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
					teks = 'This is list of say list :\n'
					for (let hehee of bacotrandom) {
						teks += `╠➥ ${hehee}\n`
					}
					teks += `Total : ${bacotrandom.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": bacotrandom}})
					break
                    case 'resetbacot':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isUser) return reply(mess.only.userB)
				    hai = body.slice(10)
						bacotrandom.splice(hai)
						fs.writeFileSync('./src/bacot.json', JSON.stringify(bacotrandom))
						reply(`Sukses, database bacot telah direset`)
						break
                    case 'bacot':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
                    hasil = bacotrandom[Math.floor(Math.random() * (bacotrandom.length))]
                    reply(hasil)
                    break
				case 'testing':
					var gh = body.slice(5)
					var gbl3 = gh.split("|")[0];
					var gbl4 = gh.split("|")[1];
					if (args.length < 1) return reply('Teksnya mana um')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/watercolour?text1=${gbl3}&text2=${gbl4}&apikey=apivinz`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'snow':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					var gh = body.slice(6)
					var gbl7 = gh.split("|")[0];
					var gbl8 = gh.split("|")[1];
					if (args.length < 1) return reply('Teksnya mana um')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/snowwrite?text1=${gbl7}&text2=${gbl8}&apikey=xptnbot352`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
					case 'b':
					case 'ban':
					client.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			        ban = mentioned
					reply(`berhasil banned : ${ban}`)
					break
				case 'unban':
					if (!isOwner)return reply(mess.only.ownerB)
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					fs.writeFileSync('./src/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah di unban!`)
					break
				case 'quran':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
					quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
					client.sendMessage(from, quran, text, {quoted: mek})
					break
				case 'marvelogo':
				if (!ispublic) return reply(mess.only.public)
if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					var gh = body.slice(10)
					var gbl5 = gh.split("|")[0];
					var gbl6 = gh.split("|")[1];
					if (args.length < 1) return reply('Teksnya mana um')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/marvellogo?text1=${gbl5}&text2=${gbl6}&apikey=xptnbot352`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'lovemake':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					if (args.length < 1) return reply('Teksnya mana um')
					love = body.slice(10)
					if (love.length > 12) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/lovemessagetext?text=${love}&apikey=${vhtear}`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: ' '+love})
					break
					case 'goldplaybutton':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Teksnya mana um')
					playbutton = body.slice(10)
					if (playbutton.length > 12) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					reply(mess.wait)
					buffer = await getBuffer(`https://zeksapi.herokuapp.com/api/gplaybutton?text=${playbutton}&apikey=${vhtear}`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: ' '+playbutton})
					break
				case 'thunder':
				limitAdd(sender) 
				isLimit(sender)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Teksnya mana um')
					thun = body.slice(9)
					if (thun.length > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					reply(mess.wait)
					buffer = await getBuffer(`https://naufalhoster.xyz/textmaker/thunder?apikey=john-doe&text=${thun}`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: ' '+thun})
					break
					case 'mlogo':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Teksnya mana um')
					mlbb = body.slice(6)
					if (mlbb.length > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/logoml?hero=fanny&text=${mlbb}&apikey=${vhtear}`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: ' '+mlbb})
					break
					case 'dilan':

			if (isBanned) return reply(mess.only.benned)    

				if (!isUser) return reply(mess.only.userB)

			if (!ispublic) return reply(mess.only.public)

					gatauda = body.slice(7)

					anu = await fetchJson(`https://xptnewapi.000webhostapp.com/newapixptn/katakatadilan.php?apikey=xptn3` , {method: 'get'})
					reply(anu.result)

					break
					case 'katadoi':

			if (isBanned) return reply(mess.only.benned)    

				if (!isUser) return reply(mess.only.userB)

			if (!ispublic) return reply(mess.only.public)

					gatauda = body.slice(7)

					anu = await fetchJson(`https://xptnewapi.000webhostapp.com/newapixptn/katadoi.php?apikey=xptn3` , {method: 'get'})
					reply(anu.result)

					break
					case 'bucinhekel':

			if (isBanned) return reply(mess.only.benned)    

				if (!isUser) return reply(mess.only.userB)

			if (!ispublic) return reply(mess.only.public)

					gatauda = body.slice(7)

					anu = await fetchJson(`https://xptnewapi.000webhostapp.com/newapixptn/katakatahacker.php?apikey=xptn3`, {method: 'get'})

					reply(anu.result)

					break
					case 'pantun':

			if (isBanned) return reply(mess.only.benned)    

				if (!isUser) return reply(mess.only.userB)

			if (!ispublic) return reply(mess.only.public)

					gatauda = body.slice(7)

					anu = await fetchJson(`https://xptnewapi.000webhostapp.com/newapixptn/Pantun.php?apikey=xptn1`, {method: 'get'})

					reply(anu.result)

					break
					case 'katastory':

			if (isBanned) return reply(mess.only.benned)    

				if (!isUser) return reply(mess.only.userB)

			if (!ispublic) return reply(mess.only.public)

					gatauda = body.slice(7)

					anu = await fetchJson(`https://xptnewapi.000webhostapp.com/newapixptn/katastory.php?apikey=xptn3`, {method: 'get'})

					reply(anu.result)

					break
					case 'fanytext':

			if (isBanned) return reply(mess.only.benned)    

				if (!isUser) return reply(mess.only.userB)

			if (!ispublic) return reply(mess.only.public)

					tes = body.slice(10)

					anu = await fetchJson(`http://xptnewapi21.6te.net/fancytext.php?apikey=xptn3&text=${tes}`, {method: 'get'})

					reply(anu.result)

					break
                case 'stiltext':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                      if (args.length < 1) return reply('Teks nya mana?')
                      gh = body.slice(11)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      buff = await getBuffer(`https://api.vhtear.com/silktext?text=${gl1}&text2=${gl2}&apikey=${vhtear}`)
                      reply(mess.wait)
                      client.sendMessage(from, buff, image, {quoted: mek, caption: 'thund ni '+gh})
                      break
                      case 'gdg':

			if (isBanned) return reply(mess.only.benned)    

				if (!isUser) return reply(mess.only.userB)

			if (!ispublic) return reply(mess.only.public)

					gatauda = body.slice(7)

					anu = await fetchJson(`https://rfilesss109.000webhostapp.com/truth.php?apikey=xptn3` , {method: 'get'})
					
buffer = await getBuffer('anu.img')
client.sendMessage(from, buffer, image, { quoted: mek,})
					break
					case 'nangis':
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/cry?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'bei':
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'blowjob':
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'tium':
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/kiss?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break 
           				case 'cium':
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/kiss?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'peyuk':
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
                      case 'qrcode':
                      if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                      if (!ispublic) return reply(mess.only.public)
					const tex = encodeURIComponent(body.slice(8))
					if (!tex) return client.sendMessage(from, '𝐌𝐚𝐬𝐮??𝐚𝐧 𝐓𝐞𝐤𝐬/𝐔𝐫𝐥 𝐘𝐚𝐧𝐠 𝐈𝐧𝐠𝐢𝐧 𝐃𝐢 𝐁𝐮𝐚𝐭 𝐐𝐑', text, {quoted: mek})
					const buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
                case 'testing':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					var gh = body.slice(9)
					coli1 = gh.split("|")[0];
					coli2 = gh.split("|")[1];
					if (args.length < 1) return reply('Teks nya mana?')
					reply(mess.wait)
					buffer = await getBuffer(`https://zeksapi.herokuapp.com/api/watercolour?text1=${coli1}&text2=${coli2}&apikey=xptnbot352`)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'testing2':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					var gh = body.slice(9)
					coli1 = gh.split("|")[0];
					coli2 = gh.split("|")[1];
					if (args.length < 1) return reply('Teks nya mana?')
					reply(mess.wait)
					party = await getBuffer(`https://api.vhtear.com/partytext?text=${coli1}&text2=${coli2}&apikey=${vhtear}`)
					client.sendMessage(from, party, image, {quoted: mek})
					break
                case 'ninjalogo':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!ispublic) return reply(mess.only.public)
                      if (args.length < 1) return reply('Teks nya mana?')
                      gh = body.slice(11)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      reply(mess.wait)
                      anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=ninjalogo&text1=${gl1}&text2=${gl2}`, {method: 'get'})
                      buff = await getBuffer(anu.result)
                      client.sendMessage(from, buff, image, {quoted: mek})
                      break
                case 'glitch':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!ispublic) return reply(mess.only.public)
					var gh = body.slice(8)
					var tels3 = gh.split("|")[0];
					var tels4 = gh.split("|")[1];
					if (args.length < 1) return reply(mess.blank)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=glitch&text1=${tels3}&text2=${tels4}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
					case 'pubg':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!ispublic) return reply(mess.only.public)
					var gh = body.slice(5)
					var tels5 = gh.split("|")[0];
					var tels6 = gh.split("|")[1];
					if (args.length < 1) return reply(mess.blank)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=pubg&text1=${tels5}&text2=${tels6}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
					case '8bit':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!ispublic) return reply(mess.only.public)
					var gh = body.slice(5)
					var tels8 = gh.split("|")[0];
					var tels7 = gh.split("|")[1];
					if (args.length < 1) return reply(mess.blank)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=bit8&text1=${tels8}&text2=${tels7}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
					case 'retro':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!ispublic) return reply(mess.only.public)
					var gh = body.slice(5)
					var tels10 = gh.split("|")[0];
					var tels11 = gh.split("|")[1];
					var tels12 = gh.split("|")[2];
					if (args.length < 1) return reply(mess.blank)
					reply(mess.wait)
					anu = await fetchJson(`https://api.zeks.xyz/api/retro?text1=${tels10}&text2=${tels11}&text3=${tels12}&apikey=apivinz`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
					case 'infos':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!ispublic) return reply(mess.only.public)
					var gh = body.slice(8)
					var ld = gh.split("|")[0];
					var hel = gh.split("|")[1];
					var gs = gh.split("|")[2];
					if (args.length < 1) return reply(mess.blank)
					reply(mess.wait)
					anu = await fetchJson(`https://ephoto360.com/${ld}-${hel}-${hel}-${gs}-768.html`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'party':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					part = body.slice(7)
					if (part.length > 20) return reply('Teksnya kepanjangan, maksimal 20 karakter')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/partytext?text=${part}&apikey=${vhtear}`)
					client.sendMessage(from, buffer, image, {caption: 'Nih kak', quoted: mek})
					break
				case 'rtext':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					tels5 = body.slice(7)
					if (tels5.length > 10) return reply('Teksnya kepanjangan, maksimal 10 karakter')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/romancetext?text=${tels5}&apikey=${vhtear}`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: tels5})
					break
				case 'water':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(7)
					if (tels.length > 15) return reply('Teksnya kepanjangan, maksimal 20 karakter')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/tfire?text=${tels}&apikey=xptnbot352`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'firetext':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(7)
					if (tels.ength > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/tlight?text=${tels}&apikey=xptnbot352`, {method: 'get'})
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
                case 'wolflogo':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!ispublic) return reply(mess.only.public)
                      if (args.length < 1) return reply('Teks nya mana?')
                      gh = body.slice(9)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      reply(mess.wait)
                      anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=wolflogo1&text1=${gl1}&text2=${gl2}&apikey=BotWea`, {method: 'get'})
                      buffer = await getBuffer(anu.result)
                      client.sendMessage(from, buffer, image, {quoted: mek})
                      break
                case 'lionlogo':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!ispublic) return reply(mess.only.public)
                      if (args.length < 1) return reply('Teks nya mana?')
                      gh = body.slice(9)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      reply(mess.wait)
                      anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=lionlogo&text1=${gl1}&text2=${gl2}&apikey=BotWeA`, {method: 'get'})
                      buffer = await getBuffer(anu.result)
                      client.sendMessage(from, buffer, image, {quoted: mek})
                      break
				case 'leave':
                     
                    if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                     setTimeout( () => {
					client.groupLeave (from) 
					}, 2000)
                     setTimeout( () => {
					client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					client.sendMessage(from, 'Sayonara👋', text) // ur cods
					}, 0)
                     break
                     case 'nhentai':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
				husw = body.slice(7)
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/nhentaipdfdownload?query=${husw}&apikey=${vhtear}`)
					if (anu.error) return reply(anu.error)
					bufferjj = await getBuffer(anu.result.pdf_file)
					client.sendMessage(from, bufferjj, document, {mimetype: 'document/pdf', quoted: mek})
					break
					case 'ner':
					if (!isOwner) return
					case 'ownergrup':
				  case 'ownergroup':
               client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
             if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
               options = {
          text: `Owner Group ini adalah : @${groupOwner.split("@")[0]}`,
          contextInfo: { mentionedJid: [groupOwner] }
           }
           client.sendMessage(from, options, text, { quoted: mek } )
				break
				case 'watercolor':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					var gh = body.slice(12)
					var gbl3 = gh.split("|")[0];
					var gbl4 = gh.split("|")[1];
					if (args.length < 1) return reply('Teksnya mana um')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/watercolour?text1=${gbl3}&text2=${gbl4}&apikey=Mantanxptn`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
					case 'facebook':
					case 'fb':
               if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
               if (!isPremium) return reply(mess.only.premium)
               data = await fetchJson(`https://mhankbarbar.tech/api/epbe?url=${body.slice(4)}&apiKey=${apiKey}`)
               if (data.error) return reply(data.error)
               buffer = await getBuffer(data.result)
               client.sendMessage(from, buffer, video, {quoted: mek, caption: `judul : ${data.title}\nsize : ${data.filesize}\ndiupload : ${data.published}`})
               break
					case 'img2url':
           if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
             var imgbb = require('imgbb-uploader')
            var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            var media = await client.downloadAndSaveMediaMessage(encmedia)
            
            imgbb('727e7e43f6cda1dfb85d888522fd4ce1', media)
                .then(data => {
                    var caps = `*「 _IMAGE TO URL_ 」*\n\n*╠➥  ID :* ${data.id}\n*╠➥  MimeType :* ${data.image.mime}\n*╠➥  Extension :* ${data.image.extension}\n\n*╠➥  URL :* ${data.display_url}`
                    ibb = fs.readFileSync(media)
                    client.sendMessage(from, ibb, image, { quoted: mek, caption: caps })
                })
                .catch(err => {
                    throw err
                })
            break
	            case 'getses':
	if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
	if (!ispublic) return reply(mess.only.public)
                    if (!isOwner) return client.reply(from, 'Perintah ini hanya untuk Owner bot', id)
                    const sesPic = await client.getSnapshot()
                    client.sendFile(from, sesPic, 'session.png', 'Neh...', id)
                    break
				case 'setname':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
                if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧𝐲𝐚 𝐤𝐚𝐤')
					ppUrl = await client.getProfilePicture(from) // leave empty to get your own
			    buffer = await getBuffer(ppUrl)
                client.groupUpdateSubject(from, `${body.slice(9)}`)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: `Succes, Ganti Nama Grup\nYang Sebelumnya *${groupName}*`})
                break
                case 'setdesc':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!ispublic) return reply(mess.only.public)
                if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				ppUrl = await client.getProfilePicture(from) // leave empty to get your own
			    buffer = await getBuffer(ppUrl)
                client.groupUpdateDescription(from, `${body.slice(9)}`)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: `Succes, Ganti Deskripsi Grup\nYang Sebelumnya *${groupDesc}*`})
                break
                case 'banlist':
					client.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
					teks = 'This is list of ban number :\n'
					for (let benn of ban) {
						teks += `~> @${benn.split('@')[0]}\n`
					}
					teks += `Total : ${ban.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
					break
				case 'tts':
				   client.updatePresence(from, Presence.recording)
				    
				   if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
				   if (args.length < 1) return client.sendMessage(from, 'Kode bahasanya mana om?', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Textnya mana om', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Textnya kebanyakan om')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply('Gagal om:(')
							client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
	            case 'setpp':
	if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
	if (!ispublic) return reply(mess.only.public)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    media = await client.downloadAndSaveMediaMessage(mek)
                    await client.updateProfilePicture (from, media)
                    reply('Sukses mengganti icon Grup')
                    break
                    case 'te':
                                       const asu = body.slice(4)
                                       if (argz.lenght >= 1) return client.sendText(from, asu)
                                       break
                case 'apakah':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!ispublic) return reply(mess.only.public)
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					break
				case 'rate':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					client.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					break
					case 'mining':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					rate = body.slice(1)
					const bruh =['1','7','5','6','4','8','3','3','9','5','2','7','2','1','9']
					const kz = bruh[Math.floor(Math.random() * bruh.length)]
					client.sendMessage(from, `Selamat anda mendapatkan $${kz} Dolar`, text, { quoted: mek })
					break
					case 'farming':
      if (!isUser) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)   
    if (!isGroup) return reply(mess.only.group)
    if (!isLevelingOn) return reply(`Leveling Belum diaktifkan`)
         random = Math.floor(Math.random() * 150) + 1
         reply(`selamat anda mendapatkan ${random} XP`)
       break
					case 'gantengcek':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					ganteng = body.slice(1)
					const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					client.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: mek })
					break
					case 'jelekcek':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					jelek = body.slice(1)
					const ped =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
					const ro = ped[Math.floor(Math.random() * ped.length)]
					client.sendMessage(from, 'Pertanyaan : *'+jelek+'*\n\nJawaban : '+ ro+'%', text, { quoted: mek })
					break
					case 'cantikcek':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					cantik = body.slice(1)
					const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
					const tik = can[Math.floor(Math.random() * can.length)]
					client.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: mek })
					break
				case 'watak':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					watak = body.slice(1)
					const wa =['peny ayang','pem urah','Pem arah','Pem aaf','Pen urut','Ba ik','bap eran','Baik Hati','peny abar','Uw u','top deh, poko knya','Suka Memb antu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
					break
				case 'hobby':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					hobby = body.slice(1)
					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					client.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					break
				case 'bisakah':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					break
				case 'kapankah':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					client.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					break
					case 'puisi':
                buffer = await getBuffer(`https://api.vhtear.com/puisi_image&apikey=${vhtear}`)
				client.sendMessage(from, buffer, image, {quoted: tod})
				break
				case 'fml':
					data = await fetchJson(`https://api.zeks.xyz/api/fml`)
					teks  = `Fml: ${data.result}`
					client.sendMessage(from, `${teks}`, MessageType.text, {quoted: mek})
					break
					case 'readall':
					if (!isOwner)return reply(mess.only.ownerB)
					var chats = await client.chats.all()
                    chats.map( async ({ jid }) => {
                          await client.chatRead(jid)
                    })
					teks = `\`\`\`Berhasil membaca ${chats.length} Chat !\`\`\``
					await client.sendMessage(from, teks, MessageType.text, {quoted: mek})
					console.log(chats.length)
					break
					case 'jadwaltv':
               client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
                 if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                 data = await fetchJson(`https://mhankbarbar.tech/api/jdtv?ch=${body.slice(10)}&apiKey=${apiKey}`)
				if (data.error) return reply(data.error)
				reply(data.result)
				break
					case 'hewan':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					kapankah = body.slice(1)
					const elu =['1','2','3','4','5','6']
					const ule = elu[Math.floor(Math.random() * elu.length)]
					client.sendMessage(from, ule, text, { quoted: mek })
					break
					case 'toxic':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					kapankah = body.slice(1)
					const toxic =['anjing','babi lu','anak anjing','udah tolol nub Lagi','muka lo kek monyet','udah jomblo sendirian lagi dirumah tolol','so so an mau punya pacar muka aja kek monyet lepass dari kandang','ganteng doang di toxic aja dibilang baperan','pantek kau','bangsat kau','ku entod kalian nangis kau','memek lu semua','lihat anak anjing lagi baca','ganteng doang jemput cewe dipanggang','kamu cantik beb bullshit anjing cowo buaya','anak dajjal','puki lu','anjing ngajak gelud','sama hantu takut cupu ngentod','cupu cupu aja gausah bacot','kontol lu semua','bocah lu semua kontol','3 Hari Lagi']
					const ole = toxic[Math.floor(Math.random() * toxic.length)]
					client.sendMessage(from, ole, text, { quoted: mek })
					break
					case 'siapa':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					kapankah = body.slice(1)
					const siapa =['anjing','babi','anak anjing','nub','mukanya kek monyet','udah jomblo sendirian lagi dirumah tolol','so so an mau punya pacar muka aja kek monyet lepass dari kandang','ganteng doang di toxic aja dibilang baperan','setan','hewan','nenek','pacarku><','anak babi','anak anjg','cowo buaya','anak dajjal','bapakku','anjing ngajak gelud','hantu','mamakku','bocil om','bocah kontol','kucing']
					const ope = siapa[Math.floor(Math.random() * siapa.length)]
					client.sendMessage(from, ope, text, { quoted: mek })
					break
				case 'truth':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					break
				case 'dare':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					break		
case 'kus':
if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					const kus =(`https://xptnbotapinew.herokuapp.com/?dare&apikey=xptn`)
                    const pel = kus[Math.floor(Math.random() * kus.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ pel })
					break				
                case 'assalamualaikum':
               client.reply(from, `Waalaikumsalam ${pushname2}:)`)
                break
                case 'p':
                if (!isOwner) return reply('khusus owner tolol')
                case 'speed':
                case 'ping':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!ispublic) return reply(mess.only.public)
                    const timestamp = speed();
            const loadedMsg = await client.getAmountOfLoadedMessages()

            const chatIds = await client.getAllChatIds()

            const groups = await client.getAllGroups()
                    const latensi = speed() - timestamp
                    client.updatePresence(from, Presence.composing) 
				uptime = process.uptime()
                    client.sendMessage(from, `Speed: *${latensi.toFixed(4)} _Second_*\nDevice: *Vivo Y12*\nRAM: *3/64*\nData: *Telkomsel/Tri*\nJaringan: *4G*\nStatus: *Belum Di Charger*\nBot Type: *Termux Only*\n\n*Bot Telah Aktif Selama*\n*${kyun(uptime)}*\n\n*「 𝗦𝗧𝗔𝗧𝗨𝗦 𝗨𝗦𝗘𝗥 」*\n*User Bot:* *${user.length}*\n*Banned User:* *${ban.length}*\n*Blocked User:* *${blocked.length}*\n*Vip User:* *${vip.length}*\n\nStatus :\n- *${loadedMsg}* Loaded Messages\n- *${groups.length}* Group Chats\n- *${chatIds.length - groups.length}* Personal Chats\n- *${chatIds.length}* Total Chats`, text, { quoted: mek})
                    break
                case 'tagme':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!ispublic) return reply(mess.only.public)
					var nom = mek.participant
					const tag = {
					text: `@${nom.split("@s.whatsapp.net")[0]} tagged!`,
					contextInfo: { mentionedJid: [nom] }
					}
					client.sendMessage(from, tag, text, {quoted: mek})
					break
                case 'donasi':
				case 'donate':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					client.sendMessage(from, 'Mau donasi ya om?✨\n\n اتَّقوا النَّارَ ولو بشقِّ تمرةٍ ، فمن لم يجِدْ فبكلمةٍ طيِّبةٍ\n_“jauhilah api neraka, walau hanya dengan bersedekah sebiji kurma (sedikit). Jika kamu tidak punya, maka bisa dengan kalimah thayyibah” [HR. Bukhari 6539, Muslim 1016]_\n\n*Pulsa Tri :* _0896-5547-8810\n*Dana :* _0896-5547-8810\n*trakteer :* _https://trakteer.id/Xptnbot\n*Gopay :* _belum tersedia_', text, { quoted: mek })
					break
					case 'p':
				case 'asli':
					client.sendMessage(from, 'agung Gans', text, { quoted: mek })
					break
				case 'bot':
					client.sendMessage(from, 'Ya ada apa?', text, { quoted: mek })
					break
                case 'tes':
                   client.sendMessage(from, 'ok', text, {quoted: mek})
                case 'gug':
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (args.length < 1) return reply('Textnya mana um?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(5).trim()
					anu = await fetchJson(`https://mhankbarbar.tech/api/text2image?text=${teks}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'slink':
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (args.length < 1) return reply('Textnya mana um?')
					ranp = getRandom('.jpg')
					rano = getRandom('.webp')
					teks = body.slice(7).trim()
					exec(`wget ${teks} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
                case 'lirik':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!ispublic) return reply(mess.only.public)
					teks = body.slice(7)
					anu = await fetchJson(`http://scrap.terhambar.com/lirik?word=${teks}`, {method: 'get'})
					reply('Lirik dari lagu '+teks+' adalah :\n\n'+anu.result.lirik)
					break
                case 'bugreport':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                     const pesan = body.slice(10)
                      if (pesan.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
                        var nomor = mek.participant
                       const teks1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`

                      var options = {
                         text: teks1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    client.sendMessage('6289655478810@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi.')
                    break
                    case 'ownergrup':
				  case 'ownergroup':
               client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (!isPublic) return reply(mess.only.public)
					if (isBanned) return reply(mess.only.benned)   
             if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
               options = {

          text: `Owner Group ini adalah : @${groupOwner.split("@")[0]}`,

          contextInfo: { mentionedJid: [groupOwner] }

           }

           client.sendMessage(from, options, text, { quoted: mek } )
				break
                    case 'request':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                     const cfrr = body.slice(9)
                      if (cfrr.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
                        var nomor = mek.participant
                       const ress = `*[REQUEST VITUR]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`

                      var options = {
                         text: ress,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    client.sendMessage('6289655478810@s.whatsapp.net', options, text, {quoted: mek})
                    reply('REQUEST ANDA TELAH SAMPAI ke owner BOT, Requests palsu/main2 tidak akan ditanggapi.')
                    break
			 case 'request':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                     const pesann = body.slice(8)
                      if (pesan.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
                        var nomor = mek.participant
                       const teks2 = `*[REQUEST]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`

                      var options = {
                         text: teks1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    client.sendMessage('6289655478810@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Request telah di laporkan ke owner BOT, request  yang dapat membebani owner tidak akan ditanggapi.')
                    break
				case 'meme':
					meme = await kagApi.memes()
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					buffer = await getBuffer(`https://imgur.com/${meme.hash}.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
				case 'memeindo':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://imgur.com/${memein.hash}.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
					case 'addpremium':
					client.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					premium = args[0]
					reply(`Perintah Diterima menambah User Premium : ${premium}`)
					break
					case 'setwelcome': 
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					welcome = body.slice(12)
					reply(`Welcome Diubah Menjadi ${welcome}`)
					break
				case 'ssweb':
					tipelist = ['desktop','tablet','mobile']
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (args.length < 1) return reply('Tipenya apa um?')
					if (!tipelist.includes(args[0])) return reply('Tipe desktop|tablet|mobile')
					if (args.length < 2) return reply('Urlnya mana um?')
					if (!isUrl(args[1])) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/url2image?tipe=${args[0]}&url=${args[1]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'bungasakura':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/walpaper?query=Bunga%20sakura&apikey=${vhtear}`)
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
			    case 'nekonime':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nekonime`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Cintai nekonime'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
						reply('❌ *ERROR* ❌')
					}
					break
					case `pp`:
                       reply(from, `PREFIX YANG SAAT INI DIGUNAKAN *「* ${prefix} *」*`)
                   break
					case 'kiss':
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://nekos.life/api/v2/img/kiss', {method: 'get'})
					if (anu.error) return reply(anu.error)

					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break	
					case 'nangis':

                                        if (!isUser) return reply(mess.only.userB)
                                        if (isBanned) return reply(mess.only.benned)
                                        ranp = getRandom('.gif')
                                        rano = getRandom('.webp')
                                        anu = await fetchJson('https://tobz-api.herokuapp.com/api/cry?apikey=BotWeA', {method: 'get'})
                                        if (anu.error) return reply(anu.error)
                                        exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vs>`)
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                buffer = fs.readFileSync(rano)
                                                client.sendMessage(from, buffer, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        break
                                        case 'firestik':

                                        if (!isUser) return reply(mess.only.userB)
                                        if (isBanned) return reply(mess.only.benned)
                                        bro = body.slice(8)
					reply(mess.wait)
                                        ranp = getRandom('.gif')
                                        rano = getRandom('.webp')
                                        anu = await fetchJson('http://xptnewapi21.6te.net/Coba.php?apikey=xptn&tulis=${bro}', {method: 'get'})
                                        if (anu.error) return reply(anu.error)
                                        exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vs>`)
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                buffer = fs.readFileSync(rano)
                                                client.sendMessage(from, buffer, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        break
					case 'uy':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
						res = await fetchJson(`https://meme-api.herokuapp.com/gimme/sideoppai`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'gw iri bangsat'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
						reply('❌ *ERROR* ❌')
					}
					break
					case 'randomwaifu':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
						res = await fetchJson(`https://waifu.pics/api/nsfw/waifu`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'gw iri bangsat'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
						reply('❌ *ERROR* ❌')
					}
					break
					case 'dxd':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
						res = await fetchJson(`https://mnazria.herokuapp.com/api/anime?query=dxd`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'gw iri bangsat'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
						reply('❌ *ERROR* ❌')
					}
					break
					case 'pps':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					if (!isNsfw) return reply('❌ *MODE NSFW BELUM DIAKTIFKAN* ❌')
						res = await fetchJson(`https://nhder.herokuapp.com/download/nhentai/'+code+'/zip`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'gw iri bangsat'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
						reply('❌ *ERROR* ❌')
					}
					break
					case 'uyt':

				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)

						res = await fetchJson(`https://tobz-api.herokuapp.com/api/waifu2`, {method: 'get'})

						buffer = await getBuffer(res.image)

						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Cintai waifu!'})

					} catch (e) {

						console.log(`Error :`, color(e,'red'))
						
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})

						reply('❌ *ERROR* ❌')

					}

					break
					case 'exe':
	              client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
	              if (!isOwner) return reply(mess.only.ownerB)
	               const cmd = body.slice(5)
	               exec(cmd, (err, stdout) => {
		           if(err) return client.sendMessage(from, "Command Salah", text, { quoted: mek })
		           if (stdout) {
			       client.sendMessage(from, stdout, text, { quoted: mek })
		           }
	           })
                  break
                  case 'trendtwit':
					client.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/trendingtwitter`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Hastag* : ${i.hastag}\n*link* : ${i.link}\n*rank* : ${i.rank}\n*Tweet* : ${i.tweet}\n=================\n`
					}
					reply(teks.trim())
					break
					case 'l4':
					if (!isOwner) return
					case 'loli4':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
						res = await fetchJson(`https://api.vhtear.com/randomloli&apikey=${vhtear}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'hug'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
						reply('❌ *ERROR* ❌')
						}
						break
					case 'quotesanime':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomquotes`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'hug'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
					}
					break
					case 'waifu':
                        if (isBanned) return reply(mess.only.benned)
                                if (!isUser) return reply(mess.only.userB)
                        if (!ispublic) return reply(mess.only.public)
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/waifu?apikey=BotWeA`, {method: 'get'})
                                        if (anu.error) return reply(anu.error)
                                        buffer = await getBuffer(anu.image)
                                        waifu = `*${anu.desc}`
                                        client.sendMessage(from, buffer, image, {quoted: mek, caption: waifu})
                                        break
                                        case 'randombagu':
                        if (isBanned) return reply(mess.only.benned)
                                if (!isUser) return reply(mess.only.userB)
                        if (!ispublic) return reply(mess.only.public)
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://api.i-tech.id/anim/baguette?key=VE0yJo-DWTTuJ-863DpA-KZLbc3-oWJ9z8`, {method: 'get'})
                                        if (anu.error) return reply(anu.error)
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek})
                                        break
                                        case 'randomyuri':
                        if (isBanned) return reply(mess.only.benned)
                                if (!isUser) return reply(mess.only.userB)
                        if (!ispublic) return reply(mess.only.public)
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://api.i-tech.id/anim/yuri?key=VE0yJo-DWTTuJ-863DpA-KZLbc3-oWJ9z8`, {method: 'get'})
                                        if (anu.error) return reply(anu.error)
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek})
                                        break
                                        case 'randomasu':
                        if (isBanned) return reply(mess.only.benned)
                                if (!isUser) return reply(mess.only.userB)
                        if (!ispublic) return reply(mess.only.public)
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://api.i-tech.id/tools/asu?key=VE0yJo-DWTTuJ-863DpA-KZLbc3-oWJ9z8`, {method: 'get'})
                                        if (anu.error) return reply(anu.error)
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek})
                                        break
                                        case 'kpop':
                        if (isBanned) return reply(mess.only.benned)
                                if (!isUser) return reply(mess.only.userB)
                        if (!ispublic) return reply(mess.only.public)
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=BotWeA`, {method: 'get'})
                                        if (anu.error) return reply(anu.error)
                                        buffer = await getBuffer(anu.image)
                                        randomkpop = `*${anu.desc}`
                                        client.sendMessage(from, buffer, image, {quoted: mek, caption: randomkpop})
                                        break
					case 'husbu':

				    try {

						res = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu?apikey=BotWeA`)

						buffer = await getBuffer(res.image)

						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Cintai husbumu'})

					} catch (e) {

						console.log(`Error :`, color(e,'red'))

						reply('❌ *ERROR* ❌')

					}

					break
					case 'ry':

				    try {

						res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomshota?apikey=BotWeA`)

						buffer = await getBuffer(res.image)

						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Cintai husbumu'})

					} catch (e) {

						console.log(`Error :`, color(e,'red'))

						reply('❌ *ERROR* ❌')

					}

					break
					case 'husbu2':
				client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
				 data = fs.readFileSync('./src/husbu.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.image)
                sendImage(hasil, mek, randKey.teks)
				break
					case 'error':

				    try {

						res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=BotWeA`)

						buffer = await getBuffer(res.image)

						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Cintai husbumu'})

					} catch (e) {

						console.log(`Error :`, color(e,'red'))

						reply('❌ *ERROR* ❌')

					}

					break
					case 'lo':
					if (!isOwner) return
				case 'loli':
                                        limitAdd(sender) 
				                        isLimit(sender)
                                        gatauda = body.slice(6)
                                        if (isBanned) return reply(mess.only.benned)
                                        if (!isUser) return reply(mess.only.daftarB)
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomloli?apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek})
                                        break
			    case 'imagepest':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
						anu = await fetchJson(`https://api.i-tech.id/anim/baguette?key=oc2nvC-F4HS1e-OteAXu-5QkGag-J8WC94`, {method: 'get'})
						buffer = await getBuffer(anu.result.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Cintai waifu!'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						client.sendMessage(from, errorurl, image, {quoted: mek, caption: 'Error Kak!!'})
					}
					break
					case 'searchstik':
					client.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (args.length < 1) return reply('Yang mau di cari apaan? titit?')
					anu = await fetchJson(`https://api.vhtear.com/wasticker?query=${body.slice(12)}&apikey=${vhtear}`, {method: 'get'})
					teks = '--------------------------\n'
					for (let i of anu.result.data) {
						teks += `*Url* : ${i}\n--------------------------\n`
					}
					reply(teks.trim())
					break
					case 'pe':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
						anu = await fetchJson(`https://meme-api.herokuapp.com/gimme/sideoppai`, {method: 'get'})
						buffer = await getBuffer(anu.result.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Cintai waifu!'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
						reply('❌ *ERROR* ❌')
					}
					break
					case 'sideoppai':
						buffer = await getBuffer(`https://meme-api.herokuapp.com/gimme/sideoppai`)

						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Cintai Lolimu'})

					break
					case 'waifu3':
						buffer = await getBuffer(`https://tobz-api.herokuapp.com/api/waifu2`)

						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Cintai Lolimu'})

					break
					case 'jd':
				    try {
					if (!ispublic) return reply(mess.only.public)
						anu = await fetchJson(`https://waifu.pics/api/nsfw/waifu`, {method: 'get'})
						buffer = await getBuffer(anu.result.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Cintai waifu!'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
						reply('❌ *ERROR* ❌')
					}
					break
			    case 'waifu':
				    try {
					limitAdd(sender) 
				    isLimit(sender)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/waifu`, {method: 'get'})
						buffer = await getBuffer(res.image)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Cintai waifu!'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
					case 'wf2':
					if (!isOwner) return
			    case 'waifu2':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!ispublic) return reply(mess.only.public)
					reply(mess.wait)
					buffer = await getBuffer(`https://tobz-api.herokuapp.com/api/waifu`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'waifu'})
					break
					case 'agungwaifu':
					if (!ispublic) return reply(mess.only.public)
					reply(mess.wait)
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/waifu2`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.image)
					waifu = `*${anu.desc}`
					client.sendMessage(from, buffer, image, {quoted: mek, caption: waifu})
					break
				case 'imoji':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/emoji2png?emoji=`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'wibu':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/randomwibu&apikey=${vhtear}`)
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result.foto)
					wibu = ` ➸ *nama* ${anu.result.nama} ➸ *deskripsi* ${anu.result.deskripsi}`
					client.sendMessage(from, buffer, image, {quoted: mek, caption: wibu})
					break
				case 'randomcat':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/randomcat?apikey=${vhtear}`)
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result.url)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
                    case 'nim':
                    if (!isOwner) return
			    case 'randomanime':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					if (!isPremium) return reply(mess.only.premium)
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni randomanime!'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
			    case 'randomhentai':
                                        limitAdd(sender) 
				                        isLimit(sender)
                                        gatauda = body.slice(6)
                                        if (!isPremium) return reply(mess.only.premium)
                                        if (!isUser) return reply(mess.only.daftarB)
                                        reply(mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek})
                                        break
				case 'nsfwloli':
					if (!isNsfw) return reply('❌ *FALSE* ❌')
					loli.getNSFWLoli(async (err, res) => {
						if (err) return reply('❌ *ERROR* ❌')
						buffer = await getBuffer(res.url)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					})
					break
			    case 'nsfwblowjob':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					if (!isPremium) return reply(mess.only.premium)
						if (!isNsfw) return reply('❌ *NSFW MATI* ❌')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
					case 'nekojav':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					if (!isPremium) return reply(mess.only.premium)
						if (!isNsfw) return reply('❌ *NSFW MATI* ❌')
						res = await fetchJson(`https://api.vhtear.com/nekohentai&apikey=${vhtear}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
			    case 'nsfwneko':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					if (!isPremium) return reply(mess.only.premium)
						if (!isNsfw) return reply('❌ *NSFW MATI* ❌')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
					case 'nenen':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					if (!isPremium) return reply(mess.only.premium)
						if (!isNsfw) return reply('❌ *NSFW MATI* ❌')
						res = await fetchJson(`https://nekos.life/api/v2/img/boobs`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, res, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
				case 'nsfwtrap':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					if (!isPremium) return reply(mess.only.premium)
						if (!isNsfw) return reply('❌ *NSFW MATI* ❌')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
					case 'nekopou':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					if (!isPremium) return reply(mess.only.premium)
						if (!isNsfw) return reply('❌ *NSFW MATI* ❌')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/waifu?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
					case '1cak':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					if (!isPremium) return reply(mess.only.premium)
						if (!isNsfw) return reply('❌ *NSFW MATI* ❌')
						res = await fetchJson(`https://st4rz.herokuapp.com/api/1cak`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
					case 'animerandom':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					if (!isPremium) return reply(mess.only.premium)
						if (!isNsfw) return reply('❌ *NSFW MATI* ❌')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
					case 'teus':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
						if (!isNsfw) return reply('❌ *FALSE* ❌')
						res = await fetchJson(`http://inyourdream.herokuapp.com/graffity?kata=' + graffity`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
					case 'walpaperanime':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
						if (!isNsfw) return reply('❌ *FALSE* ❌')
						res = await fetchJson(`https://wallpaperaccess.com/full/395986.jpg','https://wallpaperaccess.com/full/21628.jpg','https://wallpaperaccess.com/full/21622.jpg','https://wallpaperaccess.com/full/21612.jpg','https://wallpaperaccess.com/full/21611.png','https://wallpaperaccess.com/full/21597.jpg','https://cdn.nekos.life/wallpaper/QwGLg4oFkfY.png','https://wallpaperaccess.com/full/21591.jpg','https://cdn.nekos.life/wallpaper/bUzSjcYxZxQ.jpg','https://cdn.nekos.life/wallpaper/j49zxzaUcjQ.jpg','https://cdn.nekos.life/wallpaper/YLTH5KuvGX8.png','https://cdn.nekos.life/wallpaper/Xi6Edg133m8.jpg','https://cdn.nekos.life/wallpaper/qvahUaFIgUY.png','https://cdn.nekos.life/wallpaper/leC8q3u8BSk.jpg','https://cdn.nekos.life/wallpaper/tSUw8s04Zy0.jpg','https://cdn.nekos.life/wallpaper/sqsj3sS6EJE.png','https://cdn.nekos.life/wallpaper/HmjdX_s4PU4.png','https://cdn.nekos.life/wallpaper/Oe2lKgLqEXY.jpg','https://cdn.nekos.life/wallpaper/GTwbUYI-xTc.jpg','https://cdn.nekos.life/wallpaper/nn_nA8wTeP0.png','https://cdn.nekos.life/wallpaper/Q63o6v-UUa8.png','https://cdn.nekos.life/wallpaper/ZXLFm05K16Q.jpg','https://cdn.nekos.life/wallpaper/cwl_1tuUPuQ.png','https://cdn.nekos.life/wallpaper/wWhtfdbfAgM.jpg','https://cdn.nekos.life/wallpaper/3pj0Xy84cPg.jpg','https://cdn.nekos.life/wallpaper/sBoo8_j3fkI.jpg','https://cdn.nekos.life/wallpaper/gCUl_TVizsY.png','https://cdn.nekos.life/wallpaper/LmTi1k9REW8.jpg','https://cdn.nekos.life/wallpaper/sbq_4WW2PUM.jpg','https://cdn.nekos.life/wallpaper/QOSUXEbzDQA.png','https://cdn.nekos.life/wallpaper/khaqGIHsiqk.jpg','https://cdn.nekos.life/wallpaper/iFtEXugqQgA.png','https://cdn.nekos.life/wallpaper/deFKIDdRe1I.jpg','https://cdn.nekos.life/wallpaper/OHZVtvDm0gk.jpg','https://cdn.nekos.life/wallpaper/YZYa00Hp2mk.jpg','https://cdn.nekos.life/wallpaper/R8nPIKQKo9g.png','https://cdn.nekos.life/wallpaper/_brn3qpRBEE.jpg','https://cdn.nekos.life/wallpaper/ADTEQdaHhFI.png','https://cdn.nekos.life/wallpaper/MGvWl6om-Fw.jpg','https://cdn.nekos.life/wallpaper/YGmpjZW3AoQ.jpg','https://cdn.nekos.life/wallpaper/hNCgoY-mQPI.jpg','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/iQ2FSo5nCF8.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/CmEmn79xnZU.jpg','https://cdn.nekos.life/wallpaper/MAL18nB-yBI.jpg','https://cdn.nekos.life/wallpaper/FUuBi2xODuI.jpg','https://cdn.nekos.life/wallpaper/ez-vNNuk6Ck.jpg','https://cdn.nekos.life/wallpaper/K4-z0Bc0Vpc.jpg','https://cdn.nekos.life/wallpaper/Y4JMbswrNg8.jpg','https://cdn.nekos.life/wallpaper/ffbPXIxt4-0.png','https://cdn.nekos.life/wallpaper/x63h_W8KFL8.jpg','https://cdn.nekos.life/wallpaper/lktzjDRhWyg.jpg','https://cdn.nekos.life/wallpaper/j7oQtvRZBOI.jpg','https://cdn.nekos.life/wallpaper/MQQEAD7TUpQ.png','https://cdn.nekos.life/wallpaper/lEG1-Eeva6Y.png','https://cdn.nekos.life/wallpaper/Loh5wf0O5Aw.png','https://cdn.nekos.life/wallpaper/yO6ioREenLA.png','https://cdn.nekos.life/wallpaper/4vKWTVgMNDc.jpg','https://cdn.nekos.life/wallpaper/Yk22OErU8eg.png','https://cdn.nekos.life/wallpaper/Y5uf1hsnufE.png','https://cdn.nekos.life/wallpaper/xAmBpMUd2Zw.jpg','https://cdn.nekos.life/wallpaper/f_RWFoWciRE.jpg','https://cdn.nekos.life/wallpaper/Y9qjP2Y__PA.jpg','https://cdn.nekos.life/wallpaper/eqEzgohpPwc.jpg','https://cdn.nekos.life/wallpaper/s1MBos_ZGWo.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/32EAswpy3M8.png','https://cdn.nekos.life/wallpaper/Z6eJZf5xhcE.png','https://cdn.nekos.life/wallpaper/xdiSF731IFY.jpg','https://cdn.nekos.life/wallpaper/Y9r9trNYadY.png','https://cdn.nekos.life/wallpaper/8bH8CXn-sOg.jpg','https://cdn.nekos.life/wallpaper/a02DmIFzRBE.png','https://cdn.nekos.life/wallpaper/MnrbXcPa7Oo.png','https://cdn.nekos.life/wallpaper/s1Tc9xnugDk.jpg','https://cdn.nekos.life/wallpaper/zRqEx2gnfmg.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/0ECCRW9soHM.jpg','https://cdn.nekos.life/wallpaper/kAw8QHl_wbM.jpg','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/WVEdi9Ng8UE.png','https://cdn.nekos.life/wallpaper/IRu29rNgcYU.png','https://cdn.nekos.life/wallpaper/LgIJ_1AL3rM.jpg','https://cdn.nekos.life/wallpaper/DVD5_fLJEZA.jpg','https://cdn.nekos.life/wallpaper/siqOQ7k8qqk.jpg','https://cdn.nekos.life/wallpaper/CXNX_15eGEQ.png','https://cdn.nekos.life/wallpaper/s62tGjOTHnk.jpg','https://cdn.nekos.life/wallpaper/tmQ5ce6EfJE.png','https://cdn.nekos.life/wallpaper/Zju7qlBMcQ4.jpg','https://cdn.nekos.life/wallpaper/CPOc_bMAh2Q.png','https://cdn.nekos.life/wallpaper/Ew57S1KtqsY.jpg','https://cdn.nekos.life/wallpaper/hVpFbYJmZZc.jpg','https://cdn.nekos.life/wallpaper/sb9_J28pftY.jpg','https://cdn.nekos.life/wallpaper/JDoIi_IOB04.jpg','https://cdn.nekos.life/wallpaper/rG76AaUZXzk.jpg','https://cdn.nekos.life/wallpaper/9ru2luBo360.png','https://cdn.nekos.life/wallpaper/ghCgiWFxGwY.png','https://cdn.nekos.life/wallpaper/OSR-i-Rh7ZY.png','https://cdn.nekos.life/wallpaper/65VgtPyweCc.jpg','https://cdn.nekos.life/wallpaper/3vn-0FkNSbM.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/3VjNKqEPp58.jpg','https://cdn.nekos.life/wallpaper/NoG4lKnk6Sc.jpg','https://cdn.nekos.life/wallpaper/xiTxgRMA_IA.jpg','https://cdn.nekos.life/wallpaper/yq1ZswdOGpg.png','https://cdn.nekos.life/wallpaper/4SUxw4M3UMA.png','https://cdn.nekos.life/wallpaper/cUPnQOHNLg0.jpg','https://cdn.nekos.life/wallpaper/zczjuLWRisA.jpg','https://cdn.nekos.life/wallpaper/TcxvU_diaC0.png','https://cdn.nekos.life/wallpaper/7qqWhEF_uoY.jpg','https://cdn.nekos.life/wallpaper/J4t_7DvoUZw.jpg','https://cdn.nekos.life/wallpaper/xQ1Pg5D6J4U.jpg','https://cdn.nekos.life/wallpaper/aIMK5Ir4xho.jpg','https://cdn.nekos.life/wallpaper/6gneEXrNAWU.jpg','https://cdn.nekos.life/wallpaper/PSvNdoISWF8.jpg','https://cdn.nekos.life/wallpaper/SjgF2-iOmV8.jpg','https://cdn.nekos.life/wallpaper/vU54ikOVY98.jpg','https://cdn.nekos.life/wallpaper/QjnfRwkRU-Q.jpg','https://cdn.nekos.life/wallpaper/uSKqzz6ZdXc.png','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/N1l8SCMxamE.jpg','https://cdn.nekos.life/wallpaper/n2cBaTo-J50.png','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/7bwxy3elI7o.png','https://cdn.nekos.life/wallpaper/7VW4HwF6LcM.jpg','https://cdn.nekos.life/wallpaper/YtrPAWul1Ug.png','https://cdn.nekos.life/wallpaper/1p4_Mmq95Ro.jpg','https://cdn.nekos.life/wallpaper/EY5qz5iebJw.png','https://cdn.nekos.life/wallpaper/aVDS6iEAIfw.jpg','https://cdn.nekos.life/wallpaper/veg_xpHQfjE.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/Xa_GtsKsy-s.png','https://cdn.nekos.life/wallpaper/6Bx8R6D75eM.png','https://cdn.nekos.life/wallpaper/zXOGXH_b8VY.png','https://cdn.nekos.life/wallpaper/VQcviMxoQ00.png','https://cdn.nekos.life/wallpaper/CJnRl-PKWe8.png','https://cdn.nekos.life/wallpaper/zEWYfFL_Ero.png','https://cdn.nekos.life/wallpaper/_C9Uc5MPaz4.png','https://cdn.nekos.life/wallpaper/zskxNqNXyG0.jpg','https://cdn.nekos.life/wallpaper/g7w14PjzzcQ.jpg','https://cdn.nekos.life/wallpaper/KavYXR_GRB4.jpg','https://cdn.nekos.life/wallpaper/Z_r9WItzJBc.jpg','https://cdn.nekos.life/wallpaper/Qps-0JD6834.jpg','https://cdn.nekos.life/wallpaper/Ri3CiJIJ6M8.png','https://cdn.nekos.life/wallpaper/ArGYIpJwehY.jpg','https://cdn.nekos.life/wallpaper/uqYKeYM5h8w.jpg','https://cdn.nekos.life/wallpaper/h9cahfuKsRg.jpg','https://cdn.nekos.life/wallpaper/iNPWKO8d2a4.jpg','https://cdn.nekos.life/wallpaper/j2KoFVhsNig.jpg','https://cdn.nekos.life/wallpaper/z5Nc-aS6QJ4.jpg','https://cdn.nekos.life/wallpaper/VUFoK8l1qs0.png','https://cdn.nekos.life/wallpaper/rQ8eYh5mXN8.png','https://cdn.nekos.life/wallpaper/D3NxNISDavQ.png','https://cdn.nekos.life/wallpaper/Z_CiozIenrU.jpg','https://cdn.nekos.life/wallpaper/np8rpfZflWE.jpg','https://cdn.nekos.life/wallpaper/ED-fgS09gik.jpg','https://cdn.nekos.life/wallpaper/AB0Cwfs1X2w.jpg','https://cdn.nekos.life/wallpaper/DZBcYfHouiI.jpg','https://cdn.nekos.life/wallpaper/lC7pB-GRAcQ.png','https://cdn.nekos.life/wallpaper/zrI-sBSt2zE.png','https://cdn.nekos.life/wallpaper/_RJhylwaCLk.jpg','https://cdn.nekos.life/wallpaper/6km5m_GGIuw.png','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/oggceF06ONQ.jpg','https://cdn.nekos.life/wallpaper/ELdH2W5pQGo.jpg','https://cdn.nekos.life/wallpaper/Zun_n5pTMRE.png','https://cdn.nekos.life/wallpaper/VqhFKG5U15c.png','https://cdn.nekos.life/wallpaper/NsMoiW8JZ60.jpg','https://cdn.nekos.life/wallpaper/XE4iXbw__Us.png','https://cdn.nekos.life/wallpaper/a9yXhS2zbhU.jpg','https://cdn.nekos.life/wallpaper/jjnd31_3Ic8.jpg','https://cdn.nekos.life/wallpaper/Nxanxa-xO3s.png','https://cdn.nekos.life/wallpaper/dBHlPcbuDc4.jpg','https://cdn.nekos.life/wallpaper/6wUZIavGVQU.jpg','https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/H9OUpIrF4gU.jpg','https://cdn.nekos.life/wallpaper/xlRdH3fBMz4.jpg','https://cdn.nekos.life/wallpaper/7IzUIeaae9o.jpg','https://cdn.nekos.life/wallpaper/FZCVL6PyWq0.jpg','https://cdn.nekos.life/wallpaper/5dG-HH6d0yw.png','https://cdn.nekos.life/wallpaper/ddxyA37HiwE.png','https://cdn.nekos.life/wallpaper/I0oj_jdCD4k.jpg','https://cdn.nekos.life/wallpaper/ABchTV97_Ts.png','https://cdn.nekos.life/wallpaper/58C37kkq39Y.png','https://cdn.nekos.life/wallpaper/HMS5mK7WSGA.jpg','https://cdn.nekos.life/wallpaper/1O3Yul9ojS8.jpg','https://cdn.nekos.life/wallpaper/hdZI1XsYWYY.jpg','https://cdn.nekos.life/wallpaper/h8pAJJnBXZo.png','https://cdn.nekos.life/wallpaper/apO9K9JIUp8.jpg','https://cdn.nekos.life/wallpaper/p8f8IY_2mwg.jpg','https://cdn.nekos.life/wallpaper/HY1WIB2r_cE.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/jzN74LcnwE8.png','https://cdn.nekos.life/wallpaper/IeAXo5nJhjw.jpg','https://cdn.nekos.life/wallpaper/7lgPyU5fuLY.jpg','https://cdn.nekos.life/wallpaper/f8SkRWzXVxk.png','https://cdn.nekos.life/wallpaper/ZmDTpGGeMR8.jpg','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/ZhP-f8Icmjs.jpg','https://cdn.nekos.life/wallpaper/7FyUHX3fE2o.jpg','https://cdn.nekos.life/wallpaper/CZoSLK-5ng8.png','https://cdn.nekos.life/wallpaper/pSNDyxP8l3c.png','https://cdn.nekos.life/wallpaper/AhYGHF6Fpck.jpg','https://cdn.nekos.life/wallpaper/ic6xRRptRes.jpg','https://cdn.nekos.life/wallpaper/89MQq6KaggI.png','https://cdn.nekos.life/wallpaper/y1DlFeHHTEE.png']`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
				case 'hilih':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					if (args.length < 1) return reply('Teksnya mana um?')
					anu = await fetchJson(`https://mhankbarbar.tech/api/hilih?teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					break
				case 'ytmp3':

				if (isBanned) return reply(mess.only.benned)    

				if (!isUser) return reply(mess.only.userB)

				if (!ispublic) return reply(mess.only.public)

				if (!isPremium) return reply(mess.only.premium)

                reply(mess.wait)

					if (args.length < 1) return reply('Urlnya mana um?')

					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)

					anu = await fetchJson(`https://ohto-ai.herokuapp.com/ytmus?URL=${args[0]}`, {method: 'get'})

					if (anu.error) return reply(anu.error)

					buffer = await getBuffer(anu.getVideo)

					client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})

					break
			    case 'bucin':
			limitAdd(sender) 
		    isLimit(sender)
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!ispublic) return reply(mess.only.public)
					gatauda = body.slice(7)
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/howbucins`, {method: 'get'})
					reply(anu.desc)
					break
					case 'akugay':
					limitAdd(sender) 
				    isLimit(sender)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!ispublic) return reply(mess.only.public)
					gatauda = body.slice(7)
					anu = await fetchJson(`https://xptnbotapinew.herokuapp.com/?dare&apikey=xptn`, {method: 'get'})
					reply(anu.desc)
					break
					case 'wa.me':
				  case 'wame':
				limitAdd(sender) 
				isLimit(sender)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
  client.updatePresence(from, Presence.composing) 
      if (!isUser) return reply(mess.only.userB)
      options = {
          text: `「 *SELF WHATSAPP* 」\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
          contextInfo: { mentionedJid: [sender] }
    }
    client.sendMessage(from, options, text, { quoted: mek } )
				break
		        case 'gay':
		limitAdd(sender) 
		isLimit(sender)
		if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
		if (!ispublic) return reply(mess.only.public)
		if (args.length < 1) return reply('tag temanmu!')
					rate = body.slice(1)
					const ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const kl = ti[Math.floor(Math.random() * ti.length)]
					client.sendMessage(from, 'Seberapa gay lu: *'+rate+'*\n\nJawaban : '+ kl+'%', text, { quoted: mek })
					break
					break
					case 'cantik':
					limitAdd(sender) 
				    isLimit(sender)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					membr = []
					const mes = groupMembers
					const msk = groupMembers
					const siaps = mes[Math.floor(Math.random() * mes.length)]
					const sips = pushname2[Math.floor(Math.random() * msk.length)]
					teks = `Yang paling cantik Disni adalah  @${siaps.jid.split('@')[0]}`
					membr.push(siaps.jid)
					mentions(teks, membr, true)
					break
					case 'ganteng':
					limitAdd(sender) 
				    isLimit(sender)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					membr = []
					const nus = groupMembers
					const msl = groupMembers
					const siapss = nus[Math.floor(Math.random() * nus.length)]
					const sipss = pushname2[Math.floor(Math.random() * msl.length)]
					teks = `Yang paling ganteng Disni adalah😎  @${siapss.jid.split('@')[0]}`
					membr.push(siapss.jid)
					mentions(teks, membr, true)
					break
					case 'jadian':
					limitAdd(sender) 
				    isLimit(sender)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]} ♥️ @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					break	
					case 'blood':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧𝐲𝐚 𝐤𝐚𝐤')
					tels = body.slice(8)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=blood&text=${tels}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break	
				case 'psp':
				if (!ispublic) return reply(mess.only.public)
					if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧𝐲𝐚 𝐤𝐚𝐤')
					tels = body.slice(8)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=wolflogo1&text1=${gl1}&text2=${tels}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break		
				case 'agung':
					if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧𝐲𝐚 𝐤𝐚𝐤')
					tels = body.slice(8)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=wolflogo2&text1=${gl1}&text2=${tels}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
					case 'psong':
					if (!isOwner) return reply ('beb kamu bukan owner')
					case 'pesankosong':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
				client.sendMessage(from, 'ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ ÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍÍ' , text, {quoted: mek})
				case 'cerpen':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					gatauda = body.slice(1)
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/cerpen`, {method: 'get'})
					reply(anu.result)
					break
					case 'cersex':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					gatauda = body.slice(1)
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/cersex2`)
					reply(anu.result)
					break
					case 'alpa':
				if (!ispublic) return reply(mess.only.public)
					gatauda = body.slice(5)
					anu = await fetchJson(`https://xptnbotapinew.herokuapp.com/?dare&apikey=xptn`)
					reply(anu.dare)
					break
				case 'quotes':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				client.updatePresence(from, Presence.composing) 
 
				data = await fetchJson(`https://mhankbarbar.tech/api/randomquotes`)
				ez = `*╠➥  Author :* ${data.author}\n*╠➥  Quotes :* ${data.quotes}`
				reply(ez)
				break
				case 'darkjokes':
				client.updatePresence(from, Presence.composing) 
 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				 data = fs.readFileSync('./src/darkjokes.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                client.sendMessage(hasil, image, mek, '\`\`\`DARKJOKES\`\`\`')
				break
				case 'asupan':
				client.updatePresence(from, Presence.composing) 
 if (isBanned) return reply(mess.only.benned)    
 if (!isPremium) return reply(mess.only.premium)
				if (!isUser) return reply(mess.only.userB)
				 data = fs.readFileSync('./src/asupan.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                buffer = await getBuffer(randKey.result)
                client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
				break
				case 'amv':
				client.updatePresence(from, Presence.composing) 
 if (isBanned) return reply(mess.only.benned)    
 reply(`sedang diproses 2+ menit, btw yang buat Xptn/owner🗿`)
				if (!isUser) return reply(mess.only.userB)
				 data = fs.readFileSync('./src/amv.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                buffer = await getBuffer(randKey.result)
                client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
				break
				case 'kdu':
				client.updatePresence(from, Presence.composing) 
 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				 data = fs.readFileSync('./src/husbu.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.teks.image)
                client.sendMessage(hasil, image, mek, '\`\`\`Husbu\`\`\`')
				break
				case 'audio':
				client.updatePresence(from, Presence.composing) 
 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				 ayam = fs.readFileSync('./src/music.js');
                 jsonData = JSON.parse(ayam);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                client.sendMessage(from, ayam, audio, {mimetype: 'audio/mp3', filename: `.mp3`, quoted: mek})
				break
					case 'kata':
					if (!ispublic) return reply(mess.only.public)
					gatauda = body.slice(8)
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/quotesnime/random`, {method: 'get'})
					reply(anu.quotes)
					break		
					case 'kucingggg':
					if (!ispublic) return reply(mess.only.public)
					gatauda = body.slice(8)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/pantun`, {method: 'get'})
					reply(anu.pantun)
					break		
					case 'jokerlogo':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧𝐲𝐚 𝐤𝐚𝐤')
					tels = body.slice(10)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=jokerlogo&text=${tels}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
					case 'crossfire':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧𝐲𝐚 𝐤𝐚𝐤')
					izin = body.slice(10)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=crossfire&text=${izin}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
					case 'logonaruto':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					if (args.length < 1) return reply('𝐭𝐞??𝐬??𝐲𝐚 𝐤𝐚𝐤')
					gis = body.slice(11)
					reply(mess.wait)
					anu = await fetchJson(`https://api.zeks.xyz/api/naruto?text=${gis}&apikey=apivinz`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
					case 'harry':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧𝐲𝐚 𝐤𝐚𝐤')
					gwe = body.slice(6)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=harry_potter&text=${gwe}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
					case 'avengers':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					aruga = body.slice(10)
					reply(mess.wait)
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/avengers?text1=aruga&text2=${aruga}`)
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					break 
					case 'summer':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					aruga = body.slice(8)
					reply(mess.wait)
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/sandsummer?text=${aruga}`)
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					break 
					case 'sandwrite':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					aruga = body.slice(11)
					reply(mess.wait)
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/sandwrite?text=${aruga}`)
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					break 
					case 'metaldark':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					aruga = body.slice(10)
					reply(mess.wait)
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/metaldark?text=${aruga}`)
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					break 
					case 'overwatch':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧𝐲𝐚 𝐤𝐚𝐤')
					wometal = body.slice(10)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=overwatch&text=${wometal}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
					case 'warface':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧𝐲𝐚 𝐤𝐚𝐤')
					wometal = body.slice(8)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/photooxy?theme=warface&text=${wometal}&apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
					case 'dropwater':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					aruga = body.slice(11)
					reply(mess.wait)
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/dropwater?text=${aruga}`)
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					break 
					case 'grenneon':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					aruga = body.slice(10)
					reply(mess.wait)
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/greenneon?text=${aruga}`)
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					break 
					case 'neontext':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					aruga = body.slice(10)
					reply(mess.wait)
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/neontext?text=${aruga}`)
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					break 
					case 'gell':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					aruga = body.slice(6)
					reply(mess.wait)
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/toxictext?text=${aruga}`)
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					break
					case 'sumery':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					aruga = body.slice(7)
					reply(mess.wait)
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/sandsummery?text=${aruga}`)
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					break
					case 'blood':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					aruga = body.slice(7)
					reply(mess.wait)
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/bloodtext?text=${aruga}`)
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					break
					case 'firework':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					arugazzz = body.slice(9)
					reply(mess.wait)
					arugazzz = await getBuffer(`https://arugaz.my.id/api/textpro/firework?text=${arugazzz}`)
					client.sendMessage(from, arugazzz, image, {caption: 'Nih kak', quoted: mek})
					break
					case 'lava':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					aruga = body.slice(6)
					reply(mess.wait)
					aruga = await getBuffer(`https://arugaz.my.id/api/textpro/lavatext?text=${aruga}`)
					client.sendMessage(from, aruga, image, {caption: 'Nih kak', quoted: mek})
					break
					case 'smoke':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧𝐲𝐚 𝐤𝐚𝐤')
					vb = body.slice(6)
					reply(mess.wait)
					anu = await fetchJson(`https://api.zeks.xyz/api/smoketext?text=${vb}&apikey=apivinz`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
					case 'fire':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Teksnya mana um')
					gue = body.slice(5)
					if (gue.length > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/fire_maker?text=${gue}&apikey=${vhtear}`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: ' '+gue})
					break
					case 'tesimage':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Teksnya mana um')
					sate = body.slice(9)
					if (sate.length > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					reply(mess.wait)
					buffer = await getBuffer(`https://rest.farzain.com/api/gambarg.php?id=${sate}&apikey=Xptn`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: ' '+sate})
					break
					case 'epep':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Teksnya mana um')
					tawa = body.slice(5)
					if (tawa.length > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/logoff?hero=alok&text=${tawa}&apikey=${vhtear}`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ep ep buriq,text: '+tawa})
					break
					case 'epep':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					ajs = body.slice(5)
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/logoff?hero=alok&text=${ajs}&apikey=${vhtear}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
					case 'romance':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧𝐲𝐚 𝐤𝐚𝐤')
					rmnc = body.slice(10)
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/romancetext?text=${rmnc}&apikey=${vhtear}`)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break	
					case 'ranime':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					gatauda = body.slice(8)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
					case 'spamsms':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
          if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
          if (!isPremium) return reply(mess.only.premium)
          reply('Wait..')
                                       if (args[0].startsWith('08')) return reply('Gunakan nomor awalan 8/n ex : *8796662*')
                                       if (args[0].startsWith('82255123081')) return reply('Gagal tidak dapat menelpon nomer bot')
                                       if (args[0].startsWith('82387804410')) return reply('Gagal tidak dapat menelpon nomer owner')
                                       var data = body.slice(10)
                                       await fetchJson(`https://core.ktbs.io/v2/user/registration/otp/62`+data, {method: 'get'})
                                       await fetchJson(`https://arugaz.herokuapp.com/api/spamcall?no=`+data, {method: 'get'})
                                       await fetchJson(`https://api.danacita.co.id/users/send_otp/?mobile_phone=62`+data, {method: 'get'})
                                       await fetchJson(`https://account-api-v1.klikindomaret.com/api/PreRegistration/SendOTPSMS?NoHP=0`+data, {method: 'get'})
                                       await fetchJson(`https://zeksapi.herokuapp.com/api/spamcall?no=`+data+`&apikey=apivinz`, {method: 'get'})
                                       break
					case 'neon':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.blank)
					duadua = body.slice(7)
					reply(mess.wait)
					duaa = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/neonwithgalaxytext?text=${duadua}`)
					client.sendMessage(from, duaa, image, {caption: 'Nih kak', quoted: mek})
					break
					case 'bpink':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
              if (!isUser) return reply(mess.only.userB)
                  if (args.length < 1) return reply(`Masukan Teks\nContoh : ${prefix}MR KING BOT`)
                data = await getBuffer(`https://docs-jojo.herokuapp.com/api/blackpink?text=${body.slice(7)}`)
                client.sendMessage(from, data, image, {quoted: mek, caption: body.slice(7)})
                break
					case 'infonomor':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                 if (!isUser) return reply(mess.only.userB)
                 if (args.length < 1) return reply(`Masukan Nomor\nContoh : ${prefix}infonomor 0812345678`)
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(11)}`)
                if (data.error) return reply(data.error)
                if (data.result) return reply(data.result)
                hasil = `╠➥ internasional : ${data.international}\n╠➥ nomor : ${data.nomor}\n╠➥ operator : ${data.op}`
                reply(hasil)
                break
					case 'neko':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					gatauda = body.slice(6)
					reply(mess.wait)
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/nekonime`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break	
					
				case 'cerpen':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					gatauda = body.slice(1)
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/cerpen`, {method: 'get'})
					reply(anu.result)
					break
				case 'chord':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					if (args.length < 1) return reply('teks nya mana om')
					tels = body.slice(7)
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/chord?q=${tels}`, {method: 'get'})
					reply(anu.result)
					break
				case 'ramalhp':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					if (args.length < 1) return reply('teks nya mana om')
					kj = body.slice(12)
					anu = await fetchJson(`https://api.vhtear.com/nomerhoki?no=${kj}&apikey=${vhtear}`)
					reply(anu.result.hasil)
					break
				case 'textscreen':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					if (args.length < 1) return reply('teks nya mana om')
					tels = body.slice(9)
					anu = await fetchJson(`https://api.vhtear.com/textscreen?query=${tels}&apikey=${vhtear}`, {method: 'get'})
					reply(anu.result.text)
					break
			    case 'joox':
               if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                 if (!isPremium) return reply(mess.only.premium)
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(6)}&apikey=BotWeA`, {method: 'get'})
               if (data.error) return reply(data.error)
                 infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${data.result.judul}\nAlbum : ${data.result.album}\nDipublikasi : ${data.result.dipublikasi}`
                buffer = await getBuffer(data.result.thumb)
                lagu = await getBuffer(data.result.mp3)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: mek})
                break
                case 'slap':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!ispublic) return reply(mess.only.public)
                kapankah = body.slice(1)

					const slap =['anjing','babi lu','anak anjing','udah tolol nub Lagi','muka lo kek monyet','udah jomblo sendirian lagi dirumah tolol','so so an mau punya pacar muka aja kek monyet lepass dari kandang','ganteng doang di toxic aja dibilang baperan','pantek kau','bangsat kau','ku entod kalian nangis kau','memek lu semua','lihat anak anjing lagi baca','ganteng doang jemput cewe dipanggang','kamu cantik beb bullshit anjing cowo buaya','anak dajjal','puki lu','anjing ngajak gelud','sama hantu takut cupu ngentod','cupu cupu aja gausah bacot','kontol lu semua','bocah lu semua kontol','3 Hari Lagi']

					const ple = slap[Math.floor(Math.random() * slap.length)]

					pod = await getBuffer(`https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif`)

					client.sendMessage(from, pod, image, { quoted: mek, caption: '*Toxic*\n\n'+ ple })

					break
					case 'tampar':
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					buffer = await getBuffer('https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif', {method: 'get'})
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
                case 'beritahoax':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!ispublic) return reply(mess.only.public)
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Gambar* : ${i.image}\n*Title* : ${i.title}\n*link* : ${i.link}\n*tag* : ${i.tag}\n=================\n`
					}
					reply(teks.trim())
					break
               case 'infogempa':
               if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
               if (!ispublic) return reply(mess.only.public)
                   anu = await fetchJson(`https://tobz-api.herokuapp.com/api/infogempa`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   buffer = await getBuffer(anu.map)
                   reply = ` *potensi* \n ${anu.potensi} *lokasi* \n${anu.lokasi} *magnitude* \n${anu.magnitude} *koordinat* \n${anu.koordinat} *kedalaman* \n${anu.kedalaman}`
                   client.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
                   break
                   case 'hentai':
				    try {
					limitAdd(sender) 
				    isLimit(sender)
					if (!isPremium) return reply(mess.only.premium)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'NIH ANMJIM'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
						reply('❌ *ERROR* ❌')
					}
					break
					case 'shota':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomshota?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Shota!!'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
						reply('❌ *ERROR* ❌')
					}
					break
					case 'randomanime2':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
						res = await fetchJson(`https:/tobz-api.herokuapp.com/api/randomanime?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Cintai nekonime'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
						reply('❌ *ERROR* ❌')
					}
					break
					case 'randomshota':

				    try {

						res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomshota?apikey=BotWeA`)

						buffer = await getBuffer(res.image)

						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'shotaa!!!'})

					} catch (e) {

						console.log(`Error :`, color(e,'red'))

						reply('❌ *ERROR* ❌')

					}

					break
                                        case 'akbargay':
                                    try {
                                    	if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                                    	if (!ispublic) return reply(mess.only.public)
                                                if (!isNsfw) return reply('❌ *NSFW MATI* ❌')
                                                res = await fetchJson(`https://api.vhtear.com/randomhentai?apikey=${vhtear}`)
                                                buffer = await getBuffer(res.result)
                                                client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih gan'})
                                        } catch (e) {
                                                console.log(`Error :`, color(e,'red'))
                                                reply('❌ *ERROR* ❌')
                                        }
                                        break
                case 'infogithub':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!ispublic) return reply(mess.only.public)
                   teks = body.slice(5)
                   anu = await fetchJson(`http://melodicxt.herokuapp.com/api/githubprofile?user=${teks}&apikey=administrator)`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   buffer = await getBuffer(anu.avatar_url)
                   hasil = ` *username* \n ${anu.followers} *following* \n${anu.following} *bio* \n${anu.bio} *public_repos* \n${anu.public_repos} *created_at* \n${anu.created_at} *updated_at* \n${anu.updated_at}`
                   client.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
                   break
                case 'cuaca':
                client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
                if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                data = await fetchJson(`https://rest.farzain.com/api/cuaca.php?id=${body.slice(7)}&apikey=${apikey}`)
                if (data.error) return reply(data.error)
                hasil = `╠➥ Tempat : ${data.respon.tempat}\n╠➥ angin : ${data.respon.angin}\n╠➥ cuaca : ${data.respon.cuaca}\n╠➥ desk : ${data.respon.desk}\n╠➥ kelembapan : ${data.respon.kelembapan}\n╠➥ suhu : ${data.respon.suhu}\n╠➥ udara : ${data.respon.udara}`
                reply(hasil)
                break
                case 'jadwaltvnow':
               client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
                 if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                 data = await fetchJson('https://docs-jojo.herokuapp.com/api/jadwaltvnow')
                hasil = `Jam : ${data.result.jam}\n\n${data.result.jadwalTV}`
                reply (hasil)
                break
                case 'getstatus':
					client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isOwner) return reply(mess.only.ownerB)
					status = await client.getStatus (mek.participant) // leave empty to get your own status
                    console.log("status: " + status)
                    break
                    case 'semoji':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					if (args.length < 1) return reply('emojinya mana um?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = emojiStrip(body.slice(8))
					anu = await fetchJson(`https://mhankbarbar.tech/api/emoji2png?emoji=${teks}`, {method: 'get'})
					if (anu.error) return sendImage(emror, false, anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker)
						fs.unlinkSync(rano)
					})
					break
					case 'setppbot':
				client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
				if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					if (!isOwner) return reply(mess.only.ownerB)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya😗')
					break
                case 'tebakgambar':
                if (!ispublic) return reply(mess.only.public)
if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`https://api.vhtear.com/tebakgambar&apikey=${vhtear}`, {method: 'get'})
					buffer = await getBuffer(anu.result.soalImg)
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, buffer, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					break
                case 'caklontong':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!ispublic) return reply(mess.only.public)
					anu = await fetchJson(`https://api.vhtear.com/funkuis&apikey=${vhtear}`, {method: 'get'})
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban+'\n'+anu.result.desk, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, anu.result.soal, text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					break
				case 'family100':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					anu = await fetchJson(`https://api.vhtear.com/family100&apikey=${vhtear}`, {method: 'get'})
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, anu.result.soal, text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					break
				case 'game':
				if (!ispublic) return reply(mess.only.public)
if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`http://rt-files.000webhostapp.com/tts.php?apikey=rasitech`, {method: 'get'})
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban+'\n'+anu.result.desk, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, anu.result.soal, text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					break
                case 'brainly':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!ispublic) return reply(mess.only.public)
					brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '❉───────────❉\n'
					for (let Y of res.data) {
						teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉───────────❉\n`
					}
					client.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
                        console.log(res)
                    })
					break
                case 'image':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!ispublic) return reply(mess.only.public)
					if (args.length < 1) return reply('Apa yang mau dicari kak?')
					goo = body.slice(7)
					anu = await fetchJson(`https://api.vhtear.com/googleimg?query=${goo}&apikey=${vhtear}`, {method: 'get'})
					reply(mess.wait)
				    var pol = JSON.parse(JSON.stringify(anu.result.result_search));
                    var tes2 =  pol[Math.floor(Math.random() * pol.length)];
					pint = await getBuffer(tes2)
					client.sendMessage(from, pint, image, { caption: '*image*\n\n*Hasil Pencarian : '+goo+'*', quoted: mek })
					break
					case 'animehug':
 
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'bcgc':
 
					if (!isGroup) return reply(mess.only.group)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buffer = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buffer, image, {caption: `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`)
						}
						reply('Sukses broadcast group')
					}
					break
                case 'pokemon':
                    client.updatePresence(from, Presence.composing) 
 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
					 data = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					break
				case 'inu':
				if (!ispublic) return reply(mess.only.public)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`https://scrap.terhambar.com/pin?url=https://id.pinterest.com/pin/588916088754108677/`, {method: 'get'})
					var inu = JSON.parse(JSON.stringify(anu.result));
					var uni =  inu[Math.floor(Math.random() * inu.length)];
					nye = await getBuffer(uni)
					client.sendMessage(from, nye, image, { caption: 'Inu!!', quoted: mek })
					break
				case 'elang':
				if (!ispublic) return reply(mess.only.public)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=elang&apikey=${vhtear}`, {method: 'get'})
					var eln = JSON.parse(JSON.stringify(anu.result));
					var elnn =  eln[Math.floor(Math.random() * eln.length)];
					nye = await getBuffer(elnn)
					client.sendMessage(from, nye, image, { caption: 'elang!!', quoted: mek })
					break
					case 'freepik':
				if (!ispublic) return reply(mess.only.public)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					nimek = body.slice(5)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/freepik?q=${nimek}&apikey=BotWeA`, {method: 'get'})
					var elnn = JSON.parse(JSON.stringify(anu.title));
					var elnnn =  elnn[Math.floor(Math.random() * elnnn.length)];
					nye = await getBuffer(elnnn)
					client.sendMessage(from, nye, image, { caption: 'Ni tod!!', quoted: mek })
					break
				//animefoto
				case 'naruto':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=naruto&apikey=${vhtear}`, {method: 'get'})
					var naru = JSON.parse(JSON.stringify(anu.result));
					var to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					client.sendMessage(from, nye, image, { caption: 'naruto!!', quoted: mek })
					break
				case 'minato':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=minato&apikey=${vhtear}`, {method: 'get'})
					var min = JSON.parse(JSON.stringify(anu.result));
					var ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					client.sendMessage(from, nye, image, { caption: 'minato!!', quoted: mek })
					break
				case 'boruto':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=boruto&apikey=${vhtear}`, {method: 'get'})
					var bor = JSON.parse(JSON.stringify(anu.result));
					var uto =  bor[Math.floor(Math.random() * bor.length)];
					nye = await getBuffer(uto)
					client.sendMessage(from, nye, image, { caption: 'boruto!!', quoted: mek })
					break
					case 'aesthetic':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=aestheticwalpaper&apikey=${vhtear}`, {method: 'get'})
					var bor = JSON.parse(JSON.stringify(anu.result));
					var uto =  bor[Math.floor(Math.random() * bor.length)];
					nye = await getBuffer(uto)
					client.sendMessage(from, nye, image, { caption: 'nih kak!!', quoted: mek })
					break
					case 'animehappy':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=animehappy&apikey=${vhtear}`, {method: 'get'})
					var bor = JSON.parse(JSON.stringify(anu.result));
					var uto =  bor[Math.floor(Math.random() * bor.length)];
					nye = await getBuffer(uto)
					client.sendMessage(from, nye, image, { caption: 'boruto!!', quoted: mek })
					break
					case 'animesad':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=animesad&apikey=${vhtear}`, {method: 'get'})
					var bor = JSON.parse(JSON.stringify(anu.result));
					var uto =  bor[Math.floor(Math.random() * bor.length)];
					nye = await getBuffer(uto)
					client.sendMessage(from, nye, image, { caption: 'darling aishiteru!!', quoted: mek })
					break
				case 'hinata':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=hinata&apikey=${vhtear}`, {method: 'get'})
					var hina = JSON.parse(JSON.stringify(anu.result));
					var ta =  hina[Math.floor(Math.random() * hina.length)];
					nye = await getBuffer(ta)
					client.sendMessage(from, nye, image, { caption: 'hinata!!', quoted: mek })
					break
				case 'sasuke':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=sasuke&apikey=${vhtear}`, {method: 'get'})
					var sasu = JSON.parse(JSON.stringify(anu.result));
					var ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					client.sendMessage(from, nye, image, { caption: 'sasuke!!', quoted: mek })
					break
				case 'sakura':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=sakura&apikey=${vhtear}`, {method: 'get'})
					var sak = JSON.parse(JSON.stringify(anu.result));
					var kura =  sak[Math.floor(Math.random() * sak.length)];
					nye = await getBuffer(kura)
					client.sendMessage(from, nye, image, { caption: 'sakura!!', quoted: mek })
					break
					//animefoto
				case 'unta':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=unta&apikey=${vhtear}`, {method: 'get'})
					var unt1 = JSON.parse(JSON.stringify(anu.result));
					var unt2 =  unt1[Math.floor(Math.random() * unt1.length)];
					nye = await getBuffer(unt2)
					client.sendMessage(from, nye, image, { caption: 'unta!!', quoted: mek })
					break
					//tokyoghoul
				case 'kaneki':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=kaneki&apikey=${vhtear}`, {method: 'get'})
					var kan = JSON.parse(JSON.stringify(anu.result));
					var eki =  kan[Math.floor(Math.random() * kan.length)];
					nye = await getBuffer(eki)
					client.sendMessage(from, nye, image, { caption: 'kaneki!!', quoted: mek })
					break
				case 'toukachan':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=ToukaKirishima&apikey=${vhtear}`, {method: 'get'})
					var tou = JSON.parse(JSON.stringify(anu.result));
					var ka =  tou[Math.floor(Math.random() * tou.length)];
					nye = await getBuffer(ka)
					client.sendMessage(from, nye, image, { caption: 'toukachan!!', quoted: mek })
					break
				case 'rize':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=RizeKamishiro&apikey=${vhtear}`, {method: 'get'})
					var ri = JSON.parse(JSON.stringify(anu.result));
					var ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					client.sendMessage(from, nye, image, { caption: 'rize chan!!', quoted: mek })
					break
				case 'akira':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=akiramado&apikey=${vhtear}`, {method: 'get'})
					var ak = JSON.parse(JSON.stringify(anu.result));
					var ara =  ak[Math.floor(Math.random() * ak.length)];
					nye = await getBuffer(ara)
					client.sendMessage(from, nye, image, { caption: 'akira chan!!', quoted: mek })
					break
				case 'itori':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=itori&apikey=${vhtear}`, {method: 'get'})
					var it = JSON.parse(JSON.stringify(anu.result));
					var ori =  it[Math.floor(Math.random() * it.length)];
					nye = await getBuffer(ori)
					client.sendMessage(from, nye, image, { caption: 'itori chan!!', quoted: mek })
					break
				case 'kurumi':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=kurumitokisakikawai&apikey=${vhtear}`, {method: 'get'})
					var kur = JSON.parse(JSON.stringify(anu.result));
					var imi =  kur[Math.floor(Math.random() * kur.length)];
					nye = await getBuffer(imi)
					client.sendMessage(from, nye, image, { caption: 'kurumi chan!!', quoted: mek })
					break
				case 'miku':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=Nakanomiku&apikey=${vhtear}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					client.sendMessage(from, nye, image, { caption: 'miku chan!!', quoted: mek })
					break
					case 'rem':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=remrezero&apikey=${vhtear}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					client.sendMessage(from, nye, image, { caption: 'rem chan!!', quoted: mek })
					break
					case 'ram':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=ramrezero&apikey=${vhtear}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					client.sendMessage(from, nye, image, { caption: 'ram chan!!', quoted: mek })
					break
					case 'kep':
					if (!isOwner) return
					case 'bokep':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isNsfw) return reply('❌ *Harus Mengaktifkan Mode Nsfw* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=bokep&apikey=${vhtear}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					client.sendMessage(from, nye, image, { caption: 'COLI TERUS!!', quoted: mek })
					break
					case 'pictcewek':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					reply(mess.asik)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=cewekcantik&apikey=${vhtear}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					client.sendMessage(from, nye, image, { caption: 'HALLO KANG HALU!!', quoted: mek })
					break
					case 'pictcowok':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					reply(mess.asik)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=cowokganteng&apikey=${vhtear}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					client.sendMessage(from, nye, image, { caption: 'HALLO KANG HALU!!', quoted: mek })
					break
					case 'con':
					if (!isOwner) return
					case 'pictlolicon':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					reply(mess.asik)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=lolikawai&apikey=${vhtear}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					client.sendMessage(from, nye, image, { caption: 'HALLO ONII CHAN!!', quoted: mek })
					break
					case 'w':
					if (!isOwner) return
					case 'pictwaifu':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					reply(mess.asik)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=waifukawai&apikey=${vhtear}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					client.sendMessage(from, nye, image, { caption: 'OHAYO DARLING!!', quoted: mek })
					break
					case 'testwaifu':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					reply(mess.asik)
					anu = await fetchJson(`http://xptnewapi.xp3.biz/Waifu.php?apikey=xptn3`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					client.sendMessage(from, nye, image, { caption: 'OHAYO DARLING!!', quoted: mek })
					break
					case 'n':
					if (!isOwner) return
					case 'pictneko':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					reply(mess.asik)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=nekoanimekawai&apikey=${vhtear}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					client.sendMessage(from, nye, image, { caption: 'OHAYO ONII CHAN!!', quoted: mek })
					break
					case 'picthewan':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					reply(mess.asik)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=hewanimutlucu&apikey=${vhtear}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					client.sendMessage(from, nye, image, { caption: 'GRRHH', quoted: mek })
					break
					case 'ber':
					if (!isOwner) return
					case 'pictvtuber':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					reply(mess.asik)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=vtuber&apikey=${vhtear}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					client.sendMessage(from, nye, image, { caption: 'OHAYO ONII CHAN!!', quoted: mek })
					break
				//tokyoghoul
				case 'hen':
				if (!isOwner) return
				case 'animehentai':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isNsfw) return reply('❌ *FALSE* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=animehentai&apikey=${vhtear}`, {method: 'get'})
					var hen = JSON.parse(JSON.stringify(anu.result));
					var tai =  hen[Math.floor(Math.random() * hen.length)];
					nye = await getBuffer(tai)
					client.sendMessage(from, nye, image, { caption: 'hentai!!', quoted: mek })
					break
					case 'animehentai':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isNsfw) return reply('❌ *FALSE* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=animehentai&apikey=${vhtear}`, {method: 'get'})
					var hen = JSON.parse(JSON.stringify(anu.result));
					var tai =  hen[Math.floor(Math.random() * hen.length)];
					nye = await getBuffer(tai)
					client.sendMessage(from, nye, image, { caption: 'hentai!!', quoted: mek })
					break
					case 'lo2':
					if (!isOwner) return
				case 'loli2':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isAnime) return reply('❌ *Harus Mengaktifkan Mode Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=loli&apikey=${vhtear}`, {method: 'get'})
					var lol = JSON.parse(JSON.stringify(anu.result));
					var i2 =  lol[Math.floor(Math.random() * lol.length)];
					nye = await getBuffer(i2)
					client.sendMessage(from, nye, image, { caption: 'Oni chan baka!!', quoted: mek })
					break
				case 'anjing':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(mess.wait)
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					break
					case 'pin':
					if (!isOwner) return
                case 'pinterest':
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(11)}`, {method: 'get'})
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*𝐏𝐈𝐍𝐓𝐄𝐑𝐄𝐒𝐓*`})
					break
					case 'teso':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!ispublic) return reply(mess.only.public)
					if (args.length < 1) return reply(mess.search)
					pinte = body.slice(11)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=${pin}&apikey=${vhtear}`, {method: 'get'})
					reply(mess.wait)
					var pin = JSON.parse(JSON.stringify(anu.result));
					var trest =  pin[Math.floor(Math.random() * pin.length)];
					pine = await getBuffer(trest)
					client.sendMessage(from, pine, image, { caption: '*Pinterest*\n\n*Hasil Pencarian : '+pinte+'*', quoted: mek })
					break
					case 'xptn':
                                         
                                        if (!isUser) return reply(mess.only.userB)
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         reply(mess.wait)
                                         owgi = await client.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", owgi)
                                        teks = `${anu.display_url}`
                                        ranp = getRandom('.gif')
                                        rano = getRandom('.webp')
                                        anu1 = `https://some-random-api.ml/animu/wink?avatar=${teks}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                client.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Gunakan foto!')
                                          }
                                             break
					case 'aguse':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!ispublic) return reply(mess.only.public)
					if (args.length < 1) return reply(mess.search)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=hewan&apikey=${vhtear}`, {method: 'get'})
					reply(mess.wait)
					var pin = JSON.parse(JSON.stringify(anu.result));
					var trest =  pin[Math.floor(Math.random() * pin.length)];
					pine = await getBuffer(trest)
					client.sendMessage(from, pine, image, { caption: '*Pinterest*\n\n*Hasil Pencarian : '+pinte+'*', quoted: mek })
					break
					case 'xd':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					if (args.length < 1) return reply(mess.wait)
					pinte = body.slice(11)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/pin?q=${pin}&apikey=xptn352`, {method: 'get'})
					reply(mess.wait)
					var pin = JSON.parse(JSON.stringify(anu.result));
					var trest =  pin[Math.floor(Math.random() * pin.length)];
					pine = await getBuffer(trest)
					client.sendMessage(from, pine, image, { caption: '*Pinterest*\n\n*Hasil Pencarian : '+pinte+'*', quoted: mek })
					break
                case 'resepmasakan':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!ispublic) return reply(mess.only.public)
                   anu = await fetchJson(`https://mnazria.herokuapp.com/api/resep?key=${body.slice(6)}`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   buff = await getBuffer(anu.thumb_item)
                   hasil = `*title* \n ${anu.title} *item_name* \n ${anu.item_name} *ingredient* \n${anu.ingredient} *step* \n${anu.step}`
                   client.sendMessage(from, buff, image, {quoted: mek, caption: hasil})
                   break
                case 'indohot':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!ispublic) return reply(mess.only.public)
                if (!isPremium) return reply(mess.only.premium)
                   anu = await fetchJson(`https://arugaz.herokuapp.com/api/indohot`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   hasil = `*judul* \n${anu.result.judul} *genre* \n${anu.result.genre} *durasi* \n${anu.result.durasi} *url* \n${anu.result.url}`
                   client.sendMessage(from, hasil, text, {quoted: mek,})
                   break
				case 'ytmp4':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
				if (!isPremium) return reply(mess.only.premium)
					if (args.length < 1) return reply('Urlnya mana um?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://mhankbarbar.tech/api/ytv?url=${args[0]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Filesize* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					break
					case 'ig':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
				if (!isPremium) return reply(mess.only.premium)
					if (args.length < 1) return reply('Urlnya mana um?')
					if(!isUrl(args[0]) && !args[0].includes('insta')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://api.zeks.xyz/api/ig?url=${args[0]}&apiKey=apivinz`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.owner}\n*Filesize* : ${anu.caption}`
					thumb = await getBuffer(anu.url)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.url}.mp4`, quoted: mek})
					break
					case 'run':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isOwner) return reply(mess.only.ownerB)
                sy = args.join(' ')
                return eval(sy)
                break
				case 'ban':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					if (!isOwner) return reply(mess.only.ownerB)
					client.banUser (`${body.slice(7)}@c.us`, "add")
					client.sendMessage(from, `anda terkena banned ${body.slice(7)}@c.us`, text)
					break
				case 'tiktok':

				if (isBanned) return reply(mess.only.benned)    

				if (!isUser) return reply(mess.only.userB)

				if (!ispublic) return reply(mess.only.public)

					if (args.length < 1) return reply('Urlnya mana um?')

					if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.Iv)

					reply(mess.wait)

					anu = await fetchJson(`https://ohto-ai.herokuapp.com/tiktok?URL=${args[0]}`, {method: 'get'})

					if (anu.error) return reply(anu.error)

					teks = `*Nama* : ${anu.nameInfo}\n*Title* : ${anu.textInfo}\n*Time* : ${anu.timeInfo}`

					thumb = await getBuffer(anu.image)

					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})

					buffer = await getBuffer(anu.mp4direct)

					client.sendMessage(from, buffer, video, {quoted: mek})

					break
					case 'tiktokwithwm':

				if (isBanned) return reply(mess.only.benned)    

				if (!isUser) return reply(mess.only.userB)

				if (!ispublic) return reply(mess.only.public)

					if (args.length < 1) return reply('Urlnya mana um?')

					if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.Iv)

					reply(mess.wait)

					anu = await fetchJson(`https://api.vhtear.com/tiktokdl?link=${args[0]}&apikey=${vhtear}`, {method: 'get'})

					if (anu.error) return reply(anu.error)

					teks = `*Nama* : ${anu.nameInfo}\n*Title* : ${anu.textInfo}\n*Time* : ${anu.timeInfo}`

					thumb = await getBuffer(anu.image)

					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})

					buffer = await getBuffer(anu.mp4direct)

					client.sendMessage(from, buffer, video, {quoted: mek})

					break
				case 'tiktokstalk':
					try {
						if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
						if (!ispublic) return reply(mess.only.public)
						if (args.length < 1) return client.sendMessage(from, 'Usernamenya mana um?', text, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(mess.wait)
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Kemungkinan username tidak valid')
					}
					break
				case 'nulis':
				case 'tulis':
					client.updatePresence(from, Presence.composing) 
 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (args.length < 1) return reply('Yang mau di tulis apaan?')
					mager = body.slice(7)
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/write?text=${mager}&apikey=${vhtear}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: mess.success})
					break
					case 'k':
					if (!isOwner) return
					case 'kickfast':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!ispublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
				case 'text3d':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
              	    if (args.length < 1) return reply('teksnya mana kak?')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return client.sendMessage(from, 'Teksnya kepanjangan, Maksimal 10 kalimat', text, {quoted: mek})
                    buffer = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${teks}`, {method: 'get'})
                    client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			     	break
			    case 'lovemake':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
              	    if (args.length < 1) return reply('teksnya mana kak?')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return client.sendMessage(from, 'Teksnya kepanjangan, Maksimal 10 kalimat', text, {quoted: mek})
                    buff = await getBuffer(`https://api.vhtear.com/lovemessagetext?text=${teks}&apikey=${vhtear}`, {method: 'get'})
                    client.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
			     	break
			    case 'shorturl':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!ispublic) return reply(mess.only.public)
                    anu = await fetchJson(`https://tobz-api.herokuapp.com/api/shorturl?url=${body.slice(10)}`)
			        hasil = `${anu.result}`
			        reply(hasil)
			        break
			    case 'infonotlp':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!ispublic) return reply(mess.only.public)
                    anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(10)}`)
			        hasil = `*nomor* \n${anu.nomor} *international* \n${anu.international}`
			        reply(hasil)
			        break
			case 'infonomor':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isUser) return reply(mess.only.userB)
                 if (args.length < 1) return reply(`Masukan Nomor\nContoh : ${prefix}infonomor 0812345678`)
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(11)}`)
                if (data.error) return reply(data.error)
                if (data.result) return reply(data.result)
                hasil = `╠➥ internasional : ${data.international}\n╠➥ nomor : ${data.nomor}\n╠➥ operator : ${data.op}`
                reply(hasil)
                break
                case 'wiki':
client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
             if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
             if (args.length < 1) return reply(`Masukan Pertanyaan\nContoh : ${prefix}wiki anjing`)
              data = await fetchJson(`https://mhankbarbar.tech/api/wiki?q=${body.slice(6)}&lang=id&apiKey=${apiKey}`)
              if (data.error) return reply(data.error)
              hasil = `${data.result}`
              reply(hasil)
              break
			    case 'igstalk':
                      
                     if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                     hmm = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/igs?u=${body.slice(9)}`)
                     buffer = await getBuffer(hmm.data.profilehd)
                     hasil = `Fullname : ${hmm.data.fullname}\npengikut : ${hmm.data.follower}\nMengikuti : ${hmm.data.following}\nPrivate : ${hmm.data.private}\nVerified : ${hmm.data.verified}\nbio : ${hmm.data.bio}`
                    client.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
                    break
                    case 'neonime':
					client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/neonime_lastest`, {method: 'get'})
					teks = '################\n'
					for (let i of data.result) {
						teks += `*Title* : ${i.judul}\n*link* : ${i.link}\n*rilis* : ${i.rilis}\n###############\n`
					}
					reply(teks.trim())
					break  
				//lgiproses
				case 'tesss':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					if (args.length < 1) return reply('mau apa om')
					teks = body.slice(7)
					if (teks.length > 8) return reply('Teksnya kepanjangan, maksimal 8 karakter')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/leavest?text=${teks}&apikey=xptnbot352`)
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'tep':
				if (!ispublic) return reply(mess.only.public)
					if (args.length < 1) return reply('mau apa om')
					teks = body.slice(9)
					if (teks.length > 8) return reply('Teksnya kepanjangan, maksimal 8 karakter')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/colortext?text=${teks}&apikey=xptnbot352`)
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				//lgiproses
				case 'infomobil':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Masukan nama mobil!!')
					ige = body.slice(9)
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/infomobil?merk=${ige}&apikey=${vhtear}`, {method: 'get'})
					buffer = await getBuffer(anu.result.image)
					capt = `mobil Ditemukan!!\n\n*➸ title :* ${anu.result.title}\n*➸ harga :* ${anu.result.harga}\n*➸ kekurangan :* ${anu.result.kekurangan}\n*➸ kelebihan :* ${anu.result.kelebihan}`
					client.sendMessage(from, buffer, image, {quoted: mek, caption: capt})
					break
				case 'infomotor':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Masukan nama motor!!')
					ft1 = body.slice(11)
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/infomotor?merk=${ft1}&apikey=${vhtear}`)
					buffer = await getBuffer(anu.result.image)
					cptr = `motor Ditemukan!!\n\n*➸ title :* ${anu.result.title}\n*➸ harga :* ${anu.result.harga}\n*➸ spesifikasi :* ${anu.result.spesifikasi}\n*➸ kekurangan :* ${anu.result.kekurangan}\n*➸ kelebihan :* ${anu.result.kelebihan}`
					client.sendMessage(from, buffer, image, {quoted: mek, caption: cptr})
					break
				case 'moddroid':
			
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=BotWeA`)
			hepi = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*publisher*: ${hepi.publisher}\n*mod info:* ${hepi.mod_info}\n*size*: ${hepi.size}\n*latest version*: ${hepi.latest_version}\n*genre*: ${hepi.genre}\n*link:* ${hepi.link}\n*download*: ${hepi.download}`
			buffer = await getBuffer(hepi.image)
			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			break
			case 'playstore':			
			data = await fetchJson(`https://api.vhtear.com/playstore?query=${body.slice(10)}&apikey=resyasayangg`)
			hupo = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*developer*: ${hupo.developer}\n*developer_id:* ${hupo.developer_id}\n*description*: ${hupo.description}\n*score*: ${hupo.score}\n*full_price*: ${hupo.full_price}\n*price*: ${hupo.price}\n*free*: ${hupo.free}\n*app_id*: ${hupo.app_id}\n*url*: ${hupo.url}`
			client.sendMessage(from, hupo, text, {quoted: mek, caption: `${teks}`})
			break
					case 'nobg':
                                        if (!isUser) return reply(mess.only.userB)
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                        reply(mess.wait)
                                        owgi = await client.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", owgi)
                                        teks = `${anu.display_url}`
                                        ranp = getRandom('.png')
                                        rano = getRandom('.webp')
                                        anu1 = await fetchJson(`https://api.vhtear.com/removebgwithurl?link=${teks}&apikey=${vhtear}`, {method: 'get'})
                                         exec(`wget ${anu1.result.image} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                client.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                         })
                                    
                                          } else {
                                                 reply('Gunakan foto!')
                                          }
                                        break
			    case 'cekjodoh':                    
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!ispublic) return reply(mess.only.public)
                    anu = await fetchJson(`https://arugaz.herokuapp.com/api/jodohku?nama=${quote}&text2=${wm}${body.slice(8)}`)
			        hasil = `Nama : ${anu.nama}\nPasangan : ${anu.pasangan}\n\nPositif : ${anu.positif}\nNegatif : ${anu.negatif}`
			        client.sendMessage(from, anu, text, {quoted: mek, caption: hasil})
			        break
			    case 'fototiktok':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!ispublic) return reply(mess.only.public)
                    gatauda = body.slice(8)
                    anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tiktokpp?user=${body.slice(8)}`)
			        buff = await getBuffer(anu.result)
                    reply(anu.result)
			        break
			    case 'map':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!ispublic) return reply(mess.only.public)
                anu = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
                buffer = await getBuffer(anu.gambar)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: `${body.slice(5)}`})
				break
				case 'url2img':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					tipelist = ['desktop','tablet','mobile']
					if (args.length < 1) return reply('Tipenya apa um?')
					if (!tipelist.includes(args[0])) return reply('Tipe desktop|tablet|mobile')
					if (args.length < 2) return reply('Urlnya mana um?')
					if (!isUrl(args[1])) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/url2image?tipe=${args[0]}&url=${args[1]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
				case 'otagall2':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
				if (!isPremium) return reply(mess.only.premium)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*😘* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
			    case 'kickall':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!ispublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Kamu siapa?')
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*😘* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					client.groupRemove(from, members_id)
					break
			    case 'otagall3':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!ispublic) return reply(mess.only.public)
			if (!isPremium) return reply(mess.only.premium)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
			    case 'kbbi':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!ispublic) return reply(mess.only.public)
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					reply('Menurut Kbbi:\n\n'+anu.result)
					break
				case 'persengay':
				if (!ispublic) return reply(mess.only.public)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`, {method: 'get'})
					reply('Menurut persen gay:\n\n'+anu.desc+anu.persen)
					break
				case 'baper':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/howbucins`, {method: 'get'})
					reply('Jangan Baper Ya:\n\n'+anu.desc)
					break
				break
					case 'grup':
					case 'gc':
					case 'group':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args[0] === 'buka') {
					    reply(`𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐝𝐢𝐭𝐞𝐫𝐢𝐦𝐚, 𝐛𝐞𝐫𝐡𝐚𝐬𝐢𝐥 𝐦𝐞𝐧𝐠𝐮𝐛𝐚𝐡 𝐠𝐫𝐨𝐮𝐩 𝐬𝐞𝐦𝐮𝐚 𝐨𝐫𝐚𝐧𝐠 𝐛𝐢𝐬𝐚 𝐦𝐞𝐧𝐠𝐢𝐫𝐢𝐦 𝐩𝐞𝐬𝐚𝐧`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐝𝐢𝐭𝐞𝐫𝐢𝐦𝐚, 𝐛??𝐫𝐡𝐚𝐬𝐢𝐥 𝐦𝐞𝐧𝐠𝐮𝐛??𝐡 ??𝐫𝐨𝐮𝐩 𝐡𝐚𝐧𝐲𝐚 𝐚𝐝𝐦𝐢𝐧 𝐲𝐚𝐧𝐠 𝐛𝐢𝐬𝐚 𝐦𝐞𝐧𝐠??𝐫𝐢𝐦 𝐩??𝐬𝐚𝐧`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
				case 'alay':
                    client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
                   if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)  
                     data = await fetchJson(`https://arugaz.herokuapp.com/api/bapakfont?kata=${body.slice(6)}`)
                    reply(data.result)
                    break
				case 'artinama':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(6)}`, {method: 'get'})
					reply('Menurut nama:\n\n'+anu.result)
					break
			    case 'otagall':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!ispublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					const lvl = ['4','5','6','7','2','1','2','3']
                const exp = ['4293','930','1729','2837','3410','4864','5995','6295','7405','835','973','10040','2849','9492','7935','8294','4941','3049']
                const vl = lvl[Math.floor(Math.random() * lvl.length)]
                const ex = exp[Math.floor(Math.random() * exp.length)]
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*╠➥ * @${mem.jid.split('@')[0]}\n*╠➥ * XP:` +ex+`\n*╠➥ * User Level :` +vl+`\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
			    case 'tagall':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!ispublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					sew = body.slice(7)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`${sew}\n\n\nTagall by~~ *${pushname2}*\n\n\n\n╔══✪〘 Mention All 〙✪══\n╠➥ *Pesan:* `+teks+`╚═〘 MR KING BOT 〙`, members_id, true)
					break
					case 'jadian':

                    if (!isGroup) return reply( 'perintah ini hanya dapat digunakan di dalam grup')

                    const yui = groupMembers

                    const aku = yui[Math.floor(Math.random() * yui.length)];

                    const kamu = yui[Math.floor(Math.random() * yui.length)];

                    const sapa = `Cieee... @${aku.split(/[@c.us]/g, '')} (💘) @${kamu.split(/[@c.us]/g, '')} baru jadian nih\nBagi pj nya dong`

                   mentions(from, sapa)

                    break
				case 'clearall':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					if (!isOwner) return reply('Kamu siapa?')
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply('Sukses delete all chat :)')
					break
				case 'broadcast':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					if (!isOwner) return reply('Kamu siapa?')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buffer = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buffer, image, {caption: `[ Ini Broadcast ]\n\n${body.slice(10)}`})
						}
						reply('Suksess broadcast')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `${body.slice(10)}\n\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎_*[ Mr King Broadcast ]*_`)
						}
						reply('Suksess broadcast')
					}
					break
					case 'bc':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					if (!isOwner) return reply('𝙡𝙪 𝙨𝙞𝙖𝙥𝙖 𝙩𝙤𝙙?') 
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buffer = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buffer, image,{caption: `${body.slice(4)}\n\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎_*[Mr King Broadcast]`})
						}
						reply('𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `${body.slice(4)}\n\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎_*[Mr King Broadcast]*_`)
						}
						reply('𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ')
					}
					break
				case 'add':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
						setTimeout( () => {
						client.sendMessage(from, 'Hai Kak Selamat Bergabung', text)
						}, 1000) // 1000 = 5s,
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
			    case 'kick':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!ispublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						setTimeout( () => {
						mentions(`otw kick bosku, kita kasi waktu dulu siap bro? : @${mentioned[0].split('@')[0]}`, mentioned, true)
						}, 0) // 100 = 5s,
					setTimeout( () => {
					client.groupRemove(from, mentioned, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 5s,
					setTimeout( () => {
					client.sendMessage(from, 'selamat tinggal ayangkyuuuuu:v_....', text) // ur cods
					}, 20000) // 1000 = 5s,
					setTimeout( () => {
					client.sendMessage(from, '_ucapkan selamat tinggal bro_…', text) // ur cods
					}, 10000) // 1000 = 5s,
					setTimeout( () => {
					client.sendMessage(from, '_hayo bakalan dikick_…', text) // ur cods
					}, 1000) // 1000 = 5s,
					setTimeout( () => {
					client.sendMessage(from, 'siap siap bro', text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 10s,
					}
					break
				case 'edotensei':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, di edotensei :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
						mentions(teks, mentioned, true)
						client.groupAdd(from, [num])
					} else {
						mentions(`Perintah di terima, di edotensei : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
						}
					break
				case 'promote':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, anda menjdi admin :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Perintah di terima, anda menjadi admin : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
				case 'delete':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, hapus pesan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.deleteMessage(from, mentioned)
					} else {
						mentions(`Perintah di terima, hapus pesan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.deleteMessage(from, mentioned)
					}
					break
			    case 'demote':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!ispublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, anda tidak menjadi admin :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Perintah di terima, anda tidak menjadi admin : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'listadmins':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
					case 't':
					if (!isOwner) return
				case 'toimg':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					if (!isQuotedSticker) return reply('❌ reply stickernya um ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi sticker ke gambar ❌')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
						fs.unlinkSync(ran)
					})
					break
				case 'simi':
				limitAdd(sender) 
				isLimit(sender)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					if (args.length < 1) return reply('Textnya mana um?')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://api.xteam.xyz/simsimi?kata=${teks}&APIKEY=xteamapi`, {method: 'get'})
					//if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					break
					case 'z':
                                        if (isLimit(sender)) return reply(ind.limitend(pusname2))
                                        if (isBanned) return reply(mess.only.benned)
                                        if (!isUser) return reply(mess.only.userB)
                                        if (!ispublic) return reply(mess.only.public)
                                        gatauda = body.slice(2)
                    anu = await fetchJson(`https://tobz-api.herokuapp.com/api/simsimi?text=${gatauda}&apikey=BotWeA`, {method: 'get'})
                                        reply(anu.result)
                                        await isLimit(sender)
                                        break
				case 'simih':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('Mode simi sudah aktif')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Sukses mengaktifkan mode simi di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Sukes menonaktifkan mode simi di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
			    case 'nsfw':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			if (!ispublic) return reply(mess.only.public)
			if (!isOwner) return reply('Kamu siapa?')
					if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('Pilih enable atau disable udin!!')
					if (args[0] === 'enable') {
						if (isNsfw) return reply('Mode nsfw sudah aktif')
						nsfw.push(from)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(nsfw))
						reply('Sukses mengaktifkan mode nsfw di group ini ✔️')
					} else if (args[0] === 'disable') {
						nsfw.splice(from, 1)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(nsfw))
						reply('Sukes menonaktifkan mode nsfw di group ini ✔️')
					} else {
						reply('Pilih enable atau disable udin!!')
					}
					break
				case 'anime':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Kamu siapa?')
					if (args.length < 1) return reply('Pilih enable atau disable udin!!')
					if (args[0] === 'enable') {
						if (isAnime) return reply('Mode anime sudah aktif')
						anime.push(from)
						fs.writeFileSync('./src/anime.json', JSON.stringify(anime))
						reply('Sukses mengaktifkan mode anime di group ini ✔️')
					} else if (args[0] === 'disable') {
						anime.splice(from, 1)
						fs.writeFileSync('./src/anime.json', JSON.stringify(anime))
						reply('Sukes menonaktifkan mode anime di group ini ✔️')
					} else {
						reply('Pilih enable atau disable udin!!')
					}
					break
					case 'public':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('HANYA OWNER YANG DAPAT MENGGUNAKAN NYA BAKA')
					if (args.length < 1) return reply('Pilih enable atau disable udin!!')
					if (args[0] === 'enable') {
						if (ispublic) return reply('Sudah Aktif')
						public.push(from)
						fs.writeFileSync('./src/public.json', JSON.stringify(public))
						reply('Sekarang semua anggota dapat mengirim perintah✔️')
					} else if (args[0] === 'disable') {
						public.splice(from, 1)
						fs.writeFileSync('./src/public.json', JSON.stringify(public))
						reply('Sekarang hanya owner dapat mengirim perintah✔️')
					} else {
						reply('Pilih enable atau disable udin!!')
					}
					break
					case 'welcome':
					if (!isGroupAdmins) return reply(mess.only.admin)
				case 'wel':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('Pilih enable atau disable udin!!')
					if (args[0] === 'enable') {
						if (isWelkom) return reply('Udah aktif um')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
					} else if (args[0] === 'disable') {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
					} else {
						reply('Pilih enable atau disable udin!!')
					}
				case 'clone':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Kamu siapa?')
					if (args.length < 1) return reply('Tag target yang ingin di clone')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Gagal om')
					}
					break
				case 'setprefix':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					if (args.length < 1) return
					if (!isPremium) return reply(mess.only.premium)
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`Prefix berhasil di ubah menjadi :「* ${prefix} *」`)
					break
		        //fitur adminbot
		        case 'setpp2':
		if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
		if (!ispublic) return reply(mess.only.public)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isadminbot) return reply('Kamu siapa?')
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    media = await client.downloadAndSaveMediaMessage(mek)
                    await client.updateProfilePicture (from, media)
                    reply('Sukses mengganti icon Grup')
                    break
                case 'bc2':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!ispublic) return reply(mess.only.public)
					if (!isadminbot) return reply('Kamu siapa?')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `[ admin bot Broadcast ]\n\n${body.slice(4)}`})
						}
						reply('Suksess broadcast')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ *admin bot Broadcast* ]\n\n${body.slice(4)}`)
						}
						reply('Suksess broadcast')
					}
					break
					case 'tag2':
					   if (!isOwner) return
				case 'hidetag2':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isPremium) return reply(mess.only.premium)
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					break
					case 'tag5':
					   if (!isOwner) return
					case 'hidetag5':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isPremium) return reply(mess.only.premium)
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
					break
					case 'tag20':
					   if (!isOwner) return
					case 'hidetag20':
					if (!isOwner) return reply(mess.only.ownerB)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isPremium) return reply(mess.only.premium)
					var value = body.slice(10)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
					break
					case 'hidetag50':
					if (!isOwner) return reply(mess.only.ownerB)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isPremium) return reply(mess.only.premium)
					var value = body.slice(10)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
					break
					case 'hidetag300':
					if (!isOwner) return reply(mess.only.ownerB)
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!ispublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isPremium) return reply(mess.only.premium)
					var value = body.slice(11)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	.then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                 .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
	                .then(() => {client.sendMessage(from, options, text)})
					break
					//
					case 'bitly':
               client.updatePresence(from, Presence.composing) 
                 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${args[0]}&apikey=BotWeA`)
                hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
                reply(hasil)
                break
				case 'setpp3':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isfrendsowner) return reply('Kamu siapa?')
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    media = await client.downloadAndSaveMediaMessage(mek)
                    await client.updateProfilePicture (from, media)
                    reply('Sukses mengganti icon Grup')
                    break
                    case 'spamteks':
                    if (!isOwner) return
					spatek = body.trim().split('|')
					for (let i = 0; i < spatek[1]; i++) {
					client.sendMessage(from, `${spatek[2]}`, text)
					}
					break
                    case 'setreply':
               client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					break
					case 'setnomor':
               client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)   
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					tescuy = body.slice(9)
					reply(`nomor berhasil di ubah menjadi : ${tescuy}`)
					break
					case 'grouplist':
					client.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply(mess.only.ownerB)    
					teks = `\`\`\`Ini adalah list group MR KING BOT :\n\n\`\`\``
					no = 0
					for (let hehehe of groupId) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `\n\`\`\`Total grup : ${groupId.length}\`\`\``
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek})
					break
                case 'bc3':
                if (!ispublic) return reply(mess.only.public)
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isfrendsowner) return reply('Kamu siapa?')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `[ admin bot Broadcast ]\n\n${body.slice(4)}`})
						}
						reply('Suksess broadcast')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ *Frends bot Broadcast* ]\n\n${body.slice(4)}`)
						}
						reply('Suksess broadcast')
					}
					break
				case 'hidetag3':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					if (!isGroup) return reply(mess.only.group)
					if (!isfrendsowner) return reply('Kamu siapa?')
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					break
				//frendowner
				case 'addadmin':
                   if (!isOwner) return reply('Perintah ini hanya bisa di gunakan oleh Owner MR KING!', id)
                   i = body.slice(8)
                   adminbotnumber.push(i)
                   fs.writeFileSync('./src/admin.json', JSON.stringify(adminbotnumber))
                   reply('Success Menambahkan Admin MR KING!')
                   break
				case 'wait':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!ispublic) return reply(mess.only.public)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						tutor = await getBuffer(`https://i.ibb.co/Hp1XGbL/a4dec92b8922.jpg`)
						client.sendMessage(from, tutor, image, {quoted: mek, caption: 'nih tutor tod'})
						reply('foto aja')
					}
					break
				    default:
                     if (budy.includes(`assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }
                  if (budy.includes(`Assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }
                  if (budy.includes(`kontol`)) {
                  reply(`toxic anjg bangsat`)
                  }
                  if (budy.includes(`goblok`)) {
                  reply(`bacot anjing di larang toxic anjg`)
                  }
   				  if (body.startsWith(`${prefix}${command}`)) {
                  reply(`Maaf *${pushname2}*, Command *${prefix}${command}* Tidak Terdaftar Di Dalam *${prefix}menu Sayang😘*!`)
                  }
                  if (budy == 'cekprefix') {
                  reply(`* MR KING BOT USING PREFIX [ ${prefix} ]*`)
                  }
                  
   				if (isGroup && isSimi && budy != undefined && body.startsWith(`${prefix} `)) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} 
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
