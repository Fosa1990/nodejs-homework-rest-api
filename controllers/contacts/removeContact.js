const { BadRequest } = require('http-errors');
const { Contact } = require('../../models');
const { HTTP_STATUS_CODE, STATUS } = require('../../helpers/constants.js');

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const { id } = req.user;
  const contact = await Contact.findOneAndRemove({
    _id: contactId,
    owner: id,
  }).populate('owner', '_id name email');

  if (!contact) throw new BadRequest(`Not found contact by id:${contactId}`);

  return res.status(HTTP_STATUS_CODE.OK).json({
    status: STATUS.SUCCESS,
    code: HTTP_STATUS_CODE.OK,
    payload: { contact },
  });
};

module.exports = removeContact;
