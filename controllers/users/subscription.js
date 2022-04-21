const { NotFound, BadRequest } = require('http-errors');
const { User } = require('../../models');
const { HTTP_STATUS_CODE, STATUS } = require('../../helpers/constants.js');

const subscription = async (req, res, next) => {
  const { subscription } = req.body;
  const { _id: id } = req.user;

  try {
    const userExist = await User.findById(id);

    if (!userExist) next(NotFound(`Not found user by id:${id}`));

    userExist.updateSubscription(subscription);
    await userExist.save();

    res.status(HTTP_STATUS_CODE.OK).json({
      status: STATUS.OK,
      code: HTTP_STATUS_CODE.OK,
      payload: { subscription },
    });
  } catch (error) {
    console.log('subscription: ', error.message);
    next(BadRequest(error.message));
  }
};

module.exports = subscription;
