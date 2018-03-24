
module.exports = {
    makeQueryObj(obj) {
    var query = {
        "artist": 'artist' in obj?obj.artist:""
    };
    // var keys = Object.keys(obj);
    // console.log(keys);
    // for (var i = 0; i < keys.length; i++ ) {
    //     // query[key.toString()] = new RegExp(obj[key], 'i');
    //     var key = keys[i];
    //     query[""+key+""] = obj[key]+"";
    // }
    return query;
    },
    getCurrentTime(str) {
        var d = new Date();
        var s = d.toISOString().replace('T', ' ').replace(/\..*$/, '');
        if (str === "YYYY-MM") {
            var cm = d.getMonth() + "";
            cm = cm.length === 1? "0" + cm : cm;
            return s.slice(0,5) + cm;
        } else if (str === "yyyymmdd") {
            // 找最近的星期一的上一个星期一
            // to do ! 
        } else if (str === "yyyy") {
            return s.slice(0, 4);
        } else if (str === "YYYYMM") {
            var cm = d.getMonth() + "";
            cm = cm.length === 1 ? "0" + cm : cm;
            return s.slice(0, 4) + cm;
        }
    }

};