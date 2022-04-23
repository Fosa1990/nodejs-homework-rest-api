const { BadRequest } = require('http-errors');
const { Contact } = require('../../models');
const { HTTP_STATUS_CODE, STATUS } = require('../../helpers/constants.js');

const updateContact = async (req, res) => {
  const { body } = req;
  const { contactId } = req.params;
  const contact = await Contact.findByIdAndUpdate({ _id: contactId }, body, {
    new: true,
  }).populate('owner', '_id name email');

  if (!contact) throw new BadRequest(`Not found contact by id:${contactId}`);

  return res.status(HTTP_STATUS_CODE.OK).json({
    status: STATUS.SUCCESS,
    code: HTTP_STATUS_CODE.OK,
    payload: { contact },
  });
};

module.exports = updateContact;
