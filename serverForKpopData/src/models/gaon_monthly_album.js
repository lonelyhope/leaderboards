const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gmaSchema = new Schema({ 
    rank: Number,
    change: String,  //  "new",
    album: String,  //  "시크릿 가든 OST Special",
    artist: String,  //  "Various Artists",
    month_counts: Number,
    year_sum: Number,
    production: String,  //  "Sony Music",
    record_stamp: String //  "2011-01"

}, { collection: 'gaon_monthly_album' });

const gma = mongoose.model('gaon_monthly_album', gmaSchema);
module.exports = gma;