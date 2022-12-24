// import connection
import db from "../config/database.js";

// get all Category
export const getCategory = (result) => {
  db.query("SELECT * FROM category", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// get single Category
export const getCategoryId = (id, result) => {
  db.query(
    "SELECT * FROM category WHERE category_id = ?",
    [id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results[0]);
      }
    }
  );
};

// insert Category
export const insertCategory = (data, result) => {
  db.query("INSERT INTO category SET ?", data, (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};

// update Category
export const updateCategoryById = (data, id, result) => {
  db.query(
    "UPDATE category SET category_name = ? WHERE category_id = ?",
    [data.category_name, id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

// delete Category
export const deleteCategoryById = (id, result) => {
  db.query(
    "DELETE FROM category WHERE category_id = ?",
    [id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};
