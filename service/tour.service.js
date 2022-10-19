const tourModel = require("../model/tour.model");

exports.getTourService = async (filters, queries) => {
  const result = await tourModel
    .find(filters)
    .skip(queries.skip)
    .limit(queries.limit)
    .select(queries.fields)
    .sort(queries.sortBy);
  return result;
};

exports.getTourDetails = async (tourId) => {
  const result = await tourModel.findById(tourId);
  // console.log(result);
  return result;
};

exports.CreateTourService = async (data) => {
  const postData = new tourModel(data);
  const result = await postData.save();
  return result;
};

exports.UpdateTourService = async (tourId, data) => {
  const result = await tourModel.updateOne(
    { _id: tourId },
    { $set: data },
    { runValidators: true }
  );
  return result;
};

exports.getTourTrending = async () => {
  const data = await tourModel.find({}).sort({ price: 1 }).limit(3);
  return data;
};
