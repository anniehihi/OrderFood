// import functions from Food model

import {
  getCategory,
  getCategoryId,
  insertCategory,
  updateCategoryById,
  deleteCategoryById,
} from "../models/CategoryModel.js";

// get all Category
export const showCategory = (req, res) => {
  getCategory((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// get single Category
export const showCategoryById = (req, res) => {
  getCategoryId(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// create Category
export const createCategory = (req, res) => {
  const data = req.body;
  insertCategory(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// update Food
export const updateCategory = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updateCategoryById(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// delete Food
export const deleteCategory = (req, res) => {
  const id = req.params.id;
  deleteCategoryById(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
