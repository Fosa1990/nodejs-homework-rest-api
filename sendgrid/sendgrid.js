const sendgridMail = require('@sendgrid/mail');
sendgridMail.setApiKey(process.env.SENDGRID_API_KEY);

const message = {
  to: process.env.GMAIL_EMAIL,
  from: process.env.META_EMAIL,
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

sendgridMail
  .seng(message)
  .then(() => console.log('Email sent!'))
  .catch(() => console.error);

// test sendgrid
// module.exports = sendgridMail;
