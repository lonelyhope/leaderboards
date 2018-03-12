const { mnw, mnm, mny } = require("../models/mnet");

function makeQueryObj(obj) {
    var query = {};
    for (key in obj) {
        query[key] = new RegExp(obj[key], 'i');
    }
    return query;
}

var siteName = "Mnet"
module.exports = {
    async monthly(req, res) {
        try {
            var queryobj = makeQueryObj(req.body);
            var result = await mnm.find(queryobj);
            // var t = await mm.findOne();
            var lochint = "> success: " + siteName + ",monthly";
            console.log(lochint);
            res.status(200).send(result);
        } catch (e) {
            console.log('> error in ' + siteName + ' monthly.', e);
        }
    },
    async weekly(req, res) {
        try {
            var queryobj = makeQueryObj(req.body);
            var result = await mnw.find(queryobj);
            var lochint = "> success: " + siteName + ",weekly";
            res.status(200).send(result);
            console.log(lochint);
        } catch (e) {
            console.log('> error in ' + siteName + '  Weekly.', e);
        }

    },
    async yearly(req, res) {
        try {
            var queryobj = makeQueryObj(req.body);
            var result = await mny.find(queryobj);
            var lochint = "> success: " + siteName + ", yearly";
            res.status(200).send(result);
            console.log(lochint);
        } catch (e) {
            console.log('> error in ' + siteName + '  yearly.', e);
        }

    }
}