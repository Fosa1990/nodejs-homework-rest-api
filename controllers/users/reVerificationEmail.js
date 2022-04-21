const { NotFound, BadRequest } = require('http-errors');
const { User } = require('../../models');
const { sendEmail, emailConfig } = require('../../service/emailService');
const { HTTP_STATUS_CODE, STATUS } = require('../../helpers/constants');

const reVerificationEmail = async (req, res) => {
  const { email } = req.body;

  const userExist = await User.findOne({ email });

  if (userExist && userExist.isVerified)
    throw new BadRequest('Verification has already been passed');
  if (!userExist) throw new NotFound('Not found user');

  const emailData = await emailConfig(
    userExist.name,
    userExist.email,
    userExist.verificationToken,
  );
  await sendEmail(emailData);

  return res.status(HTTP_STATUS_CODE.OK).json({
    status: STATUS.SUCCESS,
    code: HTTP_STATUS_CODE.OK,
    payload: {
      message: `Verification email sent to ${userExist.email}`,
    },
  });
};

module.exports = reVerificationEmail;
