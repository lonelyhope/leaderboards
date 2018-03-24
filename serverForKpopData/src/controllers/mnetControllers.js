const { mnw, mnm, mny } = require("../models/mnet");
var util = require('./util');
 

var siteName = "Mnet"
var lochint = "> success: " + siteName + ",weekly";
module.exports = {
    async monthly(req, res) {
        try { 
            // query为空返回当前月份
            var query = req.query;
            var result = [];
            if (JSON.stringify(query) === '{}') {
                result = await mnm.find({
                    record_stamp: util.getCurrentTime("YYYYMM")  
                });
            } else {
                result = await mnm.find(query);
            }

            // var t = await mm.findOne(); 
            console.log(lochint);
            res.status(200).send(result);
        } catch (e) {
            console.log('> error in ' + siteName + ' monthly.', e);
        }
    },
    async weekly(req, res) {
        try {
            // console.log(req.query); 
            // query为空返回当前月份
            var query = req.query;
            var result = [];
            if (JSON.stringify(query) === '{}') {
                result = await mnw.find({
                    record_stamp: util.getCurrentTime("yyyymmdd")  
                });
            } else {
                result = await mnw.find(query);
            }
            
            res.status(200).send(result);
            console.log(lochint);
        } catch (e) {
            console.log('> error in ' + siteName + '  Weekly.', e);
        }

    },
    async yearly(req, res) {
        try {
            var query = req.query;
            var result = [];
            if (JSON.stringify(query) === '{}') {
                result = await mny.find({
                    record_stamp: util.getCurrentTime("yyyy") // yyyy
                });
            } else {
                result = await mny.find(query);
            }


            res.status(200).send(result);
            console.log(lochint);
        } catch (e) {
            console.log('> error in ' + siteName + '  yearly.', e);
        }

    }
}