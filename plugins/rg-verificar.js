import db from '../lib/database.js'
import fs from 'fs'
import PhoneNumber from 'awesome-phonenumber'
import { createHash } from 'crypto'  
import fetch from 'node-fetch'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { conn, text, usedPrefix, command }) {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let mentionedJid = [who]
  let pp = await conn.profilePictureUrl(who, 'image').catch((_) => 'https://cdn.russellxz.click/7938403b.jpeg')
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)

  if (user.registered === true) return m.reply(`『✦』Ya estás registrado.\n\n*¿Quiere volver a registrarse?*\n\nUse este comando para eliminar su registro.\n*${usedPrefix}unreg*`)
  if (!Reg.test(text)) return m.reply(`『✦』Formato incorrecto.\n\nUso del comando: *${usedPrefix + command} nombre.edad*\nEjemplo : *${usedPrefix + command} ${name2}.18*`)

  let [_, name, splitter, age] = text.match(Reg)
  if (!name) return m.reply(`『✦』El nombre no puede estar vacío.`)
  if (!age) return m.reply(`『✦』La edad no puede estar vacía.`)
  if (name.length >= 100) return m.reply(`『✦』El nombre es demasiado largo.`)

  age = parseInt(age)
  if (age > 1000) return m.reply(`『✦』Wow el abuelo quiere jugar al bot.`)
  if (age < 5) return m.reply(`『✦』hay un abuelo bebé jsjsj.`)

  user.name = name + '✓'.trim()
  user.age = age
  user.regTime = +new Date()      
  user.registered = true
  global.db.data.users[m.sender].coin += 40
  global.db.data.users[m.sender].exp += 300
  global.db.data.users[m.sender].joincount += 20

  let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 20)

  // 🎁 Mensaje decorado para el usuario
  let regbot = `
╭━━━━〔 *✦ REGISTRO EXITOSO ✦* 〕━━━━╮
│ ✦ 𝐍𝐨𝐦𝐛𝐫𝐞 » ${name}
│ ✦ 𝐄𝐝𝐚𝐝 » ${age} años
│
│ 🎁 𝗥𝗲𝗰𝗼𝗺𝗽𝗲𝗻𝘀𝗮𝘀:
│ ✦ 🪙 Monedas » 40
│ ✦ ⭐ Experiencia » 300
│ ✦ 🧧 Tokens » 20
│
│ ✦ ID de usuario: ${sn}
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯`.trim();

  // 🎁 Mensaje decorado para el canal
  let regCanal = `
╭━━〔 *📩 NUEVO REGISTRO DETECTADO* 〕━━╮
│ ✦ Nombre » ${name}
│ ✦ Edad » ${age} años
│ ✦ ID » ${sn}
│ ✦ Número » wa.me/${m.sender.split('@')[0]}
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯`.trim();

  // ✅ Reacciona
  await m.react('✅')

  // ✅ Envía al usuario su confirmación
  await conn.sendMessage(m.chat, {
    text: regbot,
    contextInfo: {
      externalAdReply: {
        title: '𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐕𝐄𝐑𝐈𝐅𝐈𝐂𝐀𝐃𝐎',
        body: '¡Gracias por registrarte!',
        thumbnailUrl: pp,
        sourceUrl: 'https://whatsapp.com/channel/0029VauhV0E0QeafF9ikAB1G',
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m });

  // ✅ Envía el registro al canal decorado
  await conn.sendMessage('120363341909397115@newsletter', {
    text: regCanal
  })
}; 

handler.help = ['reg']
handler.tags = ['rg']
handler.command = ['verify', 'verificar', 'reg', 'register', 'registrar'] 

export default handler
