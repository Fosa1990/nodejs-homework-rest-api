const {
  validationCreateContact,
  validationUpdateContact,
  validationFavoriteContact,
  validationContactId,
} = require('./contact');

const {
  validationSignupUser,
  validationLoginUser,
  validationUpdateSubscription,
  validationUserId,
  validationEmail,
} = require('./user');

module.exports = {
  validationCreateContact,
  validationUpdateContact,
  validationFavoriteContact,
  validationContactId,
  validationSignupUser,
  validationLoginUser,
  validationUpdateSubscription,
  validationUserId,
  validationEmail,
};
