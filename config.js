
import MTProto from 'telegram-mtproto'

const phone = {
  num : '+959420766384',
  code: '22222'
}

const api = {
  layer          : 57,
  initConnection : 0x69796de9,
  api_id         : 10188821
}

const server = {
  dev: true //We will connect to the test server.
}           //Any empty configurations fields can just not be specified

const client = MTProto({ server, api })

async function connect(){
  const { phone_code_hash } = await client('auth.sendCode', {
    phone_number  : phone.num,
    current_number: false,
    api_id        : 49631,
    api_hash      : '69de7a6687e20f7ff64c354ced118237'
  })
  const { user } = await client('auth.signIn', {
    phone_number   : phone.num,
    phone_code_hash: phone_code_hash,
    phone_code     : phone.code
  })

  console.log('signed as ', user)
}

connect()