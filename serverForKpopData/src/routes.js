const gaonCtrler = require('./controllers/gaonControllers.js')
const melonCtrler = require('./controllers/melonControllers.js')
const mnetCtrler = require('./controllers/mnetControllers.js')


module.exports = (app) => { 
    
    app.get('/gaon_month_album', gaonCtrler.albumMonthlyQuery), 
    
    app.get('/melon_month', melonCtrler.monthlyQuery),
    app.get('/melon_week', melonCtrler.weeklyQuery),

    app.get('/mnet_week', mnetCtrler.weekly),
    app.get('/mnet_year', mnetCtrler.yearly),
    app.get('/mnet_month', mnetCtrler.monthly)
    
}