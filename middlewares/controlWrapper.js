const controlWrapper = control => {
  return async (req, res, next) => {
    try {
      await control(req, res, next);
    } catch (error) {
      console.log('__CONTROL_WRAPPER__: ', error);
      next(error);
    }
  };
};

module.exports = controlWrapper;
