import db from "../config/database.js";

// get all Foods
export const dashboardModel = (result) => {
    db.query(" SELECT (SELECT COUNT(user_id) FROM user ) as count_users ,(SELECT COUNT(food_id) FROM food ) as count_foods ", (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results);
        }
    });
};