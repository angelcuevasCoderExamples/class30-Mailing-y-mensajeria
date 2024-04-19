const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const fs = require('fs');
const { mailing } = require('../config/config');

const transport = nodemailer.createTransport({
    service: mailing.service,
    port: mailing.port,
    auth:{ // alternativa=> auth: mailing.auth
        user: mailing.auth.user,
        pass: mailing.auth.pass
    }
})


router.get('/simple-mail', async (req, res)=>{
    const destination  = req.query.destination;
    try {
        await transport.sendMail({
            from: `Coder test <${mailing.auth.user}>`,
            to: destination,
            subject: `test email`,
            html: `
                <h1>This is a test email with 2 attachments</h1>
            `
        })
        res.send('Mail sent successfuly')
    } catch (error) {
        res.status(500).send({status:'error', error: error.message})
    }
})
router.get('/mail-with-image', async (req, res)=>{
    const destination  = req.query.destination;
    try {
        await transport.sendMail({
            from: `Coder test <${mailing.auth.user}>`,
            to: destination,
            subject: `test email`,
            html: `
                <h1>this is test email</h1>
                    <img src="https://i.pinimg.com/originals/a3/76/c3/a376c3e6ca7dd5784a57c6983b55143b.jpg" />
                
            `,
            attachments:[{
                filename: 'image.jpg',
                path: 'https://i.pinimg.com/originals/a3/76/c3/a376c3e6ca7dd5784a57c6983b55143b.jpg'
            },{
                filename: 'fromDisk.png',
                path: 'A:\\PO.png' 
            }]

        })
        res.send('Mail sent successfuly')
    } catch (error) {
        res.status(500).send({status:'error', error: error.message})
    }
})
router.get('/mail-from-file', async (req, res)=>{
    const destination  = req.query.destination;
    try {
        await transport.sendMail({
            from: `Coder test <${mailing.auth.user}>`,
            to: destination,
            subject: `test email`,
            html: fs.readFileSync(`${__dirname}/testEmail.html`, 'utf-8'),
        })
        res.send('Mail sent successfuly')
    } catch (error) {
        res.status(500).send({status:'error', error: error.message})
    }
})
router.get('/greeting-mail', async (req, res)=>{
    const destination  = req.query.destination;
    const name = req.query.name; 
    try {
        await transport.sendMail({
            from: `Coder test <${mailing.auth.user}>`,
            to: destination,
            subject: `test email`,
            html: `
                <h1> greetings from ${name} </h1>
            `
        })
        res.send('Mail sent successfuly')
    } catch (error) {
        res.status(500).send({status:'error', error: error.message})
    }
})



module.exports = {
    emailsRouter: router
}; 