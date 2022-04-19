const nodemailer = require('nodemailer');

const config = {
  host: process.env.SMTP_META_HOST, //smtp.meta.ua
  port: process.env.SECURE_PORT, // 465
  secure: true,
  auth: {
    user: process.env.META_EMAIL,
    pass: process.env.META_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(config);
const emailOptions = {
  from: process.env.META_EMAIL,
  to: process.env.GMAIL_EMAIL,
  subject: 'Sending with Nodemailer is Fun',
  text: 'and easy to do anywhere, even with Node.js',
};

transporter
  .sendMail(emailOptions)
  .then(info => console.log(info))
  .catch(err => console.log(err));

// test nodemailer
// module.exports = transporter;
