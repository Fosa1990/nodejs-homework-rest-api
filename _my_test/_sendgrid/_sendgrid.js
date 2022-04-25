const sendgridMail = require('@sendgrid/mail');
require('dotenv').config();

const { SENDGRID_API_KEY_1, SENDGRID_META_EMAIL } = process.env;

sendgridMail.setApiKey(SENDGRID_API_KEY_1);

const message = {
  from: SENDGRID_META_EMAIL,
  to: 'test@gmail.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

sendgridMail
  .send(message)
  .then(() => console.log('Email sent!'))
  .catch(error => console.log(error.message));

// module.exports = sendgridMail;
// test start: node my_tests/sendgrid/sendgrid.js
