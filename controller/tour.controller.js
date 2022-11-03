const {
  getTourService,
  CreateTourService,
  UpdateTourService,
  getTourDetails,
  getCheapestTour,
  getTrendingTour,
} = require("../service/tour.service");

//get all tour controller
exports.getTour = async (req, res) => {
  try {
    const filters = { ...req.query };
    const excludeFields = ["sort", "page", "limit", "fields"];
    const queries = {};

    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      queries.sortBy = sortBy;
    }

    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      queries.fields = fields;
    }
    if (req.query.page) {
      const { page = 1, limit = 5 } = req.query;
      const skip = (page - 1) * parseInt(limit);
      queries.skip = skip;
      queries.limit = limit;
    }

    excludeFields.forEach((field) => delete filters[field]);
    const result = await getTourService(filters, queries);

    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      status: "Data find to Failed",
      error: error.message,
    });
  }
};

//tour details controller
exports.tourDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const details = await getTourDetails(id);
    res.status(200).json({
      status: "success",
      data: details,
    });
  } catch (error) {
    res.status(404).json({
      status: "Data find to Failed",
      error: error.message,
    });
  }
};

//create tour package controller
exports.CreateTour = async (req, res) => {
  try {
    const result = await CreateTourService(req.body);

    res.status(201).json({
      status: "success",
      message: "Data insert success",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      status: "Data Insert Failed",
      error: error.message,
    });
  }
};

//update tour package controller
exports.UpdateTour = async (req, res) => {
  try {
    const { id } = req.params.id;
    const packageUpdate = await UpdateTourService(id, req.body);

    res.status(200).json({
      status: "success",
      message: "Data Update success",
      data: packageUpdate,
    });
  } catch (error) {
    res.status(404).json({
      status: "Data Update Failed",
      error: error.message,
    });
  }
};

//trending tour package controller
exports.getTrendingTour = async (req, res) => {
  try {
    const data = await getTrendingTour();
    res.status(200).json({
      status: "success",
      message: "Data Update success",
      data: data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Failed",
      error: error.message,
    });
  }
};

//cheapest tour package controller
exports.getCheapestTour = async (req, res) => {
  try {
    const data = await getCheapestTour();
    res.status(200).json({
      status: "success",
      message: "Data Update success",
      data: data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Failed",
      error: error.message,
    });
  }
};
