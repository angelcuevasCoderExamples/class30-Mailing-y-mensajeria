const dotenv = require('dotenv');

dotenv.config(); 

module.exports = {
    port: process.env.PORT,
    mailing: {
        service: process.env.MAIL_SERVICE,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_AUTH_USER, 
            pass: process.env.MAIL_AUTH_PASS
        }
    },
    messaging: {
        accountSID: process.env.TWILIO_ACCOUNT_SID,
        authToken: process.env.TWILIO_AUTH_TOKEN,
        number: process.env.TWILIO_NUMBER,
    }
}