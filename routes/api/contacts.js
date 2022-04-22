const express = require('express');
const {
  getContacts,
  getContactById,
  addContact,
  updateContact,
  updateFavorite,
  removeContact,
} = require('../../controllers/contacts');
const {
  validateAuth,
  validateBody,
  validateParams,
  controlWrapper,
} = require('../../middlewares');
const {
  validationCreateContact,
  validationUpdateContact,
  validationFavoriteContact,
  validationContactId,
} = require('../../service/validation');

const router = new express.Router();

// http://localhost:8083/api/contacts  - Postman without Docker
// http://localhost/api/contacts       - Postman with Docker
router
  .get('/', validateAuth, controlWrapper(getContacts))
  .post(
    '/',
    [validateAuth, validateBody(validationCreateContact)],
    controlWrapper(addContact),
  );

// http://localhost:8083/api/contacts/:contactId  - Postman without Docker
// http://localhost/api/contacts/:contactId       - Postman with Docker
router
  .get(
    '/:contactId',
    [validateAuth, validateParams(validationContactId)],
    controlWrapper(getContactById),
  )
  .put(
    '/:contactId',
    [
      validateAuth,
      validateBody(validationUpdateContact),
      validateParams(validationContactId),
    ],
    controlWrapper(updateContact),
  )
  .delete(
    '/:contactId',
    [validateAuth, validateParams(validationContactId)],
    controlWrapper(removeContact),
  );

// http://localhost:8083/api/contacts/:contactId/favorite  - Postman without Docker
// http://localhost/api/contacts/:contactId/favorite       - Postman with Docker
router.patch(
  '/:contactId/favorite',
  [
    validateAuth,
    validateBody(validationFavoriteContact),
    validateParams(validationContactId),
  ],
  controlWrapper(updateFavorite),
);

module.exports = router;
