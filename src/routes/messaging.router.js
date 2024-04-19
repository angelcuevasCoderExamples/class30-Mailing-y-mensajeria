const express = require('express');
const router = express.Router();
const twilio = require('twilio');
const { messaging } = require('../config/config');

const client = twilio(messaging.accountSID, messaging.authToken);


//en código de pais reemplazar el caracter + por %2b si es necesario
router.get('/send', async (req, res)=>{
    const {number} = req.query;
    try {
        await client.messages.create({
            from: messaging.number,
            to: number,
            body: `This is a test message using Twilio`
        })
        console.log("success")
        res.send('Message sent succesfuly!!')
    } catch (error) {
        res.status(500).send({status:'error', error: error.message})
    }
})

module.exports = {
    messagingRouter : router
}
 