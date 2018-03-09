const gaonCtrler = require('./controllers/gaonControllers.js')
const melonCtrler = require('./controllers/melonControllers.js')
const mnetCtrler = require('./controllers/mnetControllers.js')


module.exports = (app) => {
    app.post('/gaon_month_album', gaonCtrler.albumMonthly),
    app.post('/gaon_month_streaming', gaonCtrler.streamingMonthly)
    
    // app.post('/melon_month', melonCtrler.monthly);
    // app.post('/melon_week', melonCtrler.weekly);

    // app.post('/mnet_week', mnetCtrler.weekly);
    // app.post('/mnet_year', mnetCtrler.yearly); 
    // app.post('/mnet_month', mnetCtrler.monthly); 
    
}