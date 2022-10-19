const PackageModel = require("../model/tour.model");

exports.getPackageService = async (filters, queries) => {
  const result = await PackageModel.find(filters)
    .skip(queries.skip)
    .limit(queries.limit)
    .select(queries.fields)
    .sort(queries.sortBy);
  return result;
};

module.exports.CreatePackageService = async (data) => {
  const postData = new PackageModel(data);
  const result = await postData.save();
  return result;
};

module.exports.UpdatePackageService = async (tourId, data) => {
  const result = await PackageModel.updateOne(
    { _id: tourId },
    { $set: data },
    { runValidators: true }
  );
  return result;
};
