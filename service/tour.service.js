const PackageModel = require("../model/tour.model");

exports.getPackageService = async (filters, queries) => {
  const result = await PackageModel.find(filters)
    .select(queries.fields)
    .sort(queries.sortBy);
  return result;
};

module.exports.CreatePackageService = async (data) => {
  const postData = new PackageModel(data);
  const result = await postData.save();
  return result;
};
