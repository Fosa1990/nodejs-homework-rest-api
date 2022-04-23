const Jimp = require('jimp');
const { BadRequest } = require('http-errors');

const avatarService = async (file, width = 250, height = 250) => {
  try {
    const { path } = file;
    const picture = await Jimp.read(path);

    await picture
      .autocrop()
      .cover(
        width,
        height,
        Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_MIDDLE,
      )
      .quality(60)
      .writeAsync(path);

    return picture;
  } catch (error) {
    console.log('__AVATAR_SERVICE_ERROR__: ', error.message);
    throw new BadRequest(error.message);
  }
};

module.exports = avatarService;
