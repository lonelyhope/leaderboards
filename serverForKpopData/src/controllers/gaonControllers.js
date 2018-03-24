// const { GaonAlbums } = require('../models');
const gma = require("../models/gaon_monthly_album"); 
var util = require('./util');

var lochint = "> success: G,album,monthly";
module.exports = {
    async albumMonthlyQuery(req, res) {
        try { 
            // query为空返回当前月份
            var query = req.query;
            var result = [];
            if (JSON.stringify(query) === '{}'){ 
                result = await gma.find({
                    record_stamp: util.getCurrentTime("YYYY-MM") // yyyy-mm
                });
            } else {
                result = await gma.find(query);
            }
            

            res.status(200).send(result);
        } catch (e) {
            console.log('> error in gaon album monthly.', e)

        }
    },
    streamingMonthlyQuery(req, res) {
        try {
            res.status(200).send("> success:  G,stream,monthly");

        } catch (e) {
            console.log('> error in gaon stream monthly.', e)

        }

    }
}