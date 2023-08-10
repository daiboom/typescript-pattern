class JWT {
  private async generator() {}
}

const header = {
  alg: 'HS256',
  typ: 'JWT',
}

const payload = {
  sub: '1234567890',
  name: 'John Doe',
  admin: true,
}

const secret = 'daiboom0125'

async function HMAC(key, message) {
  console.log('key:', key)
  const g = (str) =>
      new Uint8Array(
        [...unescape(encodeURIComponent(str))].map((c) => c.charCodeAt(0))
      ),
    k = g(key),
    m = g(message),
    c = await crypto.subtle.importKey(
      'raw',
      k,
      { name: 'HMAC', hash: 'SHA-256' },
      true,
      ['sign']
    ),
    s = await crypto.subtle.sign('HMAC', c, m)
  return btoa(String.fromCharCode(...new Uint8Array(s)))
}

HMAC(
  Buffer.from(JSON.stringify(header)).toString('base64') +
    '.' +
    Buffer.from(JSON.stringify(payload)).toString('base64'),
  secret
).then((result) => {
  console.log(result)
})
