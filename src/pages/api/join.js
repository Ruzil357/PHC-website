import { validPathwaysEmail } from '../../utils/verifyEmail'
import emailClient from '../../utils/emailClient'
import axios from 'axios'

const handler = async (req, res) => {
  const email = req.body.email
  if (!email) {
    return res.status(400).send({ msg: 'No email provided' })
  }

  const isValid = validPathwaysEmail(email)
  if (!isValid) {
    return res.status(400).send({ msg: 'Invalid Email Provided' })
  }

  let resp

  try {
    const channel = process.env.DISCORD_CHANNEL
    const token = process.env.DISCORD_TOKEN
    resp = await axios.post(
      `https://discordapp.com/api/v6/channels/${channel}/invites`,
      {
        max_age: 172800, // 48 hours in seconds
        max_uses: 1,
        unique: true,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bot ${token}`,
        },
      }
    )
  } catch (e) {
    console.error(e)
    console.log('Discord issue')
    return res.status(500).send('Internal Server Error')
  }

  const { code } = resp.data
  const url = `https://discord.gg/${code}`

  await emailClient.sendMail(
    {
      from: process.env.EMAIL_ADDRESS,
      to: email,
      subject: 'PSN Hack Club - Discord Invite',
      html: `<div style="width: 100%; border-radius: 1em; background-color: white !important"><p style="font-size: 2rem; margin-bottom:0.5rem; font-weight: 800">Welcome to the club!</p><p>You're receiving this email because your email was used to sign up for the PSN Hack Club!</p><p>Join the discord server by clicking <a href="${url}" target="_blank">this link</a>! The invite will expire in 48 hours.</p><p>If that did not work, please use the link below.</p><a href="${url}">${url}</a> <br/> <p>PSN Hack Club</p></div>`,
    },
    (err, info) => {
      if (err) console.log(err)
      else console.log(info)
    }
  )

  return res.status(200).send()
}

export default handler
