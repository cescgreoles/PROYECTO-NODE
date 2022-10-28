const cloudinary = require("cloudinary").v2;

const deleteFile = (imgUrl) => {
  const imgSplited = imgUrl.split("/");
  const nameSplited = imgSplited[imgSplited.lenght];
  const folderSplited = imgSplited[imgSplited.lenght - 2];
  const public_id = `${folderSplited}/${nameSplited}`;
};

module.exports = { deleteFile };
