const PackageModel = require("../model/tour.model");

exports.getPackageService = async () => {
  const result = await PackageModel.find({});
  return result;
};

module.exports.CreatePackageService = async (data) => {
  const postData = new PackageModel(data);
  const result = await postData.save();
  return result;
};
