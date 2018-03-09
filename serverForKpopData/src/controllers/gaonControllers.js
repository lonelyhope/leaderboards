// const { GaonAlbums } = require('../models');
const gma = require("../models/gaon_monthly_album");
 
module.exports = {
    async albumMonthly(req, res) {
        try {
            var t = await gma.find({
                rank:1
            });
            var lochint = "> success: G,album,monthly";
            res.status(200).send({
                lochint: lochint,
                test: t
            });
        } catch (e) {
            console.log('> error in gaon album monthly.', e)

        }
    },
    streamingMonthly(req, res) {
        try {
            res.status(200).send("> success:  G,stream,monthly");

        } catch (e) {
            console.log('> error in gaon stream monthly.', e)

        }

    }
}