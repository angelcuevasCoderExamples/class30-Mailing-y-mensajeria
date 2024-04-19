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
    }
}