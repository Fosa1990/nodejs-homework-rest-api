const { Unauthorized } = require('http-errors');
const { User } = require('../../models');
const { HTTP_STATUS_CODE, STATUS } = require('../../helpers/constants');

const current = async (req, res, next) => {
  const { id } = req.user;
  const userExist = await User.findById(id);

  if (!userExist) {
    return next(Unauthorized());
    // throw new Unauthorized();
  }

  res.json({
    status: STATUS.SUCCESS,
    code: HTTP_STATUS_CODE.OK,
    payload: {
      user: {
        name: userExist.name,
        email: userExist.email,
        subscription: userExist.subscription,
      },
    },
  });
};

module.exports = current;
