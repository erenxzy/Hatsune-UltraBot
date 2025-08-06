import speed from 'performance-now'
import { exec } from 'child_process'

let handler = async (m, { conn }) => {
  let timestamp = speed()
  let sentMsg = await conn.reply(m.chat, '💠 Calculando la energía Miku... 💠\n⏳ Espera un momento...', m)
  let latency = speed() - timestamp

  exec(`neofetch --stdout`, (error, stdout, stderr) => {
    let child = stdout.toString("utf-8");
    let ssd = child.replace(/Memory:/, "🌈 Ram:");

    // 🎀 Encabezados temáticos aleatorios (30)
    const encabezados = [
      '💙 𝓜𝓲𝓴𝓾 𝓟𝓲𝓷𝓰 𝓢𝓮𝓷𝓼𝓸𝓻 💙',
      '🎧 𝘏𝘢𝘵𝘴𝘶𝘯𝘦 𝘗𝘪𝘯𝘨 𝘚𝘺𝘴𝘵𝘦𝘮 🎧',
      '✨ Miku está midiendo tu velocidad ✨',
      '🔹 Vocaloid Ping Machine 🔹',
      '🌸 Pink Latency! 🌸',
      '💫 Latido digital de Miku 💫',
      '🎶 Respuesta Vocaloid 🎶',
      '🎀 Ping estilo Idol 🎀',
      '🪐 Ecos de Hatsune 🪐',
      '📡 Miku Connection 📡',
      '🧁 Ping dulce y suave 🧁',
      '☁️ Medidor de cielo azul ☁️',
      '🌈 Banda ancha de colores 🌈',
      '🌀 Girando en bytes con Miku 🌀',
      '📀 Audio Ping Analyzer 📀',
      '🍡 Dango Ping 🍡',
      '🩷 Análisis digital rosado 🩷',
      '🎼 Miku Midori Scanner 🎼',
      '🌺 Vocal Beat Ping 🌺',
      '🦋 Ping Etéreo Miku 🦋',
      '🧃 Juguito de velocidad 🧃',
      '📈 Medición exacta al estilo Miku 📈',
      '🎙️ Ping con armónicos 🎙️',
      '🧠 Modo diagnóstico Miku 🧠',
      '💾 Bits saltando felices 💾',
      '🍬 Caramelo de latencia 🍬',
      '🔊 Ping ultra claro 🔊',
      '🎤 Eco Vocaloid 🎤',
      '🔮 Cristal de ping 🔮',
      '💖 Latencia mágica 💖'
    ]

    // 💠 Bordes decorativos aleatorios (30)
    const bordes = [
      ['╭─🌟──────────────────────────🌟─╮', '╰─🌟──────────────────────────🌟─╯'],
      ['╭═══💙═══⊹⊱✿⊰⊹═══💙═══╮', '╰═══💙═══⊹⊱✿⊰⊹═══💙═══╯'],
      ['╔═════🎧═════╗', '╚═════🎧═════╝'],
      ['╭━━━✧🎀✧━━━╮', '╰━━━✧🎀✧━━━╯'],
      ['╔─────❀─────╗', '╚─────❀─────╝'],
      ['★彡━━━━━🪐━━━━━彡★', '★彡━━━━━━━━━━━━━━彡★'],
      ['╭───────────────╮', '╰───────────────╯'],
      ['🌀════════════════════🌀', '🌀════════════════════🌀'],
      ['╭🌈━━━⊰✿⊱━━━🌈╮', '╰🌈━━━⊰✿⊱━━━🌈╯'],
      ['✦══════⊹⊱✿⊰⊹══════✦', '✦════════════════════✦'],
      ['✿━☆ﾟ.*･｡ﾟ────────────', '────────────ﾟ｡･*.ﾟ☆━✿'],
      ['╭━━━━━━♡♡♡━━━━━━╮', '╰━━━━━━♡♡♡━━━━━━╯'],
      ['🌸･*:.｡.✿.｡.:*･🌸', '🌸･*:.｡.✿.｡.:*･🌸'],
      ['╔═══🌺═══╗', '╚═══🌺═══╝'],
      ['🩷═───────═🩷', '🩷═───────═🩷'],
      ['╭━━━🔷━━━╮', '╰━━━🔷━━━╯'],
      ['🍡━━═━═━═━━🍡', '🍡━━═━═━═━━🍡'],
      ['╭🌼──────────────╮', '╰──────────────🌼╯'],
      ['╭═══════📀═══════╮', '╰═══════📀═══════╯'],
      ['🎵⋆｡˚☁︎˚｡⋆｡', '｡⋆˚☁︎˚｡⋆🎵'],
      ['╔═════🔊═════╗', '╚═════🔊═════╝'],
      ['╭➤🎙️━━━🎧➤', '╰➤🎧━━━🎙️➤'],
      ['╭━━⭑｡˚☽˚｡⭑━━╮', '╰━━⭑｡˚☾˚｡⭑━━╯'],
      ['┌─────⊱♡⊰─────┐', '└─────⊱♡⊰─────┘'],
      ['🌼━━━☆ﾟ.*･｡ﾟ━━━🌼', '🌼━━━☆ﾟ.*･｡ﾟ━━━🌼'],
      ['╭─➤🌸━━🌟━━🌸➤─╮', '╰─➤🌸━━🌟━━🌸➤─╯'],
      ['╭⊰💠⊱───⊰💠⊱╮', '╰⊰💠⊱───⊰💠⊱╯'],
      ['╭🌟🌟🌟╮', '╰🌟🌟🌟╯'],
      ['🌈━━━━━━━━━━━━━━🌈', '🌈━━━━━━━━━━━━━━🌈'],
      ['╭🌺───Ping Time───🌺╮', '╰🌺─────────────────🌺╯'],
    ]

    let header = encabezados[Math.floor(Math.random() * encabezados.length)]
    let borde = bordes[Math.floor(Math.random() * bordes.length)]

    let result = `
${borde[0]}
💫 ${header} 💫

📶 *¡Pong recibido!*
🔹 *Tiempo de respuesta:* ${latency.toFixed(4).split(".")[0]}ms

${ssd}
${borde[1]}
`.trim()

    conn.sendMessage(m.chat, { text: result, edit: sentMsg.key }, { quoted: m })
  })
}

handler.help = ['ping']
handler.tags = ['info']
handler.command = ['ping', 'p']

export default handler
