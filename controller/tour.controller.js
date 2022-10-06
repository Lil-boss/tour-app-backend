const {
  CreatePackageService,
  getPackageService,
} = require("../service/tour.service");

exports.getPackage = async (req, res) => {
  try {
    const result = await getPackageService();

    res.status(201).json({
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
