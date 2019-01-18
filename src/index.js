const fetch = require('node-fetch')

async function fetchReadme(user, repo) {
  const res = await fetch(`https://api.github.com/repos/${user}/${repo}/readme`)
  const payload = JSON.parse(await res.text())
  if (res.status !== 200) {
    throw new Error(`failed to fetch readme: ${res.status}. ${payload.message}`)
  }
  return new Buffer.from(payload.content, 'base64').toString()
}

module.exports = {
  fetchReadme,
}
