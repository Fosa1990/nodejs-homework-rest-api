const nodemailer = require('nodemailer');
require('dotenv').config();

const {
  SMTP_META_HOST,
  SECURE_PORT,
  META_EMAIL,
  META_PASSWORD,
  NODEMAILER_META_EMAIL,
  NODEMAILER_GMAIL_EMAIL,
} = process.env;

const config = {
  host: SMTP_META_HOST, //"smtp.meta.ua"
  port: SECURE_PORT, // 25, 465, 2525 - secure, another - insecure
  secure: true, // 465 - true, another all - false
  auth: {
    user: META_EMAIL,
    pass: META_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(config);
const emailOptions = {
  from: NODEMAILER_META_EMAIL,
  to: NODEMAILER_GMAIL_EMAIL,
  subject: 'Sending with Nodemailer is Fun',
  text: 'and easy to do anywhere, even with Node.js',
};

transporter
  .sendMail(emailOptions)
  .then(info => console.log(info))
  .catch(err => console.log(err));

// start test: node my_tests/nodemailer/nodemailer.js
// Works! Error: Message failed: 550 Suspicion of spam
