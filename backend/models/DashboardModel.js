import db from "../config/database.js";

// get all Foods
export const dashboardModel = (result) => {
    db.query(" SELECT (SELECT COUNT(user_id) FROM user ) as count_users ,(SELECT COUNT(food_id) FROM food ) as count_foods ,(SELECT COUNT(bill_id) FROM billstatus ) as count_bills ", (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results[0]);
        }
    });
};
export const chartModel = (result) => {
    db.query(" SELECT (SELECT COUNT(user_id) FROM user ) as count_users ,(SELECT COUNT(food_id) FROM food ) as count_foods ,(SELECT COUNT(bill_id) FROM billstatus ) as count_bills ", (err,results)=> {
        if (err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results.map((item) => {return [item.count_users,item.count_foods,item.count_bills]})[0]);
        }
    });
};