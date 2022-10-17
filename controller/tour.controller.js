const {
  CreatePackageService,
  getPackageService,
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
