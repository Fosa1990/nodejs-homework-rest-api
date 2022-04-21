const { randomUUID } = require('crypto');
const { Conflict } = require('http-errors');
const { User } = require('../../models');
const {
  HTTP_STATUS_CODE,
  STATUS,
  PORT,
} = require('../../helpers/constants.js');
const { sendEmail } = require('../../service/sendEmail');

const signup = async (req, res) => {
  const { name, email, password, subscription } = req.body;

  const userExist = await User.findOne({ email });
  if (userExist) {
    throw new Conflict(`User with ${email} already exist`);
  }

  const verificationToken = randomUUID();

  const newUser = new User({
    name,
    email,
    subscription,
    verificationToken,
  });
  newUser.verifyUser(false);
  newUser.verifyToken(verificationToken);
  newUser.setAvatar();
  newUser.setHashPassword(password);
  await newUser.save();

  const htmlTemplate = `
  <h1>Hi ${newUser.name}!</h1>
  <p>You need to confirm your email to access the contact service.</p>
  <br/>
  <p>If you have any questions/issues regarding the process, feel free to <a target="_blank" rel="noopener noreferrer" href="mailto:fosa1990@meta.ua">contact me.</a></p>
  <br/>
  <p>To verify your email: <b>${newUser.email}</b> <a target="_blank" href="http://localhost:${PORT}/api/users/verify/${newUser.verificationToken}">Click here</a>. Thank you :)</p>
  <br/>
  <p>Glad to see you on my:&nbsp;
  <a target="_blank" rel="noopener noreferrer" href="https://github.com/Fosa1990">Github</a>&nbsp;
  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/fosa1990/">LinkedIn</a>
  </p>
  <br/>
  <p>With Regards,</p>
  <h4>Anatoliy Sulypa</h4>
  `;

  // emailConfig = { to, subject, text, html };
  const emailData = {
    to: newUser.email,
    subject: 'Email verification',
    text: `Please verify your email: ${newUser.email}`,
    html: htmlTemplate,
  };

  await sendEmail(emailData);

  return res.status(HTTP_STATUS_CODE.CREATED).json({
    status: STATUS.CREATED,
    code: HTTP_STATUS_CODE.CREATED,
    payload: {
      user: {
        name: newUser.name,
        email: newUser.email,
        subscription: newUser.subscription,
        avatarURL: newUser.avatarURL,
        verificationToken: newUser.verificationToken,
      },
    },
  });
};

module.exports = signup;
