import db from "../config/database.js";

// get all Foods
export const dashboardModel = (result) => {
    db.query("SELECT COUNT(food_name) as count_food " +
        "FROM food", (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};