const express = require('express');
const {
  current,
  subscription,
  avatar,
  verificationEmail,
  reVerificationEmail,
} = require('../../controllers');
const {
  validateAuth,
  validateBody,
  controlWrapper,
  validateUpload,
} = require('../../middlewares');
const {
  validationUpdateSubscription,
  validationEmail,
} = require('../../service/validation');

const router = new express.Router();

// http://localhost:8083/api/users/current  - Postman without Docker
// http://localhost/api/users/current       - Postman with Docker
router.get('/current', validateAuth, controlWrapper(current));

// http://localhost:8083/api/users/avatars  - Postman without Docker
// http://localhost/api/users/avatars       - Postman with Docker
router.patch(
  '/avatars',
  [validateAuth, validateUpload.single('avatar')],
  avatar,
);

// http://localhost:8083/api/users/subscription  - Postman without Docker
// http://localhost/api/users/subscription       - Postman with Docker
router.patch(
  '/subscription',
  [validateAuth, validateBody(validationUpdateSubscription)],
  controlWrapper(subscription),
);

// http://localhost:8083/api/users/verify  - Postman without Docker
// http://localhost/api/users/verify       - Postman with Docker
router.post(
  '/verify',
  validateBody(validationEmail),
  controlWrapper(reVerificationEmail),
);

// http://localhost:8083/api/users/verify/:verificationToken  - Postman without Docker
// http://localhost/api/users/verify/:verificationToken       - Postman with Docker
router.get('/verify/:verificationToken', controlWrapper(verificationEmail));

module.exports = router;
