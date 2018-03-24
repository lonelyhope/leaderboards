const { mw, mm } = require("../models/melon");
var util = require('./util');



module.exports = {
    async monthlyQuery(req, res) {
        try { 
            var query = req.query;
            var result = [];
            if (JSON.stringify(query) === '{}') {
                result = await mm.find({
                    record_stamp: util.getCurrentTime("YYYYMM") // yyyy-mm
                });
            } else {
                result = await mm.find(query);
            }

            // var t = await mm.findOne();
            console.log(lochint);
            var lochint = "> success: Melon,monthly";
            res.status(200).send(result);
        } catch (e) {
            console.log('> error in melon monthly.', e);
        }
    },
    async weeklyQuery(req, res) {
        try {
            var query = req.query;
            var result = [];
            if (JSON.stringify(query) === '{}') {
                result = await mw.find({
                    record_stamp: util.getCurrentTime("yyyymmdd") // yyyy-mm
                });
            } else {
                result = await mw.find(query);
            }

            res.status(200).send(result);
            var lochint = "> success: Melon,weekly";
            console.log(lochint); 
        } catch (e) {
            console.log('> error in Melon  Weekly.', e);
        }

    }
}