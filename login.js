const telegram = require('./init')


const config = {
    // NOTE: if you FORK the project you MUST use your APP ID.
    // Otherwise YOUR APPLICATION WILL BE BLOCKED BY TELEGRAM
    // You can obtain your own APP ID for your application here: https://my.telegram.org
    id: 10188821,
    hash: '69de7a6687e20f7ff64c354ced118237'
}

var phoneCodehash;
const login = async (phone, code) => {
    try {
       
        const { phone_code_hash } = await telegram('auth.sendCode', {
            phone_number: phone,
            current_number: false,
            api_id: config.id,
            api_hash: config.hash
        })
        const res = await telegram('auth.signIn', {
            phone_number: phone,
            phone_code_hash,
            phone_code: code
        })
        const { user } = res
        const {
            first_name = '',
            username = ''
        } = user
        console.log('signIn', first_name, username, user.phone)
        return first_name
    } catch (error) {
        console.error(error)
    }
}

const sendCode = async (phone) => {
    try {

        const {phone_code_hash} = await telegram('auth.sendCode', {
            phone_number: phone,
            current_number: false,
            api_id: config.id,
            api_hash: config.hash
        })

        phoneCodehash = phone_code_hash;
        // console.log("sendCode result: ", result);
        console.log("sendCode phoneCodehash: ", phoneCodehash, phone_code);
        return phone_code_hash
    } catch (error) {
        console.error(error)
    }
}

const signIn = async (phone, code) => {
    try {
        console.log("signIn phone: ", phone);
        console.log("signIn code: ", code);
        console.log("signIn phoneCodehash: ", phoneCodehash);
        const res = await telegram('auth.signIn', {
            phone_code: code,
            phone_number: phone,
            phone_code_hash: phoneCodehash,
        })

        console.log('\n Logined as user')
        console.dir(res.user, { colors: true })
        t.ok(res, 'result is ok')
        return first_name
    } catch (error) {
        console.error(JSON.stringify(error))
    }
}


module.exports = { login, sendCode, signIn }