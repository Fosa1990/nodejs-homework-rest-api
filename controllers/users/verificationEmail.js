const { NotFound } = require('http-errors');
const { User } = require('../../models');
const { HTTP_STATUS_CODE, STATUS } = require('../../helpers/constants');

const verificationEmail = async (req, res) => {
  const { verificationToken } = req.params;

  const userExist = await User.findOne({ verificationToken });

  if (!userExist) throw new NotFound('User not found');

  await User.findByIdAndUpdate(userExist._id, {
    isVerified: true,
    verificationToken: null,
  });

  return res.status(HTTP_STATUS_CODE.OK).json({
    status: STATUS.SUCCESS,
    code: HTTP_STATUS_CODE.OK,
    payload: {
      message: `User: ${userExist.name} successfully verified`,
    },
  });
};

module.exports = verificationEmail;
