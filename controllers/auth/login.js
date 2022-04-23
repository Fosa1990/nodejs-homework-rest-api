const { Unauthorized } = require('http-errors');
const { User } = require('../../models');
const { HTTP_STATUS_CODE, STATUS } = require('../../helpers/constants.js');

const login = async (req, res) => {
  const { email, password } = req.body;
  const userExist = await User.findOne({ email });

  const userNotExistCondition =
    !userExist || !userExist.isVerified || !userExist.comparePassword(password);

  if (userNotExistCondition) {
    throw new Unauthorized(
      `Email or password is wrong or user is not verified`,
    );
  }

  userExist.setToken();
  await userExist.save();

  res.json({
    status: STATUS.SUCCESS,
    code: HTTP_STATUS_CODE.OK,
    payload: {
      token: userExist.token,
      user: {
        name: userExist.name,
        email: userExist.email,
        subscription: userExist.subscription,
        avatarURL: userExist.avatarURL,
      },
    },
  });
};

module.exports = login;
