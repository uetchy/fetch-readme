const nock = require('nock')

nock.disableNetConnect()

nock('https://api.github.com')
  .get('/repos/uetchy/Polyglot/readme')
  .reply(200, {
    name: 'README.md',
    path: 'README.md',
    sha: 'a96d0b49ee0c11dcd322a29d1fdc79dc8ad76e8b',
    size: 1604,
    url:
      'https://api.github.com/repos/uetchy/Polyglot/contents/README.md?ref=master',
    html_url: 'https://github.com/uetchy/Polyglot/blob/master/README.md',
    git_url:
      'https://api.github.com/repos/uetchy/Polyglot/git/blobs/a96d0b49ee0c11dcd322a29d1fdc79dc8ad76e8b',
    download_url:
      'https://raw.githubusercontent.com/uetchy/Polyglot/master/README.md',
    type: 'file',
    content:
      'IVtdKGh0dHA6Ly91ZWNoaS1wdWJsaWMuczMuYW1hem9uYXdzLmNvbS9naXRo\ndWIvUG9seWdsb3QvaGVhZGVyLnBuZykKClshW0pvaW4gdGhlIGNvbW11bml0\neSBvbiBTcGVjdHJ1bV0oaHR0cHM6Ly93aXRoc3BlY3RydW0uZ2l0aHViLmlv\nL2JhZGdlL2JhZGdlLnN2ZyldKGh0dHBzOi8vc3BlY3RydW0uY2hhdC9wb2x5\nZ2xvdCkKClBvbHlnbG90IGlzIGEgU2FmYXJpIGV4dGVuc2lvbiB0aGF0IHRy\nYW5zbGF0ZXMgc2VsZWN0ZWQgdGV4dCBpbnRvIHlvdXIgbmF0aXZlCmxhbmd1\nYWdlIHVzaW5nIEdvb2dsZSBUcmFuc2xhdGUuCgpbRG93bmxvYWQgbGF0ZXN0\nIHZlcnNpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS91ZXRjaHkvUG9seWdsb3Qv\ncmVsZWFzZXMvbGF0ZXN0KQphbmQgZG91YmxlLWNsaWNrIGBQb2x5Z2xvdC5z\nYWZhcmlleHR6YCB0byBpbnN0YWxsIGV4dGVuc2lvbi4KCiMgVXNhZ2UKClZp\nc2l0IHRoZSBleHRlbnNpb24gc2V0dGluZ3MgZnJvbSBTYWZhcmkgUHJlZmVy\nZW5jZXMgYW5kIGNoYW5nZSB0aGUgdGFyZ2V0Cmxhbmd1YWdlIHRvIG9uZSB5\nb3UgcHJlZmVyIGFuZCByZWNvbmZpZ3VyZSBrZXlib2FyZCBzaG9ydGN1dHMg\nYXMgeW91IHdpc2guCgotIFNlbGVjdCB3b3JkIG9yIHNlbnRlbmNlIGFuZCBy\naWdodC1jbGljayB0aGVuIGNsaWNrICoqVHJhbnNsYXRlKiouCi0gb3IsIFNl\nbGVjdCB3b3JkIG9yIHNlbnRlbmNlIGFuZCBqdXN0IHR5cGUgdGhlIGNvbmZp\nZ3VyZWQga2V5IGNvbWJpbmF0aW9uLgotIG9yLCBTZWxlY3Qgd29yZCBvciBz\nZW50ZW5jZSBhbmQgY2xpY2sgKipUcmFuc2xhdGUqKiBidXR0b24gb24gdG9v\nbCBiYXIuCgohW10oaHR0cDovL3VlY2hpLXB1YmxpYy5zMy5hbWF6b25hd3Mu\nY29tL2dpdGh1Yi9Qb2x5Z2xvdC9zY3JlZW5jYXN0MS5naWYpCgojIFRyb3Vi\nbGVzaG9vdGluZwoKIyMjIyBJdCBzZWVtcyBhIG5ldyBzZXR0aW5ncyBoYXZl\nIG5vdCBiZWVuIGFwcGxpZWQuCgpSZWZyZXNoIHdlYiBwYWdlcyBvciByZXN0\nYXJ0IFNhZmFyaSBhbmQgdHJ5IGl0IGFnYWluLiBJZiB5b3UgY29udGludWUg\ndG8gZmFjZQpzYW1lIHByb2JsZW0sIHBsZWFzZSBvcGVuIGFuIGlzc3VlIG9u\nIEdpdEh1Yi4KCiMjIyMgTXkga2V5IGNvbWJpbmF0aW9uIGRpZG4ndCB3b3Jr\nCgpTb21lIGtleSBjb21iaW5hdGlvbnMgYXJlIHByZWJsZW1hdGljLiBUcnkg\nYW5vdGhlciBvbmUuCgojIERldmVsb3BtZW50CgpJbnN0YWxsIG5wbSBkZXBl\nbmRlbmNpZXMuCgpgYGAKbnBtIGluc3RhbGwKbnBtIHN0YXJ0CmBgYAoKdGhl\nbiBvcGVuIHVwIGBEZXZlbG9wZXIgPiBFeHRlbnRpb24gQnVpbGRlcmAgaW4g\nU2FmYXJpIGFuZCBhZGQgdGhlIGZvbGRlciBuYW1lZCBgUG9seWdsb3Quc2Fm\nYXJpZXh0ZW50aW9uYCB0byB0aGUgYnVpbGRlciBwYW5lbCBhbmQgcHJlc3Mg\nYEluc3RhbGxgIGJ1dHRvbi4KCklmIHlvdSBtYWRlIGFueSBjaGFuZ2VzLCBw\ncmVzcyBgUmVsb2FkYCB0byByZWZyZXNoIHRoZSBleHRlbnRpb24uCgojIENv\nbnRyaWJ1dG9ycwoKTGlzdCBvZiB0aGUgY29udHJpYnV0b3JzLCBnZW5lcmF0\nZWQgYnkgYGdpdCBzaG9ydGxvZyAtcyAtbmAuCgogICAgODQgIFlhc3Vha2kg\nVWVjaGkKICAgICA3ICBTZXJnZXkgU29yb2tpbgo=\n',
    encoding: 'base64',
    _links: {
      self:
        'https://api.github.com/repos/uetchy/Polyglot/contents/README.md?ref=master',
      git:
        'https://api.github.com/repos/uetchy/Polyglot/git/blobs/a96d0b49ee0c11dcd322a29d1fdc79dc8ad76e8b',
      html: 'https://github.com/uetchy/Polyglot/blob/master/README.md',
    },
  })
  .get(() => true)
  .reply(404, {
    message: 'Not Found',
    documentation_url:
      'https://developer.github.com/v3/repos/contents/#get-the-readme',
  })
