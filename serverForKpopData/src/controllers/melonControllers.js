const { mw, mm } = require("../models/melon");


module.exports = {
    async monthly(req, res) {
        try {
            var { artist } = req.body;
            console.log(artist);
            var result = await mm.find({
                "artist": new RegExp(artist, 'i')
            });
            // var t = await mm.findOne();
            var lochint = "> success: Melon,monthly";
            console.log(lochint);
            res.status(200).send(result);
        } catch (e) {
            console.log('> error in melon monthly.', e);
        }
    },
    async weekly(req, res) {
        try {
            var { artist } = req.body;
            var result = await mw.find({
                "artist": new RegExp(artist, 'i')
            });
            var lochint = "> success: Melon,weekly";
            res.status(200).send(result);
            console.log(lochint); 
        } catch (e) {
            console.log('> error in Melon  Weekly.', e);
        }

    }
}