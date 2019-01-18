#!/usr/bin/env node

const { fetchReadme } = require('..')

async function main() {
  // obtain query
  const argv = require('minimist')(process.argv.slice(2))
  let query = argv._[0]
  if (!query) {
    query = require('fs')
      .readFileSync(0)
      .toString()
  }

  // extract user and repo
  const matched = query.match(/github\.com\/([\w\-]+?)\/([\w\-]+)/)
  if (!matched) return

  // fetch readme
  const readme = await fetchReadme(...matched.slice(1))
  console.log(readme)
}

main().catch(err => console.log(err))
