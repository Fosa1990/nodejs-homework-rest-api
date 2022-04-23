const { randomUUID } = require('crypto');
const { Conflict } = require('http-errors');
const { User } = require('../../models');
const { HTTP_STATUS_CODE, STATUS } = require('../../helpers/constants.js');
const { sendEmail, emailConfig } = require('../../service/emailService');

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

  const emailData = await emailConfig(
    newUser.name,
    newUser.email,
    newUser.verificationToken,
  );
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
        isVerified: newUser.isVerified,
        verificationToken: newUser.verificationToken,
      },
    },
  });
};

module.exports = signup;
