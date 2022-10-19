const {
  CreatePackageService,
  getPackageService,
  UpdatePackageService,
  getDetails,
} = require("../service/tour.service");

exports.getPackage = async (req, res) => {
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
    const result = await getPackageService(filters, queries);

    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "Data find to Failed",
      error: error.message,
    });
  }
};

exports.getDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const details = await getDetails(id);
    res.status(200).json({
      status: "success",
      data: details,
    });
  } catch (error) {
    res.status(500).json({
      status: "Data find to Failed",
      error: error.message,
    });
  }
};

exports.CreatePackage = async (req, res) => {
  try {
    const result = await CreatePackageService(req.body);

    res.status(201).json({
      status: "success",
      message: "Data insert success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "Data Insert Failed",
      error: error.message,
    });
  }
};

exports.UpdatePackage = async (req, res) => {
  try {
    const { id } = req.params.id;
    const packageUpdate = await UpdatePackageService(id, req.body);

    res.status(200).json({
      status: "success",
      message: "Data Update success",
      data: packageUpdate,
    });
  } catch (error) {
    res.status(500).json({
      status: "Data Insert Failed",
      error: error.message,
    });
  }
};
