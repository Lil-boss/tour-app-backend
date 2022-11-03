const tourModel = require("../model/tour.model");

//get All tour package
exports.getTourService = async (filters, queries) => {
  const result = await tourModel
    .find(filters)
    .skip(queries.skip)
    .limit(queries.limit)
    .select(queries.fields)
    .sort(queries.sortBy);
  return result;
};

//get tour by Id
exports.getTourDetails = async (tourId) => {
  const result = await tourModel.findById(tourId);
  if (result.viewed === null) {
    const count = new result({
      viewed: 1,
    });
    count.save();
  } else {
    result.viewed += 1;
    result.save();
  }
  return result;
};

//create tour package
exports.CreateTourService = async (data) => {
  const postData = new tourModel(data);
  const result = await postData.save();
  return result;
};

//update tour package
exports.UpdateTourService = async (tourId, data) => {
  const result = await tourModel.updateOne(
    { _id: tourId },
    { $set: data },
    { runValidators: true }
  );
  return result;
};

//treading tour
exports.getTrendingTour = async () => {
  const data = await tourModel.find({}).sort({ viewed: -1 }).limit(3);
  return data;
};

//cheapest tour package
exports.getCheapestTour = async () => {
  const data = await tourModel.find({}).sort({ price: 1 }).limit(3);
  return data;
};
