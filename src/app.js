const express = require('express');
const { port } = require('./config/config');
const { emailsRouter } = require('./routes/emails.router');
const { messagingRouter } = require('./routes/messaging.router');

const app = express();



/** routes */
app.use('/api/email', emailsRouter)
app.use('/api/message', messagingRouter)


app.listen(port, ()=>console.log(`server up and running on port ${port}`))