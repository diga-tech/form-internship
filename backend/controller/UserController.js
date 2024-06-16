import product_intern from "../models/UserModels.js";

export const getProduct_intern = async (req, res) => {
  try {
    const response = await product_intern.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getProduct_internById = async (req, res) => {
  try {
    const response = await product_intern.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createProduct_intern = async (req, res) => {
  try {
    await product_intern.create(req.body);
    res.status(201).json({ msg: "Product Intern Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateProduct_intern = async (req, res) => {
  try {
    await product_intern.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ msg: "Product Intern Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteProduct_intern = async (req, res) => {
  try {
    await product_intern.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(201).json({ msg: "Product Intern Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
