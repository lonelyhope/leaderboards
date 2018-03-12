const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mwSchema = new Schema({  
    rank: Number,
    change: String, 
    song_title: String,
    artist: String,  
    album: Number,
    data_song_no: Number, 
    record_stamp: String
}, { collection: 'melon_weekly' });

const mmSchema = new Schema({

    rank: Number,
    change: String,  //  "new",
    album: String,  //  "시크릿 가든 OST Special",
    artist: String,  //  "Various Artists",
    month_counts: Number,
    year_sum: Number,
    production: String,  //  "Sony Music",
    record_stamp: String //  "2011-01"
}, { collection: 'melon_monthly' });


const mm = mongoose.model('melon_monthly', mmSchema);
const mw = mongoose.model('melon_weekly', mwSchema);

module.exports = {
    mm: mm,
    mw: mw

};