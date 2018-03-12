const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const scmobj = {
    rank: Number,
    change: String,
    song_title: String,
    artist: String,
    album: Number,
    record_stamp: String
};

const mnetweekSchema = new Schema(scmobj, { collection: 'mnet_weekly' });

const mnetmonthSchema = new Schema(scmobj, { collection: 'mnet_monthly' });

const mnetyearSchema = new Schema(scmobj, { collection: 'mnet_monthly' });

const mnw = mongoose.model('mnet_monthly', mnetweekSchema);
const mnm = mongoose.model('mnet_weekly', mnetmonthSchema);
const mny = mongoose.model('mnet_yearly', mnetyearSchema);

module.exports = {
    mnw: mnw,
    mnm: mnm,
    mny: mny

};