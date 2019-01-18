const assert = require('assert')
const nock = require('nock')

const lib = require('../src')

describe('fetchReadme', () => {
  it('returns readme text', async () => {
    const readme = await lib.fetchReadme('uetchy', 'Polyglot')
    assert.ok(readme.includes('Safari extension'))
  })

  it('returns error', async () => {
    assert.rejects(lib.fetchReadme('uetchy', 'Notfound'))
  })
})
