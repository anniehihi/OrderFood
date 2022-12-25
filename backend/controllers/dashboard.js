import {
    dashboardModel,
    chartModel
} from "../models/DashboardModel.js";

export const dashboard = (req,res) => {
    dashboardModel((err,results) => {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};
export const chart = (req,res) => {
    chartModel((err,results) => {
        if (err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
};