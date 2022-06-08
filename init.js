const { MTProto } = require('./node_modules/telegram-mtproto/lib')

const api = {
  invokeWithLayer: 0xda9b0d0d,
  layer          : 57,
  initConnection : 0x69796de9,
  api_id         : 10188821,
  app_version    : '1.0.1',
  lang_code      : 'en'
}

const server = { webogram: false, dev: false }

const telegram = MTProto({ api, server })

module.exports = telegram